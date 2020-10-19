<template>
<header>
  <div class="header-contents">
      <div class="header-contents-left">
        <div class="header-left-shortcut">
            <div class="header-title">
                <a href="https://jwatch-8411c.web.app/mainpage.html">
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
          <div class="header-right-shortcut">
              <div class="header-menu">
                <a href="https://jwatch-8411c.web.app/usage.html">詳しい使い方</a>
                <a href="https://jwatch-8411c.web.app/searchinformation.html">観戦情報を探す</a>
                <a href="https://jwatch-8411c.web.app/posting.html">観戦情報を投稿する</a>
                <a href="https://jwatch-8411c.web.app/answerreception.html">回答受付中の質問</a>
                <a href="https://jwatch-8411c.web.app/popular.html">人気の投稿</a>
              </div>
            <!-- ログインしていない時 -->
            <!-- <div class="header-login" id="header_login">
                <a href="https://jwatch-8411c.web.app/login.html">
                    <i class="fas fa-door-open">
                        <p>Login</p>
                    </i>
                </a>
            </div> -->
            <!-- ログインしている時 -->
            <div class="header-mypage" id="header_mypage">
                <a href="https://jwatch-8411c.web.app/mypage.html">
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
                            <li><a href="https://jwatch-8411c.web.app/usage.html">詳しい使い方</a></li>
                            <li><a href="https://jwatch-8411c.web.app/searchinformation.html">観戦情報を探す</a></li>
                            <li><a href="https://jwatch-8411c.web.app/posting.html">観戦情報を投稿する</a></li>
                            <li><a href="https://jwatch-8411c.web.app/answerreception.html">回答受付中の質問</a></li>
                            <li><a href="https://jwatch-8411c.web.app/popular.html">人気の投稿</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </header>
</template>

<script>

export default {
  name:'Jheader',
  data(){
    return {

    }

  },
  components:{

  },
  methods:{

  }
};
</script>
<style>
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
  margin: auto 30px;
  overflow-x: hidden;
}

.header-left-shortcut{
  display: flex;
  margin: 0 auto 0 0;
}
/*ヘッダーのタイトル*/
.header-title{
  margin-left: 2%;
  margin-right: 10px;
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
  width: 200px;
  margin: 0 10px;
  font-size: 14px;
  padding-top: 25px;
}

.header-contents-right{
  margin: 0 0 0 auto;
}
/*ヘッダーのリンク*/
.header-right-shortcut{
  display: flex;
}

.header-menu{
  margin-top: 35px;
}

.header-menu a{
  color: rgb(28.8%, 29.6%, 28.8%);
  margin-right: 30px;
  font-size: 14px;
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
  margin: 25px 10px 0px 0px;
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

/* タブレット対応 */
@media (max-width:1150px)
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
}
/* スマホ対応 */
@media (max-width:559px)
{
    /* ヘッダー */
    .header-contents{
        margin: auto 20px;
    }
    
    .header-left-shortcut{
      display: block;
    }

    .header-username{
      padding: 0;
    }

    #menu a {
        font-size: 18px;
    }

}
</style>