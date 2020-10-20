<template>
<div id="app">
      <div class="wrap">
      <Jheader></Jheader>
    <!-- 以下メイン-->
    <main>
        <div class="usage-title">
            <h1>How to use</h1>
            <p>観戦情報の閲覧と投稿、情報のリクエストの方法を記載しています</p>
        </div>
        <div class="search-contents">
            <div class="search-title">
                <h2>How to Search</h2>
                <p>観戦情報の閲覧方法</p>
            </div>
            <div class="search-discription">
                <div class="search-primary-discription">
                    <p>①スタジアムを選択してください。</p>
                    <p>②カテゴリーを選択してください。</p>
                </div>
                <div class="search-secondary-discription">
                    <p>※求めている情報が見つからない場合はその他のカテゴリーにある可能性もあります。</p>
                </div>
            </div>
        </div>
        <div class="search-nav">
            <a href="https://jwatch-48c7e.web.app/searchinformation/searchinformation.html">
                <div class="search-nav-contents nav">
                    <div class="search-nav-ja">
                        <p>観戦情報を探す！</p>
                    </div>
                    <div class="search-nav-en">
                        <p>Let’s search!</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="post-contents">
            <div class="post-title">
                <h2>How to post</h2>
                <p>観戦情報の投稿方法</p>
            </div>
            <div class="post-discription">
                <div class="post-primary-discription">
                    <p>①観戦情報を投稿する！をクリックします</p>
                    <p>②投稿フォームが表示されるのでスタジアム名とカテゴリーを選択してください。</p>
                    <p>③投稿したい内容を入力してください</p>
                </div>
                <div class="post-secondary-discription">
                    <p>※スタジアムの快適な面だけでなく、不便なところも貴重な情報となります。</p>
                </div>
            </div>
        </div>
        <div class="post-example">
            <h3>投稿例</h3>
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
                        <img src="../../assets/3602761_s.jpg" alt="">
                        <img src="../../assets/2396379_s.jpg" alt="">
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
            <div class="post-nav">
                <a href="https://jwatch-48c7e.web.app/posting/posting.html">
                    <div class="post-nav-contents nav">
                        <div class="post-nav-ja">
                            <p>観戦情報を投稿する！</p>
                        </div>
                        <div class="post-nav-en">
                            <p>Let’s post!</p>
                        </div>
                    </div>
                </a>
            </div>
        <div class="request-contents">
            <div class="request-title">
                <h2>How to request</h2>
                <p>情報のリクエスト</p>
            </div>
            <div class="request-discription">
                <div class="request-primary-discription">
                    <p>①情報をリクエストする！をクリックします。</p>
                    <p>②投稿フォームが表示されるのでスタジアム名とカテゴリーを選択してください。</p>
                    <p>③リクエストしたい内容を入力してください。</p>
                </div>
                <div class="request-secondary-discription">
                    <p>※各クラブの公式HPに情報が記載されている場合がありますのでそちらもご確認ください。</p>
                </div>
            </div>
        </div>
            <div class="request-example">
                <h3>投稿例</h3>
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
            <div class="request-nav">
                <a href="https://jwatch-48c7e.web.app/request/request.html">
                    <div class="request-nav-contents">
                        <div class="request-nav-ja nav">
                            <p>観戦情報をリクエストする！</p>
                        </div>
                        <div class="request-nav-en">
                            <p>Let’s request!</p>
                        </div>
                    </div>
                </a>
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
    }
  },
  components: {
    Jheader,
    MoveTopBtn,
    Jfooter,
  },
  methods:{

  }
};
</script>

<style>
/*以下ヘッダー*/
.wrap{
    overflow: hidden;
}
/*以下メイン*/

main{
    color: rgb(28.8%, 29.6%, 28.8%);
}
/*タイトル*/
.usage-title{
    margin-left: 20%;
    margin-top: 250px;
}

.usage-title h1{
    font-size: 48px;
}

.usage-title p{
    font-size: 21px;
}

/*観戦情報の探し方*/

.search-contents{
    margin-top: 100px;
    margin-left: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
}

.search-contents h2{
    font-size: 32px;
}

.search-contents p{
    font-size: 18px;
}

.search-discription{
    padding-left: 10%;
}

.search-discription p{
    line-height: 2.5em;
}

/* 探すボタン */
.search-nav a{
    width: 100vw;
    height: 300px;
    margin-top: 100px;
    background-color: #323232;
    color: #ffffff;
    line-height: 2.5em;
    transition: background-color 0.4s linear;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    text-decoration: none;
}

.search-nav a:hover{
    background-color: #202020;
}

.search-nav-contants{
    display: block;
    font-size: 18px;
}


/*観戦情報の投稿方法*/
.post-contents{
    margin-top: 100px;
    margin-left: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
}

.post-title h2{
    font-size: 32px;
}

.post-title p{
    font-size: 18px;
}

.post-discription{
    margin-top: 50px;
}

.post-discription p{
    font-size: 18px;
    line-height: 2.5em;
}

.post-example h3{
    font-size: 21px;
    text-align: center;
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

  .post-img img{
      height: auto;
      margin: 30px auto 20px;
      width:30%;
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
/* 投稿するボタン */
.post-nav a{
    width: 100vw;
    height: 300px;
    margin-top: 100px;
    background-color: #323232;
    color: #ffffff;
    line-height: 2.5em;
    transition: background-color 0.4s linear;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    text-decoration: none;
}

.post-nav a:hover{
    background-color: #202020;
}

.post-nav-contants{
    display: block;
    font-size: 18px;
}

/* リクエストの方法 */
.request-contents{
    margin-top: 100px;
    margin-left: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
}

.request-title h2{
    font-size: 32px;
}

.request-title p{
    font-size: 18px;
}

.request-discription{
    margin-top: 50px;
}

.request-discription p{
    font-size: 18px;
    line-height: 2.5em;
}

.request-example h3{
    font-size: 21px;
    text-align: center;
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

/* リクエストするボタン */
.request-nav a{
    width: 100vw;
    height: 300px;
    margin-top: 100px;
    background-color: #323232;
    color: #ffffff;
    line-height: 2.5em;
    transition: background-color 0.4s linear;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    text-decoration: none;
}

.request-nav a:hover{
    background-color: #202020;
}

.request-nav-contants{
    display: block;
    font-size: 18px;
}

@media (max-width:959px){
/* メイン */
/* タイトル */
.usage-title{
  margin-left: 10%;
}
/*観戦情報の探し方*/
.search-contents{
  margin-left: 0%;
}

.search-title{
  text-align: center;
}

.search-discription{
  padding-left: 0%;
}

/*観戦情報の投稿方法*/
.post-contents{
  margin-left: 0%;
}

.post-title {
  text-align: center;
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

/* リクエストの方法 */
.request-contents{
  margin-left: 0%;
}

.request-title {
  text-align: center;
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

@media (max-width:559px)
{
/* メイン */
/* タイトル */
.usage-title h1{
  font-size: 36px;
}

.usage-title p{
  font-size: 18px;
}
/*観戦情報の探し方*/
.search-contents{
  padding: 50px 40px;
}

.search-contents h2{
  font-size: 28px;
}

.search-contents p{
  font-size: 16px;
}
/* 探すボタン */
.search-nav a{
  height: 200px;
}

.search-nav-contants{
 font-size: 16px;
}
/*観戦情報の投稿方法*/
.post-contents{
  padding: 50px 40px;
}

.post-title h2{
  font-size: 28px;
}

.post-title p{
  font-size: 16px;
}

.post-discription p{
  font-size: 16px;
}

.post-example h3{
  font-size: 18px;
}

/* 投稿例 */
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

.post-nav a{
  height: 200px;
}

.post-nav-contants{
  font-size: 16px;
}

/* リクエストの方法 */
.request-contents{
  padding: 50px 40px;
}

.request-title h2{
  font-size: 28px;
}

.request-title p{
  font-size: 16px;
}

.request-discription p{
  font-size: 16px;
}
.request-example h3{
  font-size: 18px;
}

/* リクエスト例 */

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

/* リクエストするボタン */
.request-nav a{
  height: 200px;
}

.request-nav-contants{
  font-size: 16px;
}
}
</style>