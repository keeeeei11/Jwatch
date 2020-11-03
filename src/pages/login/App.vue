<template>
<div id="app">
  <div class="wrap">
      <Jheader></Jheader>
<!--メイン-->
    <main>
    <PageTitle title="Login Page" description="観戦情報&こんな情報が欲しい！への投稿はログインが必要です。"></PageTitle>
    <div class="login-contents" id="login">
        <h2>ログイン方法を選択してください</h2>
        <div class="google-login login-btn">
            <button  @click="googleLogin">Googleアカウントでログイン</button>
        </div>
        <div class="twitter-login login-btn">
            <button @click="twitterLogin">Twitterアカウントでログイン</button>
        </div>
        <div class="easily-login login-btn">
            <button @click="anonymousLogin">簡単(匿名)ログイン</button>
        </div>
    </div>
    <MoveTopBtn></MoveTopBtn>
    </main>
    <Jfooter></Jfooter>
  </div>
</div>
</template>

<script>
import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import myFirstMixin from '../../mixin/myFirstMixin';
import Jheader from "../../components/Jheader.vue"
import PageTitle from "../../components/PageTitle.vue"
import MoveTopBtn from "../../components/MoveTopBtn.vue"
import Jfooter from "../../components/Jfooter.vue"
export default {
    components: {
        Jheader,
        PageTitle,
        MoveTopBtn,
        Jfooter,
    },
    mixins:[
        myFirstMixin,
    ],
    methods:{
        redirect: function(){
        firebase.auth().onAuthStateChanged(function(user) {
            // ログイン時はマイページへ
        if(user){
            // location.href = "https://jwatch-8411c.web.app/mypage/index.html"
        } else {
            return
        }
        });
        },
        googleLogin: function(){
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        },
        twitterLogin: function(){
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        },
        anonymousLogin: function(){
        firebase.auth().signInAnonymously().catch(function() {
        // let errorCode = error.code;
        // let errorMessage = error.message;
        // });
        firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        } else {
            alert("エラーが発生しました。もう一度ログインしてください。")
        }
        });
        })
        },
    },
    mounted:function(){
        this.redirect();
    },
}

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
；
.login-contents h2{
    text-align: center;
    font-size: 21px;
}

.login-btn button{
    margin: 40px auto;
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

.easily-login button{
    padding:20px 85px;
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
    margin:20px auto;
    padding:10px 30px;
    font-size: 16px;
}
.easily-login button{
    padding: 10px 65px;
}
}
</style>