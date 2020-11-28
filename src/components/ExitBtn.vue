<template>
  <div>
    <p>
      {{ execution }}
    </p>
  </div>
</template>

<script>
export default {
  props:{
    name:String,
    execution:String
  }
}
</script>

<style scoped>
p{
  font-size: 16px;
  width: 250px;
  text-align: center;
  margin: 70px auto;
  padding: 20px 45px;
  color: #484b48;
  text-decoration: none;
  border: 2px solid #484b48;
  background-color: #fff;
  border-radius: 10px;
  transition: background-color 0.3s linear;
}

p:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
}

@media (max-width: 559px) {
  p{
    font-size: 16px;
    width: 200px;
    margin:30px auto;
  }
}
</style>