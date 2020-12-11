<template>
  <select
    size    = "1"
    @change = "inputReportValue">
    <option value = "" disabled selected>--通報の理由(必須)--</option>
    <option value = "特定のチーム、選手、サポーターへの誹謗中傷"
      >特定のチーム、選手、サポーターへの誹謗中傷</option
    >
    <option value = "有害なサイトへの誘導"
      >有害なサイトへの誘導</option
    >
    <option value = "重複する内容を過剰に連投する行為"
      >重複する内容を過剰に連投する行為</option
    >
    <option value = "その他">その他</option>
  </select>
</template>

<script>
export default {
  props:{
    value: { type: String, required: true }
  },
  methods:{
    inputReportValue: function(e) {
      this.$emit("input", e.target.value);
    }
  },
}
</script>

<style lang = "scss" scoped>
select {
  height: 30px;
  width: 50%;
  font-size: 18px;
  color: rgb(28.8%, 29.6%, 28.8%);
  border-radius: 10px;
}
</style>