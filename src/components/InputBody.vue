<template>
  <div class = "input-body">
    <h3>本文</h3>
    <textarea
      :maxlength   = "maxlength"
      :placeholder = "placeholder"
      v-model      = "count"
      @input       = "inputBodyValue"
    ></textarea>
    <div class = "count-character">
      <p>残り{{ 400 - count.length }}字です</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:""
    }
  },
  props:{
    maxlength:   { type:String, default:"400" },
    placeholder: { type:String, default:"400字以内で入力してください" }
  },
  methods:{
    inputBodyValue: function(e){
      this.$emit("input", e.target.value)
    }
  }
}
</script>

<style lang = "scss" scoped>
  /* 題名 */
.input-body{
  h3 {
    font-size: 21px;
    font-weight: normal;
  }
  textarea {
    width: 60%;
    height: 400px;
  }
  p{
    font-size: 18px;
  }
}

@media (max-width: 959px) {
  .input-body{
    textarea {
      width: 90%;
    }
  }
}

@media (max-width: 559px) {
  .input-body{
    h3 {
      font-size: 18px;
    }
    p{
      font-size: 16px;
    }
  }
}
</style>