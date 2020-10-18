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
                            <p >こんにちは <span class="visitor"></span> さん！</p>
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
        <div class="mypage">
            <div class="mypage-title">
                <p><span class="user-name"></span> さんのマイページ</p>
            </div>
            <div class="mypage-contents">
                <div class="mypage-past-post">
                    <div class="mypage-past-post-title">
                        <h2>過去の投稿</h2>
                        <a href="#">もっと見る</a>
                    </div>
                    <div class="mypage-past-post-contents">
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
                <div class="mypage-past-request">
                    <div class="mypage-past-request-title">
                        <h2>過去の質問</h2>
                        <a href="#">もっと見る</a>
                        </div>
                    <div class="mypage-past-request-contents">
                        <div class="request-example-contents">
                            <div class="request-basic-information">
                                <div class="request-basic-information-top">
                                    <div class="request-name">
                                        <p>〇〇さん</p>
                                    </div>
                                    <div class="request-warning">
                                    </div>
                                    <div class="request-date">
                                        <p>2000/1/1</p>
                                    </div>
                                </div>
                                <div class="request-basic-information-bottom">
                                    <div class="request-stadium">
                                        <p>スタジアム</p>
                                    </div>
                                    <div class="request-category">
                                        <p>駐車場</p>
                                    </div>
                                </div>
                            </div>
                            <div class="request-main-content">
                                <div class="request-title">
                                    <p>駐車場からスムーズに出るにはどうしたらよいでしょうか？</p>
                                </div>
                                <div class="request-text">
                                    <p>☆☆スタジアムの駐車場から出場するのに30分程度かかるとのことですが、試合終了後すぐに駐車場から出られる方法はありますか？</p>
                                </div>
                                <div class="request-img">
                                    <img src="" alt="">
                                    <img src="" alt="">
                                    <img src="" alt="">
                                </div>
                            </div>
                            <div class="request-evaluation">
                                <div class="request-evaluation-contents">
                                    <div class="answering">
                                        <p>回答する</p>
                                    </div>
                                    <div class="reporting">
                                        <p>通報する</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="logout">
                    <p id="logout_execute">ログアウトする</p>
                </div>
                <div class="logout-popup">
                    <section id="logout_reconfirmation" class="hidden">
                        <p>ログアウトしてもよろしいですか？</p>
                        <p id="logout_cancel">戻る</p>
                        <a href="https://jwatch-48c7e.web.app/logout/logout.html" id="logout_btn">ログアウトする</a>
                    </section>
                </div>
                <div class="delete-account">
                    <p id="delete_execute">アカウント削除する</p>
                </div>
                <div class="delete-popup">
                    <section id="delete_reconfirmation" class="hidden">
                        <p>アカウントを削除してもよろしいですか？</p>
                        <p>一度削除すると元に戻せません</p>
                        <p id="delete_cancel">戻る</p>
                        <a href="https://jwatch-48c7e.web.app/delete-account/delete-account.html" id="delete_btn">削除する</a>
                    </section>
                </div>
            <div id="reconfirmation_cover" class="hidden"></div>
                    <!-- ページトップに戻るボタン -->
                <div id="scroll_fadein" class="scroll-fadein arrow"></div>
            </div>
        </div>
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

.header-left-shortcut{
    display: flex;
}
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
    transition: transform 0.3s;
}
.header-menu a:hover::after{
    transform: scale(1,1);
}

.header-contents-left{
    display: flex;
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
.mypage-title{
    text-align: center;
    margin-top: 250px;
    margin-bottom: 50px;
}

.mypage-title p{
    font-size: 32px;
}

.mypage-contents{
    text-align: center;
}

.mypage-contents h2{
    margin-left: 30px;
    font-size: 21px;
}


.mypage-contents a{
    text-decoration: none;
    color: rgb(28.8%, 29.6%, 28.8%);
}

/* 過去の投稿 */
.mypage-past-post-title{
    display: flex;
}

.mypage-past-post-title a{
    padding-top: 20px;
    padding-left: 20px;
}

/*投稿例*/
.post-example-contents{
    width: 70%;
    margin:30px auto;
    padding: 20px 40px 20px;
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

.post-img img{
    height: auto;
    margin: 30px auto 20px;
    width:30%;
    /* max-width: 80%; */
}

/* 過去の質問 */
.mypage-past-request-title{
    display: flex;
}

.mypage-past-request-title a{
    padding-top: 20px;
    padding-left: 20px;
}

/* リクエスト例 */
.request-example-contents{
    width: 70%;
    margin:30px auto;
    padding: 20px 40px 20px;
    border: 2px solid #979797;
    border-radius: 10px;
  }

  .request-basic-information{
  display: block;
  }

  .request-basic-information-top{
  display: flex;
  height: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
  }

  .request-basic-information-bottom{
  display: flex;
  justify-content: space-around;
  }

  .request-name{
    font-size: 21px;
  }

  .request-stadium{
    font-size: 18px;
  }

  .request-category{
    font-size: 18px;
  }

  .request-date{
    font-size: 18px;
  }

  .request-title p{
    text-align: center;
    font-size: 21px;
  }

  .request-text{
    margin: 25px 0;
    padding: 0 30px;
    text-align: left;
  }

  .request-text p{
    font-size: 18px;
  }

  .request-evaluation p{
    margin-block-start: 0em;
    margin-block-end: 0em;
    font-size: 16px;
  }

  .request-evaluation-contents{
    display: flex;
    justify-content:center;
  }

  .answering, .reporting{
    text-align:center;
    border: 1px solid #797979;
    border-radius: 10px;
    padding:5px 10px;
    margin: 0 10px;
  }
/* ログアウト */
#logout_execute{
    font-size: 16px;
    width:250px;
    text-align: center;
    margin: 70px auto;
    padding: 20px 45px;
    color: #484b48;
    text-decoration: none;
    border:2px solid #484b48;
    background-color: #fff;
    border-radius: 10px;
    transition: background-color 0.3s linear;
}

#logout_execute:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;
}

/* アカウント削除 */
#delete_execute{
    font-size: 16px;
    width:250px;
    text-align: center;
    margin: 70px auto;
}

#delete_execute {
    padding: 20px 30px;
    color: #484b48;
    text-decoration: none;
    border:2px solid #484b48;
    background-color: #fff;
    border-radius: 10px;
    transition: background-color 0.4s linear;
}

#delete_execute:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

/* 再確認のホップアップ */

.logout-popup, .delete-popup{
    font-size: 18px;
}

#logout_reconfirmation, #delete_reconfirmation{
    opacity: 1;
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

#logout_reconfirmation.hidden, #delete_reconfirmation.hidden {
    display: none;
}

#logout_cancel, #delete_cancel{
    width: 350px;
    display: block;
    text-decoration: none;
    text-align: center;
    padding:10px 0px;
    margin: 28px auto 30px;
    background-color:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
    transition: background-color 0.4s linear;
}

#logout_cancel:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

#delete_cancel:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

#logout_btn, #delete_btn{
    width: 350px;
    display: block;
    text-decoration: none;
    text-align: center;
    padding:10px 0px;
    margin: 28px auto 30px;
    background:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
}

#logout_btn:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

#delete_btn:hover{
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
/*ページトップに戻るボタン*/
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
    right: 55px;
    bottom: 55px;
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

@media (max-width:959px ){
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
/* 自己紹介 */
textarea{
  margin: 0 10%;
  width: 80%;
}
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
/* 質問内容 */
.request-example-contents{
  width: 80%;
  margin: 10% auto;
}

.request-name{
  font-size: 18px;
  }

  .request-stadium{
  font-size: 16px;
  }

  .request-category{
  font-size: 16px;
  }

  .request-date{
  font-size: 16px;
  }

  /* スクロールボタン */
#scroll_fadein{
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

@media (max-width:559px ){
    /* ヘッダー */
.header-contents{
  margin: auto 10px;
}

#menu a {
  font-size: 18px;
}

/* メイン */
.mypage-title h1{
  font-size: 28px;
}

.mypage-contents h2{
  font-size: 18px;
}

/* 名前 */
.mypage-name-contents p{
  font-size: 18px;
}
/* 投稿内容 */
.post-example-contents{
  padding: 20px;
}

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

/* 質問内容 */

.request-example-contents{
  padding: 20px;
}
.request-title p{
  text-align: center;
  font-size: 18px;
}

.request-text{
  margin:10px 0;
  padding:0 10px;
}

.request-text p{
  font-size: 16px;
}

.request-basic-information-bottom{
  display: block;
}
.request-basic-information-bottom p{
  text-align: center;
}

.request-evaluation p{
  font-size: 14px;
}

/* 再確認のホップアップ */
.logout-popup, .delete-popup{
  font-size: 16px;
}

#logout_execute{
  font-size: 16px;
}

#delete_execute{
  font-size: 16px;
}

#logout_btn, #delete_btn{
  font-size: 16px;
  padding:10px 0;
  width:350px;
}
/* フッター */
.footer-contants{
  padding: 20px 30px;
}
}
</style>