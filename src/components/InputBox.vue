<template>
  <div class="input-box">
    <h3> {{ subject }}</h3>
    <input
      :type= "type"
      :name= "name"
      :placeholder= "placeholder"
      :maxlength= "maxlength"
      @input="inputValue"
    >
   </div>
</template>

<script>
export default {
  props:{
    subject:{type:String, required:false},
    type:{type:String, required:false},
    name:{type:String, required:false},
    placeholder:{type:String, default:"20字以内で入力してください"},
    // 字数調整はdefault内で行う
    maxlength:{type:String, default:"20"}
  },
  methods:{
    inputValue: function(e){
      this.$emit("input", e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  /* 題名 */
  .input-box{
    h3 {
      font-size: 21px;
      font-weight: normal;
    }
  
    input{
      width: 60%;
      height: 40px;
      font-size: 18px;
    }
  }

@media (max-width: 959px) {
   /* 題名 */
  .input-box{
    input{
      width: 90%;
    }
  }
}

@media (max-width: 559px) {
  .input-box{
    h3 {
      font-size: 18px;
    }
  }
}
</style>