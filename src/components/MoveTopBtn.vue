<template>
    <div id="move_top" class="arrow" @click="moveToTop" v-if="showBtn"></div>
</template>

<script>
 export default {
  data(){
    return {
      showBtn:false,
    }
  },
  methods:{
    moveToTop:function(){
      window.scrollTo({
        top:0,
        behavior:"smooth",
      })
    }
  },
  mounted: function(){
    window.addEventListener('scroll', ()=>{
      this.showBtn = (window.scrollY > 150);
    });
  }
 }
</script>
<style lang="scss" scoped>
// TODO:ネストした時に矢印を表示させる
.arrow{
    user-select: none;
    cursor: pointer;
    position: fixed;
    right: 45px;
    bottom: 45px;
    color: #000000;
    background-color: #c0c0c0e1;
    border-radius: 32px;
    padding:30px;
    transition: all 0.2s ease-in-out;
}
.arrow:hover{
  opacity: 0.8s;
    bottom:55px;
}
.arrow:before{
  content:"";
    width: 12px;
    height: 12px;
    border-top: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    transform: rotate(-45deg);
    position: absolute;
    left: 22px;
    top: 17px;
}
.arrow:after{
  content:"";
    width: 12px;
    height: 12px;
    border-top: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    transform: rotate(-45deg);
    position: absolute;
    left: 22px;
    top: 31px;
}
/* PC以外では非表示 */
@media (max-width:959px){
.arrow{
  display: none;
}
}
</style>