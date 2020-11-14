<template>
  <div id="app">
        <div class="wrap">
      <Jheader :visitorName="visitorName"  :isLogin="isLogin" :isAnonymous="isAnonymous"></Jheader>
    <!-- 以下メイン-->
    <main>
        <!--サイト名-->
        <PageTitle title="Jwatch" description="〜全ての人にサッカー観戦の楽しみを〜"></PageTitle>
        <!--メッセージ-->
        <div class="about">
            <div class="about-title">
                <h1>About</h1>
            </div>
            <div class="about-discriptions">
                <div class="first-about-discription">
                    <p>JwatchはJリーグスタジアムの観戦情報を</p>
                    <p>投稿＆閲覧できるサイトです。</p>
                </div>
                 <div class="second-about-discription">
                    <p>事前にリアルなスタジアム情報を</p>
                    <p>お届けすることで快適なスタジアム観戦をサポートします。</p>
                </div>
                 <div class="third-about-discription">
                    <p>また、自分の応援するチームのスタジアム情報を投稿することで</p>
                    <p>応援するチームの良さを全国の人に伝えることができます。</p>
                </div>
            </div>
        </div>
        <!--サイトの使い方-->
        <div class="usage">
            <div class="usage-title">
                <h1>How to use</h1>
            </div>
            <div class="usage-introduction">
                <div class="usage-primary-introduction">
                    <div class="usage-search">
                        <a href="https://jwatch-8411c.web.app/searchinformation/index.html">
                            <h3>観戦情報を探す</h3>
                            <img src="../../assets/1843892_s.jpg" alt="パソコンと虫眼鏡の画像。情報を探すイメージ。" loading="lazy">
                        </a>
                        <p>観戦予定のスタジアム/カテゴリーを選択して観戦情報を探してみましょう！</p>
                    </div>
                    <div class="usage-post">
                        <a href="https://jwatch-8411c.web.app/posting/index.html">
                            <h3>観戦情報を投稿する</h3>
                            <img src="../../assets/812491_s.jpg" alt="女性がスマートフォンで観戦情報を投稿している画像。" loading="lazy">
                        </a>
                        <p>試合観戦の感想やワンポイントアドバイス等を投稿してみましょう！</p>
                    </div>
                </div>
                <div class="usage-secondary-introduction">
                    <p>※観戦情報の投稿は <a href="https://jwatch-8411c.web.app/login/index.html">ログイン</a> が必要となります。</p>
                </div>
            </div>
            <div class="detail-usage-nav">
                <a href="https://jwatch-8411c.web.app/usage/index.html">
                    <div class="detail-usage-nav-contants">
                        <div class="detail-usage-nav-title">
                            <p>Detailed discription</p>
                        </div>
                        <div class="detail-usage-nav-discription">
                            <p>使い方のより詳しい説明はこちら</p>
                        </div>
                    </div>
                </a>
                </div>
        </div>
    <MoveTopBtn></MoveTopBtn>
    </main>
    <Jfooter></Jfooter>
    </div>
  </div>
</template>

<script>
import myFirstMixin from '../../mixin/myFirstMixin';
import Jheader from "../../components/Jheader"
import PageTitle from "../../components/PageTitle"
import MoveTopBtn from "../../components/MoveTopBtn"
import Jfooter from "../../components/Jfooter"
export default {
  components: {
    Jheader,
    PageTitle,
    MoveTopBtn,
    Jfooter,
  },
  mixins:[
    myFirstMixin
  ]
}
</script>

<style scoped>
body{
    font-family:"Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic Pro", Arial, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.wrap{
    overflow: hidden;
}

/*以下メイン*/

main{
    color: rgb(28.8%, 29.6%, 28.8%);
}

/*メッセージ*/
.about{
    display: flex;
    margin-top: 100px;
    margin-left: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
}

.about-title{
    text-align: center;
}

.about-discriptions{
    margin:80px auto 0;
    text-align: left;
}

.about-discriptions p{
    font-size: 18px;
    line-height:2.5em;
}

/*サイトの使い方*/

.usage{
    margin-top: 50px;
    text-align: center;
}

.usage-title{
    margin-left: 15%;
    text-align: left;
}

.usage-primary-introduction{
    display: flex;
    margin: auto;
}

.usage-primary-introduction a{
    text-decoration: none;
    color:rgb(28.8%, 29.6%, 28.8%);
    transition: color 0.4s linear;
}

.usage-primary-introduction a:hover{
    color: gray;
    transition: 0.4s;
}

.usage-primary-introduction h3{
    font-size: 21px;
}

.usage-primary-introduction img{
    height: auto;
    width:80%;
    height: 300px;
}

.usage-primary-introduction p{
    font-size: 18px;
    width: 70%;
    margin: 10px auto;
}
/*観戦情報を探す*/

.usage-secondary-introduction p{
    font-size: 18px;
}

.usage-secondary-introduction a{
    text-decoration: none;
    color: rgb(28.8%, 29.6%, 28.8%);
    position: relative;
    z-index: 1;
}

.usage-secondary-introduction a::after{
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
.usage-secondary-introduction a:hover::after{
    transform: scale(1,1);
}

.detail-usage-nav{
    margin: 0px;
}

.detail-usage-nav a{
    width: 100vw;
    height: 300px;
    margin-top: 50px;
    background-color: #323232;
    color: #ffffff;
    line-height: 2.5em;
    transition: background-color 0.4s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.detail-usage-nav a:hover{
    background-color: #202020;
}

.detail-usage-nav-contants{
    display: block;
}

.detail-usage-nav-title p{
    font-size: 21px;
}
detail-usage-nav-discription p{
    font-size: 18px;
}

@media (max-width:959px)
{
/* メイン */
.about{
    display: block;
    text-align: center;
    margin:100px auto auto;
}
/* サイトの使い方 */
.usage{
    text-align: center;
}
.usage-title{
    margin: auto;
    text-align: center;
}

.usage-primary-introduction{
    display: block;
}
}

@media (max-width:559px){
/* メイン */
/*メッセージ*/
.about{
    padding:50px 40px;
}

.about-titie h1{
    font-size: 28px;
}

.about-discriptions{
    margin:40px auto 0;
}

.about-discriptions p{
    font-size: 16px;
}

/*サイトの使い方*/

.usage-title h1{
    font-size: 28px;
}

.usage-primary-introduction h3{
    font-size: 18px;
}

.usage-primary-introduction p{
    font-size: 16px;
}

.usage-secondary-introduction{
    width: 70%;
    margin: auto;
}

/*観戦情報を探す*/
.usage-secondary-introduction p{
    font-size: 16px;
}

.detail-usage-nav a{
    height: 200px;
}

.detail-usage-nav-title p{
font-size: 18px;
}
detail-usage-nav-discription p{
    font-size: 16px;
}
}
</style>
