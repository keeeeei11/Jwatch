<template>
  <div id="app">
    <div class="wrap">
      <Jheader
        :visitorName="visitorName"
        :isLogin="isLogin"
        :isAnonymous="isAnonymous"
      ></Jheader>
      <!--以下メイン-->
      <main>
        <PageTitle
          title="Contact"
          description="ご意見＆ご要望入力フォーム"
        ></PageTitle>
        <div class="inquiry-discription">
          <p>
            <a
              href="https://jwatch-8411c.web.app/question/index.html"
              target="_brank"
              rel="nofollow noopener noreferrer"
              >Q&A</a
            >にも情報がありますのでそちらも参考にしてください。
          </p>
        </div>
        <div class="inquiry-form">
            <InputBox
              v-model="name"
              subject="お名前(任意)"
              type="text"
              placeholder=""
            ></InputBox>
            <InputBox
              v-model="mailAddress"
              placeholder=""
              subject="メールアドレス(任意)"
              type="text"
              maxlength="50"
            ></InputBox>
            <InputBox
              v-model="title"
              subject="タイトル"
              type="text"
            ></InputBox>
            <TextareaBox
              v-model="body"
              placeholder="400字以内で入力してください"
              subject="本文"
            ></TextareaBox>
          <p class="execute" @click="triggerPostPopupShow">送信する</p>
        </div>
        <!-- 再確認のポップアップ -->
        <div class="inquiry-execute">
          <ReconfirmationPopup
            v-if="confirmationPopupShow"
            message="送信してもよろしいですか？"
            process="送信する"
            @reconfirmationPopupHide="triggerPostPopupHide"
            @sendData="sendInquiryData"
          ></ReconfirmationPopup>
          <!-- 投稿完了のポップアップ -->
          <CompletePopup
            v-if="completePopupShow"
            message="正常に送信されました。"
            url="https://jwatch-8411c.web.app/mainpage/index.html"
            movePage="トップページへ"
          ></CompletePopup>
        </div>
        <MoveTopBtn></MoveTopBtn>
      </main>
      <Jfooter></Jfooter>
    </div>
  </div>
</template>

<script>
// DBと繋いだ時にで有効にする
import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Jheader from "../../components/Jheader";
import PageTitle from "../../components/PageTitle";
import InputBox from "../../components/InputBox";
import TextareaBox from "../../components/TextareaBox";
import ReconfirmationPopup from "../../components/ReconfirmationPopup";
import CompletePopup from "../../components/CompletePopup";
import MoveTopBtn from "../../components/MoveTopBtn";
import Jfooter from "../../components/Jfooter";
import myFirstMixin from "../../mixin/myFirstMixin";
export default {
  data() {
    return {
      confirmationPopupShow: false,
      confirmationCoverShow: false,
      completePopupShow: false,
      completeCoverShow: false,
      name: "",
      mailAddress: "",
      title: "",
      body: "",
    };
  },
  components: {
    Jheader,
    PageTitle,
    InputBox,
    TextareaBox,
    ReconfirmationPopup,
    CompletePopup,
    MoveTopBtn,
    Jfooter,
  },
  mixins: [myFirstMixin],
  methods: {
    triggerPostPopupShow: function() {
      // タイトルと本文が入力されているか判定する
      if (this.title.length > 0 && this.body.length > 0) {
        (this.confirmationPopupShow = true),
          (this.confirmationCoverShow = true);
      } else {
        alert("タイトルと本文を入力してください。");
      }
    },
    triggerPostPopupHide: function() {
      (this.confirmationPopupShow = false),
        (this.confirmationCoverShow = false);
    },
    triggerPostedPopupShow: function() {
      (this.completePopupShow = true), (this.completeCoverShow = true);
    },
    sendInquiryData: function() {
      const db = firebase.firestore();
      const postdata = db.collection("inquiries");
      const now = new Date();
      const inputdata = {
        name: this.name,
        mailAddress: this.mailAddress,
        title: this.title,
        body: this.body,
        created:
          now.getFullYear() +
          "/" +
          ("0" + (now.getMonth() + 1)).slice(-2) +
          "/" +
          ("0" + now.getDate()).slice(-2),
      };
      postdata
        .add(inputdata)
        .then(() => {
          this.triggerPostedPopupShow();
          this.triggerPostPopupHide();
        })
        .catch(function(error) {
          console.error(error);
        });
    },
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
/*注意点の箇条書き*/
.inquiry-discription {
  margin-left: 20%;
  margin-top: 100px;
}
.inquiry-discription p {
  line-height: 1em;
  font-size: 18px;
}
.inquiry-discription a {
  color: rgb(28.8%, 29.6%, 28.8%);
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.inquiry-discription a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: #333;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}
.inquiry-discription a:hover::after {
  transform: scale(1, 1);
}
/*各種情報入力部分*/
.inquiry-form {
  margin-top: 100px;
  margin-bottom: 80px;
  margin-left: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
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
  margin: 30px auto;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #fff;
  transition: background-color 0.4s linear;
}

.execute:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

@media (max-width: 959px) {
  /* メイン */
  /*注意点の箇条書き*/
  .inquiry-discription {
    margin-left: 0;
    text-align: center;
    margin-top: 100px;
  }

  .inquiry-form {
    margin-left: 0px;
    padding: 50px 40px;
  }
}

/* スマホ */
@media (max-width: 559px) {
  /* メイン */
  /*注意点の箇条書き*/
  .inquiry-discription p {
    font-size: 16px;
  }

  .inquiry-discription a {
    font-size: 16px;
  }

  /* 送信ボタン*/
  .execute {
    font-size: 16px;
  }
}
</style>
