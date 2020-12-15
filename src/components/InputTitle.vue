<template>
  <div class = "input-title">
    <h3>タイトル</h3>
   <input
    :maxlength   = "maxlength"
    :name        = "name"
    :placeholder = "placeholder"
    :type        = "type"
    @input       = "inputTitleValue">
   </div>
</template>

<script>
export default {
  props:{
    maxlength:   { type:String, default:"20" },
    name:        { type:String, required:false },
    placeholder: { type:String, default:"20字以内で入力してください" },
    type:        { type:String, required:false }
  },
  methods:{
    inputTitleValue: function(e){
      this.$emit("input", e.target.value);
    }
  }
}
</script>

<style lang = "scss" scoped>
  /* 題名 */
  .input-title{
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
  .input-title{
    input{
      width: 90%;
    }
  }
}

@media (max-width: 559px) {
  .input-title{
    h3 {
      font-size: 18px;
    }
  }
}
</style>