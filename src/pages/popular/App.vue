<template>
<div id="app">
      <div class="wrap">
      <Jheader></Jheader>
    <main>
        <div class="popular">
            <PageTitle title="Popular posts" description="人気のある投稿が記載されています。チームやリーグごとに情報を絞ることも可能です。"></PageTitle>
            <div class="choose-stadium">
                <form action="#" method="POST" class="filtering">
                  <select name="filtering-box" class="filtering-box box" size="1" id="stadium_list">
                    <option value="スタジアムを選択してください" style="display: none;">--スタジアム名を選択してください--</option>
                    <option value="全チーム">全チーム</option>
                    <option value="" disabled>--リーグ--</option>
                    <option value="J1">J1</option>
                    <option value="J2">J2</option>
                    <option value="J3">J3</option>
                    <option value="" disabled>--北海道--</option>
                    <option value="[コンサドーレ札幌] 札幌厚別公園競技場">[コンサドーレ札幌] 札幌厚別公園競技場</option>
                    <option value="[コンサドーレ札幌] 札幌ドーム">[コンサドーレ札幌] 札幌ドーム</option>
                    <option value="" disabled>--東北--</option>
                    <option value="[ヴァンラーレ八戸] プライフーズスタジアム">[ヴァンラーレ八戸] プライフーズスタジアム</option>
                    <option value="[いわてグルージャ盛岡] いわぎんスタジアム">[いわてグルージャ盛岡] いわぎんスタジアム</option>
                    <option value="[いわてグルージャ盛岡] 北上総合運動公園北上陸上競技場">[いわてグルージャ盛岡] 北上総合運動公園北上陸上競技場</option>
                    <option value="[ベガルタ仙台] ユアテックスタジアム仙台">[ベガルタ仙台] ユアテックスタジアム仙台</option>
                    <option value="[ブラウブリッツ秋田] ソユースタジアム">[ブラウブリッツ秋田] ソユースタジアム</option>
                    <option value="[モンテディオ山形] ＮＤソフトスタジアム山形">[モンテディオ山形] ＮＤソフトスタジアム山形</option>
                    <option value="[福島ユナイテッドFC] 郡山西部サッカー場">[福島ユナイテッドFC] 郡山西部サッカー場</option>
                    <option value="[福島ユナイテッドFC] とうほう・みんなのスタジアム">[福島ユナイテッドFC] とうほう・みんなのスタジアム</option>
                    <option value="[福島ユナイテッドFC] 会津総合運動公園あいづ陸上競技場">[福島ユナイテッドFC] 会津総合運動公園あいづ陸上競技場</option>
                    <option value="" disabled>--関東--</option>
                    <option value="[鹿島アントラーズ] 県立カシマサッカースタジアム">[鹿島アントラーズ] 県立カシマサッカースタジアム</option>
                    <option value="[水戸ホーリーホック] ケーズデンキスタジアム水戸">[水戸ホーリーホック] ケーズデンキスタジアム水戸</option>
                    <option value="[栃木SC] 栃木県グリーンスタジアム">[栃木SC] 栃木県グリーンスタジアム</option>
                    <option value="[栃木SC] カンセキスタジアムとちぎ">[栃木SC] カンセキスタジアムとちぎ</option>
                    <option value="[ザスパクサツ群馬] 正田醤油スタジアム群馬">[ザスパクサツ群馬] 正田醤油スタジアム群馬</option>
                    <option value="[浦和レッドダイヤモンズ] 浦和駒場スタジアム">[浦和レッドダイヤモンズ] 浦和駒場スタジアム</option>
                    <option value="[浦和レッドダイヤモンズ] 埼玉スタジアム２００２">[浦和レッドダイヤモンズ] 埼玉スタジアム２００２</option>
                    <option value="[大宮アルディージャ] ＮＡＣＫ５スタジアム大宮">[大宮アルディージャ] ＮＡＣＫ５スタジアム大宮</option>
                    <option value="[柏レイソル] 三協フロンテア柏スタジアム">[柏レイソル] 三協フロンテア柏スタジアム</option>
                    <option value="[ジェフユナイテッド千葉] フクダ電子アリーナ">[ジェフユナイテッド千葉] フクダ電子アリーナ</option>
                    <option value="[FC東京] 味の素スタジアム">[FC東京] 味の素スタジアム</option>
                    <option value="[東京ヴェルディ] 味の素スタジアム">[東京ヴェルディ] 味の素スタジアム</option>
                    <option value="[FC町田ゼルビア] 町田ＧＩＯＮスタジアム">[FC町田ゼルビア] 町田ＧＩＯＮスタジアム</option>
                    <option value="[東京ヴェルディ] 味の素フィールド西が丘">[東京ヴェルディ] 味の素フィールド西が丘</option>
                    <option value="[川崎フロンターレ] 等々力陸上競技場">[川崎フロンターレ] 等々力陸上競技場</option>
                    <option value="[横浜F・マリノス] 日産スタジアム">[横浜F・マリノス] 日産スタジアム</option>
                    <option value="[湘南ベルマーレ] Ｓｈｏｎａｎ ＢＭＷ スタジアム平塚">[湘南ベルマーレ] Ｓｈｏｎａｎ ＢＭＷ スタジアム平塚</option>
                    <option value="[横浜F・マリノス] ニッパツ三ツ沢球技場">[横浜F・マリノス] ニッパツ三ツ沢球技場</option>
                    <option value="[横浜FC] ニッパツ三ツ沢球技場">[横浜FC] ニッパツ三ツ沢球技場</option>
                    <option value="[Y.S.C.C. 横浜] ニッパツ三ツ沢球技場">[Y.S.C.C. 横浜] ニッパツ三ツ沢球技場</option>
                    <option value="[SC相模原] 相模原ギオンスタジアム">[SC相模原] 相模原ギオンスタジアム</option>
                    <option value="" disabled>--北陸--</option>
                    <option value="[アルビレックス新潟] デンカビッグスワンスタジアム">[アルビレックス新潟] デンカビッグスワンスタジアム</option>
                    <option value="[カターレ富山] 富山県総合運動公園陸上競技場">[カターレ富山] 富山県総合運動公園陸上競技場</option>
                    <option value="">[ツエーゲン金沢] 石川県西部緑地公園陸上競技場</option>
                    <option value="[ツエーゲン金沢] 石川県西部緑地公園陸上競技場">[カターレ富山] テクノポート福井スタジアム</option>
                    <option value="" disabled>--甲信越--</option>
                    <option value="[ヴァンフォーレ甲府] 山梨中銀スタジアム">[ヴァンフォーレ甲府] 山梨中銀スタジアム</option>
                    <option value="[松本山雅FC] サンプロ アルウィン">[松本山雅FC] サンプロ アルウィン</option>
                    <option value="[AC長野パルセイロ] 長野Ｕスタジアム">[AC長野パルセイロ] 長野Ｕスタジアム</option>
                    <option value="[FC岐阜] 岐阜メモリアルセンター長良川競技場">[FC岐阜] 岐阜メモリアルセンター長良川競技場</option>
                    <option value="" disabled>--東海--</option>
                    <option value="[ジュビロ磐田] ヤマハスタジアム">[ジュビロ磐田] ヤマハスタジアム</option>
                    <option value="[清水エスパルス] ＩＡＩスタジアム日本平">[清水エスパルス] ＩＡＩスタジアム日本平</option>
                    <option value="[アスルクラロ沼津] 愛鷹広域公園多目的競技場">[アスルクラロ沼津] 愛鷹広域公園多目的競技場</option>
                    <option value="[藤枝MYFC] 藤枝総合運動公園サッカー場">[藤枝MYFC] 藤枝総合運動公園サッカー場</option>
                    <option value="[名古屋グランパス] 豊田スタジアム">[名古屋グランパス] 豊田スタジアム</option>
                    <option value="[名古屋グランパス] パロマ瑞穂スタジアム">[名古屋グランパス] パロマ瑞穂スタジアム</option>
                    <option value="" disabled>--近畿--</option>
                    <option value="[京都サンガF.C.] たけびしスタジアム京都">[京都サンガF.C.] たけびしスタジアム京都</option>
                    <option value="[京都サンガF.C.] サンガスタジアム ｂｙ ＫＹＯＣＥＲＡ">[京都サンガF.C.] サンガスタジアム ｂｙ ＫＹＯＣＥＲＡ</option>
                    <option value="[セレッソ大阪] ヤンマースタジアム長居">[セレッソ大阪] ヤンマースタジアム長居</option>
                    <option value="[ガンバ大阪] パナソニック スタジアム 吹田">[ガンバ大阪] パナソニック スタジアム 吹田</option>
                    <option value="[ヴィッセル神戸] ノエビアスタジアム神戸">[ヴィッセル神戸] ノエビアスタジアム神戸</option>
                    <option value="" disabled>--中国--</option>
                    <option value="[ガイナーレ鳥取] Ａｘｉｓバードスタジアム">[ガイナーレ鳥取] Ａｘｉｓバードスタジアム</option>
                    <option value="[ガイナーレ鳥取] チュウブＹＡＪＩＮスタジアム">[ガイナーレ鳥取] チュウブＹＡＪＩＮスタジアム</option>
                    <option value="[ファジアーノ岡山] シティライトスタジアム">[ファジアーノ岡山] シティライトスタジアム</option>
                    <option value="[サンフレッチェ広島] エディオンスタジアム広島<">[サンフレッチェ広島] エディオンスタジアム広島</option>
                    <option value="[レノファ山口FC] 維新みらいふスタジアム">[レノファ山口FC] 維新みらいふスタジアム</option>
                    <option value="[レノファ山口FC] セービング陸上競技場<">[レノファ山口FC] セービング陸上競技場</option>
                    <option value="" disabled>--四国--</option>
                    <option value="[徳島ヴォルティス] 鳴門・大塚スポーツパーク ポカリスエットスタジアム">[徳島ヴォルティス] 鳴門・大塚スポーツパーク ポカリスエットスタジアム</option>
                    <option value="[カマタマーレ讃岐] Ｐｉｋａｒａスタジアム">[カマタマーレ讃岐] Ｐｉｋａｒａスタジアム</option>
                    <option value="[愛媛FC] ニンジニアスタジアム">[愛媛FC] ニンジニアスタジアム</option>
                    <option value="[FC今治] ありがとうサービス．夢スタジアム">[FC今治] ありがとうサービス．夢スタジアム</option>
                    <option value="" disabled>--九州--</option>
                    <option value="[アビスパ福岡] ベスト電器スタジアム">[アビスパ福岡] ベスト電器スタジアム</option>
                    <option value="[ギラヴァンツ北九州] ミクニワールドスタジアム北九州">[ギラヴァンツ北九州] ミクニワールドスタジアム北九州</option>
                    <option value="[サガン鳥栖] 駅前不動産スタジアム">[サガン鳥栖] 駅前不動産スタジアム</option>
                    <option value="[V・ファーレン長崎] トランスコスモススタジアム長崎">[V・ファーレン長崎] トランスコスモススタジアム長崎</option>
                    <option value="[ロアッソ熊本] えがお健康スタジアム">[ロアッソ熊本] えがお健康スタジアム</option>
                    <option value="[大分トリニータ] 昭和電工ドーム大分">[大分トリニータ] 昭和電工ドーム大分</option>
                    <option value="[鹿児島ユナイテッドFC] 白波スタジアム">[鹿児島ユナイテッドFC] 白波スタジアム</option>
                    <option value="" disabled>--沖縄--</option>
                    <option value="[FC琉球] タピック県総ひやごんスタジアム">[FC琉球] タピック県総ひやごんスタジアム</option>
                </select>
                </form>
                <div class="display-order">
                  <form action="#" method="POST">
                    <select name="display-order-box" class="display-order-box box" id="">
                      <option value="いいねが多い順">いいねが多い順</option>
                    </select>
                  </form>
                </div>
              </div>
              <div class="popular-posts">
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
        </div>
    <MoveTopBtn></MoveTopBtn>
    </main>
    <Jfooter></Jfooter>
    </div>
</div>
</template>

<script>
// import firebase from "firebase";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Jheader from "../../components/Jheader.vue"
import PageTitle from "../../components/PageTitle.vue"
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
    PageTitle,
    MoveTopBtn,
    Jfooter,
  },
  methods:{

  }
};
</script>

<style>
.wrap{
    overflow: hidden;
}
/*以下メイン*/
main{
  color:rgb(28.8%, 29.6%, 28.8%);
  margin: auto 50px;
}
.choose-stadium {
  margin-top: 100px;
  text-align: center;
}

.filtering-box{
  width: 60%;
  height: 40px;
  font-size: 18px;
  margin-bottom: 40px;
}

.display-order{
  text-align: right;
  margin-right: 20%;
}

.display-order-box{
  width: 200px;
  height: 40px;
  font-size: 16px;
}
/*人気の投稿*/

.popular-posts{
    margin: 50px 0;
}

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

  .post-date{
    font-size: 18px;
  }
  .post-stadium{
    font-size: 18px;
  }

  .post-category{
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

@media (max-width:959px ){
}

@media (max-width:559px ){
/* メイン */
.filtering-box{
font-size: 16px;
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

.post-text p{
  font-size: 16px;
}

.post-basic-information-bottom{
  display: block;
}
.post-basic-information-bottom p{
  text-align: center;
}

.post-name{
  font-size: 18px;
}

.post-date{
  font-size: 16px;
}
.post-stadium{
  font-size: 16px;
}

.post-category{
  font-size: 16px;
}

.post-evaluation p{
  font-size: 14px;
}
/* タイトル */
.answer-reception-title h1{
  font-size: 36px;
}

.answer-reception-title p{
  font-size: 18px;
  line-height: 1.8em;
}
}
</style>