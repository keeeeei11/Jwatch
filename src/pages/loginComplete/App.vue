<template>
<div id="app">
  <p>登録ありがとうございます！</p>
  <p>メールアドレスの初回ログイン時は認証が必要です。</p>
  <p>メールをお送りしましたのでそちらに記載のURLよりJwatchをお楽しみください！</p>
  <p>※メールが届くまで時間がかかることがございます。</p>
</div>
</template>

<script>
export default {
  name:'loginComplete',
  // メールアドレスによる初回ログイン時に認証メールを送信する
  mounted:function(){
      if (!emailVerified) {
      var actionCodeSettings = {
        url: 'https://jwatch-8411c.web.app/mypage/index.html',
        handleCodeInApp: false,
      };
      firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
      .then(function() {
        // 成功時
      })
      .catch(function(error) {
        // 失敗時
      });
    } else {
      // 既に認証済みの時はマイページを表示する
      location.href = "https://jwatch-8411c.web.app/mypage/index.html"
    }
  }
}
</script>

<style>

</style>