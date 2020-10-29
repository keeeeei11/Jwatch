// mixinを使って全ページ共通のものを作成する
// 必要なものを各ページに渡していくイメージ
// firebaseの導入とログイン情報の保持
import firebase from "firebase";
// import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
export default {
    // data内には最初に変数を定義する(初期値)
    data(){
        return{
            visitorName:"",
            email:"",
            emailVerified:"",
            photoURL:"",
            isAnonymous:"",
            visiorUid:"",
            providerData:"",
            isLogin:false,
        }
    },
    mounted:function(){
        const firebaseConfig = {
        apiKey: "AIzaSyAb7dyC4OAKSZaaWHLIS2SlskncyESE6Lg",
        authDomain: "jwatch-8411c.firebaseapp.com",
        databaseURL: "https://jwatch-8411c.firebaseio.com",
        projectId: "jwatch-8411c",
        storageBucket: "jwatch-8411c.appspot.com",
        messagingSenderId: "868452645100",
        appId: "1:868452645100:web:b0ac64ce8f42b75a7dcdc9",
        measurementId: "G-RK4728SNM4"
      };
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // ログイン時
          this.visitorName = user.displayName;
          this.email = user.email;
          this.emailVerified = user.emailVerified;
          this.photoURL = user.photoURL;
          this.isAnonymous = user.isAnonymous;
          this.visiorUid = user.uid;
          this.providerData = user.providerData;
          this.isLogin = true
          console.log(this.visitorName ,this.email ,this.emailVerified ,this.photoURL ,this.isAnonymous ,this.visiorUid ,this.providerData)
        } else {
          this.isLogin = false
        }
        })
        }
}