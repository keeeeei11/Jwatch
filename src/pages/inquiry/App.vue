<template>
<div id="app">
  <div class="wrap">
      <Jheader></Jheader>
    <!--以下メイン-->
    <main>
        <div class="inquiry-title">
            <h1>Contact</h1>
            <p>ご意見＆ご要望入力フォーム</p>
        </div>
        <div class="inquiry-discription">
            <p><a href="https://jwatch-48c7e.web.app/question/question.html" target="_brank" rel="nofollow noopener noreferrer">Q&A</a>にも情報がありますのでそちらも参考にしてください。</p>
        </div>
        <div class="inquiry-form">
            <form action="#" method="POST" class="name">
                <p>お名前(任意)<br></p>
                <input type="text" name="name" class="inquiry-name-form" maxlength="50">
            </form>
            <form action="#" method="POST" class="email">
                <p>メールアドレス(任意)<br></p>
                <input type="text" name="email" class="inquiry-email-form" maxlength="50">
            </form>
            <form action="#" method="POST" class="inquiry-contents">
                <p>タイトル<br></p>
                <input type="text" name="email" class="inquiry-title-form" id="title_box" maxlength="20" placeholder="20字以内で入力してください">
                <p>お問い合わせ・ご意見の内容<br></p>
                <!-- 字数制限を設置する(400字)(他の投稿入力フォームも) -->
                <div id="body_box">
                    <textarea class="inquiry-text-form" placeholder="400字以内で入力してください" maxlength="400"></textarea><br>
                        <!-- <div class="count-character"> -->
                            <!-- <p>残り{{ 400 - character.length }}字です</p>
                        </div> -->
                </div>
            </form>
            <p class="execute" @click="inquiryPopupShow">送信する</p>
        </div>
        <div class="inquiry-execute">
            <section class="reconfirmation" v-if="popupShow">
                <p>送信してもよろしいですか？</p>
                <p class="cancel" @click="popupHide">戻る</p>
                <form action="">
                    <input type="submit" class="post-btn" value="送信する">
                </form>
            </section>
        <form action="#" method="POST" class="name"></form>
         <div class="reconfirmation-cover" v-if="coverShow" @click="popupHide"></div>
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
        popupShow: false,
        coverShow: false
    }
  },
  components: {
    Jheader,
    MoveTopBtn,
    Jfooter,
  },
  methods:{
        inquiryPopupShow: function(){
        this.popupShow = true,
        this.coverShow = true
        },
        popupHide: function(){
        this.popupShow = false,
        this.coverShow = false
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
/*タイトル*/
.inquiry-title{
    margin-left: 20%;
    margin-top: 250px;
}
.inquiry-title h1{
    font-size: 48px;
}
.inquiry-title p{
    font-size: 21px;
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
/*自由記述欄*/
textarea.inquiry-text-form{
    width:70%;
    height: 400px;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 15px;
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

@media (max-width:959px )
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

/*自由記述欄*/
textarea.inquiry-text-form{
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
.inquiry-title p{
    font-size: 18px;
}

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

/*自由記述欄*/
textarea.opinion{
    width: 80%;
}

/* 送信ボタン*/
.execute{
    font-size: 16px;
}
}
</style>