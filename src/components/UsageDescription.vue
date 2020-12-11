<template>
  <div class="usage-contents">
    <div class="usage-title">
      <h2>{{ titleEn }}</h2>
      <p>{{ titleJa }}</p>
    </div>
    <div class="usage-description">
      <div class="usage-primary-description">
        <p>{{ descriptionFirst }}</p>
        <p>{{ descriptionSecond }}</p>
      </div>
      <div class="usage-secondary-description">
        <p>
          {{ supplement }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    descriptionFirst:  String,
    descriptionSecond: String,
    supplement:        String,
    titleEn:           String,
    titleJa:           String
  }

}
</script>

<style lang = "scss" scoped>
/*観戦情報の探し方*/
.usage-contents {
  margin-top: 100px;
  margin-left: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
  }
}

.usage-description {
  padding-left: 10%;
  p {
    line-height: 2.5em;
  }
}

@media (max-width: 959px) {
  /* メイン */
  /*観戦情報の探し方*/
  .usage-contents {
    margin-left: 0%;
  }

  .usage-title {
    text-align: center;
  }

  .usage-description {
    padding-left: 0%;
  }
}

@media (max-width: 559px) {
  /* メイン */
  /*観戦情報の探し方*/
  .usage-contents {
    padding: 50px 40px;
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
    }
  }
}
</style>