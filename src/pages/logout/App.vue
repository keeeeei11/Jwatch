<template>
  <div id = "app">
    <div>ログアウト中…</div>
    <div>画面が切り替わらない場合はページの更新を行ってください。</div>
  </div>
</template>

<script>
import firebase     from "firebase/app";
import FirebaseAvailable from "../../mixin/FirebaseAvailable";
export default {
  methods: {
    logoutUser: function() {
      firebase.auth().onAuthStateChanged(function() {
          firebase.auth().signOut()
            .then(function() {
              location.href = "https://jwatch-8411c.web.app/mainpage/index.html";
            })
            .catch(function(error) {
              alert("ログインしているか確認してください。" + error)
              location.href = "https://jwatch-8411c.web.app/mainpage/index.html";
            })
      });
    },
  },
  mixins: [FirebaseAvailable],
  mounted: function() {
    this.logoutUser()
  }
};
</script>