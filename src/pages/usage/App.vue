<template>
  <div id = "app">
    <div class = "wrap">
      <Jheader
        :isAnonymous = "isAnonymous"
        :isLogin     = "isLogin"
        :visitorName = "visitorName"/>
      <main>
        <PageTitle
          description = "観戦情報の閲覧と投稿、情報の方法を記載しています"
          title       = "How to use"/>
        <UsageDescription
          titleEn           = "How to Search"
          titleJa           = "観戦情報の閲覧方法"
          descriptionFirst  = "①スタジアムを選択してください。"
          descriptionSecond = "②カテゴリーを選択してください。"
          supplement        = "※求めている情報が見つからない場合はその他のカテゴリーにある可能性もあります。"/>
        <Induction
          url         = "https://jwatch-8411c.web.app/searchinformation/index.html"
          title       = "Let’s search!"
          description = "観戦情報を探す！"/>
        <UsageDescription
          titleEn           = "How to post"
          titleJa           = "観戦情報の投稿方法"
          descriptionFirst  = "①観戦情報を投稿する！をクリックします"
          descriptionSecond = "②スタジアム名とカテゴリー,投稿したい内容を入力してください。"
          supplement        = "※スタジアムの快適な面だけでなく、不便なところも貴重な情報となります。"/>
        <div class = "post-example">
          <h3>投稿例</h3>
          <div class = "post-content">
            <div class = "post-basic-information">
              <div class = "post-basic-information-top">
                <div class = "post-name">
                  <p>〇〇さん</p>
                </div>
                <div class = "post-date">
                  <p>2000/1/1</p>
                </div>
              </div>
              <div class = "post-basic-information-bottom">
                <div class = "post-stadium">
                  <p>☆☆スタジアム</p>
                </div>
                <div class = "post-category">
                  <p>スタジアムグルメ</p>
                </div>
              </div>
            </div>
            <div class = "post-main-content">
              <div class = "post-title">
                <p>△△の唐揚げがとても美味しかったです</p>
              </div>
              <div class = "post-text">
                <p>
                  ここの唐揚げは出来たてを提供してくれます。また値段も低価格で観戦の際はいつも購入しています！是非購入してみてください！
                </p>
              </div>
            </div>
            <div class = "post-evaluation">
              <div class = "post-evaluation-contents">
                <div class = "good-count">
                  <p>いいね！ 6</p>
                </div>
                <div class = "reporting">
                  <p>通報する</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Induction
          description = "観戦情報を投稿する！"
          title       = "Let’s post!"
          url         = "https://jwatch-8411c.web.app/posting/index.html"/>
        <MoveTopBtn/>
      </main>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import Induction        from "../../components/Induction";
import Jfooter          from "../../components/Jfooter";
import Jheader          from "../../components/Jheader";
import MoveTopBtn       from "../../components/MoveTopBtn";
import FirebaseAvailable     from "../../mixin/FirebaseAvailable";
import PageTitle        from "../../components/PageTitle";
import UsageDescription from "../../components/UsageDescription";

export default {
  components: {
    Induction,
    Jfooter,
    Jheader,
    MoveTopBtn,
    PageTitle,
    UsageDescription
  },
  mixins: [FirebaseAvailable],
};
</script>

<style lang = "scss" scoped>
.wrap {
  overflow: hidden;
}

main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

.post-example h3 {
  font-size: 21px;
  text-align: center;
}

.post-content {
  width: 70%;
  margin: 30px auto;
  padding: 20px 40px 20px;
  border: 2px solid #979797;
  border-radius: 10px;
}

.post-basic-information {
  display: block;
}

.post-basic-information-top {
  display: flex;
  height: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
}

.post-basic-information-bottom {
  display: flex;
  justify-content: space-around;
}

.post-name {
  font-size: 21px;
}

.post-stadium {
  font-size: 18px;
}

.post-category {
  font-size: 18px;
}

.post-date {
  font-size: 18px;
}

.post-title p {
  text-align: center;
  font-size: 21px;
}

.post-text {
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
  p {
    font-size: 18px;
  }
}

.post-evaluation p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 16px;
}

.post-evaluation-contents {
  display: flex;
  justify-content: center;
}

.good-count,
.reporting {
  text-align: center;
  border: 1px solid #797979;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 10px;
}

@media (max-width: 959px) {
  .post-content {
    width: 80%;
    margin: 10% auto;
  }

  .post-name {
    font-size: 18px;
  }

  .post-stadium {
    font-size: 16px;
  }

  .post-category {
    font-size: 16px;
  }

  .post-date {
    font-size: 16px;
  }
}

@media (max-width: 559px) {
  .post-example h3 {
    font-size: 18px;
  }

  .post-content {
    padding: 20px;
  }

  .post-title p {
    text-align: center;
    font-size: 18px;
  }

  .post-text {
    margin: 10px 0;
    padding: 0 10px;
    p {
      font-size: 16px;
    }
  }

  .post-name {
    font-size: 18px;
  }

  .post-basic-information-bottom {
    display: block;
    p {
      text-align: center;
    }
  }

  .post-evaluation p {
    font-size: 14px;
  }
}
</style>
