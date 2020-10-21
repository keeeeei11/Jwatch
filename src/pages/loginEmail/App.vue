<template>
<div id="app">
  <div id="firebaseui-auth-container"></div>
  <div id="loader">Loading...</div>
</div>
</template>

<script>
export default {
  name:'loginEmail',
  mounted:function(){
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        return true;
      },
      uiShown: function() {
        // ローディング時にログイン画面を表示させない働き
        document.getElementById('loader').style.display = 'none';
      }
    },
    // ログイン画面の表示方法、ログイン成功時のページ誘導,ログインの認証方法
    signInFlow: 'popup',
    signInSuccessUrl: 'http://localhost:8080/mypage/index.html',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID, //メール認証
    ],

    tosUrl: 'https://github.com/keeeeei11',
    privacyPolicyUrl: 'https://github.com/keeeeei11'
  };
  // UIレンダリング
  ui.start('#firebaseui-auth-container', uiConfig);
  }

}
</script>

<style>

</style>