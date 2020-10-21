<template>
<div id="app">
    <div>Loading...</div>
</div>
</template>

<script>
export default {
  name: 'loginAnonymous',
  data(){
    return{
    }
  },
  components: {

  },
  methods:{

  },
  mounted:function(){
  firebase.auth().signInAnonymously().catch(function(error) {
  let errorCode = error.code;
  let errorMessage = error.message;
  });
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // ログイン成功時
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    location.href = "https://jwatch-8411c.web.app/mypage/index.html"
  } else {
    // ログイン失敗時
    return;
  }
  });
  }
}
</script>

<style>

</style>