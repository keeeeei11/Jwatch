<template>
<div id="app">
      <div class="wrap">
      <Jheader :visitorName="visitorName" :isLogin="isLogin" :isAnonymous="isAnonymous"></Jheader>
    <main>
       <div class="view-informations">
         <PageTitle title="View Informations" description="試合観戦に役立つ情報が記載されています。"></PageTitle>
       </div>
        <div class="core-information">
            <div class="core-information-title">
                <p>〇〇スタジアム<br><span>スタジアムグルメ</span></p>
            </div>
            <div class="core-information-post">
                <div class="post-example">
                    <div class="post-example-contents">
                        <div class="post-basic-information">
                        <div class="post-basic-information-top">
                            <div class="post-name">
                                <p>〇〇さん</p>
                            </div>
                            <div class="post-date">
                                <p>2000/1/1</p>
                            </div>
                        </div>
                        <div class="post-basic-information-bottom">
                            <div class="post-stadium">
                                <p>☆☆スタジアム</p>
                            </div>
                            <div class="post-category">
                                <p>スタジアムグルメ</p>
                            </div>
                        </div>
                        </div>
                        <div class="post-main-content">
                            <div class="post-title">
                                <p>△△の唐揚げがとても美味しかったです</p>
                            </div>
                            <div class="post-text">
                                <p>ここの唐揚げは出来たてを提供してくれます。また値段も低価格で観戦の際はいつも購入しています！是非購入してみてください！</p>
                            </div>
                            <div class="post-img">
                                <img src="img/3602761_s.jpg" alt="">
                                <img src="img/2396379_s.jpg" alt="">
                            </div>
                        </div>
                        <div class="post-evaluation">
                            <div class="post-evaluation-contents">
                                <div class="good-count">
                                    <p>役に立った！ 6</p>
                                </div>
                                <div class="reporting">
                                    <p>通報する</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div class="request-nav">
        <h3>求めている情報が見つからないときはこちら！</h3>
        <a href="https://jwatch-8411c.web.app/request/index.html">
            <div class="request-nav-contents">
                <div class="request-nav-ja">
                    <p>観戦情報をリクエストする！</p>
                </div>
                <div class="request-nav-en">
                    <p>Let’s request!</p>
                </div>
            </div>
        </a>
    </div>
    <MoveTopBtn></MoveTopBtn>
    </main>
    <!--以下フッター-->
    <Jfooter></Jfooter>
    </div>
</div>
</template>

<script>
// import firebase from "firebase";
// import "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import Jheader from "../../components/Jheader.vue"
import PageTitle from "../../components/PageTitle"
import MoveTopBtn from "../../components/MoveTopBtn.vue"
import Jfooter from "../../components/Jfooter.vue"
import myFirstMixin from "../../mixin/myFirstMixin";

export default {
  components: {
    Jheader,
    PageTitle,
    MoveTopBtn,
    Jfooter,
  },
  mixins:[
    myFirstMixin
  ],
};
</script>

<style>
/*以下ヘッダー*/
.wrap{
    overflow: hidden;
}
/*以下メイン*/
main{
    color:rgb(28.8%, 29.6%, 28.8%);
}

/* 投稿一覧 */
.core-information{
    text-align: center;
}

.core-information-title{
    margin: 100px auto;
}

.core-information p{
    font-size: 21px;
    line-height: 2.0em;
}

.post-example{
    margin: 50px 0px;
    text-align: center;
}

/* 投稿内容 */
.post-example-contents{
  width: 70%;
  margin:30px auto;
  padding: 20px 40px;
  border: 2px solid #979797;
  border-radius: 10px;
}

.post-basic-information{
  display: block;
}

.post-basic-information-top{
  display: flex;
  height: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
}

.post-basic-information-bottom{
  display: flex;
  justify-content: space-around;
}

.post-name{
  font-size: 21px;
}

.post-stadium{
  font-size: 18px;
}

.post-category{
  font-size: 18px;
}

.post-date{
  font-size: 18px;
}

.post-title p{
  text-align: center;
  font-size: 21px;
}

.post-text{
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
}

.post-text p{
  font-size: 18px;
}

.post-img img{
  height: auto;
  margin: 30px auto 20px;
  width:30%;
}

.post-evaluation p{
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 16px;
}

.post-evaluation-contents{
  display: flex;
  justify-content:center;
}

.good-count, .reporting{
  text-align:center;
  border: 1px solid #797979;
  border-radius: 10px;
  padding:5px 10px;
  margin: 0 10px;
}

.post-img{
  display: flex;
}
/* こんな情報が欲しい！ */

.request-nav h3{
    text-align: center;
    font-weight: normal;
    font-size: 18px;
}

.request-nav a{
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

.request-nav a:hover{
    background-color: #202020;
}

.request-nav-contants{
    display: block;
    font-size: 18px;
}

@media (max-width:959px)
{
/* メイン */
/* 投稿内容 */
.post-example-contents{
width: 80%;
margin: 10% auto;
}

.post-name{
font-size: 18px;
}

.post-stadium{
font-size: 16px;
}

.post-category{
font-size: 16px;
}

.post-date{
font-size: 16px;
    }
}

@media (max-width:559px){
/* メイン */
/* 投稿一覧 */
.core-information p{
  font-size: 18px;
}

.post-example-contents{
  padding: 20px;
}
/* 投稿内容 */
.post-title p{
  text-align: center;
  font-size: 18px;
}
.post-text{
  margin:10px 0;
  padding:0 10px;
}

.post-name{
  font-size:18px;
}

.post-text p{
  font-size: 16px;
}

.post-basic-information-bottom{
  display: block;
}
.post-basic-information-bottom p{
  text-align: center;
}

.post-evaluation p{
  font-size: 14px;
}

.post-nav a{
  height: 200px;
}

.post-nav-contants{
  font-size: 16px;
}

/* こんな情報が欲しい！ */
.request-nav h3{
  font-size: 16px;
}

.request-nav a{
  height: 200px;
  font-size: 16px;
}
}
</style>