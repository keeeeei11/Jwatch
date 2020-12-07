<template>
  <div id="app">
    <div class="wrap">
      <Jheader
        :isAnonymous="isAnonymous"
        :isLogin="isLogin"
        :visitorName="visitorName"/>
      <main>
        <div class="search-information">
          <PageTitle
            title="Search informations"
            description="スタジアムとカテゴリーを選択すると情報が表示されます。"/>
          <div class="select-stadium">
            <h2>スタジアムとカテゴリーを選択してボタンを押してください</h2>
              <InputStadium
                v-model="stadium"
                @change.native="hideNothingDisplay"/>
            <form class="post-category">
              <InputCategory
                v-model="category"
                @change.native="hideNothingDisplay"/>
            </form>
            <button @click="loadDataFromDB(stadium, category)">情報を見る！</button>
          </div>
          <div class="post-sort">
            <select @change = "loadDataFromDB(stadium, category)" v-model="sortValue">
              <option value= "newest" selected>日時が新しい順</option>
              <option value= "oldest">日時が古い順</option>
              <option value= "good">いいねが多い順</option>
            </select>
          </div>
          <VueLoading
            v-if="isLoading"
            type="spiningDubbles"
            color="#aaa"
            :size="{ width: '100px', height: '100px' }"/>
          <!-- 選択したスタジアムとカテゴリーで投稿がない時 -->
          <DisplayNoData
            v-if="isNothingData"
            :stadium="stadium"
            :category="category"/>
          <!-- 選択したスタジアムとカテゴリーで投稿が1つ以上存在する時 -->
          <div class="post-contents" v-else>
            <div v-for="postSingleData in getItems" :key="postSingleData.id">
              <div class="post-example-contents">
                <div class="post-basic-information">
                  <div class="post-basic-information-top">
                    <div class="post-name">
                      <p>{{ postSingleData.contributorName }} さん</p>
                    </div>
                    <div class="post-date">
                      <p>{{ postSingleData.created }}</p>
                    </div>
                  </div>
                  <div class="post-basic-information-bottom">
                    <div class="post-stadium">
                      <p>{{ postSingleData.stadium }}</p>
                    </div>
                    <div class="post-category">
                      <p>{{ postSingleData.category }}</p>
                    </div>
                  </div>
                </div>
                <div class="post-main-content">
                  <div class="post-title">
                    <p>{{ postSingleData.title }}</p>
                  </div>
                  <div class="post-text">
                    <p>{{ postSingleData.body }}</p>
                  </div>
                </div>
                <div class="post-evaluation">
                  <div class="post-evaluation-contents">
                    <div class="good-count evaluation-btn"
                        :class="{'liked':(postSingleData.likedUsers.includes(visitorUid))}">
                      <button @click="switchLikeCounter(postSingleData)">
                        いいね！ {{ postSingleData.likedCounter }}
                      </button>
                    </div>
                    <!-- 投稿者と閲覧者が同じである時 -->
                    <div
                      class="allow-manage"
                      v-if="postSingleData.contributorUid == visitorUid"
                    >
                      <div class="deleting evaluation-btn">
                        <button @click="deleteSelectData(postSingleData.id)">
                          削除する
                        </button>
                      </div>
                      <div class="editing evaluation-btn">
                        <button @click="showEditPage(postSingleData, postSingleData.id)">
                          編集する
                        </button>
                      </div>
                    </div>
                    <!-- 投稿者と閲覧者が異なる時 -->
                    <div class="disallow-manage" v-else>
                      <div class="reporting evaluation-btn">
                        <button @click="showReportPage(postSingleData, postSingleData.id)">通報する</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 編集画面 -->
              <div class="edit" v-if="isEditing">
                <section class="edit-page">
                  <h3>編集画面</h3>
                  <form class="edit-stadium">
                    <EditStadium
                     v-model="editStadium"/>
                  </form>
                  <form class="edit-category">
                    <EditCategory
                     v-model="editCategory"/>
                  </form>
                  <form class="edit-title-information" @submit.prevent>
                    <EditTitle
                     v-model="editTitle"
                     type="text"/>
                  </form>
                  <form class="edit-text-information">
                    <EditBody
                     v-model="editBody"
                     type="text"/>
                  </form>
                  <!-- ボタン -->
                  <div class="edit-btn">
                    <button @click="hideEditPage()">戻る</button>
                    <button
                      @click="editSelectData(postSingleData, editId)">編集する</button>
                  </div>
                </section>
                <div class="background"></div>
              </div>
              <!-- 通報画面 -->
              <div class="report" v-if="isReporting">
                <section class="report-page">
                  <h3>通報画面</h3>
                    <div class="report-post-main-content">
                      <div class="report-post-title">
                        <p>{{ reportTitle }}</p>
                      </div>
                      <div class="report-post-text">
                        <p>{{ reportBody }}</p>
                      </div>
                    </div>
                  <!-- 通報理由 -->
                  <form class="report-reason">
                    <InputReport
                      v-model="reportReason"/>
                  </form>
                  <!-- ボタン -->
                  <div class="report-btn">
                    <button class="cancel" @click="hideReportPage()">
                      戻る
                    </button>
                    <button
                      class="report"
                      @click="reportSelectData()">通報する</button>
                  </div>
                </section>
                <div class="background"></div>
              </div>
            </div>
            <!-- 編集完了画面 -->
            <CompletePopup
              v-if="isCompleteEdit"
              message="編集が完了しました"
              url="https://jwatch-8411c.web.app/mypage/index.html"
              movePage="マイページへ"/>
            <!-- 通報完了画面 -->
            <CompletePopup
              v-if="isCompleteReport"
              message="通報が完了しました"
              url="https://jwatch-8411c.web.app/mainpage/index.html"
              movePage="トップページへ"/>
          </div>
          <Paginate
            :page-count="getPageCount"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'<<'"
            :next-text="'>>'"
            :no-li-surround="true"
            :container-class="'paginate'"
            :prev-link-class="'prev-link'"
            :page-link-class="'page-link'"
            :next-link-class="'next-link'"
            :active-class="'active-page-link'"/>
        </div>
        <MoveTopBtn/>
      </main>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import CompletePopup from "../../components/CompletePopup";
import DisplayNoData from "../../components/DisplayNoData";
import EditBody from "../../components/EditBody";
import EditCategory from "../../components/EditCategory";
import EditStadium from "../../components/EditStadium";
import EditTitle from "../../components/EditTitle";
import InputCategory from "../../components/InputCategory";
import InputReport from "../../components/InputReport";
import InputStadium from "../../components/InputStadium";
import Jfooter from "../../components/Jfooter";
import Jheader from "../../components/Jheader";
import MoveTopBtn from "../../components/MoveTopBtn";
import myFirstMixin from "../../mixin/myFirstMixin";
import PageTitle from "../../components/PageTitle";
import Paginate from "vuejs-paginate";
import { VueLoading } from "vue-loading-template";
export default {
  data() {
    return {
      isNothingData: false,
      stadium: "",
      category: "",
      // firestoreから取得したデータを保管する
      postMultipleData: [],
      sortValue: sessionStorage.getItem("sortkey"),
      // ページネーション機能
      parPage: 10,
      currentPage: 1,
      // 編集画面
      isEditing: false,
      isCompleteEdit: false,
      // 通報画面
      isReporting: false,
      isCompleteReport: false,
      reportReason: "",
      // ローディング画面
      isLoading: false,
    };
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
    VueLoading,
  },
  mixins:[myFirstMixin],
  methods: {
    // 選択された情報を元にデータを取得する
    loadDataFromDB: function(stadium, category) {
      // スタジアムとカテゴリーが入力されているかチェック
      if (this.stadium.length > 0 && this.category.length > 0) {
        // 一度配列を空にしないと前の検索結果が残ったままになる。
        this.isLoading = true;
        this.postMultipleData = [];
        // データの取得
        const db = firebase.firestore();
        const postData = db.collection("posts");
        const displayData = postData
          .where("stadium", "==", stadium)
          .where("category", "==", category);
        // 0件の場合はforEachが実行されないのでthis.isNothingData = trueのままで処理が完了する。
        // 新しい順が選択されている時
        if (this.sortValue === "newest") {
          const newestDisplayData = displayData
            .orderBy("created", "desc")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
              this.postMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
                sessionStorage.setItem("sortkey", this.sortValue);
                // データが1件以上ある時はfalseにする
              });
              this.isLoading = false;
              if (this.postMultipleData.length == 0) {
                this.isNothingData = true;
              } else {
                this.isNothingData = false;
              }
            })
            .catch(function(error) {
              console.log("Error getting documents: ", error, newestDisplayData);
            });
          // 古い順が選択されている時
        } else if (this.sortValue === "oldest") {
          const oldestDisplayData = displayData
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
              console.log("Error getting documents: ", error, oldestDisplayData);
            });
          // いいねが多い順が選択されている時
        } else if (this.sortValue === "good") {
          const goodDisplayData = displayData
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
              console.log("Error getting documents: ", error, goodDisplayData);
            });
        } else {
          console.log("sortError!");
        }
      } else {
        return alert("スタジアム名とカテゴリーを選択してください。");
      }
    },
    switchLikeCounter: function(postSingleData) {
      firebase.auth().onAuthStateChanged((user) => {
        // ログインしているか判定
        if(user){
          // 投稿者ではないことを判定
          if(postSingleData.contributorUid != user.uid){
            const likedUsers = postSingleData.likedUsers
            if (!likedUsers.includes(user.uid)) {
              // 過去にいいねが押されていないときの処理
              // Firebase上のデータの更新
              const likedCounter = postSingleData.likedCounter += 1
              likedUsers.push(user.uid)
              firebase.firestore().collection("posts").doc(postSingleData.id)
              .update({
                likedCounter: firebase.firestore.FieldValue.increment(1),
                likedUsers: firebase.firestore.FieldValue.arrayUnion(user.uid)
              })
              // 見た目上の更新
              for(let i; i < this.postMultipleData.length; i++) {
                if (postSingleData.id === this.postMultipleData[i].id) {
                  this.$set(this.postMultipleData[i], 'likedCounter', likedCounter)
                  this.$set(this.postMultipleData[i], 'likedUsers', likedUsers)
                  break;
                }
              }
            } else {
              // 過去にいいねが押されているときの処理
              const likedCounter = postSingleData.likedCounter -= 1
              for(let i = 0; i < likedUsers.length; i++){
                if(likedUsers[i] == user.uid){
                  likedUsers.splice(i, 1)
                }
              }
              // Firebase上のデータの更新
              firebase.firestore().collection("posts").doc(postSingleData.id)
              .update({
                likedCounter: firebase.firestore.FieldValue.increment(-1),
                likedUsers: firebase.firestore.FieldValue.arrayRemove(user.uid)
              })
              // 見た目上の更新
              for(let i; i < this.postMultipleData.length; i++) {
                if (postSingleData.id === this.postMultipleData[i].id) {
                  this.$set(this.postMultipleData[i], 'likedCounter', likedCounter)
                  this.$set(this.postMultipleData[i], 'likedUsers', likedUsers)
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
    // 編集画面の表示/非表示
    showEditPage: function(postData, postDataId){
      this.isEditing = true;
      // 既に入力されているデータを表示する
      this.editId = postDataId;
      this.editStadium = postData.stadium;
      this.editCategory = postData.category;
      this.editTitle = postData.title;
      this.editBody = postData.body;
    },
    hideEditPage: function() {
      this.isEditing = false;
    },
    // 編集完了画面の表示/非表示
    showEditedPage: function() {
      this.isEditing = false;
      this.isCompleteEdit = true;
    },
    // 編集処理
    editSelectData: function(postSingleData, postSingleDataId) {
      const db = firebase.firestore();
      const postdata = db.collection("posts");
      const now = new Date();
      // スタジアムとカテゴリーが入力されているか判定する
      if (this.editStadium.length > 0 && this.editCategory.length > 0) {
        // タイトルと本文が入力されているか判定する
        if (this.editTitle.length > 0 && this.editBody.length > 0) {
          postdata
            .doc(postSingleDataId)
            .update(
              {
                stadium: this.editStadium,
                category: this.editCategory,
                title: this.editTitle,
                body: this.editBody,
                updated:
                  now.getFullYear() +
                  "/" +
                  ("0" + (now.getMonth() + 1)).slice(-2) +
                  "/" +
                  ("0" + now.getDate()).slice(-2),
                contributorName: this.visitorName,
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
    // 通報画面の表示/非表示
    showReportPage: function(postData, postDataId) {
      this.isReporting = true;
      this.reportStadium = postData.stadium
      this.reportCategory = postData.category
      this.reportTitle = postData.title
      this.reportBody = postData.body
      this.reportId = postDataId
      this.reportCreated = postData.created
      this.reportContributorName = postData.contributorName
      this.reportContributorUid = postData.contributorUid
      this.updated = postData.updated
    },
    hideReportPage: function() {
      this.isReporting = false;
    },
    // 通報完了画面の表示/非表示
    showReportedPopup: function() {
      this.isReporting = false;
      this.isCompleteReport = true;
    },
    // 通報データの追加
    reportSelectData: function() {
      const db = firebase.firestore();
      const now = new Date();
      const inputData = {
        // 通報対象の投稿データ
        postStadium: this.reportStadium,
        postCategory: this.reportCategory,
        postTitle: this.reportTitle,
        postBody: this.reportBody,
        postCreated: this.reportCreated,
        postContributorName: this.reportContributorName,
        postContributorUid: this.reportContributorUid,
        postUpdated: this.updated,
        // 通報理由
        reportReason: this.reportReason,
        reportCreated: now.getFullYear() + "/" + ("0" + (now.getMonth() + 1)).slice(-2)
         + "/" + ("0" + now.getDate()).slice(-2),
      };
      if (this.reportReason.length > 0) {
        const reportPost = db.collection("reports");
        reportPost
          .add(inputData)
          .then(() => {
            this.hideReportPage();
            this.showReportedPopup();
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        alert("通報理由を選択してください");
      }
    },
    // 選択した投稿を削除する
    deleteSelectData: function(id) {
      if (confirm("この投稿を削除しますか？一度削除すると2度と戻せません。")) {
        const db = firebase.firestore();
        const postData = db.collection("posts");
        postData
          .doc(id)
          .delete()
          .then(function() {
            alert("削除できました。");
            return location.reload();
          })
          .catch(function(error) {
            console.error("エラーが発生しました。: ", error);
          });
      }
    },
    // 別のページに飛ぶ処理
    clickCallback: function(pageNum) {
      this.currentPage = Number(pageNum);
      window.scrollTo({
        top: 0,
        behavior: "instant",
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
      let current = this.currentPage * this.parPage;
      let start = current - this.parPage;
      return this.postMultipleData.slice(start, current);
    },
    getPageCount: function() {
      return Math.ceil(this.postMultipleData.length / this.parPage);
    },
  },
  mounted: function() {
    // 初回訪問時に新しい順を選択しておく
    this.sortValue = "newest";
  },
  beforeUpdate: function() {
    this.isLoading = false;
  },
};
</script>

<style lang="scss">
.wrap {
  overflow: hidden;
}
/*以下メイン*/

main {
  color: rgb(28.8%, 29.6%, 28.8%);
}
/* スタジアム選択 */
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

/* 投稿を表示する部分 */
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

/* 編集画面 */
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

/* ボタン */
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

/* 通報画面 */
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

/* 投稿を表示する部分 */
/* 通報対象の投稿 */
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

/*通報の理由*/

.report-reason {
  margin: 30px 0;
}

/* ボタン */
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

/* ページネーション */
.paginate {
  margin: 100px 0;
  text-align: center;
}

/* 前に戻るボタン */
.prev-link {
  font-size: 24px;
  margin-right: 10px;
  outline: none;
  color: #484b48;
}

/* 数字のボタン */
.page-link {
  font-size: 24px;
  font-weight: lighter;
  padding: 15px;
  margin: 10px;
  border: 1px solid #484b48;
  border-radius: 5px;
  outline: none;
}

/* 次に進むボタン */
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
  /* メイン */
  /* スタジアム選択 */
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

  /* 投稿内容 */
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
  /* 編集画面 */
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
  /* 通報画面 */
  .report-btn {
    display: block;
    button {
      margin:30px auto;
    }
  }
  /* ページネーション機能 */
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
  /* メイン */
  /* スタジアム選択 */
  .select-stadium {
    padding: 50px 40px;
    h2 {
      font-size: 18px;
    }
  }

  /* 投稿内容*/
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
  /* 編集画面 */
  .edit-page {
    width: 300px;
    button {
      font-size: 16px;
      width: 200px;
    }
  }
  /* 通報画面 */
  .report-post-title p {
    text-align: center;
    font-size: 16px;
  }

  .report-post-text p {
    font-size: 14px;
  }

  /*通報の理由*/
  .report-btn button {
    font-size: 16px;
    width: 200px;
  }
}
</style>
