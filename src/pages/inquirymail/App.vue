<template>
  <div id = "app">
    <div class = "wrap">
      <AdminHeader/>
      <main>
        <div class = "inquiry-title">
          <h2>お問い合わせメール</h2>
          <p>{{ inquiryMultipleData.length }} 件あります</p>
        </div>
        <div class = "inquiry-sort">
          <select @change = "sortData()" v-model = "sortValue">
            <option value = "newest" selected>日時が新しい順</option>
            <option value = "oldest">日時が古い順</option>
          </select>
        </div>
        <VueLoading
          v-if  = "isLoading"
          color = "#aaa"
          type  = "spiningDubbles"
          :size = "{ width: '100px', height: '100px' }"/>
        <div class = "inquiry-data" v-else>
          <div
            v-for = "inquirySingleData in getItems"
            :key  = "inquirySingleData.id"
          >
            <div class = "inquiry-contents">
              <div class = "inquiry-example-contents">
                <div class = "inquiry-basic-information">
                  <div class = "inquiry-basic-information-top">
                    <div class = "inquiry-name">
                      <p>{{ inquirySingleData.name }}</p>
                    </div>
                    <div class = "inquiry-email">
                      <p>{{ inquirySingleData.mailAddress }}</p>
                    </div>
                  </div>
                  <div class = "inquiry-basic-information-bottom">
                    <div class = "inquiry-date">
                      <p>{{ inquirySingleData.created }}</p>
                    </div>
                  </div>
                </div>
                <div class = "inquiry-main-content">
                  <div class = "inquiry-title">
                    <p>{{ inquirySingleData.title }}</p>
                  </div>
                  <div class = "inquiry-text">
                    <p>{{ inquirySingleData.body }}</p>
                  </div>
                </div>
                <div class = "inquiry-evaluation">
                  <div class = "inquiry-evaluation-contents">
                    <div class = "inquiry-delete">
                      <button @click = "deleteSelectData(inquirySingleData.id)">
                        このお問い合わせを削除する
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Paginate
          :page-count      = "getPageCount"
          :page-range      = "3"
          :margin-pages    = "2"
          :click-handler   = "clickCallback"
          :prev-text       = "'<<'"
          :next-text       = "'>>'"
          :no-li-surround  = "true"
          :container-class = "'paginate'"
          :prev-link-class = "'prev-link'"
          :page-link-class = "'page-link'"
          :next-link-class = "'next-link'"
          :active-class    = "'active-page-link'"/>
        <MoveTopBtn/>
      </main>
    </div>
  </div>
</template>

<script>
import firebase       from "firebase/app";
import AdminHeader    from "../../components/AdminHeader";
import MoveTopBtn     from "../../components/MoveTopBtn";
import FirebaseAvailable   from "../../mixin/FirebaseAvailable";
import Paginate       from "vuejs-paginate";
import { VueLoading } from "vue-loading-template";
export default {
  data() {
    return {
      currentPage:         1,
      inquiryMultipleData: [],
      parPage:             5,
      sortValue:           sessionStorage.getItem("sortkey"),
      isLoading:           false
    };
  },
  mixins: [FirebaseAvailable],
  components: {
    AdminHeader,
    MoveTopBtn,
    Paginate,
    VueLoading
  },
  methods: {
    judgeAdmin: function() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.firestore().collection("admin").get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                if (doc.id != user.uid) {
                  location.href = "https://jwatch-8411c.web.app/mainpage/index.html";
                }
              });
          });
        } else {
          location.href = "https://jwatch-8411c.web.app/mainpage/index.html";
        }
      });
    },
    loadDataFromDB: function() {
      this.isLoading    = true;
      const inquiryData = firebase.firestore().collection("inquiries");

      if (this.sortValue === "newest") {
        inquiryData.orderBy("created", "desc").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.inquiryMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
            });
            this.isLoading = false;
          })
          .catch(function(error) {
            alert("データの読み込みに失敗しました。もう一度お試しください。" + error)
            this.isLoading = false;
          });

      } else {
        inquiryData.orderBy("created").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.inquiryMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
            });
            this.isLoading = false;
          })
          .catch(function(error) {
            alert("データの読み込みに失敗しました。もう一度お試しください。" + error)
            this.isLoading = false;
          });
      }
    },
    // selectタグの操作時に実行する。
    sortData: function() {
      this.isLoading           = true;
      this.inquiryMultipleData = [];
      const inquiryData        = firebase.firestore().collection("inquiries");

      if (this.sortValue === "newest") {
        inquiryData.orderBy("created", "desc").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.inquiryMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
              sessionStorage.setItem("sortkey", this.sortValue);
            });
            this.isLoading = false;
          })
          .catch(function(error) {
            alert("ソートできませんでした。もう一度お試しください。" + error)
            this.isLoading = false;
          });

      } else {
        inquiryData.orderBy("created").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.inquiryMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
              sessionStorage.setItem("sortkey", this.sortValue);
            });
            this.isLoading = false;
          })
          .catch(function(error) {
            alert("ソートできませんでした。もう一度お試しください。" + error)
            this.isLoading = false;
          });
      }
    },
    deleteSelectData: function(id) {
      if (confirm("このお問い合わせを削除しますか？一度削除すると2度と戻せません。")) {
        firebase.firestore().collection("inquiries").doc(id).delete()
          .then(function() {
            alert("削除できました。");
            return location.reload();
          })
          .catch(function(error) {
            console.error("エラーが発生しました。: ", error);
          });
      }
    },
    clickCallback: function(pageNum) {
      this.currentPage = Number(pageNum);
      window.scrollTo({
        behavior: "instant",
        top: 0,
      });
    },
  },
  computed: {
    getItems: function() {
      const current = this.currentPage * this.parPage;
      const start   = current - this.parPage;
      return this.inquiryMultipleData.slice(start, current);
    },
    getPageCount: function() {
      return Math.ceil(this.inquiryMultipleData.length / this.parPage);
    },
  },
  mounted: function() {
    this.judgeAdmin();
    this.loadDataFromDB();
  },
};
</script>

<style lang = "scss">
.wrap {
  overflow: hidden;
}

main {
  margin: 100px auto;
}

.inquiry-title {
  text-align: center;
}

.inquiry-sort {
  text-align: center;
  select {
    margin: 30px auto;
    padding: 10px 0;
    width: 500px;
    font-size: 18px;
  }
  select:hover {
    cursor: pointer;
  }
}

.inquiry-example-contents {
  width: 70%;
  margin: 30px auto;
  padding: 20px 40px 20px;
  border: 2px solid #979797;
  border-radius: 10px;
}

.inquiry-basic-information {
  display: block;
}

.inquiry-basic-information-top {
  display: flex;
  height: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
}

.inquiry-basic-information-bottom {
  display: flex;
  justify-content: space-around;
}

.inquiry-name {
  font-size: 21px;
}

.inquiry-stadium {
  font-size: 18px;
}

.inquiry-category {
  font-size: 18px;
}

.inquiry-date {
  font-size: 18px;
}

.inquiry-title p {
  text-align: center;
  font-size: 21px;
}

.inquiry-text {
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
  p {
    font-size: 18px;
  }
}

.inquiry-evaluation p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 16px;
}

.inquiry-evaluation-contents {
  display: flex;
  justify-content: center;
}

.inquiry-delete {
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  margin: 0 10px;
  button {
    color: #484b48;
    font-size: 16px;
    background-color: #ffffff;
    border: 2px solid #484b48;
    border-radius: 10px;
    padding: 5px 10px;
    transition: background-color 0.4s linear;
  }
  button:hover {
    color: #ffffff;
    cursor: pointer;
    background-color: #484b48;
    transition: 0.4s;
  }
}

.paginate {
  margin: 50px auto;
  text-align: center;
}

.prev-link {
  font-size: 24px;
  margin-right: 10px;
  outline: none;
  color: #484b48;
}

.page-link {
  font-size: 24px;
  font-weight: lighter;
  padding: 15px;
  margin: 10px;
  border: 1px solid #484b48;
  border-radius: 5px;
  outline: none;
}

.next-link {
  font-size: 24px;
  margin-left: 10px;
  outline: none;
}

.active-page-link {
  color: #ffffff;
  background-color: gray;
}
</style>
