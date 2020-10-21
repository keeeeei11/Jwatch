<template>
    <div id="app">
      <div>ログアウト中…</div>
      <div>画面が切り替わらない場合はページの更新を行ってください。</div>
    </div>
</template>

<script>
export default {
  name:'logout',
  data(){
    return{
    }
  },
  mounted: function(){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase.auth().signOut().then(function() {
      // 正常にアカウント削除が完了した時
        location.href = 'http://localhost:8080/mainpage/index.html'
      }).catch(function(error) {
      // エラー発生時
      });
    }
  });
  }
}
</script>

<style>

</style>