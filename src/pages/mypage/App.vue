<template>
  <div id="app">
    <div class="wrap">
      <Jheader
        :isAnonymous="isAnonymous"
        :isLogin="isLogin"
        :visitorName="visitorName"/>
      <main>
        <div class="mypage">
          <div class="mypage-title">
            <p v-if="!isAnonymous">{{ visitorName }} さんのマイページ</p>
            <p v-else>
              匿名<span>{{ visitorUid.slice(0, 10) }}</span
              >さんのマイページ
            </p>
          </div>
          <VueLoading
            v-if="isLoading"
            type="spiningDubbles"
            color="#aaa"
            :size="{ width: '100px', height: '100px' }"/>
          <div class="past-posts" v-else>
              <!-- ユーザーの投稿が存在しない時 -->
              <DisplayNoData
                v-if="isNothingData"
                stadium="あなた"
                category="観戦情報"/>
              <!-- ユーザーの投稿が1つ以上存在する時 -->
              <div class="post-contents" v-else>
                <h2>過去の投稿</h2>
                <div
                  v-for="postSingleData in getItems"
                  :key="postSingleData.id"
                >
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
                          <button
                            @click="
                              switchLikeCounter(postSingleData)
                            "
                          >
                            いいね！ {{ postSingleData.likedCounter }}
                          </button>
                        </div>
                        <!-- 投稿者と閲覧者が同じである時 -->
                        <div
                          class="allow-manage"
                          v-if="
                            postSingleData.contributorUid == visitorUid
                          "
                        >
                          <div class="deleting evaluation-btn">
                            <button @click="deleteSelectData(postSingleData.id)">
                              削除する
                            </button>
                          </div>
                          <div class="editing evaluation-btn">
                            <button
                              @click="showEditPage(postSingleData, postSingleData.id)"
                            >
                              編集する
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 編集画面 -->
                  <div class="edit" v-if="editId == postSingleData.id">
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
                          @click="
                            editSelectData(postSingleData, editId)
                          "
                        >
                          編集する
                        </button>
                      </div>
                    </section>
                    <div class="background"></div>
                  </div>
                </div>
                <!-- 編集&投稿完了画面 -->
                <CompletePopup
                  v-if="isCompleteEdit"
                  message="編集が完了しました"
                  url="https://jwatch-8411c.web.app/mypage/index.html"
                  movePage="マイページへ"/>
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
            <div class="mypage-contents">
              <!-- ログアウト関連 -->
              <ExitBtn
                name="ログアウト"
                execution="ログアウトする"
                @click.native="showLogoutPopup"/>
              <ExitPopup
                v-if="isReconfirmLogout"
                message="ログアウトしてもよろしいですか？"
                url="https://jwatch-8411c.web.app/logout/index.html"
                process="ログアウトする"
                @exitPopupHide="hideLogoutPopup"/>
              <!-- アカウント削除関連 -->
              <ExitBtn
                name="アカウント削除"
                execution="アカウント削除する"
                @click.native="showDeletePopup"/>
              <ExitPopup
                v-if="isReconfirmDelete"
                message="アカウントを削除してもよろしいですか？(投稿も削除されます)"
                url="https://jwatch-8411c.web.app/deleteAccount/index.html"
                process="削除する"
                @exitPopupHide="hideDeletePopup"/>
            </div>
          </div>
        </div>
        <MoveTopBtn/>
      </main>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import firebase       from "firebase";
import                     "firebase/auth";
import                     "firebase/firestore";
import                     "firebase/storage";
import CompletePopup  from "../../components/CompletePopup";
import DisplayNoData  from "../../components/DisplayNoData";
import EditBody       from "../../components/EditBody";
import EditCategory   from "../../components/EditCategory";
import EditStadium    from "../../components/EditStadium";
import EditTitle      from "../../components/EditTitle";
import ExitBtn        from "../../components/ExitBtn";
import ExitPopup      from "../../components/ExitPopup";
import Jfooter        from "../../components/Jfooter";
import Jheader        from "../../components/Jheader";
import MoveTopBtn     from "../../components/MoveTopBtn";
import myFirstMixin   from "../../mixin/myFirstMixin";
import Paginate       from "vuejs-paginate";
import { VueLoading } from "vue-loading-template";
export default {
  data() {
    return {
      coverShow:         false,
      isNothingData:     false,
      isReconfirmDelete: false,
      isReconfirmLogout: false,
      visitorUid:        String,
      // firestoreから取得したデータを保管する
      postMultipleData: [],
      // ページネーション機能
      currentPage: 1,
      parPage:     5,
      sortValue:   sessionStorage.getItem("sortkey"),
      // 編集画面
      isCompleteEdit: false,
      editBody:     "",
      editCategory: "",
      editId:       "",
      editStadium:  "",
      editTitle:    "",
      // ローディング画面
      isLoading: false
    }
  },
  components: {
    CompletePopup,
    DisplayNoData,
    EditBody,
    EditCategory,
    EditStadium,
    EditTitle,
    ExitBtn,
    ExitPopup,
    Jfooter,
    Jheader,
    MoveTopBtn,
    Paginate,
    VueLoading,
  },
  mixins: [myFirstMixin],
  methods: {
    judgeAdmin: function() {
      firebase.auth().onAuthStateChanged((user) => {
        const admin = firebase.firestore().collection("admin");
        admin.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.id == user.uid) {
              location.href =
                "https://jwatch-8411c.web.app/management/index.html";
            } else {
              return;
            }
          });
        });
      });
    },
    loadDataFromDB: function() {
      this.isLoading = true;
      firebase.auth().onAuthStateChanged((user) => {
        this.isNothingData = true;
        const postData = firebase.firestore().collection("posts");
        const displayData = postData
          .where("contributorUid", "==", user.uid)
          .orderBy("created", "desc")
          .get()
          // 0件の場合はforEachが実行されないのでthis.isNothingData = trueのままで処理が完了する。
          .then((querySnapshot) => {
            this.isNothingData = false;
            querySnapshot.forEach((doc) => {
              this.postMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
            });
            this.isLoading = false;
             if (this.postMultipleData.length == 0) {
                this.isNothingData = true;
              } else {
                this.isNothingData = false;
              }
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error, displayData);
            this.isLoading = false;
          });
      });
    },
      // 編集処理
    showEditPage: function(postData, postDataId) {
      // 既に入力されているデータを表示する
      this.editBody     = postData.body;
      this.editCategory = postData.category;
      this.editId       = postDataId;
      this.editStadium  = postData.stadium;
      this.editTitle    = postData.title;
    },
    hideEditPage: function() {
      this.editId = "";
    },
    // 編集完了画面の表示/非表示
    showEditedPage: function() {
      this.isCompleteEdit = true;
      this.editId         = "";
    },
    editSelectData: function(postSingleData, postSingleDataId) {
      const postdata = firebase.firestore().collection("posts");
      const now = new Date();
      // スタジアムとカテゴリーが入力されているか判定する
      if (this.editStadium.length > 0 && this.editCategory.length > 0) {
        // タイトルと本文が入力されているか判定する
        if (this.editTitle.length > 0 && this.editBody.length > 0) {
          postdata
            .doc(postSingleDataId)
            .update({
              body:            this.editBody,
              category:        this.editCategory,
              contributorName: this.visitorName,
              stadium:         this.editStadium,
              title:           this.editTitle,
              updated:         now.getFullYear() + "/" + ("0" + (now.getMonth() + 1)).slice(-2) +
                               "/" + ("0" + now.getDate()).slice(-2),
            })
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
    // 選択した投稿を削除する
    deleteSelectData: function(id) {
      if (confirm("この投稿を削除しますか？一度削除すると2度と戻せません。")) {
        const postData = firebase.firestore().collection("posts");
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
        behavior: "instant",
        top: 0,
      });
    },
    // スタジアム・カテゴリーを再選択した時に「情報を見るボタン」を押すまで、
    // 情報がないと誤表示されるのを防ぐ役割
    hideNothingData: function() {
      this.isNothingData = false;
    },
    showLogoutPopup: function() {
      this.isReconfirmLogout = true;
      this.coverShow         = true;
    },
    hideLogoutPopup: function() {
      this.isReconfirmLogout = false;
      this.coverShow         = false;
    },
    showDeletePopup: function() {
      this.isReconfirmDelete = true;
      this.coverShow         = true;
    },
    hideDeletePopup: function() {
      this.isReconfirmDelete = false;
      this.coverShow         = false;
    },
    switchLikeCounter: function(postSingleData) {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          if(postSingleData.contributorUid != user.uid){
            const likedUsers = postSingleData.likedUsers
            if (likedUsers.includes(user.uid)) {

              // いいね数を-1する、いいねしたユーザーから解除する
              const likedCounter = postSingleData.likedCounter-=1
              for(let i = 0; i < likedUsers.length; i++){
                if(likedUsers[i] == user.uid){
                  likedUsers.splice(i, 1)
                }
              }

              // Firebase上のデータの更新
              firebase.firestore().collection("posts").doc(postSingleData.id)
              .update({
                likedCounter: firebase.firestore.FieldValue.increment(-1),
                likedUsers:   firebase.firestore.FieldValue.arrayRemove(user.uid)
              })

              // 見た目上の更新
              for(let i; i < this.postMultipleData.length; i++) {
                if (postSingleData.id === this.postMultipleData[i].id) {
                  this.$set(this.postMultipleData[i], 'likedCounter', likedCounter)
                  this.$set(this.postMultipleData[i], 'likedUsers',   likedUsers)
                  break;
                }
              }
            } else {

              // いいね数を＋1する、いいねしたユーザーとして登録する
              const likedCounter = postSingleData.likedCounter+=1
              likedUsers.push(user.uid)

              // Firebase上のデータの更新
              firebase.firestore().collection("posts").doc(postSingleData.id)
              .update({
                likedCounter: firebase.firestore.FieldValue.increment(1),
                likedUsers:   firebase.firestore.FieldValue.arrayUnion(user.uid)
              })

              // 見た目上の更新
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
  },
  computed: {
    getItems: function() {
      const current = this.currentPage * this.parPage;
      const start   = current - this.parPage;
      return this.postMultipleData.slice(start, current)
    },
    getPageCount: function() {
      return Math.ceil(this.postMultipleData.length / this.parPage)
    },
  },
  mounted: function() {
    this.judgeAdmin();
    this.loadDataFromDB()
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
.mypage-title {
  text-align: center;
  margin-top: 250px;
  margin-bottom: 50px;
  p {
    font-size: 32px;
  }
  span {
    font-size: 18px;
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

.good-count {
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

/* ページネーション */
.paginate {
  margin: 100px 0px;
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
  .mypage-title{
    p {
      font-size: 21px;
    }
    span {
      font-size: 14px;
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

    /* 編集画面 */
  .edit-page {
    width: 300px;
  }

  .edit-btn button {
    font-size: 16px;
    width: 200px;
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
}
</style>
