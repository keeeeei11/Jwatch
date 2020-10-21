<template>
<div id="app">
  <div class="wrap">
      <Jheader></Jheader>
<!--メイン-->
    <main>
    <div class="login-title">
        <h1>Login Page</h1>
        <p>観戦情報&こんな情報が欲しい！への投稿はログインが必要です。</p>
    </div>
    <div class="login-contents" id="login">
        <h2>ログイン方法を選択してください</h2>
        <div class="google-login login-btn">
            <button @click="googleLogin">Googleアカウントでログイン</button>
        </div>
        <div class="twitter-login login-btn">
            <button @click="twitterLogin">Twitterアカウントでログイン</button>
        </div>
        <div class="email-login login-btn">
            <button @click="emailLogin">メールアドレスでログイン</button>
        </div>
        <div class="easily-login login-btn">
            <button @click="anonymousLogin">匿名ログイン(簡単ログイン)</button>
        </div>
        <p>※匿名ログインはページを離れると投稿が消去されるように設定しております。</p>
    </div>
    <MoveTopBtn></MoveTopBtn>
    </main>
    <Jfooter></Jfooter>
  </div>
</div>
</template>

<script>
import Jheader from "../../components/Jheader.vue"
import MoveTopBtn from "../../components/MoveTopBtn.vue"
import Jfooter from "../../components/Jfooter.vue"
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    Jheader,
    MoveTopBtn,
    Jfooter,
  },
  methods:{
    // googleLogin: function(){
    // firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    // },
    // twitterLogin: function(){
    // firebase.auth().signInWithRedirect(new firebase.auth.TwitterAuthProvider());
    // },
    // emailLogin: function(){
    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // var uiConfig = {
    // callbacks: {
    //   signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //     return true;
    //   },
    //   uiShown: function() {
    //     // ローディング時にログイン画面を表示させない働き
    //     document.getElementById('loader').style.display = 'none';
    //   }
    // },
    // // ログイン画面の表示方法、ログイン成功時のページ誘導,ログインの認証方法
    // signInFlow: 'popup',
    // signInSuccessUrl: 'https://jwatch-48c7e.web.app/login/login-complete.html',
    // signInOptions: [
    //   firebase.auth.EmailAuthProvider.PROVIDER_ID, //メール認証
    // ],

    // tosUrl: 'https://github.com/keeeeei11',
    // privacyPolicyUrl: 'https://github.com/keeeeei11'
    // };
    // // UIレンダリング
    // ui.start('#firebaseui-auth-container', uiConfig);
    // },
    // anonymousLogin: function(){
    // firebase.auth().signInAnonymously().catch(function(error) {
    // let errorCode = error.code;
    // let errorMessage = error.message;
    // });
    // firebase.auth().onAuthStateChanged(function(user) {
    // if (user) {
    //     // User is signed in.
    //     var isAnonymous = user.isAnonymous;
    //     var uid = user.uid;
    // } else {
    //     return
    // }
    // });
    // }
  }
};
</script>

<style>
.wrap{
    overflow: hidden;
}

/*以下メイン*/

main{
    color:rgb(28.8%, 29.6%, 28.8%);
}

.login-title{
    margin-left: 20%;
    margin-top: 250px;
}

.login-title h1{
    font-size: 48px;
}

.login-title p{
    font-size: 21px;
}

.login-contents{
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
    text-align: center;
}

.login-contents h2{
    text-align: center;
    font-size: 21px;
}

.login-btn{
    margin: 80px auto;
}

.login-btn button{
    padding: 20px 50px;
    font-size: 18px;
    border-radius: 10px;
    color: #484b48;
    text-decoration: none;
    border:2px solid #484b48;
    background-color: #fff;
    transition:background-color 0.4s linear;
    outline: none;
}

.login-btn button:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

.login-contents p{
    font-size: 18px;
}

/* タブレット */
@media (max-width:959px )
{
    /* メイン */
    /* タイトル */
    .login-title{
        margin-left: 10%;
        margin-top: 250px;
    }

    .login-contents{
        margin-left: 0px;
    }
}

/* スマホ */
@media (max-width:559px)
{
  /* メイン */
.login-contents{
    padding:50px 40px;
}
.login-title p{
    font-size: 18px;
}

.login-contents h2{
    font-size: 18px;
}

.login-contents button{
    width: 250px;
    font-size: 16px;
}

.login-contents p{
    font-size: 16px;
}
}
</style>