<template>
<div id="app">
    <div>アカウント削除中…</div>
    <div>アカウント削除が完了しない場合は、再度ログインを行ってからもう一度アカウント削除を実行してください。</div>
</div>
</template>

<script>
import firebase from "firebase"
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import myFirstMixin from '../../mixin/myFirstMixin';
export default {
  data(){
    return{
    }
  },
  mixins:[
    myFirstMixin
  ],
  methods:{
    delete:function(){
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          // ユーザーが投稿した情報を削除する
          this.deleteUid = user.uid
          const db = firebase.firestore();
          const getData = db.collection('posts').where("contributorUid", "==", this.deleteUid);
          getData.get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
              doc.ref.delete();
            })
          })
          // ユーザー情報の削除
        user.delete().then(function(){
          location.href = "https://jwatch-8411c.web.app/mainpage/index.html"
          }).catch(function(error) {
              // エラー発生時(セッション切れが原因であることが大半なので
            // 再度ログインしてからアカウント削除するよう文章で誘導)
            console.log(error);
        })
        .catch(function(error){
            console.log("エラーが発生しました", error);
            console.log(getData);
        })
        } else {
           return
        }
      });
    },
  },
  mounted:function(){
    this.delete()
  },
}
</script>

<style>

</style>