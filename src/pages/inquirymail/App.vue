<template>
<div id="app">
    <div class="wrap">
  <header>
    <div class="header-contents">
      <div class="header-title">
        <a href="http://127.0.0.1:5501/public/usermanagement/management/management.html">管理者画面</a>
      </div>
      <div class="header-menu">
        <a href="http://127.0.0.1:5501/public/usermanagement/reportlist/reportlist.html">通報一覧</a>
        <a href="http://127.0.0.1:5501/public/usermanagement/inquirymail/inquirymail.html">お問い合わせメール</a>
      </div>
    </div>
  </header>
  <main>
    <div class="inquiry-title">
      <h2>お問い合わせメール</h2>
    </div>
    <div class="inquiry-contents">
      <div class="inquiry-example-contents">
        <div class="inquiry-basic-information">
          <div class="inquiry-basic-information-top">
              <div class="inquiry-name">
                  <p id="inquiry_username">〇〇さん</p>
              </div>
              <div class="inquiry-email">
                <p id="inquiry_email">〇〇@gmail.com</p>
              </div>
            </div>
            <div class="inquiry-basic-information-bottom">
              <div class="inquiry-date">
                  <p id="inquiry_date">2000/1/1</p>
              </div>
          </div>
        </div>
        <div class="inquiry-main-content">
            <div class="inquiry-title">
                <p id="inquiry_title">次回試合情報を記載してください</p>
            </div>
            <div class="inquiry-text">
                <p id="inquiry_body">次回試合情報(日程,対戦相手など)を記載していただけると、より一層便利になると思うのですがどうでしょうか？</p>
            </div>
        </div>
        <div class="inquiry-evaluation">
          <div class="inquiry-evaluation-contents">
              <div class="inquiry-delete">
                <p id="inquiry_execute">削除する</p>
              </div>
          </div>
      </div>
      </div>
    </div>
      <div class="inquiry-example-contents">
        <div class="inquiry-basic-information">
          <div class="inquiry-basic-information-top">
              <div class="inquiry-name">
                  <p id="inquiry_username">〇〇さん</p>
              </div>
              <div class="inquiry-email">
                <p id="inquiry_email">〇〇@gmail.com</p>
              </div>
            </div>
            <div class="inquiry-basic-information-bottom">
              <div class="inquiry-date">
                  <p id="inquiry_date">2000/1/1</p>
              </div>
          </div>
        </div>
        <div class="inquiry-main-content">
            <div class="inquiry-title">
                <p id="inquiry_title">次回試合情報を記載してください</p>
            </div>
            <div class="inquiry-text">
                <p id="inquiry_body">次回試合情報(日程,対戦相手など)を記載していただけると、より一層便利になると思うのですがどうでしょうか？</p>
            </div>
        </div>
        <div class="inquiry-evaluation">
          <div class="inquiry-evaluation-contents">
              <div class="inquiry-delete">
                  <p id="inquiry_execute">削除する</p>
              </div>
          </div>
        </div>
      </div>
      <div class="inquiry-popup">
        <section id="inquiry_reconfirmation" class="hidden">
            <p>このお問い合わせ内容を削除してもよろしいですか？</p>
            <p id="inquiry_cancel">戻る</p>
            <a href="#" id="inquiry_btn">削除する</a>
        </section>
      </div>
      <div id="reconfirmation_cover" class="hidden"></div>
  </main>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  methods:{

  }
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

.inquiry-title{
  text-align: center;
}

/*投稿例*/
.inquiry-example-contents{
  width: 70%;
  margin:30px auto;
  padding: 20px 40px 20px;
  border: 2px solid #979797;
  border-radius: 10px;
}

.inquiry-basic-information{
display: block;
}

.inquiry-basic-information-top{
display: flex;
height: 30px;
margin-bottom: 30px;
justify-content: space-around;
}

.inquiry-basic-information-bottom{
display: flex;
justify-content: space-around;
}

.inquiry-name{
  font-size: 21px;
}

.inquiry-stadium{
  font-size: 18px;
}

.inquiry-category{
  font-size: 18px;
}

.inquiry-date{
  font-size: 18px;
}

.inquiry-title p{
  text-align: center;
  font-size: 21px;
}

.inquiry-text{
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
}

.inquiry-text p{
  font-size: 18px;
}

.inquiry-evaluation p{
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 16px;
}

.inquiry-evaluation-contents{
  display: flex;
  justify-content:center;
}

.inquiry-delete{
  text-align:center;
  border: 1px solid #797979;
  border-radius: 10px;
  padding:5px 10px;
  margin: 0 10px;
}

.inquiry-delete:hover{
  color: gray;
  cursor: pointer;
}

/* 再確認のホップアップ */
.inquiry-popup{
  font-size: 16px;
}

#inquiry_reconfirmation{
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

#inquiry_reconfirmation.hidden {
  display: none;
}

#inquiry_cancel{
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

#inquiry_cancel:hover{
  cursor: pointer;
  color: #fff;
  background-color: #484b48;
}

#inquiry_btn{
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

#inquiry_btn:hover{
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