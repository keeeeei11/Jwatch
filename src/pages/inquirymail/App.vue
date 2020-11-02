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
    <div class="inquiry-title">
      <h2>お問い合わせメール</h2>
    </div>
    <select name="" @change="sortData()" v-model="sortValue">
      <option value="newest">新しい順</option>
      <option value="oldest">古い順</option>
    </select>
    <div v-for="(inquirySingleData, index) in inquiryMultipleData" :key="inquirySingleData.index">
      <div class="inquiry-contents">
      <div class="inquiry-example-contents">
        <div class="inquiry-basic-information">
          <div class="inquiry-basic-information-top">
              <div class="inquiry-name">
                  <p>{{ inquirySingleData.name }}</p>
                  <p>{{ index }}</p>
              </div>
              <div class="inquiry-email">
                <p>{{ inquirySingleData.mailAddress }}</p>
              </div>
          </div>
          <div class="inquiry-basic-information-bottom">
              <div class="inquiry-date">
                  <p>{{ inquirySingleData.created }}</p>
              </div>
          </div>
        </div>
        <div class="inquiry-main-content">
            <div class="inquiry-title">
                <p>{{ inquirySingleData.title }}</p>
            </div>
            <div class="inquiry-text">
                <p>{{ inquirySingleData.body }}</p>
            </div>
        </div>
        <div class="inquiry-evaluation">
          <div class="inquiry-evaluation-contents">
              <div class="inquiry-delete">
                <button @click="deleteData">このお問い合わせを削除する</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  <MoveTopBtn></MoveTopBtn>
  </main>
  </div>
</div>
</template>

<script>
// あとで有効にする
import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import myFirstMixin from '../../mixin/myFirstMixin';
import MoveTopBtn from '../../components/MoveTopBtn.vue';
export default {
  props:{},
  data(){
    return{
      // お問い合わせのデータを格納
      inquiryMultipleData:[],
      sortValue:localStorage.getItem("sortkey"),
    }
  },
  mixins:[
    myFirstMixin
  ],
  components:{
    MoveTopBtn
  },
  methods:{
      // 初回訪問時&ページ更新時にデータを取得する
    getData: function(){
      if(this.sortValue === "newest"){
        const db = firebase.firestore();
        const inquiryData = db.collection("inquiries")
        const displayData = inquiryData.orderBy('created','desc').get()
        .then(querySnapshot => {
          // docにcloud firestoreからのデータが格納されている
            querySnapshot.forEach((doc) => {
            console.log(this.inquiryMultipleData.push(doc.data()));
              localStorage.setItem("sortkey", this.sortValue)
            // inquiryData.add({
            //   index:index
            // })
          })
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
          console.log(displayData)
        });
      } else if (this.sortValue === "oldest"){
          console.log(this.sortValue)
          const db = firebase.firestore();
          const inquiryData = db.collection("inquiries")
          const oldestDisplayData = inquiryData.orderBy('created').get()
          .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                console.log(this.inquiryMultipleData.push(doc.data()));
                localStorage.setItem("sortkey", this.sortValue)
              // inquiryData.add({
              //   index:index
              // })
      })
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
        console.log(oldestDisplayData)
        });
      } else {
        return
      }
    },
    // selectタグの操作時に実行する。ソート後にページを更新してデータを表示させる。。
    sortData: function(){
        if(this.sortValue === "newest"){
            const db = firebase.firestore();
            const inquiryData = db.collection("inquiries")
            const newestDisplayData = inquiryData.orderBy('created','desc').get()
            .then(querySnapshot => {
              querySnapshot.forEach((doc) => {
                  console.log(this.inquiryMultipleData.push(doc.data()));
                  localStorage.setItem("sortkey", this.sortValue)
                  return location.reload();
                // inquiryData.add({
                  //   index:index
                // })
              })
            })
            .catch(function(error) {
              console.log("Error getting documents: ", error);
              console.log(newestDisplayData)
            });
        } else if (this.sortValue === "oldest"){
          const db = firebase.firestore();
          const inquiryData = db.collection("inquiries")
          const oldestDisplayData = inquiryData.orderBy('created').get()
          .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                console.log(this.inquiryMultipleData.push(doc.data()));
                localStorage.setItem("sortkey", this.sortValue)
                return location.reload();
              // inquiryData.add({
              //   index:index
              // })
          })
        })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
            console.log(oldestDisplayData)
          });
        } else {
          console.log("sortError!")
        }
    },
    deleteData: function(){
      // alert('このお問い合わせを削除しますか？')
      alert('テスト')
      // location.href = "http://localhost:8080/inquirymail"
    }
  },
  mounted: function(){
    this.getData();
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
  padding:5px 10px;
  margin: 0 10px;
}

.inquiry-delete button{
   outline: none;
}

.inquiry-delete button:hover{
  cursor: pointer;
}

</style>