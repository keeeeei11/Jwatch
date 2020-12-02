<template>
  <div id="app">
    <div class="wrap">
      <Jheader
        :visitorName="visitorName"
        :isLogin="isLogin"
        :isAnonymous="isAnonymous"
      ></Jheader>
      <main>
        <div class="post-imformation">
          <PageTitle
            title="Post informations"
            description="観戦情報を投稿しましょう！"
          ></PageTitle>
        </div>
        <!-- 注意点 -->
        <PointToNote></PointToNote>
        <div class="post-form">
          <div class="post-form-title">
            <h2>Input form</h2>
            <p>入力フォーム</p>
            <br />
          </div>
          <form>
            <div class="post-stadium">
              <InputStadium
                v-model="stadium"
              >
              </InputStadium>
            </div>
            <div class="post-category">
              <InputCategory
                v-model="category"
              >
              </InputCategory>
            </div>
            <div class="post-title-information">
              <InputBox
                v-model="title"
                subject="タイトル"
                type="text"
              ></InputBox>
            </div>
            <div class="post-text-information">
              <TextareaBox
                v-model="body"
                subject="本文"
              ></TextareaBox>
              <p class="execute" @click="triggerPostPopupShow">投稿する！</p>
            </div>
          </form>
          <!-- 再確認のポップアップ -->
          <ReconfirmationPopup
            v-if="confirmationPopupShow"
            message="投稿してもよろしいですか？"
            process="投稿する!"
            @reconfirmationPopupHide="triggerPostPopupHide"
            @sendData="sendPostData"
          ></ReconfirmationPopup>
          <!-- 投稿完了を伝えるポップアップ -->
          <CompletePopup
            v-if="completePopupShow"
            message="投稿が完了しました！"
            back="続けて投稿する"
            url="https://jwatch-8411c.web.app/mypage/index.html"
            movePage="マイページへ"
          ></CompletePopup>
          <div class="post-warning">
            <p>
              ※投稿内容が警告対象に当てはらないかもう一度確認してから投稿する！ボタンを押してください。<br />
              警告対象となる行為は<a
                href="https://jwatch-8411c.web.app/warning/index.html"
                target="_brank"
                rel="nofollow noopener noreferrer"
                >こちら</a
              >
            </p>
          </div>
        </div>
        <MoveTopBtn></MoveTopBtn>
      </main>
      <!--以下フッター-->
      <Jfooter></Jfooter>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import myFirstMixin from "../../mixin/myFirstMixin";
import Jheader from "../../components/Jheader";
import PageTitle from "../../components/PageTitle";
import PointToNote from "../../components/PointToNote";
import InputStadium from "../../components/InputStadium";
import InputCategory from "../../components/InputCategory";
import InputBox from "../../components/InputBox";
import TextareaBox from "../../components/TextareaBox";
import ReconfirmationPopup from "../../components/ReconfirmationPopup";
import CompletePopup from "../../components/CompletePopup";
import MoveTopBtn from "../../components/MoveTopBtn";
import Jfooter from "../../components/Jfooter";
export default {
  data() {
    return {
      // 再確認のポップアップの表示設定
      confirmationPopupShow: false,
      confirmationCoverShow: false,
      completePopupShow: false,
      completeCoverShow: false,
      // 投稿データ
      stadium: "",
      category: "",
      title: "",
      body: "",
    };
  },
  components: {
    Jheader,
    PageTitle,
    PointToNote,
    InputStadium,
    InputCategory,
    InputBox,
    TextareaBox,
    ReconfirmationPopup,
    CompletePopup,
    MoveTopBtn,
    Jfooter,
  },
  mixins: [myFirstMixin],
  methods: {
    // ポップアップ表示・非表示
    triggerPostPopupShow: function() {
      // this.stadiumとthis.categoryはvalueの値を受け取っている
      // スタジアムとカテゴリーが選択されているか判定する
      if (this.stadium.length > 0 && this.category.length > 0) {
        // タイトルと本文が入力されているか判定する
        if (this.title.length > 0 && this.body.length > 0) {
          (this.confirmationPopupShow = true),
            (this.confirmationCoverShow = true);
        } else {
          alert("タイトルと本文を入力してください。");
        }
      } else {
        alert("スタジアム名とカテゴリー名を選択してください。");
      }
    },
    triggerPostPopupHide: function() {
      (this.confirmationPopupShow = false),
        (this.confirmationCoverShow = false);
    },
    triggerPostedPopupShow: function() {
      (this.completePopupShow = true), (this.completeCoverShow = true);
    },
    triggerPostedPopupHide: function() {
      (this.completePopupShow = false), (this.completeCoverShow = false);
    },
    // 非ログイン時はログイン画面にリダイレクトする
    redirect: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          location.href = "https://jwatch-8411c.web.app/login/index.html";
        } else {
          return
        }
      });
    },
    sendPostData: function() {
      const db = firebase.firestore();
      const postdata = db.collection("posts");
      const now = new Date();
      const inputdata = {
        stadium: this.stadium,
        category: this.category,
        title: this.title,
        body: this.body,
        created:
          now.getFullYear() +
          "/" +
          ("0" + (now.getMonth() + 1)).slice(-2) +
          "/" +
          ("0" + now.getDate()).slice(-2),
        contributorName: this.visitorName,
        contributorUid: this.visitorUid,
        updated: null,
        likedCounter: 0,
        likedUsers: [],
      };
      postdata
        .add(inputdata)
        .then(() => {
          this.triggerPostPopupHide();
          this.triggerPostedPopupShow();
        })
        .catch(function(error) {
          console.error(error);
        });
    },
  },
  mounted: function() {
    this.redirect();
  },
};
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
/*以下メイン*/
main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

/*観戦情報の入力フォーム*/

.post-form {
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
  text-align: center;
}

.post-form-title {
  text-align: left;
}

.post-form-title h2 {
  font-size: 32px;
}

.post-form-title p {
  font-size: 18px;
}

.post-stadium {
  text-align: center;
}

/* 送信ボタン*/
.execute {
  width: 150px;
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

.execute:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

/*注意喚起*/

.post-warning p {
  font-size: 18px;
  text-align: center;
  line-height: 2em;
}

.post-warning a {
  text-decoration: none;
  color: rgb(28.8%, 29.6%, 28.8%);
  position: relative;
  display: inline-block;
}

.post-warning a::after {
  position: absolute;
  bottom: 2px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: #333;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}

.post-warning a:hover::after {
  color: gray;
  transform: scale(1, 1);
}
@media (max-width: 959px) {
  /* メイン */
  /*観戦情報の入力フォーム*/
  .post-form {
    margin-left: 0;
  }

  .post-form-title {
    text-align: center;
  }
}

@media (max-width: 559px) {
  /* メイン */
  /*観戦情報の入力フォーム*/
  .post-form {
    padding: 50px 40px;
  }

  .post-form-title h2 {
    font-size: 28px;
  }

  .post-form-title p {
    font-size: 16px;
  }

  /* 送信ボタン*/
  .execute {
    font-size: 16px;
  }
  /* 注意喚起 */

  .post-warning p {
    font-size: 16px;
  }
}
</style>
