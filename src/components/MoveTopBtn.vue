<template>
    <div id="move_top" class="arrow" @click="moveTop" v-if="show"></div>
</template>

<script>
 export default {
  data(){
    return {
      show:false,
    }
  },
  methods:{
    moveTop:function(){
      window.scrollTo({
        top:0,
        behavior:"smooth",
      })
    }
  },
  mounted: function(){
    window.addEventListener('scroll', ()=>{
      this.show = (window.scrollY > 150);
    });
  }
 }
</script>
<style>
#move_top{
    user-select: none;
}
.arrow{
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
#move_top{
  display: none;
}
}
</style>