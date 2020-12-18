<template>
  <div id = "app">
    <div class = "wrap">
      <AdminHeader/>
      <main>
        <div class = "report-title">
          <h2>通報一覧</h2>
        </div>
        <div class = "report-sort">
          <select @change = "sortData()" v-model = "sortValue">
            <option value = "newest" selected>通報日時が新しい順</option>
            <option value = "oldest">通報日時が古い順</option>
          </select>
        </div>
        <VueLoading
          v-if  = "isLoading"
          color = "#aaa"
          type  = "spiningDubbles"
          :size = "{ width: '100px', height: '100px' }"/>
        <div class = "report-contents" v-else>
          <h4>{{ reportMultipleData.length }} 件あります</h4>
          <div
            v-for = "reportSingleData in getItems"
            :key  = "reportSingleData.id"
          >
            <div class = "report-example-contents">
              <div class = "report-example-post-title">
                <h3>投稿内容</h3>
              </div>
              <div class = "report-basic-information">
                <div class = "report-basic-information-top">
                  <div class = "report-name">
                    <p>{{ reportSingleData.postContributorName }}</p>
                  </div>
                  <div class = "report-uid">
                    <p>{{ reportSingleData.postContributorUid }}</p>
                  </div>
                  <div class = "report-date">
                    <p>{{ reportSingleData.postCreated }}</p>
                  </div>
                </div>
                <div class = "report-basic-information-bottom">
                  <div class = "report-stadium">
                    <p>{{ reportSingleData.postStadium }}</p>
                  </div>
                  <div class = "report-category">
                    <p>{{ reportSingleData.postCategory }}</p>
                  </div>
                </div>
              </div>
              <div class = "report-main-content">
                <div class = "report-title">
                  <p>{{ reportSingleData.postTitle }}</p>
                </div>
                <div class = "report-text">
                  <p>{{ reportSingleData.postBody }}</p>
                </div>
              </div>
              <div class = "report-example-warning">
                <div class = "report-example-warning-title">
                  <h3>通報理由</h3>
                  <p>{{ reportSingleData.reportReason }}</p>
                  <p>{{ reportSingleData.reportCreated }}</p>
                </div>
              </div>
              <div class = "report-evaluation">
                <div class = "report-evaluation-contents">
                  <div class = "report-delete">
                    <button @click = "deleteSelectData(reportSingleData.id)">
                      削除する
                    </button>
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
import myFirstMixin   from "../../mixin/myFirstMixin";
import Paginate       from "vuejs-paginate";
import { VueLoading } from "vue-loading-template";
export default {
  data() {
    return {
      currentPage:        1,
      parPage:            5,
      reportMultipleData: [],
      sortValue:          sessionStorage.getItem("sortkey"),
      isLoading:          false
    };
  },
  mixins: [myFirstMixin],
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
    // TODO:クラス名と整形する
    loadDataFromDB: function() {
      this.isLoading = true;
      this.postMultipleData = [];
      const reportData = firebase.firestore().collection("reports");

      if (this.sortValue === "newest") {
        reportData.orderBy("reportCreated", "desc").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.reportMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
            });
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
            this.isLoading = false;
          });

      } else {
        reportData.orderBy("reportCreated").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.reportMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
            });
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
            this.isLoading = false;
          });
      }
    },
    // selectタグの操作時に実行する。
    // ソート後にページを更新(location.reload())してデータを表示させる部分だけ異なる。
    sortData: function() {
      this.isLoading          = true;
      this.reportMultipleData = [];
      const reportData = firebase.firestore().collection("reports");
      if (this.sortValue === "newest") {
        reportData.orderBy("reportCreated", "desc").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.reportMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
              sessionStorage.setItem("sortkey", this.sortValue);
            });
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
            this.isLoading = false;
          });
      } else {
        reportData.orderBy("reportCreated").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.reportMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
              sessionStorage.setItem("sortkey", this.sortValue);
            });
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
            this.isLoading = false;
          });
      }
    },
    deleteSelectData: function(id) {
      if (confirm("この通報内容を削除しますか？一度削除すると2度と戻せません。")){
        firebase.firestore().collection("reports").doc(id).delete()
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
      return this.reportMultipleData.slice(start, current);
    },
    getPageCount: function() {
      return Math.ceil(this.reportMultipleData.length / this.parPage);
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

.report-title {
  text-align: center;
}

.report-sort {
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

.report-contents {
  text-align: center;
}

.report-example-contents {
  width: 70%;
  margin: 30px auto;
  padding: 20px 40px 20px;
  border: 2px solid #979797;
  border-radius: 10px;
}

.report-example-post-title {
  text-align: center;
  font-size: 18px;
}

.report-basic-information {
  display: block;
}

.report-basic-information-top {
  display: flex;
  height: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
}

.report-basic-information-bottom {
  display: flex;
  justify-content: space-around;
}

.report-name {
  font-size: 21px;
}

.report-stadium {
  font-size: 18px;
}

.report-category {
  font-size: 18px;
}

.report-date {
  font-size: 18px;
}

.report-title p {
  text-align: center;
  font-size: 21px;
}

.report-text {
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
  p {
    font-size: 18px;
  }
}

.report-example-warning {
  text-align: center;
  margin: 50px auto;
}
.report-example-warning-title{
  h3 {
    font-size: 21px;
  }
  p {
    font-size: 18px;
  }
}

.report-example-warning-body {
  font-size: 18px;
}

.report-evaluation p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 16px;
}

.report-evaluation-contents {
  display: flex;
  justify-content: center;
}

.report-delete {
  text-align: center;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 10px;
  :hover {
    color: gray;
    cursor: pointer;
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
