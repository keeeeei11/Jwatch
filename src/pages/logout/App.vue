<template>
    <div id="app">
      <div>ログアウト中…</div>
      <div>画面が切り替わらない場合はページの更新を行ってください。</div>
    </div>
</template>

<script>
import firebase from "firebase";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
export default {
  name:'logout',
  data(){
    return{
    }
  },
  mounted:function(){
    this.logout()
  },
  methods:{
    logout:function(){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase.auth().signOut().then(function() {
      // 正常にアカウント削除が完了した時
        location.href = 'https://jwatch-8411c.web.app/mainpage/index.html'
      });
    }
  });
  }
  },
  }
</script>

<style>

</style>