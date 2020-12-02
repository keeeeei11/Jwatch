<template>
  <div id="app">
    <div class="wrap">
      <Jheader
        :visitorName="visitorName"
        :isLogin="isLogin"
        :isAnonymous="isAnonymous"
      ></Jheader>
      <div class="popular">
        <PageTitle
          title="Popular posts"
          description="人気のある投稿が記載されています。チームごとに情報を絞ることも可能です。"
        ></PageTitle>
        <div class="choose-stadium">
            <InputStadium
              v-model="stadium"
              @change.native="getData(stadium)"
              >
            </InputStadium>
        </div>
        <VueLoading
          v-if="isLoading"
          type="spiningDubbles"
          color="#aaa"
          :size="{ width: '100px', height: '100px' }"
        ></VueLoading>
        <div class="popular-posts">
          <DisplayNoData
            v-if="noData"
            :stadium="stadium"
            category="観戦情報"
          ></DisplayNoData>
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
                      <button @click="likedData(postSingleData)">
                        いいね！ {{ postSingleData.likedCounter }}
                      </button>
                    </div>
                    <!-- 投稿者と閲覧者が同じである時 -->
                    <div
                      class="allow-manage"
                      v-if="postSingleData.contributorUid == visitorUid"
                    >
                      <div class="deleting evaluation-btn">
                        <button @click="deleteData(postSingleData.id)">
                          削除する
                        </button>
                      </div>
                      <div class="editing evaluation-btn">
                        <button @click="triggerEditShow(postSingleData)">
                          編集する
                        </button>
                      </div>
                    </div>
                    <!-- 投稿者と閲覧者が異なる時 -->
                    <div class="disallow-manage" v-else>
                      <div class="reporting evaluation-btn">
                        <button @click="triggerReportShow()">通報する</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 編集画面 -->
              <div class="edit" v-if="editForm">
                <section class="edit-page">
                    <EditStadium
                      v-model="editStadium"
                    ></EditStadium>
                  <form class="edit-category">
                    <EditCategory
                      v-model="editCategory"
                    ></EditCategory>
                  </form>
                  <form class="edit-title-information">
                    <EditTitle
                      v-model="editTitle"
                      type="text"
                    ></EditTitle>
                  </form>
                  <form class="edit-text-information">
                    <EditBody
                      v-model="editBody"
                      type="text"
                    ></EditBody>
                  </form>
                  <!-- ボタン -->
                  <div class="edit-btn">
                    <button @click="triggerEditHide()">戻る</button>
                    <button
                      @click="
                        editData(postSingleData, postSingleData.id)
                      "
                    >
                      編集する
                    </button>
                  </div>
                </section>
                <div class="reconfirmation-cover"></div>
              </div>
              <!-- 通報画面 -->
               <div class="report" v-if="reportForm">
                <section class="report-page">
                  <h3>通報画面</h3>
                    <div class="report-post-main-content">
                      <div class="report-post-title">
                        <p>{{ postSingleData.title }}</p>
                      </div>
                      <div class="report-post-text">
                        <p>{{ postSingleData.body }}</p>
                      </div>
                    </div>
                  <!-- 通報理由 -->
                  <form class="report-reason">
                    <InputReport
                      v-model="reportReason"
                    >
                    </InputReport>
                  </form>
                  <!-- ボタン -->
                  <div class="report-btn">
                    <button class="cancel" @click="triggerReportHide()">
                      戻る
                    </button>
                    <button
                      class="report"
                      @click="reportData(postSingleData)">通報する</button>
                  </div>
                </section>
                <div class="reconfirmation-cover"></div>
              </div>
            </div>
            <!-- 編集完了画面 -->
            <CompletePopup
              v-if="edited"
              message="編集が完了しました"
              url="https://jwatch-8411c.web.app/mypage/index.html"
              movePage="マイページへ"
            ></CompletePopup>
            <!-- 通報完了画面 -->
            <CompletePopup
              v-if="reported"
              message="通報が完了しました"
              url="https://jwatch-8411c.web.app/mainpage/index.html"
              movePage="トップページへ"
            ></CompletePopup>
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
            :active-class="'active-page-link'"
          ></Paginate>
        </div>
        <MoveTopBtn></MoveTopBtn>
      </div>
      <Jfooter></Jfooter>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Jheader from "../../components/Jheader";
import PageTitle from "../../components/PageTitle";
import InputStadium from "../../components/InputStadium";
import DisplayNoData from "../../components/DisplayNoData";
import EditStadium from "../../components/EditStadium";
import EditCategory from "../../components/EditCategory";
import EditTitle from "../../components/EditTitle";
import EditBody from "../../components/EditBody";
import InputReport from "../../components/InputReport";
import CompletePopup from "../../components/CompletePopup";
import MoveTopBtn from "../../components/MoveTopBtn";
import Paginate from "vuejs-paginate";
import Jfooter from "../../components/Jfooter";
import myFirstMixin from "../../mixin/myFirstMixin";
import { VueLoading } from "vue-loading-template";

export default {
  data() {
    return {
      noData: false,
      stadium: "",
      category: "",
      // trueで削除ボタンが表示される
      allowDelete: false,
      // 配列の取得
      postMultipleData: [],
      // ページネーション機能
      sortValue: sessionStorage.getItem("sortkey"),
      parPage: 10,
      currentPage: 1,
      // 編集画面
      editForm: false,
      edited: false,
      // 編集データ
      editStadium: "",
      editCategory: "",
      editTitle: "",
      editBody: "",
      // 通報画面
      reportForm: false,
      reported: false,
      reportReason: "",
      // ローディング機能
      isLoading: false,
    };
  },
  components: {
    Jheader,
    PageTitle,
    InputStadium,
    DisplayNoData,
    EditStadium,
    EditCategory,
    EditTitle,
    EditBody,
    InputReport,
    CompletePopup,
    MoveTopBtn,
    Paginate,
    Jfooter,
    VueLoading,
  },
  mixins: [myFirstMixin],
  methods: {
    getData: function (stadium) {
      this.isLoading = true;
      this.postMultipleData = [];
      // データの取得
      const db = firebase.firestore();
      const postData = db.collection("posts");
        // 個別のスタジアム情報を取得する時
        const inputData = postData.where("stadium", "==", stadium);
        const displayData = inputData
          .orderBy("likedCounter", "desc")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.postMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
              sessionStorage.setItem("sortkey", this.sortValue);
              // データが1件以上ある時はfalseにする
            });
            this.isLoading = false;
            if (this.postMultipleData.length == 0) {
              this.noData = true;
            } else {
              this.noData = false;
            }
          })
          .catch(function (error) {
            console.log("Error getting documents: ", error);
            console.log(displayData);
          });
      // }
    },
    likedData: function(postSingleData) {
      firebase.auth().onAuthStateChanged((user) => {
        // ログインしているか判定
        if(user){
          if(postSingleData.contributorUid != user.uid){
            const likedUsers = postSingleData.likedUsers
            if (!likedUsers.includes(user.uid)) {
              // 過去にいいねが押されていないときの処理
              const likedCounter = postSingleData.likedCounter+=1
              likedUsers.push(user.uid)
              firebase.firestore().collection("posts").doc(postSingleData.id)
              .update({
                likedCounter: firebase.firestore.FieldValue.increment(1),
                likedUsers: firebase.firestore.FieldValue.arrayUnion(user.uid)
              })
              for(let i; i < this.postMultipleData.length; i++) {
                if (postSingleData.id === this.postMultipleData[i].id) {
                  this.$set(this.postMultipleData[i], 'likedCounter', likedCounter)
                  this.$set(this.postMultipleData[i], 'likedUsers', likedUsers)
                  break;
                }
              }
            } else {
              // 過去にいいねが押されているときの処理
              const likedCounter = postSingleData.likedCounter-=1
              for(let i = 0; i < likedUsers.length; i++){
                if(likedUsers[i] == user.uid){
                  likedUsers.splice(i, 1)
                }
              }
              firebase.firestore().collection("posts").doc(postSingleData.id)
              .update({
                likedCounter: firebase.firestore.FieldValue.increment(-1),
                likedUsers: firebase.firestore.FieldValue.arrayRemove(user.uid)
              })
              for(let i; i < this.postMultipleData.length; i++) {
                if (postSingleData.id === this.postMultipleData[i].id) {
                  this.$set(this.postMultipleData[i], 'likedCounter', likedCounter)
                  this.$set(this.postMultipleData[i], 'likedUsers', likedUsers)
                  break;
                }
              }
            }
          } else {
            // 投稿者はいいねを押すことが出来ないことを知らせる
            alert('投稿者はいいねを押すことが出来ません')
          }
        } else {
          // 非ログイン時はいいね機能が使えないことを知らせる
          alert('いいね機能を使用するにはログインが必要です')
        }
      })
    },
    // 編集画面の表示/非表示
    triggerEditShow: function (data) {
      this.editForm = true;
      // 既に入力されているデータを表示する
      this.editStadium = data.stadium;
      this.editCategory = data.category;
      this.editTitle = data.title;
      this.editBody = data.body;
    },
    // 編集完了画面の表示/非表示
    triggerEditedShow: function () {
      this.editForm = false;
      this.edited = true;
    },
    editData: function (data, individualId) {
      const db = firebase.firestore();
      const postdata = db.collection("posts");
      const now = new Date();
      const unchangeData = data;
      const inputdata = {
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
        likedCounter: unchangeData.likedCounter,
        likedUsers: unchangeData.likedUsers,
      };
      if (this.editStadium.length > 0 && this.editCategory.length > 0) {
        // タイトルと本文が入力されているか判定する
        if (this.editTitle.length > 0 && this.editBody.length > 0) {
          postdata
            .doc(individualId)
            .set(inputdata, { merge: true })
            .then(() => {
              // this.triggerEditHide();
              this.triggerEditedShow();
            })
            .catch(function (error) {
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
    triggerReportShow: function () {
      this.reportForm = true;
    },
    triggerReportHide: function () {
      this.reportForm = false;
    },
    // 通報完了画面の表示/非表示
    triggerReportedShow: function () {
      this.reportForm = false;
      this.reported = true;
    },
    triggerReportedHide: function () {
      this.reported = false;
    },
    // 通報データの追加
    reportData: function (data) {
      const db = firebase.firestore();
      const now = new Date();
      const postData = data;
      const inputData = {
        // 通報対象の投稿データ
        postStadium: postData.stadium,
        postCategory: postData.category,
        postTitle: postData.title,
        postBody: postData.body,
        postCreated: postData.created,
        postContributorName: postData.contributorName,
        postContributorUid: postData.contributorUid,
        postUpdated: postData.updated,
        postLikedCounter: postData.likedCounter,
        postlikedUsers: postData.likedUsers,
        // 通報理由
        reportReason: this.reportReason,
        reportCreated:
          now.getFullYear() +
          "/" +
          ("0" + (now.getMonth() + 1)).slice(-2) +
          "/" +
          ("0" + now.getDate()).slice(-2),
      };
      if (this.reportReason.length > 0) {
        const reportData = db.collection("reports");
        reportData
          .add(inputData)
          .then(() => {
            this.triggerReportHide();
            this.triggerReportedShow();
          })
          .catch(function (error) {
            console.error(error);
          });
      } else {
        alert("通報理由を選択してください");
      }
    },
    deleteData: function (id) {
      console.log(id);
      if (
        confirm(
          "このお問い合わせを削除しますか？一度削除すると2度と戻せません。"
        )
      ) {
        const db = firebase.firestore();
        const postData = db.collection("posts");
        postData
          .doc(id)
          .delete()
          .then(function () {
            alert("削除できました。");
            return location.reload();
          })
          .catch(function (error) {
            console.error("エラーが発生しました。: ", error);
          });
      }
    },
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    },
  },
  computed: {
    getItems: function () {
      let current = this.currentPage * this.parPage;
      let start = current - this.parPage;
      return this.postMultipleData.slice(start, current);
    },
    getPageCount: function () {
      return Math.ceil(this.postMultipleData.length / this.parPage);
    },
  },
};
</script>

<style>
.wrap {
  overflow: hidden;
}
/*以下メイン*/
main {
  color: rgb(28.8%, 29.6%, 28.8%);
  margin: auto 50px;
}
.choose-stadium {
  margin-top: 100px;
  text-align: center;
}
/*人気の投稿*/

.stadium-list {
  width: 70%;
  height: 40px;
  margin: 20px auto;
  font-size: 18px;
  border-radius: 10px;
  text-align: center;
  background-color: #ffffff;
}

.popular-posts {
  margin: 50px 0;
}

/* 投稿を表示する部分 */
.post-example-contents {
  width: 80%;
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
}

.post-text p {
  font-size: 18px;
}

.post-img {
  display: flex;
}

.post-img img {
  margin: 30px auto 20px;
  width: 30%;
  height: auto;
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
}

.evaluation-btn button{
  color: #484b48;
  font-size: 16px;
  background-color: #ffffff;
  border: 2px solid #484b48;
  border-radius: 10px;
  padding: 5px 10px;
  transition: background-color 0.4s linear;
  outline: none;
}

.deleting button:hover, .editing button:hover, .reporting button:hover {
  color: #ffffff;
  cursor: pointer;
  background-color: #484b48;
  transition: 0.4s;
}

.good-count button:active{
  cursor: pointer;
}

.good-count button:active{
  color: #ffffff;
  cursor: pointer;
  background-color: #484b48;
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
}

.edit-btn button {
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

.edit-btn button:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
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
}

.report-post-text p {
  font-size: 18px;
}

/*通報の理由*/
.report-reason {
  margin: 30px 0;
}

/* ボタン */
.report-btn {
  display: flex;
}

.report-btn button {
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

.report-btn button:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.complete-cover {
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
  margin-top: 100px;
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
    /* 投稿内容 */
  .post-example-contents {
    width: 80%;
    margin: 10% auto;
    text-align: center;
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
  }
  .edit-btn button {
    margin:30px auto;
  }
    /* 通報画面 */
  .report-btn {
    display: block;
  }

  .report-btn button {
    margin:30px auto;
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
  .stadium-list {
    font-size: 16px;
  }

  /* 投稿内容 */
  .post-example-contents {
    padding: 20px;
  }

  .post-basic-information-top {
    display: block;
    padding-bottom: 30px;
  }

  .post-basic-information-bottom {
    display: block;
  }
  .post-basic-information-bottom p {
    text-align: center;
  }

  .post-title p {
    text-align: center;
    font-size: 18px;
  }
  .post-text {
    margin: 10px 0;
    padding: 0 10px;
  }

  .post-text p {
    font-size: 16px;
  }

  .post-name {
    font-size: 18px;
  }

  .post-date {
    font-size: 16px;
  }
  .post-stadium {
    font-size: 16px;
  }

  .post-category {
    font-size: 16px;
  }

  .evaluation-btn {
    margin: 0 3px;
  }

  .evaluation-btn button {
    font-size: 14px;
  }
    /* 編集画面 */
  .edit-page {
    width: 300px;
  }

  .edit-btn button {
    font-size: 16px;
    width: 200px;
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
