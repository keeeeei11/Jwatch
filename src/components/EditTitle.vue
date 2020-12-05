<template>
  <div class="edit-title">
    <h3>タイトル</h3>
   <input
    :type= "type"
    :name= "name"
    :placeholder= "placeholder"
    :maxlength= "maxlength"
    @input="inputValue"
    :value="editTitle"
   >
   </div>
</template>

<script>
export default {
  data(){
    return {
      editTitle: this.value
    }
  },
  props:{
    type:{type:String, required:false},
    name:{type:String, required:false},
    placeholder:{type:String, default:"20字以内で入力してください"},
    maxlength:{type:String, default:"20"},
    value:{type:String, required: true}
  },
  methods:{
    inputValue: function(e){
      this.editTitle = e.target.value
      this.$emit('input', this.editTitle)
    }
  },
}
</script>

<style lang="scss" scoped>
  /* 題名 */
  .edit-title{
    h3 {
      font-size: 18px;
      font-weight: normal;
    }
    input{
      width: 60%;
      height: 30px;
      font-size: 16px;
    }
  }

@media (max-width: 559px) {
  .edit-title{
    h3 {
      font-size: 16px;
    }
  }
}
</style>