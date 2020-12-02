<template>
  <div>
    <div class="complete">
      <section>
        <p class="message">{{ message }}</p>
        <button class="back" @click="reload">{{ back }}</button>
        <a :href=url>{{ movePage }}</a>
      </section>
    </div>
    <div class="complete-background"></div>
  </div>
</template>
<script>
export default {
  props:{
    message:String,
    back:{type:String, default:"戻る"},
    url:String,
    movePage:String
  },
    methods:{
      reload:function(){
        location.reload()
      }
  }
}
</script>
<style scoped>
.complete {
  opacity: 1;
  width: 450px;
  height: 250px;
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

.complete button {
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
}

.complete button:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.complete a {
  width: 330px;
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
}

.complete a:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.complete-background {
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
  .complete {
    width: 250px;
  }

  .complete button{
    width: 200px;
    font-size: 16px;
  }

  .complete a{
    width: 180px;
    font-size: 16px;
  }
}
</style>