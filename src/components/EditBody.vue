<template>
  <div class = "edit-body">
    <h3>本文</h3>
    <textarea
    :maxlength   =  "maxlength"
    :placeholder =  "placeholder"
    :value       =  "editBody"
    @input       =  "inputBodyValue"
    ></textarea>
    <div class = "count-character">
      <p>残り{{ 400 - value.length }}字です</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      editBody: this.value
    }
  },
  props:{
    maxlength:   { type:String,  default:"400" },
    placeholder: { type:String,  default:"400字以内で入力してください" },
    value:       { type:String,  required:true }
  },
  methods:{
    inputBodyValue: function(e){
      this.editBody = e.target.value;
      this.$emit('input', this.editBody);
    }
  }
}
</script>

<style lang = "scss" scoped>
.edit-body{
  h3 {
    font-size: 18px;
    font-weight: normal;
  }
  textarea {
    width: 60%;
    height: 100px;
  }
  p{
    font-size: 18px;
  }
}

@media (max-width: 559px) {
  .edit-body{
    h3 {
      font-size: 16px;
    }
    p{
      font-size: 16px;
    }
  }
}
</style>