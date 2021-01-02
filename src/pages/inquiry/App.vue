<template>
  <div id = "app">
    <div class = "wrap">
      <Jheader
        :isAnonymous = "isAnonymous"
        :isLogin     = "isLogin"
        :visitorName = "visitorName"/>
      <!--以下メイン-->
      <main>
        <PageTitle
          description = "ご意見＆ご要望入力フォーム"
          title       = "Contact"/>
        <div class = "inquiry-discription">
          <p>
            <a
              href   = "https://jwatch-8411c.web.app/question/index.html"
              rel    = "nofollow noopener noreferrer"
              target = "_brank"
            >Q&A</a>にも情報がありますのでそちらも参考にしてください。
          </p>
        </div>
        <form class = "inquiry-form">
            <InputBox
              placeholder = ""
              subject     = "お名前(任意)"
              type        = "text"
              v-model     = "name"/>
            <InputBox
              maxlength   = "50"
              placeholder = ""
              subject     = "メールアドレス(任意)"
              type        = "text"
              v-model     = "mailAddress"/>
            <InputBox
              subject = "タイトル"
              type    = "text"
              v-model = "title"/>
            <TextareaBox
              placeholder = "400字以内で入力してください"
              subject     = "本文"
              v-model     = "body"/>
            <p class = "execute" @click = "showReconfirmationPopup">送信する</p>
        </form>
        <div class = "inquiry-execute">
          <ReconfirmationPopup
            v-if                     = "isReconfirmationPopup"
            message                  = "送信してもよろしいですか？"
            process                  = "送信する"
            @reconfirmationPopupHide = "hideReconfirmationPopup"
            @sendData                = "sendInquiryData"/>
          <CompletePopup
            v-if     = "isCompletePopup"
            message  = "正常に送信されました。"
            movePage = "トップページへ"
            url      = "https://jwatch-8411c.web.app/mainpage/index.html"/>
        </div>
        <MoveTopBtn/>
      </main>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import firebase            from "firebase";
import CompletePopup       from "../../components/CompletePopup";
import dayjs               from "dayjs";
import InputBox            from "../../components/InputBox";
import Jfooter             from "../../components/Jfooter";
import Jheader             from "../../components/Jheader";
import MoveTopBtn          from "../../components/MoveTopBtn";
import myFirstMixin        from "../../mixin/myFirstMixin";
import PageTitle           from "../../components/PageTitle";
import ReconfirmationPopup from "../../components/ReconfirmationPopup";
import TextareaBox         from "../../components/TextareaBox";
export default {
  data() {
    return {
      isCompleteCover:       false,
      isCompletePopup:       false,
      isReconfirmationCover: false,
      isReconfirmationPopup: false,
      body:        "",
      mailAddress: "",
      name:        "",
      title:       ""
    };
  },
  components: {
    CompletePopup,
    InputBox,
    Jfooter,
    Jheader,
    MoveTopBtn,
    PageTitle,
    ReconfirmationPopup,
    TextareaBox
  },
  mixins: [myFirstMixin],
  methods: {
    showReconfirmationPopup: function() {
      if (this.title.length > 0 && this.body.length > 0) {
        (this.isReconfirmationPopup = true), (this.isReconfirmationCover = true);
      } else {
        alert("タイトルと本文を入力してください。");
      }
    },
    hideReconfirmationPopup: function() {
      (this.isReconfirmationPopup = false), (this.isReconfirmationCover = false);
    },
    showCompletePopup: function() {
      (this.isCompletePopup = true), (this.isCompleteCover = true);
    },
    sendInquiryData: function() {
      const inputdata = {
        body:        this.body,
        created:     dayjs().format('YYYY/MM/DD'),
        mailAddress: this.mailAddress,
        name:        this.name,
        title:       this.title
      };
      firebase.firestore().collection("inquiries").add(inputdata)
        .then(() => {
          this.hideReconfirmationPopup();
          this.showCompletePopup();
        })
        .catch(function(error) {
          alert("もう一度送信するボタンを押してください。" + error)
        });
    },
  },
};
</script>

<style lang = "scss" scoped>
.wrap {
  overflow: hidden;
}

main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

.inquiry-discription {
  margin-left: 20%;
  margin-top: 100px;
  p {
    line-height: 1em;
    font-size: 18px;
  }
  a {
    color: rgb(28.8%, 29.6%, 28.8%);
    font-size: 18px;
    margin-left: 20px;
    margin-bottom: 40px;
    position: relative;
    display: inline-block;
    text-decoration: none;
  }
  a::after {
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
  a:hover::after {
    transform: scale(1, 1);
  }
}

.inquiry-form {
  margin-top: 100px;
  margin-bottom: 80px;
  margin-left: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
  text-align: center;
}

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
  :hover {
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }
}

@media (max-width: 959px) {
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

@media (max-width: 559px) {
  .inquiry-discription {
    p {
      font-size: 16px;
    }
    a {
      font-size: 16px;
    }
  }

  .execute {
    font-size: 16px;
  }
}
</style>
