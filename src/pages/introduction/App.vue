<template>
<div id="app">
  <div class="wrap">
      <Jheader></Jheader>
    <!-- 以下メイン-->
    <main>
    <div class="introduction">
        <div class="introduction-title">
            <h1>About 管理人</h1>
            <p>管理人からのメッセージ</p>
        </div>
        <div class="reason">
            <div class="reason-title">
                <h2>Reason</h2>
                <p>Jwatch作成のきっかけ</p>
            </div>
            <div class="reason-text">
                <p>Jリーグってすごく魅力のあるリーグだと思います。</p>
                <p>魅力は本当に色々あるのですが、一つ挙げるとすれば</p>
                <p>年齢性別関係なく誰でも観戦できるというところが挙げられます。</p>
                <p>他国だとスタジアムに入場するときに金属探知機で検査する必要があったり、</p>
                <p>女性がスタジアムに入れなかったり、</p>
                <p>熱心なサポーター同士が殴り合ったりすることもあります。</p>
                <p>でも、そういったJリーグの良さが広まっているかと言われたら</p>
                <p>現状そうではないと思っています。</p>
                <p>特にスタジアム観戦は普段サッカーを見ない人にとって</p>
                <p>結構ハードルが高いと思います。</p>
                <p>そのハードルの高さを低くできたらいいなと思いJwatchを作成しました。</p>
                <p>スタジアムでの観戦をもっと身近にするサービスが必要だと考え、</p>
                <p>皆さんのお力をお借りしていく形で</p>
                <p>試合観戦のハードルを下げるサイトを作りました。</p>
            <div class="thought">
                <p>Jwatchが少しでもJリーグの発展に貢献できればこんなに嬉しいことはありません。</p>
            </div>
            </div>
        </div>
    </div>
    <!-- ページトップに戻るボタン -->
    <div id="scroll_fadein" class="scroll-fadein arrow"></div>
</main>
  <Jfooter></Jfooter>

</div>
</div>
</template>

<script>
import Jheader from "../../components/Jheader.vue"
import Jfooter from "../../components/Jfooter.vue"
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    Jheader,
    Jfooter,
  },
  methods:{

  }
};
</script>

<style>
body{
    font-family:"Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic Pro", Arial, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.wrap{
    overflow: hidden;
}

/*以下メイン*/

main{
    color: #494b49;
}

.introduction-title {
    margin-top: 250px;
    margin-left: 20%;
}

.introduction-title h1{
    font-size: 48px;
}

.introduction-title p{
    font-size: 21px;
}

/* Jwatchの作成理由 */
.reason{
    margin-top: 100px;
    margin-bottom: 50px;
    margin-left: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
}

.reason-title{
    margin-bottom: 30px;
}

.reason-title h2{
    font-size: 32px;
}

.reason-title p{
    font-size: 18px;
}

.reason-text{
    font-size: 18px;
    padding-left: 50px;
    text-align: center;
}

.thought{
    margin-top: 30px;
}

/*ページトップに戻るボタン*/
.scroll-fadein{
    transition: opacity 1s;
    visibility: hidden;
    opacity: 0;
}

.scroll-fadein.is-fadein{
    visibility: visible;
    opacity: 1;
}

.arrow{
    cursor: pointer;
    position: fixed;
    right: 55px;
    bottom: 55px;
    color: #000000;
    background-color: #c0c0c0e1;
    border-radius: 32px;
    padding:30px;
    transition: all 0.2s ease-in-out;
}

.arrow:hover{
    opacity: 0.8;
    bottom:60px;
}

.arrow:before{
    content:"";
    width: 12px;
    height: 12px;
    border-top: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    transform: rotate(-45deg);
    position: absolute;
    left: 22px;
    top: 17px;
}
.arrow:after{
    content:"";
    width: 12px;
    height: 12px;
    border-top: 4px solid #ffffff;
    border-right: 4px solid #ffffff;
    transform: rotate(-45deg);
    position: absolute;
    left: 22px;
    top: 31px;
}

/* タブレット */
@media (max-width:959px )
{
    /* メイン */
    /* タイトル */
    .introduction-title {
        margin-top: 250px;
        margin-left: 10%;
    }

    .introduction-title p{
        font-size: 18px;
    }

    /* Jwatchの作成理由 */
    .reason{
        margin-left: 0;
        text-align: center;
    }

    .reason-text{
        padding-left: 0px;
    }

    #scroll_fadein{
        display: none;
    }
}
/* スマホ */
@media (max-width:559px)
{
    /* メイン */
    .reason{
        padding: 50px 40px;
    }
    .reason p{
        font-size: 16px;
    }
    /* タイトル */
    .introduction-title h1{
        font-size: 36px;
    }

    .introduction-title p{
        font-size: 18px;
    }
    /* Jwatchの作成理由 */
    .reason-title h2{
        font-size: 28px;
    }
}
</style>