<template>
  <header>
    <div class="header-contents">
      <div class="header-contents-left">
        <div class="header-left-shortcut">
          <div class="header-title">
            <a href="https://jwatch-8411c.web.app/mainpage/index.html">
              <h1>Jwatch</h1>
            </a>
          </div>
          <!-- ログイン時に名前を表示 -->
          <div class="header-username" v-if="isLogin">
            <p v-if="!isAnonymous">こんにちは {{ visitorName }} さん！</p>
            <p v-else>こんにちは 匿名 さん！</p>
          </div>
        </div>
      </div>
      <div class="header-contents-right">
        <div class="header-right-shortcut">
          <div class="header-menu">
            <a href="https://jwatch-8411c.web.app/usage/index.html">詳しい使い方</a>
            <a href="https://jwatch-8411c.web.app/searchinformation/index.html">観戦情報を探す</a>
            <a href="https://jwatch-8411c.web.app/posting/index.html">観戦情報を投稿する</a>
            <a href="https://jwatch-8411c.web.app/popular/index.html">人気の投稿</a>
          </div>
          <!-- 非ログイン時にログインページへのリンクを表示する -->
          <div class="header-login" v-if="!isLogin">
            <a href="https://jwatch-8411c.web.app/login/index.html">
              <i class="fas fa-door-open">
                <p>Login</p>
              </i>
            </a>
          </div>
          <!-- ログイン時にマイページへのリンクを表示する -->
          <div class="header-mypage" v-else>
            <a href="https://jwatch-8411c.web.app/mypage/index.html">
              <i class="fas fa-user-edit">
                <p>Mypage</p>
              </i>
            </a>
          </div>
          <div class="humburgar">
            <div class="menu-bar" @click="humburgarShow">
              <i class="fas fa-bars" id="show">
                <p>menu</p>
              </i>
            </div>
            <div class="menu-content" id="menu" v-if="humburgarMenu">
              <i class="fa fa-times" id="hide" @click="humburgarHide">
                <p>close</p>
              </i>
              <ul>
                <li>
                  <a href="https://jwatch-8411c.web.app/usage/index.html">詳しい使い方</a>
                </li>
                <li>
                  <a href="https://jwatch-8411c.web.app/searchinformation/index.html">観戦情報を探す</a>
                </li>
                <li>
                  <a href="https://jwatch-8411c.web.app/posting/index.html">観戦情報を投稿する</a>
                </li>
                <li>
                  <a href="https://jwatch-8411c.web.app/popular/index.html">人気の投稿</a>
                </li>
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
  // 文字を外部から受け取る(子要素)
  props: {
    visitorName: String,
    isLogin: Boolean,
    isAnonymous: Boolean,
  },
  data() {
    return {
      humburgarMenu: false,
    };
  },
  methods: {
    humburgarShow: function() {
      this.humburgarMenu = true;
    },
    humburgarHide: function() {
      this.humburgarMenu = false;
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  border-bottom: 1px solid #efefef;
  z-index: 2;
}

.header-contents {
  display: flex;
  margin: 0 30px;
  overflow-x: hidden;
}

.header-left-shortcut {
  display: flex;
  margin: 0 auto 0 0;
}

.header-title {
  margin-left: 2%;
  margin-right: 10px;
  a {
    text-decoration: none;
  }
  h1 {
    color: black;
    font-weight: normal;
  }
}

.header-username {
  width: 300px;
  margin-left: 10px;
  font-size: 12px;
  padding-top: 25px;
}

.header-contents-right {
  margin: 0 0 0 auto;
}

.header-right-shortcut {
  display: flex;
}

.header-menu {
  margin-top: 35px;
  a {
    color: rgb(28.8%, 29.6%, 28.8%);
    margin-right: 30px;
    font-size: 14px;
    position: relative;
    display: inline-block;
    text-decoration: none;
  }
  a::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
  }
  a:hover::after {
    transform: scale(1, 1);
  }
}

.header-login {
  margin: 25px 10px 0px 0px;
  text-align: center;
  a {
    text-decoration: none;
    color: rgb(28.8%, 29.6%, 28.8%);
    transition: color 0.4s linear;
  }

  a:hover {
    color: gray;
    transition: 0.4s;
  }
  i {
    font-size: 36px;
    margin: 0;
  }
  p {
    font-size: 12px;
    font-weight: bold;
    line-height: 0.1em;
  }
}

.header-mypage {
  margin: 25px 10px 0px 0px;
  text-align: center;
  a{
    text-decoration: none;
    color: rgb(28.8%, 29.6%, 28.8%);
    transition: color 0.4s linear;
  }
  a:hover {
    color: gray;
    transition: 0.4s;
  }
  i{
    font-size: 36px;
  }
  p{
    font-size: 12px;
    font-weight: bold;
    line-height: 0.1em;
  }
}

/* ハンバーガーメニュー(980px以上は非表示) */
.humburgar {
  display: none;
}

#show {
  color: #484b49;
  font-size: 36px;
  padding-left: 10px;
  margin-left: 10px;
  cursor: pointer;
  p {
    font-size: 12px;
    margin: 0;
    padding-top: 5px;
  }
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
  display: block;
}

#menu {
  position: absolute;
  top: 0;
  color: #ffffff;
  background: rgba(88, 88, 88, 0.9);
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  z-index: 2;
  transition: 0.4s;
  right: 0;
  ul {
    margin: 90px 5px 0px 5px;
    padding: 10px;
  }
  li {
    padding: 20px 0px;
    text-align: center;
    list-style: none;
  }
  a {
    color: #efefef;
    font-size: 21px;
    text-decoration: none;
    line-height: 2.5em;
  }
}

#hide {
  float: right;
  font-size: 36px;
  margin: 30px 30px 0 30px;
  cursor: pointer;
}

.menu-content p {
  font-size: 12px;
  padding: 0;
  margin: 0;
}

@media (max-width: 1080px) {
  /* ヘッダー */
  .header-menu {
    display: none;
  }

  .header-login {
    margin-top: 19px;
  }

  .header-mypage {
    margin-top: 19px;
  }

  .humburgar {
    display: block;
  }

  .menu-bar {
    display: block;
    margin-right: 10px;
  }

  #show {
    font-size: 36px;
    margin-top: 20px;
    cursor: pointer;
  }
}

@media (max-width: 559px) {
  .header-contents {
    margin: auto 20px;
  }

  .header-left-shortcut {
    display: block;
  }

  .header-username {
    padding: 0;
  }

  .header-login i {
    font-size: 28px;
  }

  .header-mypage i {
    font-size: 28px;
  }

  #show {
    font-size: 28px;
  }

  #menu a {
    font-size: 18px;
  }
}
</style>
