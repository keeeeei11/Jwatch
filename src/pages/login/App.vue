<template>
<div id="app">
  <div class="wrap">
    <header>
        <div class="header-contents">
            <div class="header-contents-left">
                <div class="header-title">
                    <a href="https://jwatch-48c7e.web.app/mainpage/mainpage.html">
                        <h1>Jwatch</h1>
                    </a>
                </div>
            </div>
            <div class="header-contents-right">
                <div class="header-shortcut">
                    <div class="header-menu">
                        <a href="https://jwatch-48c7e.web.app/usage/usage.html">詳しい使い方</a>
                        <a href="https://jwatch-48c7e.web.app/searchinformation/searchinformation.html">観戦情報を探す</a>
                        <a href="https://jwatch-48c7e.web.app/posting/posting.html">観戦情報を投稿する</a>
                        <a href="https://jwatch-48c7e.web.app/answerreception/answerreception.html">回答受付中の質問</a>
                        <a href="https://jwatch-48c7e.web.app/popular/popular.html">人気の投稿</a>
                    </div>
                    <div class="header-login">
                        <a href="https://jwatch-48c7e.web.app/login/login.html">
                            <i class="fas fa-door-open">
                                <p>Login</p>
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
<!--メイン-->
<main>
        <div class="login-title">
            <h1>Login Page</h1>
            <p>観戦情報&こんな情報が欲しい！への投稿はログインが必要です。</p>
        </div>
        <div class="login-contents" id="login">
            <h2>ログイン方法を選択してください</h2>
            <div class="google-login login-btn">
                <a href="https://jwatch-48c7e.web.app/login/login-google.html">Googleアカウントでログイン</a>
            </div>
            <div class="twitter-login login-btn">
                <a href="https://jwatch-48c7e.web.app/login/login-twitter.html">Twitterアカウントでログイン</a>
            </div>
            <div class="email-login login-btn">
                <a href="https://jwatch-48c7e.web.app/login/login-email.html">メールアドレスでログイン</a>
            </div>
            <div class="easily-login login-btn">
                <a href="https://jwatch-48c7e.web.app/login/login-anonymous.html">簡単(匿名)ログイン</a>
            </div>
            <p>※匿名ログインはページを離れると投稿が消去されるように設定しております。</p>
        </div>
</main>
<footer>
    <div class="footer-contents">
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
                        <a href="https://twitter.com/intent/tweet?url=https://jwatch-48c7e.web.app/&text=Jwatch Jリーグのスタジアム観戦情報を投稿＆閲覧できるサイト&hashtags=Jwatch&hashtags=Jリーグ" target="_blank" rel="nofollow noopener noreferrer">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="line">
                        <a href="https://social-plugins.line.me/lineit/share?url=https://jwatch-48c7e.web.app/" target="_blank" rel="nofollow noopener noreferrer">
                        <i class="fab fa-line"></i>
                        </a>
                    </div>
                </div>
                <div class="icon-bottom">
                    <div class="facebook">
                        <a href="http://facebook.com/share.php?u=https://jwatch-48c7e.web.app/" target="_blank" rel="nofollow noopener noreferrer">
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

.header-contents-right{
    margin: 0 0 0 auto;
}
/*ヘッダーのリンク*/
.header-shortcut{
    display: flex;
}

.header-menu{
    margin-top: 35px;
    margin-right: 10px;
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

#show i {
    font-size: 36px;
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

.login-btn a{
    padding: 20px 50px;
    font-size: 18px;
    border-radius: 10px;
    color: #484b48;
    text-decoration: none;
    border:2px solid #484b48;
    background-color: #fff;
    transition:background-color 0.4s linear;
}

.login-btn a:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

.login-contents p{
    font-size: 18px;
}

/*以下フッター*/
footer{
    background-color:#f2f2f2;
    border-top: 1.5px solid #efefef;
    width: 100%;
    height: 100%;
}
.footer-contents{
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
    font-weight: 700;
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
/* タブレット */
@media (max-width:959px )
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
        margin-right:10px;
    }

    #show{
        font-size: 36px;
        margin-top: 20px;
        cursor: pointer;
    }

    /* メイン */
    /* タイトル */
    .login-title{
        margin-left: 10%;
        margin-top: 250px;
    }

    .login-contents{
        margin-left: 0px;
    }

    /* フッター */
    .footer-contents{
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
.login-contents{
    padding:50px 40px;
}
.login-title p{
    font-size: 18px;
}

.login-contents h2{
    font-size: 18px;
}

.login-contents a{
    width: 250px;
    font-size: 16px;
}

.login-contents p{
    font-size: 16px;
}
/* フッター */
.footer-contents{
padding: 20px 30px;
}
}
</style>