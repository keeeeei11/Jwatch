<template>
<div id="app">
  <div class="wrap">
    <header>
      <div class="header-contents">
        <div class="header-title">
          <a href="https://jwatch-8411c.web.app/management/index.html">管理者画面</a>
        </div>
        <div class="header-menu">
          <a href="https://jwatch-8411c.web.app/reportlist/index.html">通報一覧</a>
          <a href="https://jwatch-8411c.web.app/inquirymail/index.html">お問い合わせメール</a>
        </div>
      </div>
    </header>
    <main>
      <div class="report-title">
        <h2>通報一覧</h2>
      </div>
      <div class="report-contents">
        <div class="report-example-contents">
          <div class="report-example-post-title">
            <h3>投稿内容</h3>
          </div>
          <div class="report-basic-information">
            <div class="report-basic-information-top">
                <div class="report-name">
                    <p id="report_username">〇〇さん</p>
                </div>
                <div class="report-uid">
                  <p id=uid></p>
                </div>
                <div class="report-date">
                  <p>2000/1/1</p>
                </div>
            </div>
              <div class="report-basic-information-bottom">
                <div class="report-stadium">
                  <p>☆☆スタジアム</p>
                </div>
                <div class="report-category">
                  <p>スタジアムグルメ</p>
                </div>
            </div>
          </div>
          <div class="report-main-content">
              <div class="report-title">
                  <p id="report_title">△△の唐揚げがとても美味しかったです</p>
              </div>
              <div class="report-text">
                  <p id="report_body">ここの唐揚げは出来たてを提供してくれます。また値段も低価格で観戦の際はいつも購入しています！是非購入してみてください！</p>
              </div>
          </div>
          <div class="report-example-warning">
            <div class="report-example-warning-title">
              <h3>通報理由</h3>
              <p>誹謗中傷</p>
            </div>
            <div class="report-example-warning-body">
              <p>この投稿は特定の選手を誹謗中傷していると思われます。</p>
            </div>
          </div>
          <div class="report-evaluation">
            <div class="report-evaluation-contents">
                <div class="report-delete">
                  <p id="report_execute">削除する</p>
                </div>
            </div>
        </div>
        </div>
      </div>
      <div class="report-popup">
        <section id="report_reconfirmation" class="hidden">
            <p>この通報内容を削除してもよろしいですか？</p>
            <p id="report_cancel">戻る</p>
            <a href="#" id="report_btn">削除する</a>
        </section>
      </div>
      <div id="reconfirmation_cover" class="hidden"></div>
    </main>
    </div>
</div>
</template>

<script>
// import firebase from "firebase";
// import "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import myFirstMixin from "../../mixin/myFirstMixin";

export default {
  mixins:[
    myFirstMixin
  ],
}
</script>

<style>
.wrap{
  overflow: hidden;
}
/*以下ヘッダー*/
header{
  width: 100%;
  position: fixed;
  top:0;
  background-color:white;
  border-bottom: 1px solid #efefef;
  z-index: 2;
}
.header-contents{
  height: 50px;
  display: flex;
  margin: auto 50px;
  justify-content: space-around;
}

.header-contents{
  margin-top: 30px;
}

.header-contents a{
  text-decoration: none;
  color: #484b48;
  margin: 0 30px;
}

.header-contents a:hover{
  color: gray;
}

main{
  margin: 100px auto;
}

.report-title{
  text-align: center;
}

/*投稿例*/
/* 通報対象の投稿 */
.report-example-contents{
  width: 70%;
  margin:30px auto;
  padding: 20px 40px 20px;
  border: 2px solid #979797;
  border-radius: 10px;
}

.report-example-post-title{
  text-align: center;
  font-size: 18px;
}

.report-basic-information{
display: block;
}

.report-basic-information-top{
display: flex;
height: 30px;
margin-bottom: 30px;
justify-content: space-around;
}

.report-basic-information-bottom{
display: flex;
justify-content: space-around;
}

.report-name{
  font-size: 21px;
}

.report-stadium{
  font-size: 18px;
}

.report-category{
  font-size: 18px;
}

.report-date{
  font-size: 18px;
}

.report-title p{
  text-align: center;
  font-size: 21px;
}

.report-text{
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
}

.report-text p{
  font-size: 18px;
}

/* 通報理由 */
.report-example-warning{
  text-align: center;
  margin:50px auto;
}

.report-example-warning-title h3{
  font-size: 21px;
}

.report-example-warning-title p{
  font-size: 18px;
}

.report-example-warning-body{
  font-size: 18px;
}

/* 削除ボタン */
.report-evaluation p{
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 16px;
}

.report-evaluation-contents{
  display: flex;
  justify-content:center;
}

.report-delete{
  text-align:center;
  border: 1px solid #797979;
  border-radius: 10px;
  padding:5px 10px;
  margin: 0 10px;
}

.report-delete:hover{
  color: gray;
  cursor: pointer;
}

/* 再確認のホップアップ */
.report-popup{
  font-size: 16px;
}

#report_reconfirmation{
  opacity: 1;
  position: fixed;
  background: #ffffff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

#report_reconfirmation.hidden {
  display: none;
}

#report_cancel{
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding:10px 0px;
  margin: 28px auto 30px;
  background-color:#fff;
  color: #484b48;
  border: 2px solid #484b48;
  border-radius: 10px;
  transition: background-color 0.2s linear;
}

#report_cancel:hover{
  cursor: pointer;
  color: #fff;
  background-color: #484b48;
}

#report_btn{
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding:10px 0px;
  margin: 28px auto 30px;
  background-color:#fff;
  color: #484b48;
  border: 2px solid #484b48;
  border-radius: 10px;
  transition: background-color 0.2s linear;
}

#report_btn:hover{
  cursor: pointer;
  color: #fff;
  background-color: #484b48;
}

#reconfirmation_cover{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  z-index: 2;
  opacity: 0.8;
}

#reconfirmation_cover.hidden{
  transition: 0.4s;
  display: none;
}
</style>