<template>
  <div class="page-title">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name:'PageTitle',
  data(){
    return{
      title:"",
      description:"",
    }
  }
}
</script>

<style>
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
.page-title{
    margin-left: 10%;
}
}

@media (max-width:559px)
{
.page-title h1{
    font-size: 36px;
}

.page-title p{
    font-size: 18px;
}
}
</style>