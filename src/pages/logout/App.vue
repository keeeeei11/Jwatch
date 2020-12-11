<template>
  <div id = "app">
    <div>ログアウト中…</div>
    <div>画面が切り替わらない場合はページの更新を行ってください。</div>
  </div>
</template>

<script>
import firebase     from "firebase";
import                   "firebase/auth";
import                   "firebase/firestore";
import                   "firebase/storage";
import myFirstMixin from "../../mixin/myFirstMixin";
export default {
  methods: {
    logoutUser: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          firebase
            .auth().signOut()
            .then(function() {
              // 正常にアカウント削除が完了した時
              location.href =
                "https://jwatch-8411c.web.app/mainpage/index.html";
            });
        }
      });
    },
  },
  mixins: [myFirstMixin],
  mounted: function() {
    this.logoutUser();
  },
};
</script>