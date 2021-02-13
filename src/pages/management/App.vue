<template>
  <div id = "app">
    <main>
      <div class = "management-title">
        <h2>管理画面</h2>
      </div>
      <div class = "management-contents">
        <div class = "management-report content">
          <a href = "http://jwatch-8411c.web.app/reportlist/index.html">通報一覧</a>
        </div>
        <div class = "management-contact content">
          <a href = "http://jwatch-8411c.web.app/inquirymail/index.html">お問い合わせメール</a>
        </div>
        <div class = "logout content">
          <a href = "http://jwatch-8411c.web.app/logout/index.html">ログアウト</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import firebase     from "firebase/app";
import FirebaseAvailable from "../../mixin/FirebaseAvailable";
export default {
  mixins: [FirebaseAvailable],
  methods: {
    judgeAdmin: function() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.firestore().collection("admin").get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                if (doc.id != user.uid) {
                  location.href = "https://jwatch-8411c.web.app/mainpage/index.html";
                }
              });
          });
        } else {
          location.href = "https://jwatch-8411c.web.app/mainpage/index.html";
        }
      });
    },
  },
  mounted: function() {
    this.judgeAdmin();
  },
};
</script>

<style lang = "scss" scoped>
main {
  color: rgb(28.8%, 29.6%, 28.8%);
  text-align: center;
}

.management-contents {
  a{
    color: rgb(28.8%, 29.6%, 28.8%);
    font-size: 18px;
    position: relative;
    display: inline-block;
    text-decoration: none;
  }
  a::after {
    position: absolute;
    bottom: -1px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
  }
  a:hover::after {
    transform: scale(1, 1);
  }
}

.content {
  margin: 30px auto;
}
</style>
