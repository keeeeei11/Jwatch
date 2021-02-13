<template>
  <section class = "edit-page">
    <h3>編集画面</h3>
    <form class = "edit-stadium">
      <EditStadium
        v-model = "editStadium"/>
    </form>
    <form class = "edit-category">
      <EditCategory
        v-model = "editCategory"/>
    </form>
    <form class = "edit-title-information" @submit.prevent>
      <EditTitle
        v-model = "editTitle"
        type    = "text"/>
    </form>
    <form class = "edit-text-information">
      <EditBody
        v-model = "editBody"
        type    = "text"/>
    </form>
    <div class = "edit-btn">
      <button @click = "hideEditPage()">戻る</button>
      <button @click = "editSelectData(postSingleData, editId)">編集する</button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>