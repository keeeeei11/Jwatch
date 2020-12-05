<template>
  <div id="app">
    <div class="wrap">
      <Jheader
        :visitorName="visitorName"
        :isLogin="isLogin"
        :isAnonymous="isAnonymous"/>
      <main>
        <div class="warning">
          <PageTitle
            title="About warning"
            description="投稿禁止対象に関する情報が記載されています"/>
          <div class="warning-contents">
              <div class="warning-discription">
                <p>
                  1.特定のチーム、選手、サポーターへの暴言が投稿の中に含まれている。<br />
                  2.有害なサイトへの誘導等。<br />
                  3.重複する内容を過剰に連投する行為。<br />
                  4.その他閲覧者を攻撃する内容が含まれていると運営が判断した場合。
                </p>
              </div>
            <div class="warning-please">
              <p>健全なサイト運営にご協力よろしくお願い致します。</p>
            </div>
          </div>
        <Induction
          url="https://jwatch-8411c.web.app/inquiry/index.html"
          title="Contact"
          description="ご意見＆ご要望はこちらから"/>
        </div>
        <MoveTopBtn/>
      </main>
      <Jfooter/>
    </div>
  </div>
</template>

<script>
import Jheader from "../../components/Jheader.vue";
import PageTitle from "../../components/PageTitle.vue";
import Induction from "../../components/Induction";
import MoveTopBtn from "../../components/MoveTopBtn.vue";
import Jfooter from "../../components/Jfooter.vue";
import myFirstMixin from "../../mixin/myFirstMixin";

export default {
  components: {
    Jheader,
    PageTitle,
    MoveTopBtn,
    Induction,
    Jfooter,
  },
  mixins: [myFirstMixin],
};
</script>

<style lang="scss" scoped>
/*以下ヘッダー*/
.wrap {
  overflow: hidden;
}

main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

/*警告の詳細*/
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
  /*警告の詳細*/
  .warning-discription {
    text-align: center;
    p {
      display: inline-block;
      text-align: left;
    }
  }
}

@media (max-width: 559px) {
  /* 警告内容 */
  .warning-discription p {
    font-size: 16px;
  }

  .warning-please {
    padding: 0 10px;
    font-size: 16px;
  }
}
</style>
