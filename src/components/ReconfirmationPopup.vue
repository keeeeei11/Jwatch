<template>
  <div>
    <section class="reconfirmation">
      <p> {{ message }}</p>
      <p class="cancel" @click="hideReconfirmationPopup">{{ back }}</p>
      <button @click="sendData" class="process-btn">{{ process }}</button>
    </section>
    <div class="reconfirmation-background" @click="hideReconfirmationPopup"></div>
  </div>
</template>

<script>
export default {
  props:{
    back:{ type:String, default:"戻る" },
    message:{ type:String },
    process:{ type:String }
  },
  methods:{
    hideReconfirmationPopup:function(){
      this.$emit("hideReconfirmationPopup")
    },
    sendData:function(){
      this.$emit("sendData")
    }
  }
}
</script>
<style lang="scss" scoped>
/* 再確認のホップアップ */
.reconfirmation {
  opacity: 1;
  width: 450px;
  height: 200px;
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
  font-size: 18px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px;
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

.process-btn {
  width: 370px;
  font-size: 18px;
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
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
    width: 250px;
    p {
      font-size: 16px;
    }
  }

  .cancel {
    width: 200px;
    font-size: 16px;
  }

  .process-btn {
    width:220px;
    font-size: 16px;
  }
}
</style>