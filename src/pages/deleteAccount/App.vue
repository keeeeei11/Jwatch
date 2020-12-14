<template>
  <div id = "app">
    <div>
      <p>アカウント削除中…</p>
      <p>アカウント削除が完了しない場合は、再度ログインを行ってからもう一度アカウント削除を実行してください。</p>
    </div>
  </div>
</template>

<script>
import firebase     from "firebase";
import myFirstMixin from "../../mixin/myFirstMixin";
export default {
  mixins: [myFirstMixin],
  methods: {
    deleteUserInformation: function() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // ユーザーが投稿したデータを削除してからアカウントを削除する
          this.deleteUid = user.uid;
          firebase.firestore().collection("posts").where("contributorUid", "==", this.deleteUid)
          .get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              doc.ref.delete();
            });
          });

          user.delete()
            .then(function() {
              location.href =
                "https://jwatch-8411c.web.app/mainpage/index.html";
            })
            .catch(function(error) {
              // エラー発生時(セッション切れが原因であることが大半なので
              // 再度ログインしてからアカウント削除するよう文章で誘導)
              console.log(error);
            })
            .catch(function(error) {
              console.log("エラーが発生しました", error);
            });
        } else {
          return;
        }
      });
    },
  },
  mounted: function() {
    this.deleteUserInformation();
  },
};
</script>
