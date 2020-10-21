<template>
<div id="app">
    <div>アカウント削除中…</div>
    <div>アカウント削除が完了しない場合は、再度ログインを行ってからもう一度アカウント削除を実行してください。</div>
</div>
</template>

<script>
export default {
  name: 'deleteAccount',
  data(){
    return{
    }
  },
  mounted:function(){
    this.delete()
  },
  methods:{
    delete:function(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          user.delete().then(function() {
          // 正常にアカウント削除が完了した時
          location.href = 'https://jwatch-8411c.web.app/mainpage/index.html'
        }).catch(function(error) {
          // エラー発生時(セッション切れが原因であることが大半なので
          // 再度ログインしてからアカウント削除するよう文章で誘導)
          console.log("エラー");
        });
        }
      });
    }
  },
}
</script>

<style>

</style>