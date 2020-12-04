<template>
  <div>
    <section class="reconfirmation">
      <p class="message">{{ message }}</p>
      <p class="cancel" @click="exitPopupHide">{{ cancel }}</p>
      <a :href=url class="process">{{ process }}</a>
    </section>
    <div class="reconfirmation-background" @click="exitPopupHide"></div>
   </div>
</template>

<script>
export default {
  props:{
    message:String,
    cancel:{type:String, default:"戻る"},
    url:String,
    process:String
  },
  methods:{
    exitPopupHide:function(){
      this.$emit("exitPopupHide")
    }
  }
}
</script>

<style lang="scss">
.reconfirmation {
  opacity: 1;
  position: fixed;
  background: #ffffff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

.cancel {
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px 0px;
  margin: 28px auto 30px;
  background-color: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
  transition: background-color 0.4s linear;
  :hover {
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }
}

.process {
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px 0px;
  margin: 28px auto 30px;
  background: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
  :hover {
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }
}

.reconfirmation-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  z-index: 2;
  opacity: 0.8;
}

@media (max-width: 559px) {
  /* 再確認のホップアップ */
  .reconfirmation {
    font-size: 16px;
    width:250px;
  }

  .cancel {
    width: 200px;
    padding: 10px 0;

  }

  .process {
    font-size: 16px;
    padding: 10px 0;
    width: 200px;
  }
}
</style>