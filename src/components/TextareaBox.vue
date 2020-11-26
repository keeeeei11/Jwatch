<template>
  <div class="input-body">
    <h3>{{ subject }}</h3>
    <textarea
    v-model="count"
    :placeholder= "placeholder"
    :maxlength= "maxlength"
    @input="inputValue"
    ></textarea>
    <div class="count-character">
      <p>残り{{ 400 - count.length }}字です</p>
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
    subject:{type:String, required:false},
    placeholder:{type:String, default:"400字以内で入力してください"},
    // 字数調整はdefault内で行う
    maxlength:{type:String, default:"400"}
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
  font-size: 21px;
  font-weight: normal;
}

textarea {
  width: 60%;
  height: 400px;
}

.count-character p{
  font-size: 18px;
}

@media (max-width: 959px) {
  textarea {
    width: 90%;
  }
}

@media (max-width: 559px) {
  h3 {
    font-size: 18px;
  }
  .count-character p{
    font-size: 16px;
  }
}
</style>