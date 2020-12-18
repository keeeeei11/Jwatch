<template>
  <div id = "app">
    <div class = "wrap">
      <Jheader
        :isAnonymous = "isAnonymous"
        :isLogin     = "isLogin"
        :visitorName = "visitorName"/>
      <main>
        <PageTitle
          description = "〜全ての人にサッカー観戦の楽しみを〜"
          title       = "Jwatch"/>
        <div class = "about">
          <div class = "about-title">
            <h1>About</h1>
          </div>
          <div class = "about-discriptions">
            <div class = "first-about-discription">
              <p>JwatchはJリーグスタジアムの観戦情報を</p>
              <p>投稿＆閲覧できるサイトです。</p>
            </div>
            <div class = "second-about-discription">
              <p>事前にリアルなスタジアム情報を</p>
              <p>お届けすることで快適なスタジアム観戦をサポートします。</p>
            </div>
            <div class = "third-about-discription">
              <p>また、自分の応援するチームのスタジアム情報を投稿することで</p>
              <p>応援するチームの良さを全国の人に伝えることができます。</p>
            </div>
          </div>
        </div>
        <div class = "usage">
          <div class = "usage-title">
            <h1>How to use</h1>
          </div>
          <div class = "usage-introduction">
            <div class = "usage-primary-introduction">
              <div class = "usage-search">
                <a href = "https://jwatch-8411c.web.app/searchinformation/index.html">
                  <h3>観戦情報を探す</h3>
                  <img
                    src     = "../../assets/1843892_s.jpg"
                    alt     = "パソコンと虫眼鏡の画像。情報を探すイメージ。"
                    loading = "lazy"/>
                </a>
                <p>観戦予定のスタジアム/カテゴリーを選択して観戦情報を探してみましょう！</p>
              </div>
              <div class = "usage-post">
                <a href = "https://jwatch-8411c.web.app/posting/index.html">
                  <h3>観戦情報を投稿する</h3>
                  <img
                    src     = "../../assets/student-849825_640.jpg"
                    alt     = "女性がスマートフォンで観戦情報を投稿している画像。"
                    loading = "lazy"/>
                </a>
                <p>試合観戦の感想やワンポイントアドバイス等を投稿してみましょう！</p>
              </div>
            </div>
            <div class = "usage-secondary-introduction">
              <p>
                ※観戦情報の投稿は
                <a href = "https://jwatch-8411c.web.app/login/index.html">ログイン</a>
                が必要となります。
              </p>
            </div>
          </div>
          <Induction
            description = "使い方のより詳しい説明はこちら"
            title       = "Detailed discription"
            url         = "https://jwatch-8411c.web.app/usage/index.html"/>
        </div>
        <MoveTopBtn/>
      </main>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import Induction    from "../../components/Induction";
import Jfooter      from "../../components/Jfooter";
import Jheader      from "../../components/Jheader";
import MoveTopBtn   from "../../components/MoveTopBtn";
import myFirstMixin from "../../mixin/myFirstMixin";
import PageTitle    from "../../components/PageTitle";
export default {
  components: {
    Induction,
    Jfooter,
    Jheader,
    MoveTopBtn,
    PageTitle
  },
  mixins: [myFirstMixin],
};
</script>

<style lang = "scss" scoped>

.wrap {
  overflow: hidden;
}

main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

.about {
  display: flex;
  margin-top: 100px;
  margin-left: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
}

.about-title {
  text-align: center;
}

.about-discriptions {
  margin: 80px auto 0;
  text-align: left;
  p{
    font-size: 18px;
    line-height: 2.5em;
  }
}

.usage {
  margin-top: 50px;
  text-align: center;
}

.usage-title {
  margin-left: 15%;
  text-align: left;
}

.usage-primary-introduction {
  display: flex;
  justify-content: space-around;
  a{
    text-decoration: none;
    color: rgb(28.8%, 29.6%, 28.8%);
    transition: color 0.4s linear;
  }
  a:hover{
    color: gray;
    transition: 0.4s;
  }

  h3{
    font-size: 21px;
  }

  img{
    height: 300px;
  }

  p{
    font-size: 18px;
    width: 70%;
    margin: 10px auto;
  }
}

.usage-secondary-introduction {
  p{
    font-size: 18px;
  }
  a{
    text-decoration: none;
    color: rgb(28.8%, 29.6%, 28.8%);
    position: relative;
    z-index: 1;
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

@media (max-width: 959px) {
  .about {
    display: block;
    text-align: center;
    margin: 100px auto auto;
  }

  .usage {
    text-align: center;
  }

  .usage-title {
    margin: auto;
    text-align: center;
  }

  .usage-primary-introduction {
    display: block;
    img {
      width: 60%;
      height: auto;
    }
  }
}

@media (max-width: 559px) {
  .about {
    padding: 50px 40px;
  }

  .about-titie h1 {
    font-size: 28px;
  }

  .about-discriptions {
    margin: 40px auto 0;
    p{
      font-size: 16px;
    }
  }

  .usage-title h1 {
    font-size: 28px;
  }

  .usage-primary-introduction{
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
    img {
      width: 80%;
      height: auto;
    }
  }

  .usage-secondary-introduction {
    width: 70%;
    margin: auto;
    p {
      font-size: 16px;
    }
  }
}
</style>
