<template>
  <div>
    <h3>タイトル</h3>
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
    type:{type:String, required:false},
    name:{type:String, required:false},
    placeholder:{type:String, default:"20字以内で入力してください"},
    maxlength:{type:String, default:"20"}
  },
  methods:{
    inputValue: function(e){
      this.$emit("input", e.target.value)
    }
  }
}
</script>

<style scoped>
  /* 題名 */
  h3 {
    font-size: 18px;
    font-weight: normal;
  }

  input{
    width: 60%;
    height: 40px;
    font-size: 18px;
  }

@media (max-width: 959px) {
}

@media (max-width: 559px) {
  h3 {
    font-size: 16px;
  }
}
</style>