<template>
 <div id="app">
       <div class="wrap">
      <Jheader></Jheader>
        <!--以下メイン-->
    <main>
        <div class="question-corner">
            <h1>Q&A</h1>
            <p>よくある質問を記載しております。</p>
        </div>
        <div class="question-contents">
            <div class="note">
                <p>質問は随時こちらに掲載いたします。</p>
            </div>
        </div>
        <div class="contact-nav">
            <h3>当サイトについてご不明な点がございましたら以下よりお尋ねください。</h3>
                <a href="https://jwatch-8411c.web.app/inquiry/index.html">
                    <div class="contact-nav-contents">
                        <div class="contact-nav-ja">
                            <p>ご意見＆ご要望はこちらから</p>
                        </div>
                        <div class="contact-nav-en">
                            <p>Contact</p>
                        </div>
                    </div>
                </a>
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

/*Q&Aタイトル部分*/

.question-corner{
    margin-left: 20%;
    margin-top: 250px;
}

.question-corner h1{
    font-size: 48px;
}

.question-corner p{
    font-size: 24px;
}

.question-contents{
    font-size: 18px;
    margin-top: 100px;
    margin-bottom: 50px;
    margin-left: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
    text-align: center;
}

/* ご意見ご要望への誘導 */
.contact-nav h3{
    font-size: 18px;
    text-align: center;
    font-weight: normal;
}

.contact-nav a{
    width: 100vw;
    height: 300px;
    margin-top: 50px;
    background-color: #323232;
    color: #ffffff;
    line-height: 2.5em;
    transition: background-color 0.4s linear;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    text-decoration: none;
}

.contact-nav a:hover{
    background-color: #202020;
}

.contact-nav-contants{
    font-size: 18px;
    display: block;
}

/* タブレット */
@media (max-width:959px ){
    /* メイン */
    .question-corner{
        margin-left: 10%;
    }

    .question-contents{
        margin-left: 0;
    }

}

/* スマホ */
@media (max-width:559px)
{
    /* メイン */
    .question-corner h1{
        font-size: 36px;
    }

    .question-contents p{
        font-size: 18px;
    }

    /* ご意見ご要望への誘導 */
    .contact-nav h3{
        font-size: 16px;
        padding: 0 30px;
    }

    .contact-nav a{
        height: 200px;
    }

    .contact-nav-contants{
        font-size: 16px;
    }

    .question-corner p{
        font-size: 18px;
    }
}
</style>