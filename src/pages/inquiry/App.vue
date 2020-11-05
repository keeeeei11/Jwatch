<template>
<div id="app">
  <div class="wrap">
      <Jheader :visitorName="visitorName" :isLogin="isLogin" :isAnonymous="isAnonymous"></Jheader>
    <!--以下メイン-->
    <main>
        <PageTitle title="Contact" description="ご意見＆ご要望入力フォーム"></PageTitle>
        <div class="inquiry-discription">
            <p><a href="https://jwatch-8411c.web.app/question/index.html" target="_brank" rel="nofollow noopener noreferrer">Q&A</a>にも情報がありますのでそちらも参考にしてください。</p>
        </div>
        <div class="inquiry-form">
            <form class="name">
                <p>お名前(任意)<br></p>
                <input type="text" v-model="name" name="name" class="inquiry-name-form" maxlength="50">
            </form>
            <form class="email">
                <p>メールアドレス(任意)<br></p>
                <input type="text" v-model="mailAddress" name="email" class="inquiry-email-form" maxlength="50">
            </form>
            <form class="inquiry-contents">
                <p>タイトル<br></p>
                <input type="text" v-model="title" name="email" class="inquiry-title-form" maxlength="20" placeholder="20字以内で入力してください">
                <p>お問い合わせ・ご意見の内容<br></p>
                    <textarea v-model="body" class="inquiry-body-information-box" placeholder="400字以内で入力してください" maxlength="400"></textarea><br>
                    <div class="count-character">
                        <p>残り{{ 400 - body.length }}字です</p>
                    </div>
            </form>
            <p class="execute" @click="triggerPostPopupShow">送信する</p>
        </div>
        <!-- 再確認のポップアップ -->
        <div class="inquiry-execute">
            <section class="reconfirmation" v-if="confirmationPopupShow">
                <p>送信してもよろしいですか？</p>
                <p class="cancel" @click="triggerPostPopupHide">戻る</p>
                <button @click="sendData" class="post-btn">送信する</button>
            </section>
            <div class="reconfirmation-cover" v-if="confirmationCoverShow" @click="triggerPostPopupHide"></div>
            <!-- 投稿完了のポップアップ -->
            <section class="complete" v-if="completePopupShow">
                <p>お問い合わせありがとうございます。</p>
                <p>正常に送信されました。</p>
                <a href="https://jwatch-8411c.web.app/mainpage/index.html" @click="triggerPostedPopupHide">トップページへ</a>
            </section>
            <div class="complete-cover" v-if="completeCoverShow"></div>
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
import Jheader from "../../components/Jheader.vue"
import PageTitle from "../../components/PageTitle.vue"
import MoveTopBtn from "../../components/MoveTopBtn.vue"
import Jfooter from "../../components/Jfooter.vue"
import myFirstMixin from '../../mixin/myFirstMixin';
export default {
  data(){
    return {
        confirmationPopupShow: false,
        confirmationCoverShow: false,
        completePopupShow: false,
        completeCoverShow: false,
        name:"",
        mailAddress:"",
        title:"",
        body:"",
    }
  },
  components: {
    Jheader,
    PageTitle,
    MoveTopBtn,
    Jfooter,
  },
  mixins:[
    myFirstMixin
  ],
  methods:{
    triggerPostPopupShow: function(){
        this.confirmationPopupShow = true,
        this.confirmationCoverShow = true
    },
    triggerPostPopupHide: function(){
        this.confirmationPopupShow = false,
        this.confirmationCoverShow = false
    },
    triggerPostedPopupShow: function(){
        this.completePopupShow = true,
        this.completeCoverShow = true
    },
    triggerPostedPopupHide: function(){
        this.completePopupShow = false,
        this.completeCoverShow = false
    },
    sendData: function(){
        const db = firebase.firestore()
        const postdata = db.collection("inquiries");
        const now = new Date();
        const inputdata = {
            name: this.name,
            mailAddress: this.mailAddress,
            title: this.title,
            body: this.body,
            created: now.getFullYear() + "/" + ("0"+(now.getMonth() + 1)).slice(-2) + '/' + ("0" + now.getDate()).slice(-2),
        // タイトルと本文が入力されているか判定する
        }
        if(this.title.length > 0 && this.body.length > 0) {
            postdata.add(inputdata).then(() => {
            this.triggerPostedPopupShow();
            this.triggerPostPopupHide();
            })
            .catch(function(error){
            console.error(error)
            })
        } else {
        alert('タイトルと本文を入力してください。')
        }
      }
  }
};
</script>

<style>
.wrap{
    overflow: hidden;
}

/*以下メイン*/
main{
    color: rgb(28.8%, 29.6%, 28.8%);
}
/*注意点の箇条書き*/
.inquiry-discription{
    margin-left: 20%;
    margin-top: 100px;
}
.inquiry-discription p{
    line-height: 1.0em;
    font-size: 18px;
}
.inquiry-discription a{
    color: rgb(28.8%, 29.6%, 28.8%);
    font-size: 18px;
    margin-left: 20px;
    margin-bottom: 40px;
    position: relative;
    display: inline-block;
    text-decoration: none;
}
.inquiry-discription a::after{
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
}
.inquiry-discription a:hover::after{
    transform: scale(1,1);
}
/*各種情報入力部分*/
.inquiry-form{
    margin-top: 100px;
    margin-bottom: 80px;
    margin-left: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
    text-align: center;
}
.inquiry-form p{
    font-size: 21px;
    text-align: center;
}
.inquiry-form input{
    width: 60%;
    height: 40px;
    font-size: 18px;
}

.inquiry-body-information-box{
    width: 90%;
    height: 400px;
}

/* 送信ボタン*/
.execute{
    width: 150px;
    font-size: 18px;
    font-weight: 500;
    color: #484b48;
    text-decoration: none;
    border:2px solid #484b48;
    margin:30px auto;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #fff;
    transition: background-color 0.4s linear;
}

.execute:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

/* 再確認のホップアップ */
.reconfirmation{
    opacity: 1;
    width: 450px;
    height: 200px;
    position: fixed;
    background: #ffffff;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    text-align: center;
    transition: 0.4s;
    z-index: 3;
}

.cancel{
    width: 350px;
    display: block;
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    margin: 28px auto 30px;
    background:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
}

.cancel:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

.post-btn{
    width: 350px;
    display: block;
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    margin: 28px auto 30px;
    background:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
}

.post-btn:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

.reconfirmation-cover{
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
.complete{
    opacity: 1;
    width: 450px;
    height: 200px;
    position: fixed;
    background: #ffffff;
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    text-align: center;
    transition: 0.4s;
    z-index: 3;
    text-align: center;
}

.complete-cover{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: gainsboro;
    z-index: 2;
    opacity: 0.8;
}

.complete a{
    width: 350px;
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    margin: 28px auto 30px;
    background:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
}

.complete a:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

@media (max-width:959px)
{
/* メイン */
/*注意点の箇条書き*/
.inquiry-discription{
    margin-left: 0;
    text-align: center;
    margin-top: 100px;
}

.inquiry-form{
    margin-left: 0px;
    padding: 50px 40px;
}

.inquiry-form input{
    width: 90%;
}
}

/* スマホ */
@media (max-width:559px)
{
/* ヘッダー */
.header-contents{
margin: auto 10px;
}

#menu a {
font-size: 18px;
}
/* メイン */
/*注意点の箇条書き*/
.inquiry-discription p{
    font-size: 16px;
}

.inquiry-discription a{
    font-size: 16px;
}

/*各種情報入力部分*/
.inquiry-form p{
    font-size: 18px;
}

/* メールアドレス */
input.email{
    width: 350px;
}

/*質問内容の選択*/
.category{
    width: 350px;
}

/* 送信ボタン*/
.execute{
    font-size: 16px;
}
}
</style>