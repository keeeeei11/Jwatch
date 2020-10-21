<template>
<div id="app">
    <div class="wrap">
      <Jheader></Jheader>
    <!-- 以下メイン-->
    <main>
        <div class="mypage">
            <div class="mypage-title">
                <p><span class="user-name"></span> さんのマイページ</p>
            </div>
            <div class="mypage-contents">
                <div class="mypage-past-post">
                    <div class="mypage-past-post-title">
                        <h2>過去の投稿</h2>
                        <a href="#">もっと見る</a>
                    </div>
                    <div class="mypage-past-post-contents">
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
                <div class="mypage-past-request">
                    <div class="mypage-past-request-title">
                        <h2>過去の質問</h2>
                        <a href="#">もっと見る</a>
                        </div>
                    <div class="mypage-past-request-contents">
                        <div class="request-example-contents">
                            <div class="request-basic-information">
                                <div class="request-basic-information-top">
                                    <div class="request-name">
                                        <p>〇〇さん</p>
                                    </div>
                                    <div class="request-warning">
                                    </div>
                                    <div class="request-date">
                                        <p>2000/1/1</p>
                                    </div>
                                </div>
                                <div class="request-basic-information-bottom">
                                    <div class="request-stadium">
                                        <p>スタジアム</p>
                                    </div>
                                    <div class="request-category">
                                        <p>駐車場</p>
                                    </div>
                                </div>
                            </div>
                            <div class="request-main-content">
                                <div class="request-title">
                                    <p>駐車場からスムーズに出るにはどうしたらよいでしょうか？</p>
                                </div>
                                <div class="request-text">
                                    <p>☆☆スタジアムの駐車場から出場するのに30分程度かかるとのことですが、試合終了後すぐに駐車場から出られる方法はありますか？</p>
                                </div>
                                <div class="request-img">
                                    <img src="" alt="">
                                    <img src="" alt="">
                                    <img src="" alt="">
                                </div>
                            </div>
                            <div class="request-evaluation">
                                <div class="request-evaluation-contents">
                                    <div class="answering">
                                        <p>回答する</p>
                                    </div>
                                    <div class="reporting">
                                        <p>通報する</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="logout">
                    <p class="logout_execute" @click="logoutPopupShow">ログアウトする</p>
                </div>
                <div class="logout-popup" v-if="logoutShow">
                    <section class="logout_reconfirmation">
                        <p>ログアウトしてもよろしいですか？</p>
                        <p class="logout_cancel" @click="logoutPopupHide">戻る</p>
                        <a href="http://localhost:8080/logout/index.html" class="logout_btn">ログアウトする</a>
                    </section>
                </div>
                <div class="delete-account">
                    <p class="delete_execute" @click="deletePopupShow">アカウント削除する</p>
                </div>
                <div class="delete-popup" v-if="deleteShow">
                    <section class="delete_reconfirmation">
                        <p>アカウントを削除してもよろしいですか？</p>
                        <p>一度削除すると元に戻せません</p>
                        <p class="delete_cancel" @click="deletePopupHide">戻る</p>
                        <a href="http://localhost:8080/deleteAccount/index.html" class="delete_btn">削除する</a>
                    </section>
                </div>
              <div class="reconfirmation_cover" v-if="coverShow" @click="popupHide"></div>
            </div>
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
      logoutShow : false,
      deleteShow : false,
      coverShow : false,
    }
  },
  components: {
    Jheader,
    MoveTopBtn,
    Jfooter,
  },
  methods:{
    // ログアウト確認ポップアップの表示
    logoutPopupShow:function(){
      this.logoutShow = true;
      this.coverShow = true
    },
    logoutPopupHide:function(){
      this.logoutShow = false;
      this.coverShow = false
    },
    // アカウント削除確認ポップアップの表示
    deletePopupShow: function(){
      this.deleteShow = true;
        this.coverShow = true
    },
    deletePopupHide:function(){
      this.deleteShow = false;
      this.coverShow = false
    },
    popupHide:function(){
      this.logoutShow = false,
      this.deleteShow = false,
      this.coverShow = false
    }
    
    },
}
</script>

<style>
.wrap{
    overflow: hidden;
}

/*以下メイン*/

main{
    color: rgb(28.8%, 29.6%, 28.8%);
}
.mypage-title{
    text-align: center;
    margin-top: 250px;
    margin-bottom: 50px;
}

.mypage-title p{
    font-size: 32px;
}

.mypage-contents{
    text-align: center;
}

.mypage-contents h2{
    margin-left: 30px;
    font-size: 21px;
}


.mypage-contents a{
    text-decoration: none;
    color: rgb(28.8%, 29.6%, 28.8%);
}

/* 過去の投稿 */
.mypage-past-post-title{
    display: flex;
}

.mypage-past-post-title a{
    padding-top: 20px;
    padding-left: 20px;
}

/*投稿例*/
.post-example-contents{
    width: 70%;
    margin:30px auto;
    padding: 20px 40px 20px;
    border: 2px solid #979797;
    border-radius: 10px;
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

  .post-img{
    display: flex;
}

.post-img img{
    height: auto;
    margin: 30px auto 20px;
    width:30%;
    /* max-width: 80%; */
}

/* 過去の質問 */
.mypage-past-request-title{
    display: flex;
}

.mypage-past-request-title a{
    padding-top: 20px;
    padding-left: 20px;
}

/* リクエスト例 */
.request-example-contents{
    width: 70%;
    margin:30px auto;
    padding: 20px 40px 20px;
    border: 2px solid #979797;
    border-radius: 10px;
  }

  .request-basic-information{
  display: block;
  }

  .request-basic-information-top{
  display: flex;
  height: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
  }

  .request-basic-information-bottom{
  display: flex;
  justify-content: space-around;
  }

  .request-name{
    font-size: 21px;
  }

  .request-stadium{
    font-size: 18px;
  }

  .request-category{
    font-size: 18px;
  }

  .request-date{
    font-size: 18px;
  }

  .request-title p{
    text-align: center;
    font-size: 21px;
  }

  .request-text{
    margin: 25px 0;
    padding: 0 30px;
    text-align: left;
  }

  .request-text p{
    font-size: 18px;
  }

  .request-evaluation p{
    margin-block-start: 0em;
    margin-block-end: 0em;
    font-size: 16px;
  }

  .request-evaluation-contents{
    display: flex;
    justify-content:center;
  }

  .answering, .reporting{
    text-align:center;
    border: 1px solid #797979;
    border-radius: 10px;
    padding:5px 10px;
    margin: 0 10px;
  }
/* ログアウト */
.logout_execute{
    font-size: 16px;
    width:250px;
    text-align: center;
    margin: 70px auto;
    padding: 20px 45px;
    color: #484b48;
    text-decoration: none;
    border:2px solid #484b48;
    background-color: #fff;
    border-radius: 10px;
    transition: background-color 0.3s linear;
}

.logout_execute:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;
}

/* アカウント削除 */
.delete_execute{
    font-size: 16px;
    width:250px;
    text-align: center;
    margin: 70px auto;
}

.delete_execute {
    padding: 20px 30px;
    color: #484b48;
    text-decoration: none;
    border:2px solid #484b48;
    background-color: #fff;
    border-radius: 10px;
    transition: background-color 0.4s linear;
}

.delete_execute:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

/* 再確認のホップアップ */

.delete-popup, .delete-popup{
    font-size: 18px;
}

.logout_reconfirmation, .delete_reconfirmation{
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

.logout_cancel, .delete_cancel{
    width: 350px;
    display: block;
    text-decoration: none;
    text-align: center;
    padding:10px 0px;
    margin: 28px auto 30px;
    background-color:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
    transition: background-color 0.4s linear;
}

.logout_cancel:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

.delete_cancel:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

.logout_btn, .delete_btn{
    width: 350px;
    display: block;
    text-decoration: none;
    text-align: center;
    padding:10px 0px;
    margin: 28px auto 30px;
    background:#ffffff;
    color: #484b48;
    border-radius: 10px;
    border: 2px solid #484b48;
}

.logout_btn:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

.delete_btn:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}


.reconfirmation_cover{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: gainsboro;
    z-index: 2;
    opacity: 0.8;
}

.reconfirmation_cover.hidden{
    transition: 0.4s;
    display: none;
}

@media (max-width:959px ){
/* メイン */
/* 自己紹介 */
textarea{
  margin: 0 10%;
  width: 80%;
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
/* 質問内容 */
.request-example-contents{
  width: 80%;
  margin: 10% auto;
}

.request-name{
  font-size: 18px;
  }

  .request-stadium{
  font-size: 16px;
  }

  .request-category{
  font-size: 16px;
  }

  .request-date{
  font-size: 16px;
  }
}

@media (max-width:559px ){
/* メイン */
.mypage-title h1{
  font-size: 28px;
}

.mypage-contents h2{
  font-size: 18px;
}

/* 名前 */
.mypage-name-contents p{
  font-size: 18px;
}
/* 投稿内容 */
.post-example-contents{
  padding: 20px;
}

.post-title p{
  text-align: center;
  font-size: 18px;
}
.post-text{
  margin:10px 0;
  padding:0 10px;
}

.post-name{
  font-size:18px;
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

/* 質問内容 */

.request-example-contents{
  padding: 20px;
}
.request-title p{
  text-align: center;
  font-size: 18px;
}

.request-text{
  margin:10px 0;
  padding:0 10px;
}

.request-text p{
  font-size: 16px;
}

.request-basic-information-bottom{
  display: block;
}
.request-basic-information-bottom p{
  text-align: center;
}

.request-evaluation p{
  font-size: 14px;
}

/* 再確認のホップアップ */
.logout-popup, .delete-popup{
  font-size: 16px;
}

.logout_execute{
  font-size: 16px;
}

.delete_execute{
  font-size: 16px;
}

.logout_btn, .delete_btn{
  font-size: 16px;
  padding:10px 0;
  width:350px;
}

}
</style>