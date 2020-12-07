<template>
  <div id="app">
    <div class="normal-page" v-if="!isLoading">
      <div class="wrap">
        <Jheader/>
        <!--メイン-->
        <main>
            <PageTitle
              title="Login Page"
              description="観戦情報の投稿はログインが必要です。"/>
            <div class="login-contents">
              <h2>ログイン方法を選択してください</h2>
              <LoginBtn
              name="google"
              loginMethod="Googleアカウントでログイン"
              @click.native="loginGoogle"/>
              <LoginBtn
              name="twitter"
              loginMethod="Twitterアカウントでログイン"
              @click.native="loginTwitter"/>
              <LoginBtn
              name="anonymous"
              loginMethod="簡単(匿名)ログイン"
              @click.native="loginAnonymous"/>
              <p>ログイン完了後、マイページに移動します</p>
            </div>
          <MoveTopBtn/>
        </main>
        <Jfooter/>
      </div>
    </div>
    <div class="loading-page" v-else>
      <VueLoading
        type="spiningDubbles"
        color="#aaa"
        :size="{ width: '100px', height: '100px' }"/>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Jfooter from "../../components/Jfooter";
import Jheader from "../../components/Jheader";
import LoginBtn from "../../components/LoginBtn";
import MoveTopBtn from "../../components/MoveTopBtn";
import myFirstMixin from "../../mixin/myFirstMixin";
import PageTitle from "../../components/PageTitle";
import { VueLoading } from "vue-loading-template";
export default {
  components: {
    Jfooter,
    Jheader,
    LoginBtn,
    MoveTopBtn,
    PageTitle,
    VueLoading,
  },
  mixins: [myFirstMixin],
  data() {
    return {
      // 初期値はtrueにして非ログイン時はloginJudgment()でfalseへ
      isLoading:true,
    };
  },
  methods: {
    moveToMypage: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        // ログイン時はマイページへ
        if (user) {
          sessionStorage.removeItem("loading");
          location.href = "https://jwatch-8411c.web.app/mypage/index.html";
        } else {
          return;
        }
      });
    },
    loginGoogle: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      sessionStorage.setItem("loading", this.isLoading);
    },
    loginTwitter: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.TwitterAuthProvider());
      sessionStorage.setItem("loading", this.isLoading);
    },
    loginAnonymous: function() {
      firebase
        .auth()
        .signInAnonymously()
        .catch(function() {
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              sessionStorage.setItem("loading", this.isLoading);
            } else {
              alert("エラーが発生しました。もう一度ログインしてください。");
            }
          });
        });
    },
    judgeAlreadyLogin: function(){
      firebase.auth().onAuthStateChanged((user) => {
       if(user){
         this.isLoading = true;
       } else {
         this.isLoading = false;
       }
    })
    }
  },
  mounted: function(){
    this.judgeAlreadyLogin();
    this.moveToMypage();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  overflow: hidden;
}
/*以下メイン*/

main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

.login-title {
  margin-left: 20%;
  margin-top: 250px;
  h1 {
    font-size: 48px;
  }
  p {
    font-size: 21px;
  }
}

.login-contents {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
  text-align: center;
  h2 {
    text-align: center;
    font-size: 21px;
  }
  p {
    text-align: center;
    font-size: 18px;
  }
}


.loading-page {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* タブレット */
@media (max-width: 959px) {
  /* メイン */
  /* タイトル */
  .login-title {
    margin-left: 10%;
    margin-top: 250px;
  }

  .login-contents {
    margin-left: 0px;
  }
}

/* スマホ */
@media (max-width: 559px) {
  /* メイン */
  .login-title p {
    font-size: 18px;
  }
  .login-contents {
    padding: 50px 0px;
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
}
</style>
