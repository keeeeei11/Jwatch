<template>
  <div class = "edit-title">
    <h3>タイトル</h3>
   <input
    :maxlength   = "maxlength"
    :name        = "name"
    :placeholder = "placeholder"
    :type        = "type"
    :value       = "editTitle"
    @input       = "inputTitleValue">
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
    maxlength:   { type:String, default:"20" },
    name:        { type:String, required:false },
    placeholder: { type:String, default:"20字以内で入力してください" },
    type:        { type:String, required:false },
    value:       { type:String, required: true }
  },
  methods:{
    inputTitleValue: function(e){
      this.editTitle = e.target.value;
      this.$emit('input', this.editTitle);
    }
  },
}
</script>

<style lang = "scss" scoped>
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