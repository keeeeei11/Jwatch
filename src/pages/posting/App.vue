<template>
  <div id = "app">
    <div class = "wrap">
      <Jheader
        :isAnonymous = "isAnonymous"
        :isLogin     = "isLogin"
        :visitorName = "visitorName"/>
      <main>
        <div class = "post-imformation">
          <PageTitle
            description = "観戦情報を投稿しましょう！"
            title       = "Post informations"/>
        </div>
        <PointToNote/>
        <div class = "post-form">
          <div class = "post-form-title">
            <h2>Input form</h2>
            <p>入力フォーム</p>
          </div>
            <form class = "post-stadium">
              <InputStadium
                v-model = "stadium"/>
            </form>
            <form class = "post-category">
              <InputCategory
                v-model = "category"/>
            </form>
            <form class = "post-title-information" @submit.prevent>
              <InputBox
                v-model = "title"
                subject = "タイトル"
                type    = "text"/>
            </form>
            <form class = "post-text-information">
              <TextareaBox
                v-model = "body"
                subject = "本文"/>
              <p class = "execute" @click = "showReconfirmationPopup">投稿する！</p>
            </form>
          <div class = "post-warning">
            <p>
              ※投稿内容が警告対象に当てはらないかもう一度確認してから投稿する！ボタンを押してください。<br/>
              警告対象となる行為は<a
                href   = "https://jwatch-8411c.web.app/warning/index.html"
                rel    = "nofollow noopener noreferrer"
                target = "_brank"
                >こちら</a>
            </p>
          </div>
          <ReconfirmationPopup
            v-if                     = "isReconfirmPost"
            message                  = "投稿してもよろしいですか？"
            process                  = "投稿する!"
            @reconfirmationPopupHide = "hideReconfirmationPopup"
            @sendData                = "sendPostData"/>
          <CompletePopup
            v-if     = "isRecompletePost"
            back     = "続けて投稿する"
            message  = "投稿が完了しました！"
            movePage = "マイページへ"
            url      = "https://jwatch-8411c.web.app/mypage/index.html"/>
        </div>
        <MoveTopBtn/>
      </main>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import firebase            from "firebase/app";
import CompletePopup       from "../../components/CompletePopup";
import InputBox            from "../../components/InputBox";
import InputCategory       from "../../components/InputCategory";
import InputStadium        from "../../components/InputStadium";
import Jfooter             from "../../components/Jfooter";
import Jheader             from "../../components/Jheader";
import MoveTopBtn          from "../../components/MoveTopBtn";
import myFirstMixin        from "../../mixin/myFirstMixin";
import PageTitle           from "../../components/PageTitle";
import PointToNote         from "../../components/PointToNote";
import ReconfirmationPopup from "../../components/ReconfirmationPopup";
import TextareaBox         from "../../components/TextareaBox";
export default {
  data() {
    return {
      completeCoverShow:     false,
      confirmationCoverShow: false,
      isRecompletePost:      false,
      isReconfirmPost:       false,
      // 投稿データ
      body:     "",
      category: "",
      stadium:  "",
      title:    "",
    };
  },
  components: {
    CompletePopup,
    InputBox,
    InputCategory,
    InputStadium,
    Jfooter,
    Jheader,
    MoveTopBtn,
    PageTitle,
    PointToNote,
    ReconfirmationPopup,
    TextareaBox
  },
  mixins: [myFirstMixin],
  methods: {
    showReconfirmationPopup: function() {
      if (this.stadium.length > 0 && this.category.length > 0) {
        if (this.title.length > 0 && this.body.length > 0) {
          (this.isReconfirmPost = true), (this.confirmationCoverShow = true);
        } else {
          alert("タイトルと本文を入力してください。");
        }
      } else {
        alert("スタジアム名とカテゴリー名を選択してください。");
      }
    },
    hideReconfirmationPopup: function() {
      (this.isReconfirmPost = false), (this.confirmationCoverShow = false);
    },
    showPostedPopup: function() {
      (this.isRecompletePost = true), (this.completeCoverShow = true);
    },
    // 非ログイン時はログイン画面にリダイレクトする
    moveToToppage: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          location.href = "https://jwatch-8411c.web.app/login/index.html";
        } else {
          return
        }
      });
    },
    sendPostData: function() {
      const now       = new Date();
      const inputdata = {
        body:            this.body,
        category:        this.category,
        contributorName: this.visitorName,
        contributorUid:  this.visitorUid,
        created:         now.getFullYear() +"/" +("0" + (now.getMonth() + 1)).slice(-2) +
                         "/" +("0" + now.getDate()).slice(-2),
        likedCounter:    0,
        likedUsers:      [],
        stadium:         this.stadium,
        title:           this.title,
        updated:         null
      };
      firebase.firestore().collection("posts").add(inputdata)
        .then(() => {
          this.hideReconfirmationPopup();
          this.showPostedPopup();
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  },
  mounted: function() {
    this.moveToToppage();
  },
}
</script>

<style lang = "scss" scoped>
.wrap {
  overflow: hidden;
}
main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

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
  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
  }
}

.post-stadium {
  text-align: center;
}

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
  :hover {
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }
}

.post-warning{
   p {
    font-size: 18px;
    text-align: center;
    line-height: 2em;
  }
   a {
    text-decoration: none;
    color: rgb(28.8%, 29.6%, 28.8%);
    position: relative;
    display: inline-block;
  }
   a::after {
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
   a:hover::after {
    color: gray;
    transform: scale(1, 1);
  }
}
@media (max-width: 959px) {
  .post-form {
    margin-left: 0;
  }

  .post-form-title {
    text-align: center;
  }
}

@media (max-width: 559px) {
  .post-form {
    padding: 50px 40px;
  }

  .post-form-title{
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
    }
  }

  .execute {
    font-size: 16px;
  }

  .post-warning p {
    font-size: 16px;
  }
}
</style>
