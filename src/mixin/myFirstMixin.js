import firebase from "firebase/app";
import               "firebase/auth";
import               "firebase/firestore";
import               "firebase/storage";
export default {
  data() {
    return {
      visitorName:   "",
      visiorUid:     "",
      email:         "",
      emailVerified: "",
      photoURL:      "",
      isAnonymous:   "",
      providerData:  "",
      isLogin:       false,
    };
  },
  mounted: function() {
    const firebaseConfig = {
      apiKey:            "AIzaSyAb7dyC4OAKSZaaWHLIS2SlskncyESE6Lg",
      authDomain:        "jwatch-8411c.firebaseapp.com",
      databaseURL:       "https://jwatch-8411c.firebaseio.com",
      projectId:         "jwatch-8411c",
      storageBucket:     "jwatch-8411c.appspot.com",
      messagingSenderId: "868452645100",
      appId:             "1:868452645100:web:b0ac64ce8f42b75a7dcdc9",
      measurementId:     "G-RK4728SNM4"
    };
    // 稀にfirebaseの初期化が多重に行われてエラーが発生するのでそれを防ぐ
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // ログイン時
          this.email         = user.email;
          this.emailVerified = user.emailVerified;
          this.isAnonymous   = user.isAnonymous;
          this.isLogin       = true;
          this.photoURL      = user.photoURL;
          this.providerData  = user.providerData;
          this.visitorName   = user.displayName;
          this.visitorUid    = user.uid;
          console.log(
            this.visitorName,
            this.visitorUid,
            this.email,
            this.emailVerified,
            this.photoURL,
            this.isAnonymous,
            this.providerData
          );
        } else {
          this.visitorName = null;
          this.visitorUid  = null
        }
        // 匿名ユーザーが投稿した時にユーザー名を「匿名」と表示する
        if(this.isAnonymous == true){
          this.visitorName = "匿名"
        }
      });
    }
  },
};
