<template>
  <div id="app">
    <div class="wrap">
      <Jheader
        :visitorName="visitorName"
        :isLogin="isLogin"
        :isAnonymous="isAnonymous"
      ></Jheader>
      <!--以下メイン-->
      <main>
        <PageTitle
          title="Q&A"
          description="よくある質問が記載されております"
        ></PageTitle>
        <div class="question-contents">
          <div class="note">
            <p>質問は随時こちらに掲載いたします。</p>
          </div>
        </div>
        <Induction
          url="https://jwatch-8411c.web.app/inquiry/index.html"
          title="Contact"
          description="ご意見＆ご要望はこちらから"
          ></Induction>
        <MoveTopBtn></MoveTopBtn>
      </main>
      <Jfooter></Jfooter>
    </div>
    ï
  </div>
</template>

<script>
import myFirstMixin from "../../mixin/myFirstMixin";
import Jheader from "../../components/Jheader";
import PageTitle from "../../components/PageTitle";
import Induction from "../../components/Induction";
import MoveTopBtn from "../../components/MoveTopBtn";
import Jfooter from "../../components/Jfooter";
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
.wrap {
  overflow: hidden;
}
/*以下メイン*/
main {
  color: rgb(28.8%, 29.6%, 28.8%);
}

.question-contents {
  font-size: 18px;
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
  text-align: center;
}


/* タブレット */
@media (max-width: 959px) {
  .question-contents {
    margin-left: 0;
  }
}

/* スマホ */
@media (max-width: 559px) {
}
</style>
