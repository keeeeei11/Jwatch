<template>
  <div id = "app">
    <div class = "wrap">
      <Jheader
        :isAnonymous = "isAnonymous"
        :isLogin     = "isLogin"
        :visitorName = "visitorName"/>
      <!--以下メイン-->
      <main>
        <PageTitle
          description = "よくある質問が記載されております"
          title       = "Q&A"/>
        <div class = "question-contents">
          <div class = "note">
            <p>質問は随時こちらに掲載いたします。</p>
          </div>
        </div>
        <Induction
          description = "ご意見＆ご要望はこちらから"
          title       = "Contact"
          url         = "https://jwatch-8411c.web.app/inquiry/index.html"/>
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

.question-contents {
  font-size: 18px;
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
  text-align: center;
}

@media (max-width: 959px) {
  .question-contents {
    margin-left: 0;
  }
}
</style>
