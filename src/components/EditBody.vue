<template>
  <div class="edit-body">
    <h3>本文</h3>
    <textarea
    :placeholder= "placeholder"
    :maxlength= "maxlength"
    @input="inputValue"
    v-model="value"
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
    }
  },
  props:{
    placeholder:{type:String, default:"400字以内で入力してください"},
    maxlength:{type:String, default:"400"},
    value: { type: String, required: true }
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

textarea {
  width: 60%;
  height: 100px;
}

.count-character p{
  font-size: 18px;
}

@media (max-width: 959px) {
}

@media (max-width: 559px) {
  h3 {
    font-size: 16px;
  }
  .count-character p{
    font-size: 16px;
  }
}
</style>