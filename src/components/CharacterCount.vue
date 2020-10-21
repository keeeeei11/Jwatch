<template>
    <div id="body_box">
      <textarea v-model="character" class="inquiry-text-form" placeholder="400字以内で入力してください" maxlength="400"></textarea><br>
          <div class="count-character">
                <p>残り{{ 400 - character.length }}字です</p>
          </div>
    </div>
</template>

<script>
export default {
  name:'characterCount',
  data(){
    return {
      character:"",
    }
  }
}
</script>

<style>
/*自由記述欄*/
textarea{
    width: 60%;
    height: 400px;
}
@media(max-width:959px){
  textarea{
    width: 90%;
  }
}
</style>