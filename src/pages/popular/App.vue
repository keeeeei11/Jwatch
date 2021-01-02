<template>
  <div id = "app">
    <div class = "wrap">
      <Jheader
        :isAnonymous = "isAnonymous"
        :isLogin     = "isLogin"
        :visitorName = "visitorName"/>
      <div class = "popular">
        <PageTitle
          description = "人気のある投稿が記載されています。チームごとに情報を絞ることも可能です。"
          title       = "Popular posts"/>
        <div class = "choose-stadium">
          <InputStadium v-model = "stadium" @change.native = "loadDataFromDB(stadium)"/>
        </div>
          <VueLoading
            v-if  = "isLoading"
            color = "#aaa"
            type  = "spiningDubbles"
            :size = "{ width: '100px', height: '100px' }"/>
        <div class = "popular-posts">
          <DisplayNoData
            v-if     = "isNothingData"
            :stadium = "stadium"
            category = "観戦情報"/>
          <div class = "post-contents" v-else>
            <div v-for = "postSingleData in getItems" :key = "postSingleData.id">
              <div class = "post-content">
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
                    <!-- 投稿者と閲覧者が同じである時 -->
                    <div class = "allow-manage" v-if = "postSingleData.contributorUid == visitorUid">
                      <div class = "deleting evaluation-btn">
                        <button @click = "deleteSelectData(postSingleData.id)">削除する</button>
                      </div>
                      <div class = "editing evaluation-btn">
                        <button @click = "showEditPage(postSingleData, postSingleData.id)">編集する</button>
                      </div>
                    </div>
                    <!-- 投稿者と閲覧者が異なる時 -->
                    <div class = "disallow-manage" v-else>
                      <div class = "reporting evaluation-btn">
                        <button @click = "showReportPage(postSingleData, postSingleData.id)">通報する</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                <!-- TODO:背景ということをコメントに残す -->
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
                    <button class = "cancel" @click = "hideReportPage()">戻る</button>
                    <button
                      class  = "report"
                      @click = "reportData()">通報する</button>
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
      </div>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import firebase       from "firebase/app";
import CompletePopup  from "../../components/CompletePopup";
import dayjs          from "dayjs";
import DisplayNoData  from "../../components/DisplayNoData";
import EditBody       from "../../components/EditBody";
import EditCategory   from "../../components/EditCategory";
import EditStadium    from "../../components/EditStadium";
import EditTitle      from "../../components/EditTitle";
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
      // 配列の取得
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
    };
  },
  components: {
    CompletePopup,
    DisplayNoData,
    EditBody,
    EditCategory,
    EditStadium,
    EditTitle,
    InputReport,
    InputStadium,
    Jfooter,
    Jheader,
    MoveTopBtn,
    PageTitle,
    Paginate,
    VueLoading
  },
  mixins: [myFirstMixin],
  methods: {
    loadDataFromDB: function (selectStadium) {
      this.isLoading = true;
        // 一度配列を空にしないと前の検索結果が残ったままになる。
      this.postMultipleData = [];
      // データの取得
        firebase.firestore().collection("posts").where("stadium", "==", selectStadium).orderBy("likedCounter", "desc").get()
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
          .catch(function (error) {
            console.log("Error getting documents: ", error);
          });
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
              });

              // 見た目上の更新
              const likedCounter = postSingleData.likedCounter -= 1;
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
              });

              // 見た目上の更新
              const likedCounter = postSingleData.likedCounter += 1;
              likedUsers.push(user.uid);

              for(let i = 0; i < this.postMultipleData.length; i++) {
                if (postSingleData.id === this.postMultipleData[i].id) {
                  this.$set(this.postMultipleData[i], 'likedCounter', likedCounter)
                  this.$set(this.postMultipleData[i], 'likedUsers',   likedUsers)
                  break;
                }
              }
            }
          } else {
            alert('投稿者はいいねを押すことが出来ません');
          }
        } else {
          alert('いいね機能を使用するにはログインが必要です');
        }
      })
    },
    // 編集画面の表示/非表示
    showEditPage: function (selectPostData, selectPostDataId) {
      this.editBody     = selectPostData.body;
      this.editCategory = selectPostData.category;
      this.editId       = selectPostDataId;
      this.editStadium  = selectPostData.stadium;
      this.editTitle    = selectPostData.title;
    },
    hideEditPage: function() {
      this.editId = "";
    },
    // 編集完了画面の表示/非表示
    showEditedPage: function () {
      this.isCompleteEdit = true;
      this.editId         = "";
    },
    editSelectData: function (postSingleData, postSingleDataId) {
      if (this.editStadium.length > 0 && this.editCategory.length > 0) {
        // タイトルと本文が入力されているか判定する
        if (this.editTitle.length > 0 && this.editBody.length > 0) {
          firebase.firestore().collection("posts").doc(postSingleDataId)
            .update(
              {
                body:            this.editBody,
                category:        this.editCategory,
                contributorName: this.visitorName,
                stadium:         this.editStadium,
                title:           this.editTitle,
                updated:         dayjs().format('YYYY/MM/DD')
              })
            .then(() => {
              this.showEditedPage();
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
    showReportPage: function (postData, postDataId) {
      this.reportBody            = postData.body;
      this.reportCategory        = postData.category;
      this.reportContributorName = postData.contributorName;
      this.reportContributorUid  = postData.contributorUid;
      this.reportCreated         = postData.created;
      this.reportId              = postDataId;
      this.reportStadium         = postData.stadium;
      this.reportTitle           = postData.title;
      this.updated               = postData.updated;
    },
    hideReportPage: function () {
      this.reportId = "";
    },
    // 通報完了画面の表示/非表示
    showReportedPopup: function () {
      this.isCompleteReport = true;
      this.reportId         = "";
    },
    // 通報データの追加
    reportData: function () {
      const inputData = {
        // 通報対象の投稿データ
        postBody:            this.reportBody,
        postCategory:        this.reportCategory,
        postContributorName: this.reportContributorName,
        postContributorUid:  this.reportContributorUid,
        postCreated:         this.reportCreated,
        postStadium:         this.reportStadium,
        postTitle:           this.reportTitle,
        postUpdated:         this.updated,
        reportCreated:       dayjs().format('YYYY/MM/DD'),
        reportReason:        this.reportReason
      };
      if (this.reportReason.length > 0) {
        firebase.firestore().collection("reports").add(inputData)
          .then(() => {
            this.hideReportPage();
            this.showReportedPopup();
          })
          .catch(function (error) {
            console.error(error);
          });
      } else {
        alert("通報理由を選択してください");
      }
    },
    deleteSelectData: function (id) {
      if (confirm("このお問い合わせを削除しますか？一度削除すると2度と戻せません。")) {
        firebase.firestore().collection("posts").doc(id).delete()
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
        behavior: "instant",
        top: 0
      });
    },
  },
  computed: {
    getItems: function () {
      const current = this.currentPage * this.parPage;
      const start   = current - this.parPage;
      return this.postMultipleData.slice(start, current);
    },
    getPageCount: function () {
      return Math.ceil(this.postMultipleData.length / this.parPage);
    },
  },
};
</script>

<style lang = "scss">
.wrap {
  overflow: hidden;
}

main {
  color: rgb(28.8%, 29.6%, 28.8%);
  margin: auto 50px;
}
.choose-stadium {
  margin-top: 100px;
  text-align: center;
}

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

.post-content {
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

.background {
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
  margin-top: 100px;
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
  .post-content {
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
  .stadium-list {
    font-size: 16px;
  }

  .post-content {
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
    button {
      font-size: 14px;
    }
  }

  .edit-page {
    width: 300px;
  }

  .edit-btn button {
    font-size: 16px;
    width: 200px;
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
