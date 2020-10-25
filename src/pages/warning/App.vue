<template>
<div id="app">
  <div class="wrap">
      <Jheader></Jheader>
    <main>
        <div class="warning">
            <PageTitle title="About warning" description="投稿禁止対象に関する情報が記載されています"></PageTitle>
            <div class="warning-contents">
                <div class="warning-discriptions">
                    <div class="warning-discription discription">
                        <p>1.特定のチーム、選手、サポーターへの暴言が投稿の中に含まれている。<br>
                        2.有害なサイトへの誘導等。<br>
                        3.重複する内容を過剰に連投する行為。<br>
                        4.その他閲覧者を攻撃する内容が含まれていると運営が判断した場合。</p>
                    </div>
                </div>
                <div class="warning-please">
                    <p>健全なサイト運営にご協力よろしくお願い致します。</p>
                </div>
            </div>
            <div class="contact-nav">
                <h3>当サイトについてご不明な点がございましたら以下よりお尋ねください。</h3>
                    <a href="https://jwatch-8411c.web.app/inquiry/index.html">
                        <div class="contact-nav-contents">
                            <div class="contact-nav-ja">
                                <p>ご意見＆ご要望はこちらから</p>
                            </div>
                            <div class="contact-nav-en">
                                <p>Contact</p>
                            </div>
                        </div>
                    </a>
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
import PageTitle from "../../components/PageTitle.vue"
import MoveTopBtn from "../../components/MoveTopBtn.vue"
import Jfooter from "../../components/Jfooter.vue"
export default {
  name: 'App',
  components: {
    Jheader,
    PageTitle,
    MoveTopBtn,
    Jfooter,
  },
};
</script>

<style>
/*以下ヘッダー*/
.wrap{
    overflow: hidden;
}

/*以下メイン*/

main{
    color:rgb(28.8%, 29.6%, 28.8%);
}

/*警告の詳細*/

.warning-contents{
    width: 60%;
    margin:100px auto;
}

.discription p{
    font-size: 18px;
    line-height: 3.0em;
}

.warning-please{
    margin: 50px auto;
    text-align: center;
    font-size: 18px;
}
/*問いかけ部分*/
.contact-nav h3{
    text-align: center;
    font-weight: normal;
    font-size: 18px;
}

.contact-nav a{
    width: 100vw;
    height: 300px;
    margin-top: 50px;
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

.contact-nav a:hover{
    background-color: #202020;
}

.contact-nav-contants{
    display: block;
    font-size: 18px;
}

@media (max-width:959px)
{
/*警告の詳細*/

.warning-discription{
    text-align: center;
}

.warning-discription p{
    display: inline-block;
    text-align: left;
}
}


@media (max-width:559px)
{
/* メイン */
/* 警告内容 */

.discription p{
    font-size: 16px;
}

.warning-please{
    padding: 0 10px;
    font-size: 16px;
}

/*問いかけ部分*/
.contact-nav h3{
    font-size: 16px;
}

.contact-nav a{
    height: 200px;
}

.contact-nav-contants{
    padding: 0 10px;
    font-size: 16px;
}
}
</style>