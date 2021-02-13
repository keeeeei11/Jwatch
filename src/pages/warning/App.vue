<template>
  <div id = "app">
    <div class = "wrap">
      <Jheader
        :isAnonymous = "isAnonymous"
        :isLogin     = "isLogin"
        :visitorName = "visitorName"/>
      <main>
        <div class = "warning">
          <PageTitle
            description = "投稿禁止対象に関する情報が記載されています"
            title       = "About warning"/>
          <div class = "warning-contents">
              <div class = "warning-discription">
                <p>
                  1.特定のチーム、選手、サポーターへの暴言が投稿の中に含まれている。<br/>
                  2.有害なサイトへの誘導等。<br/>
                  3.重複する内容を過剰に連投する行為。<br/>
                  4.その他閲覧者を攻撃する内容が含まれていると運営が判断した場合。
                </p>
              </div>
              <div class = "warning-please">
                <p>健全なサイト運営にご協力よろしくお願い致します。</p>
              </div>
          </div>
        <Induction
          description = "ご意見＆ご要望はこちらから"
          title       = "Contact"
          url         = "https://jwatch-8411c.web.app/inquiry/index.html"/>
        </div>
        <MoveTopBtn/>
      </main>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import Induction    from "../../components/Induction";
import Jfooter      from "../../components/Jfooter.vue";
import Jheader      from "../../components/Jheader.vue";
import MoveTopBtn   from "../../components/MoveTopBtn.vue";
import FirebaseAvailable from "../../mixin/FirebaseAvailable";
import PageTitle    from "../../components/PageTitle.vue";

export default {
  components: {
    Induction,
    Jfooter,
    Jheader,
    MoveTopBtn,
    PageTitle
  },
  mixins: [FirebaseAvailable]
};
</script>

<style lang = "scss" scoped>
.wrap {
  overflow: hidden;
}

main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

.warning-contents {
  width: 60%;
  margin: 100px auto;
}

.warning-discription p {
  font-size: 18px;
  line-height: 3em;
}

.warning-please {
  margin: 50px auto;
  text-align: center;
  font-size: 18px;
}

@media (max-width: 959px) {
  .warning-discription {
    text-align: center;
    p {
      display: inline-block;
      text-align: left;
    }
  }
}

@media (max-width: 559px) {
  .warning-discription p {
    font-size: 16px;
  }

  .warning-please {
    padding: 0 10px;
    font-size: 16px;
  }
}
</style>
