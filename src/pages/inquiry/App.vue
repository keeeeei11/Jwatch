<template>
<div id="app">
  <div class="wrap">
    <!--以下へッター-->
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
                        <!-- <p v-if="!isAnonymous">こんにちは <span id="visitor"></span> さん！</p>
                        <p v-else>こんにちは 匿名ログイン さん！</p> -->
                    </div>
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
                                <p class="">close</p>
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
                <!-- 謎にオブジェクト表示されるの修正する -->
                <div id="body_box">
                    <textarea class="inquiry-text-form" placeholder="400字以内で入力してください" maxlength="400"></textarea><br>
                        <!-- <div class="count-character"> -->
                            <!-- <p>残り{{ 400 - character.length }}字です</p>
                        </div> -->
                </div>
                <p id="execute">送信する</p>
            </form>
            <section id="reconfirmation" class="hidden">
                <p>送信してもよろしいですか？</p>
                <p id="cancel">戻る</p>
                <form action="">
                    <input type="submit" class="post-btn" id="post_btn" value="送信する">
                </form>
            </section>
            <div id="reconfirmation_cover" class="hidden"></div>
        </div>
        <form action="#" method="POST" class="name"></form>
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
#execute{
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

#execute:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

/* 再確認のホップアップ */
#reconfirmation{
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

#reconfirmation.hidden {
    display: none;
}

#reconfirmation p{
    font-size: 18px;
}

#cancel{
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

#cancel:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}


#post_btn{
    font-size: 18px;
    border: none;
    padding: 10px 10px 35px;
    text-align: center;
    width: 370px;
    outline: none;
    background:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
}

#post_btn:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}


#reconfirmation_cover{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: gainsboro;
    z-index: 2;
    opacity: 0.8;
}

#reconfirmation_cover.hidden{
    transition: 0.4s;
    display: none;
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
    /* float: right; */
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
#execute{
    font-size: 16px;
}
/* フッター */
.footer-contants{
    padding: 20px 30px;
  }
}
</style>