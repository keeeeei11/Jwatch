<template>
  <div class = "login-btn" :name = "name">
    <button>{{ loginMethod }}</button>
  </div>
</template>

<script>
export default {
  props:{
    loginMethod: String,
    name:        String
  }
}
</script>

<style lang = "scss" scoped>
.login-btn{
  text-align: center;
  button {
    width: 400px;
    margin: 40px auto;
    padding: 20px 50px;
    font-size: 18px;
    border-radius: 10px;
    color: #484b48;
    text-decoration: none;
    border: 2px solid #484b48;
    background-color: #fff;
    transition: background-color 0.4s linear;
    outline: none;
  }
  button:hover {
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }
}
@media (max-width: 559px) {
  .login-btn button {
    width: 300px;
    margin: 20px 0;
    padding: 10px 20px;
    font-size: 16px;
  }
}
</style>