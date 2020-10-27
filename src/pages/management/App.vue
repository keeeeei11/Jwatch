<template>
<div id="app">
    <main>
    <div class="management-title">
      <h2>管理画面</h2>
    </div>
    <div class="management-contents">
        <div class="management-report content">
          <a href="http://127.0.0.1:5501/public/usermanagement/reportlist/reportlist.html">通報一覧</a>
        </div>
        <div class="management-contact content">
          <a href="http://127.0.0.1:5501/public/usermanagement/inquirymail/inquirymail.html">お問い合わせメール</a>
        </div>
        <div class="logout content">
          <a href="http://127.0.0.1:5501/public/logout/logout.html">ログアウト</a>
        </div>
    </div>
  </main>
</div>
</template>

<script>
// import firebase from "firebase";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
export default {
  name: 'App',
}
</script>

<style>
main{
  color: rgb(28.8%, 29.6%, 28.8%);
  text-align: center;
}
.management-contents a{
  color: rgb(28.8%, 29.6%, 28.8%);
  font-size: 18px;
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.management-contents a::after{
  position: absolute;
  bottom: -1px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #333;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}
.management-contents a:hover::after{
  transform: scale(1,1);
}

.content{
  margin:30px auto;
}
</style>