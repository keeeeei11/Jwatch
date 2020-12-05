<template>
  <div class="input-category">
    <h3>カテゴリー</h3>
    <select @change="inputValue" size="1" :value="editCategory">
      <option value="" disabled
        >--カテゴリーを選択してください(必須)--</option
      >
      <option value="スタジアムグルメ">スタジアムグルメ</option>
      <option value="交通情報(駐車場や公共交通機関等)"
        >交通情報(駐車場や公共交通機関等)</option
      >
      <option value="座席(座席確保・座席の特徴・見やすさ)"
        >座席(座席確保・座席の特徴・見やすさ)</option
      >
      <option value="周辺情報(飲食店・ホテル・観光地等)"
        >周辺情報(飲食店・ホテル・観光地等)</option
      >
      <option value="チーム特有の情報(ダービーなど)"
        >チーム特有の情報(ダービーなど)</option
      >
      <option value="その他">その他</option>
    </select>
  </div>
</template>

<script>
export default {
  data(){
    return {
      editCategory: this.value
    }
  },
  props:{
    value: { type: String, required: true }
  },
  methods:{
    inputValue: function(e){
      this.editCategory = e.target.value
      this.$emit('input', this.editCategory)
    }
  },
}
</script>

<style lang="scss" scoped>
.input-category{
  h3 {
    font-size: 18px;
    font-weight: normal;
  }
  select {
    width: 60%;
    height: 30px;
  }
}

@media (max-width: 559px) {
  .input-category{
    h3 {
      font-size: 16px;
    }
  }
}
</style>