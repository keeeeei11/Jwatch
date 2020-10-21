<template>
<div id="app">
  <div id="firebaseui-auth-container"></div>
  <div id="loader">Loading...</div>
</div>
</template>

<script>
export default {
  name: 'loginTwitter',
  data(){
    return{
    }
  },
  components: {

  },
  methods:{

  },
  mounted:function(){
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // ローディング時にログイン画面を表示させない働き
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'https://jwatch-8411c.web.app/mypage/index.html',
        signInOptions: [
          firebase.auth.TwitterAuthProvider.PROVIDER_ID, //Twitterアカウント認証
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