<template>
  <div id = "app">
    <div class = "wrap">
      <Jheader
        :isAnonymous = "isAnonymous"
        :isLogin     = "isLogin"
        :visitorName = "visitorName"/>
      <main>
        <div class = "search-information">
          <PageTitle
            title       = "Search informations"
            description = "スタジアムとカテゴリーを選択すると情報が表示されます。"/>
          <div class = "select-stadium">
            <h2>スタジアムとカテゴリーを選択してボタンを押してください</h2>
              <InputStadium
                v-model        = "stadium"
                @change.native = "hideNothingDisplay"/>
            <form class = "post-category">
              <InputCategory
                v-model        = "category"
                @change.native = "hideNothingDisplay"/>
            </form>
            <button @click = "loadDataFromDB(stadium, category)">情報を見る！</button>
          </div>
          <div class = "post-sort">
            <select @change = "loadDataFromDB(stadium, category)" v-model = "sortValue">
              <option value = "newest" selected>日時が新しい順</option>
              <option value = "oldest">日時が古い順</option>
              <option value = "good">いいねが多い順</option>
            </select>
          </div>
          <VueLoading
            v-if  = "isLoading"
            type  = "spiningDubbles"
            color = "#aaa"
            :size = "{ width: '100px', height: '100px' }"/>
          <DisplayNoData
            v-if      = "isNothingData"
            :stadium  = "stadium"
            :category = "category"/>
          <div class = "post-contents" v-else>
            <div v-for = "postSingleData in postMultipleData" :key = "postSingleData.id">
              <div class = "post-example-contents">
                <div class = "post-basic-information">
                  <div class = "post-basic-information-top">
                    <div class = "post-name">
                      <p>{{ postSingleData.contributorName }} さん</p>
                    </div>
                    <div class = "post-date">
                      <p>{{ postSingleData.created }}</p>
                    </div>
                  </div>
                  <div class = "post-basic-information-bottom">
                    <div class = "post-stadium">
                      <p>{{ postSingleData.stadium }}</p>
                    </div>
                    <div class = "post-category">
                      <p>{{ postSingleData.category }}</p>
                    </div>
                  </div>
                </div>
                <div class = "post-main-content">
                  <div class = "post-title">
                    <p>{{ postSingleData.title }}</p>
                  </div>
                  <div class = "post-text">
                    <p>{{ postSingleData.body }}</p>
                  </div>
                </div>
                <div class = "post-evaluation">
                  <div class = "post-evaluation-contents">
                    <div class = "good-count evaluation-btn"
                        :class = "{'liked':(postSingleData.likedUsers.includes(visitorUid))}">
                      <button @click = "switchLikeCounter(postSingleData)">
                        いいね！ {{ postSingleData.likedCounter }}
                      </button>
                    </div>
                    <div
                      class = "allow-manage"
                      v-if  = "postSingleData.contributorUid == visitorUid">
                      <div class = "deleting evaluation-btn">
                        <button @click = "deleteSelectData(postSingleData.id)">
                          削除する
                        </button>
                      </div>
                      <div class = "editing evaluation-btn">
                        <button @click = "showEditPage(postSingleData, postSingleData.id)">
                          編集する
                        </button>
                      </div>
                    </div>
                    <div class = "disallow-report" v-else>
                      <div class = "reporting evaluation-btn">
                        <button @click = "showReportPage(postSingleData, postSingleData.id)">
                          通報する
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 編集ボタンが押された投稿のみ表示する -->
              <div class = "edit" v-if = "editId == postSingleData.id">
                <section class = "edit-page">
                  <h3>編集画面</h3>
                  <form class = "edit-stadium">
                    <EditStadium
                      v-model = "editStadium"/>
                  </form>
                  <form class = "edit-category">
                    <EditCategory
                      v-model = "editCategory"/>
                  </form>
                  <form class = "edit-title-information" @submit.prevent>
                    <EditTitle
                     v-model = "editTitle"
                     type    = "text"/>
                  </form>
                  <form class = "edit-text-information">
                    <EditBody
                     v-model = "editBody"
                     type    = "text"/>
                  </form>
                  <div class = "edit-btn">
                    <button @click = "hideEditPage()">戻る</button>
                    <button @click = "editSelectData(postSingleData, editId)">編集する</button>
                  </div>
                </section>
                <div class = "background"></div>
              </div>
              <div class = "report" v-if = "reportId == postSingleData.id">
                <section class = "report-page">
                  <h3>通報画面</h3>
                    <div class = "report-post-main-content">
                      <div class = "report-post-title">
                        <p>{{ reportTitle }}</p>
                      </div>
                      <div class = "report-post-text">
                        <p>{{ reportBody }}</p>
                      </div>
                    </div>
                  <form class = "report-reason">
                    <InputReport
                      v-model = "reportReason"/>
                  </form>
                  <div class = "report-btn">
                    <button class = "cancel" @click = "hideReportPage()">
                      戻る
                    </button>
                    <button
                      class  = "report"
                      @click = "reportSelectData()">通報する</button>
                  </div>
                </section>
                <div class = "background"></div>
              </div>
            </div>
            <CompletePopup
              v-if     = "isCompleteEdit"
              message  = "編集が完了しました"
              movePage = "マイページへ"
              url      = "https://jwatch-8411c.web.app/mypage/index.html"/>
            <CompletePopup
              v-if     = "isCompleteReport"
              message  = "通報が完了しました"
              movePage = "トップページへ"
              url      = "https://jwatch-8411c.web.app/mainpage/index.html"/>
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
        </div>
        <MoveTopBtn/>
      </main>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import firebase       from "firebase";
import CompletePopup  from "../../components/CompletePopup";
import DisplayNoData  from "../../components/DisplayNoData";
import EditBody       from "../../components/EditBody";
import EditCategory   from "../../components/EditCategory";
import EditStadium    from "../../components/EditStadium";
import EditTitle      from "../../components/EditTitle";
import InputCategory  from "../../components/InputCategory";
import InputReport    from "../../components/InputReport";
import InputStadium   from "../../components/InputStadium";
import Jfooter        from "../../components/Jfooter";
import Jheader        from "../../components/Jheader";
import MoveTopBtn     from "../../components/MoveTopBtn";
import myFirstMixin   from "../../mixin/myFirstMixin";
import PageTitle      from "../../components/PageTitle";
import Paginate       from "vuejs-paginate";
import { VueLoading } from "vue-loading-template";
export default {
  data() {
    return {
      isNothingData:    false,
      category:         "",
      stadium:          "",
      // firestoreから取得したデータを保管する
      postMultipleData: [],
      // ページネーション機能
      currentPage:      1,
      parPage:          10,
      sortValue:        sessionStorage.getItem("sortkey"),
      // 編集画面
      isCompleteEdit:   false,
      editBody:         "",
      editCategory:     "",
      editId:           "",
      editStadium:      "",
      editTitle:        "",
      // 通報画面
      isCompleteReport: false,
      reportId:         "",
      reportReason:     "",
      // ローディング画面
      isLoading:        false
    }
  },
  components: {
    CompletePopup,
    DisplayNoData,
    EditBody,
    EditCategory,
    EditStadium,
    EditTitle,
    InputCategory,
    InputReport,
    InputStadium,
    Jfooter,
    Jheader,
    MoveTopBtn,
    PageTitle,
    Paginate,
    VueLoading
  },
  mixins:[myFirstMixin],
  methods: {
    loadDataFromDB: function(stadium, category) {
      if (this.stadium.length > 0 && this.category.length > 0) {
        this.isLoading        = true;
        // 一度配列を空にしないと前の検索結果が残ったままになる。
        this.postMultipleData = [];
        // 入力された値を元に投稿データを取得
        const dataBeforeOrder = firebase.firestore().collection("posts")
                                .where("stadium",  "==", stadium)
                                .where("category", "==", category);
            // 投稿を投稿日時の降順にソートして表示する
        if (this.sortValue === "newest") {
          const newOrder = dataBeforeOrder
            .orderBy("created", "desc")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.postMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
                sessionStorage.setItem("sortkey", this.sortValue);
              });
              this.isLoading = false;

              if (this.postMultipleData.length == 0) {
                this.isNothingData = true;
              } else {
                this.isNothingData = false;
              }
            })

            .catch(function(error) {
              console.log("Error getting documents: ", error, newOrder);
            });
            // 投稿を投稿日時の昇順にソートして表示する
        } else if (this.sortValue === "oldest") {
          const oldOrder = dataBeforeOrder
            .orderBy("created")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.postMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
                sessionStorage.setItem("sortkey", this.sortValue);
              });
              this.isLoading = false;

              if (this.postMultipleData.length == 0) {
                this.isNothingData = true;
              } else {
                this.isNothingData = false;
              }
            })

            .catch(function(error) {
              console.log("Error getting documents: ", error, oldOrder);
            });
            // 投稿をいいねが多い順にソートして表示する
        } else if (this.sortValue === "good") {
          const goodOrder = dataBeforeOrder
            .orderBy("likedCounter", "desc")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.postMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
                sessionStorage.setItem("sortkey", this.sortValue);
              });
              this.isLoading = false;

              if (this.postMultipleData.length == 0) {
                this.isNothingData = true;
              } else {
                this.isNothingData = false;
              }

            })
            .catch(function(error) {
              console.log("Error getting documents: ", error, goodOrder);
            });
        }
      } else {
        return alert("スタジアム名とカテゴリーを選択してください。");
      }
    },
    switchLikeCounter: function(postSingleData) {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          if(postSingleData.contributorUid != user.uid){
            const likedUsers = postSingleData.likedUsers
            // updateしたデータはページの更新が行われるまでページ上に反映されない
            // そのため、updateでfirebase上のデータを更新するとともに、一時的にページ上の
            // いいねボタンを(表面的に)更新する。
            if (likedUsers.includes(user.uid)) {
              // いいね数を-1する、いいねしたユーザーから解除する
              // Firebase上のデータの更新
              firebase.firestore().collection("posts").doc(postSingleData.id)
              .update({
                likedCounter: firebase.firestore.FieldValue.increment(-1),
                likedUsers:   firebase.firestore.FieldValue.arrayRemove(user.uid)
              })

              // 見た目上の更新
              const likedCounter = postSingleData.likedCounter -= 1
              for(let i = 0; i < likedUsers.length; i++){
                if(likedUsers[i] == user.uid){
                  likedUsers.splice(i, 1)
                }
              }

              for(let i = 0; i < this.postMultipleData.length; i++) {
                if (postSingleData.id === this.postMultipleData[i].id) {
                  this.$set(this.postMultipleData[i], 'likedCounter', likedCounter)
                  this.$set(this.postMultipleData[i], 'likedUsers',   likedUsers)
                  break;
                }
              }
            } else {
              // いいね数を＋1する、いいねしたユーザーとして登録する
              // Firebase上のデータの更新
              firebase.firestore().collection("posts").doc(postSingleData.id)
              .update({
                likedCounter: firebase.firestore.FieldValue.increment(1),
                likedUsers:   firebase.firestore.FieldValue.arrayUnion(user.uid)
              })

              // 見た目上の更新
              const likedCounter = postSingleData.likedCounter += 1
              likedUsers.push(user.uid)

              for(let i; i < this.postMultipleData.length; i++) {
                if (postSingleData.id === this.postMultipleData[i].id) {
                  this.$set(this.postMultipleData[i], 'likedCounter', likedCounter)
                  this.$set(this.postMultipleData[i], 'likedUsers',   likedUsers)
                  break;
                }
              }
            }
          } else {
            alert('投稿者はいいねを押すことが出来ません')
          }
        } else {
          alert('いいね機能を使用するにはログインが必要です')
        }
      })
    },
    showEditPage: function(postData, postDataId){
      this.editBody     = postData.body;
      this.editCategory = postData.category;
      this.editId       = postDataId;
      this.editStadium  = postData.stadium;
      this.editTitle    = postData.title;
    },
    hideEditPage: function() {
      this.editId = ""
    },
    showEditedPage: function() {
      this.isCompleteEdit = true;
      this.editId         = ""
    },
    // 編集処理
    editSelectData: function(postSingleData, postSingleDataId) {
      const postdata = firebase.firestore().collection("posts");
      const now      = new Date();
      if (this.editStadium.length > 0 && this.editCategory.length > 0) {
        if (this.editTitle.length > 0 && this.editBody.length > 0) {
          postdata
            .doc(postSingleDataId)
            .update(
              {
                body:            this.editBody,
                category:        this.editCategory,
                contributorName: this.visitorName,
                stadium:         this.editStadium,
                title:           this.editTitle,
                updated:         now.getFullYear() +"/" +("0" + (now.getMonth() + 1)).slice(-2) +
                                 "/" +("0" + now.getDate()).slice(-2)
              },
            )
            .then(() => {
              this.showEditedPage();
            })
            .catch(function(error) {
              console.error(error);
            });
        } else {
          alert("タイトルと本文を入力してください。");
        }
      } else {
        alert("スタジアム名とカテゴリー名を選択してください。");
      }
    },
    showReportPage: function(postData, postDataId) {
      this.reportBody            = postData.body
      this.reportCategory        = postData.category
      this.reportContributorName = postData.contributorName
      this.reportContributorUid  = postData.contributorUid
      this.reportCreated         = postData.created
      this.reportId              = postDataId
      this.reportStadium         = postData.stadium
      this.reportTitle           = postData.title
      this.updated               = postData.updated
    },
    hideReportPage: function() {
      this.reportId = ""
    },
    showReportedPopup: function() {
      this.isCompleteReport = true;
      this.reportId         = ""
    },
    // DBに通報データを追加する
    reportSelectData: function() {
      const now       = new Date();
      const dataReport = {
        postBody:            this.reportBody,
        postCategory:        this.reportCategory,
        postContributorName: this.reportContributorName,
        postContributorUid:  this.reportContributorUid,
        postCreated:         this.reportCreated,
        postStadium:         this.reportStadium,
        postTitle:           this.reportTitle,
        postUpdated:         this.updated,
        reportReason:        this.reportReason,
        reportCreated:       now.getFullYear() + "/" + ("0" + (now.getMonth() + 1)).slice(-2)
                             + "/" + ("0" + now.getDate()).slice(-2)
      };
      if (this.reportReason.length > 0) {
        const dataAddReportCollection = firebase.firestore().collection("reports")
          .add(dataReport)
          .then(() => {
            this.hideReportPage();
            this.showReportedPopup();
          })
          .catch(function(error) {
            console.error(error, dataAddReportCollection);
          });
      } else {
        alert("通報理由を選択してください");
      }
    },
    // 選択した投稿を削除する
    deleteSelectData: function(selectedPostId) {
      if (confirm("この投稿を削除しますか？一度削除すると2度と戻せません。")) {
        const datadelete = firebase.firestore().collection("posts")
          .doc(selectedPostId)
          .delete()
          .then(function() {
            alert("削除できました。");
            return location.reload();
          })
          .catch(function(error) {
            console.error("エラーが発生しました。: ", error, datadelete);
          });
      }
    },
    // ページネーション機能、押したページ数に移動する処理
    clickCallback: function(pageNum) {
      this.currentPage = Number(pageNum);
      window.scrollTo({
        behavior: "instant",
        top: 0,
      });
    },
    // スタジアム・カテゴリーを再選択した時に「情報を見るボタン」を押すまで、
    // 情報がないと誤表示するのを防ぐ役割
    hideNothingDisplay: function() {
      this.isNothingData = false;
    },
  },
  computed: {
    getItems: function() {
      const current = this.currentPage * this.parPage;
      const start   = current - this.parPage;
      return this.postMultipleData.slice(start, current);
    },
    getPageCount: function() {
      return Math.ceil(this.postMultipleData.length / this.parPage);
    },
  },
  mounted: function() {
    // ユーザーの初回訪問時に新しい順を表示しておく。この指定がないと選択バーが空白で表示される。
    this.sortValue = "newest";
  },
  beforeUpdate: function() {
    this.isLoading = false;
  },
};
</script>

<style lang = "scss">
.wrap {
  overflow: hidden;
}
main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

.select-stadium {
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
  text-align: center;
  display: block;
  h2 {
    font-size: 24px;
    font-weight: normal;
  }
  button {
    font-size: 18px;
    font-weight: 500;
    color: #484b48;
    text-decoration: none;
    border: 2px solid #484b48;
    background-color: #fff;
    margin: 30px auto;
    padding: 10px 20px;
    border-radius: 10px;
    transition: background-color 0.4s linear;
  }
  button:hover {
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
}

.stadium-basic-information {
  margin: 30px auto;
  text-align: center;
  p {
    font-size: 24px;
  }
}

.post-sort {
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

.post-contents {
  text-align: center;
}

.post-example-contents {
  width: 70%;
  margin: 30px auto;
  padding: 20px 40px 20px;
  border: 2px solid #979797;
  border-radius: 10px;
}

.post-basic-information {
  display: block;
}

.post-basic-information-top {
  display: flex;
  height: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
}

.post-basic-information-bottom {
  display: flex;
  justify-content: space-around;
}

.post-name {
  font-size: 21px;
}

.post-stadium {
  font-size: 18px;
}

.post-category {
  font-size: 18px;
}

.post-date {
  font-size: 18px;
}

.post-title p {
  text-align: center;
  font-size: 21px;
}

.post-text {
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
  p {
    font-size: 18px;
  }
}

.post-evaluation p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 16px;
}

.post-evaluation-contents {
  display: flex;
  justify-content: center;
}

.evaluation-btn{
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  margin: 0 10px;
  button{
    color: #484b48;
    font-size: 16px;
    background-color: #ffffff;
    border: 2px solid #484b48;
    border-radius: 10px;
    padding: 5px 10px;
    transition: background-color 0.4s linear;
    outline: none;
  }
}

.deleting button:hover, .editing button:hover, .reporting button:hover {
  color: #ffffff;
  cursor: pointer;
  background-color: #484b48;
  transition: 0.4s;
}
.good-count{
  button:active{
    cursor: pointer;
  }
  button:active{
    color: #ffffff;
    cursor: pointer;
    background-color: #484b48;
  }
}

.liked button {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.allow-manage {
  display: flex;
}

.edit-page {
  opacity: 1;
  width: 800px;
  height: 700px;
  position: fixed;
  background: #ffffff;
  padding-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

.edit-btn {
  display: flex;
  margin:10px 0;
  button {
    font-size: 18px;
    width: 300px;
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    margin: auto;
    background: #ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
  }
  button:hover {
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }
}

.report-page {
  opacity: 1;
  width: 80%;
  padding: 20px 10px;
  position: fixed;
  background: #ffffff;
  padding-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

.report-post-title p {
  text-align: center;
  font-size: 21px;
}

.report-post-text {
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
  p {
    font-size: 18px;
  }
}

.report-reason {
  margin: 30px 0;
}

.report-btn {
  display: flex;
  button {
    font-size: 18px;
    width: 350px;
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    margin: auto;
    background: #ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
  }
  button:hover {
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }
}

.background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  z-index: 2;
  opacity: 0.8;
}

.paginate {
  margin: 100px 0;
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

@media (max-width: 959px) {
  .select-stadium {
    margin-left: 0%;
  }

  .stadium-basic-information h3 {
    font-size: 28px;
    padding: 0px;
  }

  .post-sort select {
    width: 60%;
  }

  .post-example-contents {
    width: 80%;
    margin: 10% auto;
  }

  .post-name {
    font-size: 18px;
  }

  .post-stadium {
    font-size: 16px;
  }

  .post-category {
    font-size: 16px;
  }

  .post-date {
    font-size: 16px;
  }

  .edit-page{
    width: 500px;
    height: 800px;
  }

  .edit-btn {
    display: block;
    button {
      margin:30px auto;
    }
  }

  .report-btn {
    display: block;
    button {
      margin:30px auto;
    }
  }

  .prev-link {
    font-size: 18px;
    margin-right: 5px;
    margin-top: 5px;
  }
  .page-link {
    font-size: 18px;
    padding: 5px;
    margin: 5px;
  }
  .next-link {
    font-size: 18px;
    margin-left: 5px;
  }
}

@media (max-width: 559px) {
  .select-stadium {
    padding: 50px 40px;
    h2 {
      font-size: 18px;
    }
  }

  .post-example-contents {
    padding: 20px;
  }

  .post-basic-information-top {
    display: block;
    padding-bottom: 30px;
  }

  .post-basic-information-bottom {
    display: block;
    p {
      text-align: center;
    }
  }

  .post-title p {
    text-align: center;
    font-size: 18px;
  }
  .post-text {
    margin: 10px 0;
    padding: 0 10px;
    p {
      font-size: 16px;
    }
  }

  .post-name {
    font-size: 18px;
  }


  .post-evaluation p {
    font-size: 14px;
  }

  .evaluation-btn {
      margin: 0 3px;
    button {
      font-size: 14px;
    }
  }

  .edit-page {
    width: 300px;
    button {
      font-size: 16px;
      width: 200px;
    }
  }

  .report-post-title p {
    text-align: center;
    font-size: 16px;
  }

  .report-post-text p {
    font-size: 14px;
  }

  .report-btn button {
    font-size: 16px;
    width: 200px;
  }
}
</style>
