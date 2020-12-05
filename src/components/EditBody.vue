<template>
  <div class="edit-body">
    <h3>本文</h3>
    <textarea
    :placeholder= "placeholder"
    :maxlength= "maxlength"
    @input="inputValue"
    :value="editBody"
    ></textarea>
    <div class="count-character">
      <p>残り{{ 400 - value.length }}字です</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:"",
      editBody: this.value
    }
  },
  props:{
    placeholder:{type:String, default:"400字以内で入力してください"},
    maxlength:{type:String, default:"400"},
    value: { type: String, required: true }
  },
  methods:{
    inputValue: function(e){
       this.editBody = e.target.value
      this.$emit('input', this.editBody)
    }
  }
}
</script>

<style lang="scss" scoped>
  /* 題名 */
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