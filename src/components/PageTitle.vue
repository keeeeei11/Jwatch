<template>
  <div class="page-title-wrapper">
    <div class="page-title">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    title: String
  },
}
</script>

<style lang="scss" scoped>
.page-title{
    margin-left: 20%;
    margin-top: 250px;
}
.page-title h1{
    font-size: 48px;
}

.page-title p{
    font-size: 24px;
}

@media (max-width:959px)
{
.page-title-wrapper{
  text-align: center;
}

.page-title{
  margin-left:0;
  margin-top: 150px;
}
}

@media (max-width:559px)
{
  .page-title{
    padding:0 30px;
  }
  .page-title h1{
      font-size: 36px;
  }

  .page-title p{
      font-size: 18px;
  }
}
</style>