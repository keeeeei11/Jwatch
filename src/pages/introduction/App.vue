<template>
<div id="app">
  <div class="wrap">
      <Jheader></Jheader>
    <!-- 以下メイン-->
    <main>
    <div class="introduction">
        <PageTitle title="About 管理人" description="管理人からのメッセージ"></PageTitle>
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
    <MoveTopBtn></MoveTopBtn>
    </main>
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

.reason-text p{
    font-size: 18px;
    padding-left: 50px;
    text-align: center;
}

.thought{
    margin-top: 30px;
}

/* タブレット */
@media (max-width:959px )
{
/* メイン */
/* Jwatchの作成理由 */
.reason{
    margin-left: 0;
    text-align: center;
}

.reason-text{
    padding-left: 0px;
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