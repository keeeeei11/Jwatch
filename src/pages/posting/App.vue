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
              <br />
              <h3>画像(3枚まで)</h3>
              <div class="post-picture">
                <input type="file" class="picture" multiple /><br />
              </div>
              <p class="execute" @click="triggerPostPopupShow">投稿する！</p>
            </div>
          </form>
          <!-- 再確認のポップアップ -->
          <section class="reconfirmation" v-if="confirmationPopupShow">
            <p>投稿してもよろしいですか？</p>
            <p class="cancel" @click="triggerPostPopupHide">戻る</p>
            <button @click="sendData" class="post-btn">投稿する！</button>
          </section>
          <div
            class="reconfirmation-cover"
            v-if="confirmationCoverShow"
            @click="triggerPostPopupHide"
          ></div>
          <!-- 投稿完了を伝えるポップアップ -->
          <section class="complete" v-if="completePopupShow">
            <p>投稿が完了しました！</p>
            <a
              href="https://jwatch-8411c.web.app/posting"
              @click="triggerPostedPopupHide"
              >続けて投稿する</a
            >
            <a href="https://jwatch-8411c.web.app/mainpage/index.html"
              >トップページへ</a
            >
            <a href="https://jwatch-8411c.web.app/mypage/index.html"
              >マイページへ</a
            >
          </section>
          <div class="complete-cover" v-if="completeCoverShow"></div>
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
    sendData: function() {
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

/*画像を挿入*/
.post-picture {
  display: flex;
}
.picture {
  margin: auto;
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

/* 再確認のホップアップ */
.reconfirmation {
  opacity: 1;
  width: 450px;
  height: 200px;
  position: fixed;
  background: #ffffff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

.cancel {
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  margin: 28px auto 30px;
  background: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
}

.cancel:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.post-btn {
  font-size: 18px;
  border: none;
  padding: 10px;
  text-align: center;
  width: 370px;
  outline: none;
  background: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
}

.post-btn:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.reconfirmation-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  z-index: 2;
  opacity: 0.8;
}

/* 投稿完了のポップアップ */
.complete {
  opacity: 1;
  width: 450px;
  height: 300px;
  position: fixed;
  background: #ffffff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
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

.complete a {
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  margin: 28px auto 30px;
  background: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
}

.complete a:hover {
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

  /*画像を挿入*/
  .post-picture {
    display: block;
  }

  .picture {
    margin: 20px auto;
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

  /* 再確認のホップアップ */
  .reconfirmation {
    width: 350px;
  }

  .reconfirmation p {
    font-size: 16px;
  }

  .cancel {
    width: 300px;
  }

  .post_btn {
    width: 320px;
  }

  .post_btn p {
    font-size: 16px;
  }
  /* 注意喚起 */

  .post-warning p {
    font-size: 16px;
  }
}
</style>
