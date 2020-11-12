<template>
<div id="app">
    <div class="normal-page" v-if="!isLoading">
        <div class="wrap">
            <Jheader></Jheader>
        <!--メイン-->
            <main>
            <PageTitle title="Login Page" description="観戦情報の投稿はログインが必要です。"></PageTitle>
            <div class="login-contents">
                <h2>ログイン方法を選択してください</h2>
                <div class="google-login login-btn">
                    <button @click="googleLogin">Googleアカウントでログイン</button>
                </div>
                <div class="twitter-login login-btn">
                    <button @click="twitterLogin">Twitterアカウントでログイン</button>
                </div>
                <div class="easily-login login-btn">
                    <button @click="anonymousLogin">簡単(匿名)ログイン</button>
                </div>
                <p>ログイン完了後、マイページに移動します</p>
            </div>
            <MoveTopBtn></MoveTopBtn>
            </main>
            <Jfooter></Jfooter>
        </div>
    </div>
    <div class="loading-page" v-else>
        <VueLoading type="spiningDubbles" color="#aaa" :size="{ width: '100px', height: '100px' }"></VueLoading>
    </div>
</div>
</template>

<script>
import firebase from "firebase"
import "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import myFirstMixin from '../../mixin/myFirstMixin'
import Jheader from "../../components/Jheader"
import PageTitle from "../../components/PageTitle"
import MoveTopBtn from "../../components/MoveTopBtn"
import Jfooter from "../../components/Jfooter"
import { VueLoading }  from 'vue-loading-template'
export default {
    components: {
        Jheader,
        PageTitle,
        MoveTopBtn,
        Jfooter,
        VueLoading
    },
    mixins:[
        myFirstMixin,
    ],
    data(){
        return{
            // 保持することでログイン処理中にローディング画面を表示する。
            isLoading:sessionStorage.getItem("loading"),
        }
    },
    methods:{
        redirect: function(){
            firebase.auth().onAuthStateChanged(function(user) {
                // ログイン時はマイページへ
                if(user){
                    sessionStorage.removeItem('loading')
                    location.href = "https://jwatch-8411c.web.app/mypage/index.html"
                } else {
                    return
                }
            });
        },
        googleLogin: function(){
            firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            this.isLoading = true
            sessionStorage.setItem('loading', this.isLoading)
        },
        twitterLogin: function(){
            firebase.auth().signInWithRedirect(new firebase.auth.TwitterAuthProvider());
            this.isLoading = true
            sessionStorage.setItem('loading', this.isLoading)
        },
        anonymousLogin: function(){
            firebase.auth().signInAnonymously().catch(function() {
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        this.isLoading = true
                        sessionStorage.setItem('loading', this.isLoading)
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

.login-contents p{
    text-align: center;
    font-size: 18px;
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

.loading-page{
    z-index:1;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

.login-contents p{
    font-size: 16px;
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