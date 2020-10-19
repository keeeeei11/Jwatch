<template>
  <div id="app">
        <div class="wrap">
      <Jheader></Jheader>
    <!-- 以下メイン-->
    <main>
        <!--サイト名-->
        <div class="introduction" id="introduction">
            <h1>Jwatch</h1>
            <p>〜全ての人にサッカー観戦の楽しみを〜</p>
        </div>
        <!--メッセージ-->
        <div class="about" id="about">
            <div class="about-title" id="about_title">
                <h1>About</h1>
            </div>
            <div class="about-discriptions" id="about-discriptions">
                <div class="first-about-discription" id="first-about-discription">
                    <p class="discription01">JwatchはJリーグスタジアムの観戦情報を</p>
                    <p class="discription02">投稿＆閲覧できるサイトです。</p>
                </div>
                 <div class="second-about-discription" id="second-about-discription">
                    <p class="discription03">事前にリアルなスタジアム情報を</p>
                    <p class="discription04">お届けすることで快適なスタジアム観戦をサポートします。</p>
                </div>
                 <div class="third-about-discription" id="third-about-discription">
                    <p class="discription05">また、自分の応援するチームのスタジアム情報を投稿することで</p>
                    <p class="discription06">応援するチームの良さを全国の人に伝えることができます。</p>
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
                    <!--観戦情報を探す-->
                    <div class="usage-search">
                        <a href="https://jwatch-48c7e.web.app/searchinformation/searchinformation.html">
                            <h3>観戦情報を探す</h3>
                            <img src="../../assets/1843892_s.jpg" alt="パソコンと虫眼鏡の画像。情報を探すイメージ。">
                        </a>
                        <p>観戦予定のスタジアム/カテゴリーを選択して観戦情報を探してみましょう！</p>
                    </div>
                    <!--観戦情報を投稿する-->
                    <div class="usage-post">
                        <a href="https://jwatch-48c7e.web.app/posting/posting.html">
                            <h3>観戦情報を投稿する</h3>
                            <img src="../../assets/812491_s.jpg" alt="女性がスマートフォンで観戦情報を投稿している画像。">
                        </a>
                        <p>試合観戦の感想やワンポイントアドバイス等を投稿してみましょう！</p>
                    </div>
                    <!-- 情報をリクエストする -->
                    <div class="usage-asking">
                        <a href="https://jwatch-48c7e.web.app/request/request.html">
                            <h3>情報をリクエストする</h3>
                            <img src="../../assets/3063794_s.jpg" alt="自分の求めている情報が見つからず悩んでいる女性の画像。">
                        </a>
                        <p>求めている情報が記載されていない時は情報を尋ねることが出来ます。</p>
                    </div>
                </div>
                <div class="usage-secondary-introduction">
                    <p>※観戦情報の投稿と情報のリクエストは <a href="https://jwatch-48c7e.web.app/login/login.html">ログイン</a> が必要となります。</p>
                </div>
            </div>
            <div class="detail-usage-nav">
                <a href="https://jwatch-48c7e.web.app/usage/usage.html">
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
            <div id="scroll_fadein" class="scroll-fadein arrow"></div>
        </div>
    </main>
  <Jfooter></Jfooter>

</div>
  </div>
</template>

<script>
import Jheader from "../../components/Jheader.vue"
import Jfooter from "../../components/Jfooter.vue"
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    Jheader,
    Jfooter,
  },
  methods:{

  }
};
</script>

<style>
body{
    font-family:"Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic Pro", Arial, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.wrap{
    overflow: hidden;
}

/*以下メイン*/

main{
    color: rgb(28.8%, 29.6%, 28.8%);
    width: 100vw;
}

.introduction{
    width: 100vw;
    height: auto;
    min-height: 50vh;
    margin-top: 280px;
    margin-left: 20%;
}

.introduction h1{
    font-size: 64px;
    font-weight: bold;
}

.introduction p{
    font-size: 28px;
}

/*メッセージ*/
.about{
    display: flex;
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
    margin:50px 0;
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
}
/* 指定しないと高さが両サイドと異なるので記述 */
.usage-post img{
    height: 255px;
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


/* ページ上部に戻るボタン */
.scroll-fadein{
    transition: opacity 1s;
    visibility: hidden;
    opacity: 0;
}

.scroll-fadein.is-fadein{
    visibility: visible;
    opacity: 1;
}

.arrow{
    cursor: pointer;
    position: fixed;
    right: 45px;
    bottom: 45px;
    color: #000000;
    background-color: #c0c0c0e1;
    border-radius: 32px;
    padding:30px;
    transition: all 0.2s ease-in-out;
}

.arrow:hover{
    opacity: 0.8;
    bottom:60px;
}

.arrow:before{
    content:"";
    width: 12px;
    height: 12px;
    border-top: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    transform: rotate(-45deg);
    position: absolute;
    left: 22px;
    top: 17px;
}
.arrow:after{
    content:"";
    width: 12px;
    height: 12px;
    border-top: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    transform: rotate(-45deg);
    position: absolute;
    left: 22px;
    top: 31px;
}

@media (max-width:959px)
{
    /* main */
    .introduction{
        margin-left: 10%;
    }

    .about{
        display: block;
        text-align: center;
        margin: auto;
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

    .scroll-fadein{
        display: none;
    }
}

@media (max-width:559px){
    /* メイン */
    .introduction{
        margin:280px auto 0px;
        text-align: center;
    }

    .introduction h1{
    font-size: 48px;
    }

    .introduction p{
        font-size: 18px;
    }

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
