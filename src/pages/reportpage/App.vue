<template>
<div id="app">
    <div class="wrap">
      <Jheader></Jheader>
    <!-- 以下メイン-->
    <main>
        <div class="report-page">
            <div class="report-page-title">
                <h1>Report page</h1>
                <p>投稿を通報するページです</p>
            </div>
            <div class="report-page-contants">
                <div class="report-page-post">
                    <h3>選択した投稿</h3>
                    <div class="post-example-contents">
                        <div class="post-basic-information">
                        <div class="post-basic-information-top">
                            <div class="post-name">
                                <p>〇〇さん</p>
                            </div>
                            <div class="post-date">
                                <p>2000/1/1</p>
                            </div>
                        </div>
                        <div class="post-basic-information-bottom">
                            <div class="post-stadium">
                                <p>☆☆スタジアム</p>
                            </div>
                            <div class="post-category">
                                <p>スタジアムグルメ</p>
                            </div>
                        </div>
                        </div>
                        <div class="post-main-content">
                            <div class="post-title">
                                <p>△△の唐揚げがとても美味しかったです</p>
                            </div>
                            <div class="post-text">
                                <p>ここの唐揚げは出来たてを提供してくれます。また値段も低価格で観戦の際はいつも購入しています！是非購入してみてください！</p>
                            </div>
                            <div class="post-img">
                                <img src="img/3602761_s.jpg" alt="">
                                <img src="img/2396379_s.jpg" alt="">
                            </div>
                        </div>
                        <div class="post-evaluation">
                            <div class="post-evaluation-contents">
                                <div class="good-count">
                                    <p>役に立った！ 6</p>
                                </div>
                                <div class="reporting">
                                    <p>通報する</p>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <form action="#" method="POST" class="report-page-reason">
                    <select name="report-page-reason-box" class="report-page-reason-box" id="report_list" size="1">
                        <option value="" style="display: none;">--通報の理由(必須)--</option>
                        <option value="特定のチーム、選手、サポーターへの誹謗中傷">特定のチーム、選手、サポーターへの誹謗中傷</option>
                        <option value="有害なサイトへの誘導">有害なサイトへの誘導</option>
                        <option value="重複する内容を過剰に連投する行為">重複する内容を過剰に連投する行為</option>
                        <option value="その他">その他</option>
                    </select>
                    <p>警告対象となる行為については<a href="https://jwatch-48c7e.web.app/warning/warning.html" target="_brank" rel="nofollow noopener noreferrer">こちら</a>をご覧ください。</p>
                </form>
                <form action="#" method="POST" class="report-page-reason-text">
                    <h3>詳細を下記フォームにご記入ください(省略可)</h3>
                    <div id="body_box">
                        <textarea class="contant" placeholder="400字以内で入力してください" maxlength="400" minlength="1"></textarea><br>
                            <!-- <div class="count-character">
                                <p>残り{{ 400 - character.length }}字です</p>
                            </div> -->
                    </div>
                    <p class="execute" @click="postPopupShow">送信する</p>
                </form>
                <section class="reconfirmation" v-if="popupShow">
                    <p>この内容で送信してもよろしいですか？</p>
                    <p class="cancel" @click="popupHide">戻る</p>
                    <form action="">
                        <input type="submit" class="post-btn" value="送信する">
                    </form>
                </section>
                <div class="reconfirmation-cover" v-if="coverShow" @click="popupHide"></div>
            </div>
        </div>
    <MoveTopBtn></MoveTopBtn>
    </main>
    <!--以下フッター-->
    <Jfooter></Jfooter>
    </div>
</div>
</template>

<script>
import Jheader from "../../components/Jheader.vue"
import MoveTopBtn from "../../components/MoveTopBtn.vue"
import Jfooter from "../../components/Jfooter.vue"
export default {
  name: 'App',
  data(){
    return {
        popupShow: false,
        coverShow: false
    }
  },
  components: {
    Jheader,
    MoveTopBtn,
    Jfooter,
  },
  methods:{
      postPopupShow: function(){
      this.popupShow = true,
      this.coverShow = true
      },
      popupHide: function(){
      this.popupShow = false,
      this.coverShow = false
      }
  }
};
</script>

<style>
.wrap{
    overflow: hidden;
}
/*以下メイン*/

main{
    color: rgb(28.8%, 29.6%, 28.8%);
}
/*タイトル*/
.report-page-title{
    margin-left: 20%;
    margin-top: 250px;
}

.report-page-title h1{
    font-size: 48px;
}

.report-page-title p{
    font-size: 21px;
}

/*対象の投稿を挿入する*/

.report-page-contants{
    text-align: center;
    margin: 100px 0;
    margin-left: 10%;
    padding: 50px 80px;
    background-color: #f2f2f2;
}

.report-page-post h3{
    font-size: 32px;
}

/* 対象の投稿 */

/*投稿例*/
.post-example-contents{
    width: 70%;
    margin:30px auto;
    padding: 20px 40px 20px;
    border: 2px solid #979797;
    border-radius: 10px;
    background-color: #fff;
  }

  .post-basic-information{
  display: block;
  }

  .post-basic-information-top{
  display: flex;
  height: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
  }

  .post-basic-information-bottom{
  display: flex;
  justify-content: space-around;
  }

  .post-name{
    font-size: 21px;
  }

  .post-stadium{
    font-size: 18px;
  }

  .post-category{
    font-size: 18px;
  }

  .post-date{
    font-size: 18px;
  }

  .post-title p{
    text-align: center;
    font-size: 21px;
  }

  .post-text{
    margin: 25px 0;
    padding: 0 30px;
    text-align: left;
  }

  .post-text p{
    font-size: 18px;
  }

  .post-evaluation p{
    margin-block-start: 0em;
    margin-block-end: 0em;
    font-size: 16px;
  }

  .post-evaluation-contents{
    display: flex;
    justify-content:center;
  }

  .good-count, .reporting{
    text-align:center;
    border: 1px solid #797979;
    border-radius: 10px;
    padding:5px 10px;
    margin: 0 10px;
  }
/*通報の理由*/

.report-page-reason{
    margin: 30px 0;
}

.report-page-reason-box{
    height: 40px;
    width:50%;
    font-size: 18px;
    color: rgb(28.8%, 29.6%, 28.8%);
    border-radius: 10px;
}

.report-page-reason p{
    font-size: 18px;
}

.report-page-reason a{
    color: rgb(28.8%, 29.6%, 28.8%);
    text-decoration: none;
    position: relative;
    display: inline-block;
}

.report-page-reason a::after{
    position: absolute;
    bottom: -2px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
}
.report-page-reason a:hover::after{
    transform: scale(1,1);
}

/*自由記述欄*/

.report-page-reason-text h3{
     font-size: 18px;
     font-weight: normal;
}
textarea.contant{
    width:70%;
    height: 400px;
    font-size: 18px;
}

/* 送信ボタン*/
.execute{
    width: 150px;
    font-size: 18px;
    font-weight: 500;
    color: #484b48;
    margin:30px auto;
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    border:2px solid #484b48;
    background-color: #fff;
    transition: background-color 0.4s linear;
}

.execute:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

/* 再確認のホップアップ */
.reconfirmation{
    font-size: 18px;
    opacity: 1;
    width: 450px;
    height: 200px;
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

.cancel{
    font-size: 18px;
    width: 350px;
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    margin: 28px auto 30px;
    background:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
}

.cancel:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}


.post-btn{
    font-size: 18px;
    border: none;
    padding: 10px;
    text-align: center;
    width: 370px;
    outline: none;
    background:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
}

.post-btn:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

.reconfirmation-cover{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: gainsboro;
    z-index: 2;
    opacity: 0.8;
}
@media (max-width:959px ){
/* メイン */
/* タイトル */
.report-page-title{
margin-left: 10%;
}

/* 投稿内容 */
.post-example-contents{
  width: 80%;
  margin: 10% auto;
}

.post-name{
font-size: 18px;
}

.post-stadium{
font-size: 16px;
}

.post-category{
font-size: 16px;
}

.post-date{
font-size: 16px;
}

/* 通報内容 */
.report-page-contants{
  margin-left: 0;
}

.report-page-reason-box{
  width: 90%;
}
/*自由記述欄*/
textarea.contant{
  width:90%;
  height: 400px;
  font-size: 18px;
}
}

@media (max-width:559px ){
/* メイン */
/*タイトル*/
.report-page-title h1{
  font-size: 36px;
}

.report-page-title p{
  font-size: 18px;
}
/*対象の投稿を挿入する*/
.report-page-contants{
  padding: 50px 40px;
}

.report-page-post h3{
  font-size: 28px;
}

/* 投稿内容 */
.post-example-contents{
  width: 90%;
  padding: 20px;
}

.post-name p{
  font-size:18px;
}

.post-title p{
  text-align: center;
  font-size: 18px;
}
.post-text{
  margin:10px 0;
  padding:0 10px;
}

.post-text p{
  font-size: 16px;
}

.post-basic-information-bottom{
  display: block;
}
.post-basic-information-bottom p{
  text-align: center;
}

.post-evaluation p{
  font-size: 14px;
}

/*通報の理由*/
.report-page-reason p{
  font-size: 16px;
}

/*自由記述欄*/
.report-page-reason-text h3{
  font-size: 16px;
  font-weight: normal;
}

/* 再確認のホップアップ */
.reconfirmation{
  font-size: 16px;
}

.cancel{
  width: 330px;
}

.post_btn{
  font-size: 16px;
  padding:10px 0;
  width:350px;
}
}
</style>