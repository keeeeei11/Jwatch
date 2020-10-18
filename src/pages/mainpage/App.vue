<template>
  <div id="app">
        <div class="wrap">
    <header>
        <div class="header-contents">
            <div class="header-contents-left">
                <div class="header-left-shortcut">
                    <div class="header-title">
                        <a href="https://jwatch-48c7e.web.app/mainpage/mainpage.html">
                            <h1>Jwatch</h1>
                        </a>
                    </div>
                    <div class="header-username" id="header_username">
                        <p v-if="!isAnonymous">こんにちは <span id="visitor"></span> さん！</p>
                        <p v-else>こんにちは 匿名ログイン さん！</p>
                    </div>
                </div>
            </div>
            <div class="header-contents-right">
                <div class="header-shortcut">
                   <div class="header-menu">
                        <a href="https://jwatch-8411c.web.app/usage">詳しい使い方</a>
                        <a href="https://jwatch-48c7e.web.app/searchinformation/searchinformation.html">観戦情報を探す</a>
                        <a href="https://jwatch-48c7e.web.app/posting/posting.html">観戦情報を投稿する</a>
                        <a href="https://jwatch-48c7e.web.app/answerreception/answerreception.html">回答受付中の質問</a>
                        <a href="https://jwatch-48c7e.web.app/popular/popular.html">人気の投稿</a>
                    </div>
                    <!-- ログインしていない時 -->
                    <div class="header-login" id="header_login">
                        <a href="https://jwatch-48c7e.web.app/login/login.html">
                            <i class="fas fa-door-open">
                                <p>Login</p>
                            </i>
                        </a>
                    </div>
                    <!-- ログインしている時 -->
                    <div class="header-mypage" id="header_mypage">
                        <a href="https://jwatch-48c7e.web.app/mypage/mypage.html">
                            <i class="fas fa-user-edit">
                                <p>Mypage</p>
                            </i>
                        </a>
                    </div>
                    <div class="humburgar">
                        <div class="menu-bar">
                            <i class="fas fa-bars" id="show">
                            <p>menu</p>
                            </i>
                        </div>
                        <div id="cover"></div>
                        <div class="menu-content" id="menu">
                            <i class="fa fa-times" id="hide">
                                <p>close</p>
                            </i>
                            <ul>
                                <li><a href="https://jwatch-48c7e.web.app/usage/usage.html">詳しい使い方</a></li>
                                <li><a href="https://jwatch-48c7e.web.app/searchinformation/searchinformation.html">観戦情報を探す</a></li>
                                <li><a href="https://jwatch-48c7e.web.app/posting/posting.html">観戦情報を投稿する</a></li>
                                <li><a href="https://jwatch-48c7e.web.app/answerreception/answerreception.html">回答受付中の質問</a></li>
                                <li><a href="https://jwatch-48c7e.web.app/popular/popular.html">人気の投稿</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
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


    <!--以下フッター-->
    <footer>
        <div class="footer-contants">
            <div class="footer-title">
                <h3>Jwatch</h3>
                <p>〜全ての人にサッカー観戦の楽しみを〜</p>
            </div>
            <div class="link">
                <a href="https://jwatch-48c7e.web.app/inquiry/inquiry.html">ご要望＆ご意見はこちら</a><br>
                <a href="https://jwatch-48c7e.web.app/question/question.html">Q&A</a><br>
                <a href="https://jwatch-48c7e.web.app/introduction/introduction.html">About 管理人</a>
            </div>
            <div class="sns">
                <div class="icon-title">
                    <p>share</p>
                </div>
                <div class="icon-img">
                    <div class="icon-top">
                        <div class="twitter">
                            <a href="https://twitter.com/intent/tweet?url=https://jwatch-8411c.web.app/&text=Jwatch Jリーグのスタジアム観戦情報を投稿＆閲覧できるサイト&hashtags=Jwatch&hashtags=Jリーグ" target="_blank" rel="nofollow noopener noreferrer">
                            <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div class="line">
                            <a href="https://social-plugins.line.me/lineit/share?url=https://jwatch-8411c.web.app/" target="_blank" rel="nofollow noopener noreferrer">
                            <i class="fab fa-line"></i>
                            </a>
                        </div>
                    </div>
                    <div class="icon-bottom">
                        <div class="facebook">
                            <a href="http://facebook.com/share.php?u=https://jwatch-8411c.web.app/" target="_blank" rel="nofollow noopener noreferrer">
                            <i class="fab fa-facebook-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  methods:{

  }
}
</script>

<style>
body{
    font-family:"Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic Pro", Arial, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.wrap{
    overflow: hidden;
}
/*以下ヘッダー*/
header{
    width: 100%;
    position: fixed;
    top:0;
    background-color:white;
    border-bottom: 1px solid #efefef;
    z-index: 2;
}
.header-contents{
    display: flex;
    margin: auto 50px;
    overflow-x: hidden;
}

.header-left-shortcut{
    display: flex;
}
/*ヘッダーのタイトル*/
.header-title{
    margin-left: 2%;
    margin-right: 5%;
}
.header-title a{
    text-decoration: none;
}
.header-title h1{
    color:black;
    font-weight: normal;
}
/* ログイン時のユーザー名 */
.header-username{
    width: 230px;
    margin: 0 10px;
    font-size: 14px;
    padding-top: 25px;
}

.header-contents-right{
    margin: 0 0 0 auto;
}
/*ヘッダーのリンク*/
.header-shortcut{
    display: flex;
}

.header-menu{
    margin-top: 35px;
    margin-right: 0px;
}

.header-menu a{
    color: rgb(28.8%, 29.6%, 28.8%);
    font-size: 14px;
    margin-left: 20px;
    position: relative;
    display: inline-block;
    text-decoration: none;

}
.header-menu a::after{
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform .3s;
}
.header-menu a:hover::after{
    transform: scale(1,1);

}
/*ヘッダーのログインボタン*/

.header-login{
    margin: 25px 10px 0px 20px;
    text-align: center;
}

.header-login a{
    text-decoration: none;
    color:rgb(28.8%, 29.6%, 28.8%);
    transition:color 0.4s linear;
}

.header-login a:hover{
    color: gray;
    transition:0.4s;
}
.header-login i{
    font-size: 36px;
    margin: 0;
}
.header-login p{
    font-size: 12px;
    font-weight: bold;
    /* aタグとpタグの間の空白を適切に調整 */
    line-height: 0.1em;
}

/* マイページ */
.header-mypage{
    margin: 25px 10px 0px 20px;
    text-align: center;
}

.header-mypage a{
    text-decoration: none;
    color:rgb(28.8%, 29.6%, 28.8%);
    transition:color 0.4s linear;
}

.header-mypage a:hover{
    color: gray;
    transition:0.4s;
}
.header-mypage i{
    font-size: 36px;
    padding-left: 10px;
}
.header-mypage p{
    font-size: 12px;
    font-weight: bold;
    /* aタグとpタグの間の空白を適切に調整 */
    line-height: 0.1em;
}

/* ハンバーガーメニュー(980px以上は非表示) */

.humburgar{
    display: none;
}

#show {
    font-size: 40px;
    cursor: pointer;
    margin-left: 10px;
    color: #484B49;
}

#show {
    font-size: 36px;
    padding-left: 10px;
}

#show p{
    font-size: 12px;
    margin: 0;
    padding-top: 5px;

}

#cover {
    background: #ffffff;
    opacity: 0;
    width: 100vh;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
}

#menu {
    position: absolute;
    top: 0;
    right: -100%;
    color: #ffffff;
    background: rgba(88, 88, 88, 0.9);
    padding: 8px;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    z-index: 2;
    transition: 0.4s;
}

#menu ul {
    margin: 90px 5px 0px 5px;
    padding: 10px;
}

#menu li {
    padding: 20px 0px;
    text-align: center;
    list-style: none;
}

#menu a {
    color: #efefef;
    font-size: 21px;
    text-decoration: none;
    line-height: 2.5em;
}

#hide {
    float: right;
    font-size: 36px;
    margin: 30px 30px 0 30px;
}

.menu-content p {
    font-size: 12px;
    padding: 0;
    margin: 0;
}

body.menu-open {
    overflow-y: hidden;
}
body.menu-open #cover{
    display: block;
}

body.menu-open #menu{
    right: 0;
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
/*以下フッター*/

footer{
    background-color:#f2f2f2;
    border-top: 1.5px solid #efefef;
    width: 100%;
    height: 100%;
}
.footer-contants{
    padding: 50px 60px;
    display: flex;
    justify-content: space-between;
}
.footer-title{
    height: 150px;
    padding: 0;
    margin: 0;
}

.footer-title h3{
    font-size: 36px;
}

.footer-title p{
    font-size: 16px;
}

.link{
    width: 250px;
    margin-left: 30%;
}

.link a{
    color: rgb(28.8%, 29.6%, 28.8%);
    font-size: 16px;
    margin-left: 20px;
    margin-bottom: 40px;
    position: relative;
    display: inline-block;
    text-decoration: none;

}
.link a::after{
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
.link a:hover::after{
    transform: scale(1,1);
}

/*以下SNS連携*/

.sns{
    display: flex;
    margin-bottom: 10px;
    margin-left: 10%;
}

.sns a{
    display: flex;
    margin: 0px 10px;
    color: rgb(28.8%, 29.6%, 28.8%);
    text-decoration: none;
    padding: 0 10px;
    transition:color 0.4s linear;
}

.sns a:hover{
    color: gray;
    transition: 0.4s;
}

.sns i {
    font-size: 26px;
    padding-bottom: 20px;
}

.icon-title{
    margin-right: 10px;
}

.icon-title p{
    color: #484b48;
    font-size: 16px;
    margin-block-start: 0em;
}

.icon-img{
    display: block;
}

/* 公式ガイドラインで決められた色を使用すること(白黒はNG) */
.fa-twitter{
    color: #00A1F9;
}

.fa-line{
    color: #06B900;
}

.fa-facebook-square{
    color: #1A78F2;
}
@media (max-width:959px)
{
    /* ヘッダー */
    .header-menu{
        display: none;
    }

    .header-login{
        margin-top: 19px;
    }
    .header-mypage{
        margin-top: 19px;
    }

    .header-username{
        padding: 0em;
    }

    .header-left-shortcut{
        display: block;
    }

    .humburgar{
        display: block;
    }

    .menu-bar {
        display: block;
        margin-right: 10px;
    }

    #show{
        font-size: 36px;
        margin-top: 20px;
        cursor: pointer;
    }

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

    /* フッター */
    .footer-contants{
        display: block;
    }

    .link{
        margin-left: 0em;
    }
    .link a{
    margin-left:0;
    }

    .sns{
        margin-left: 0em;
    }

    .sns{
        padding: 0em;
    }
    .icon-img{
        display: flex;
    }

}

@media (max-width:559px)
{
/* ヘッダー */
.header-contents{
    margin: auto 20px;
}

#menu a {
    font-size: 18px;
}

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

/* フッター */
.footer-contants{
    padding: 20px 30px;
}
}
</style>
