<template>
<div id="app">
      <div class="wrap">
      <Jheader></Jheader>
    <main>
        <div class="post-imformation">
            <div class="post-title">
                <h1>Post informations</h1>
                <p>観戦情報を投稿しましょう！</p>
            </div>
        </div>
        <div class="attention">
            <div class="attention-title">
                <h2>Points to note</h2>
                <p>注意点</p>
            </div>
            <div class="attention-discriptions">
                <div class="attention-discription01">
                    <p>・一つの投稿で一つのテーマについて記載してください。<br>
                         例)一つの投稿でグルメと交通情報を両方記載する等はお控えください。</p>
                </div>
                <div class="attention-discription02">
                    <p>・警告対象に該当する投稿だと運営が判断した場合、警告させていただくことがあります。(イエローカード)<br>
                         2度警告対象(レッドカード)となった場合は投稿禁止となります。<br>
                         警告対象となる行為は<a href="https://jwatch-48c7e.web.app/warning/warning.html" target="_brank" rel="noopener">こちら</a>をご覧ください。</p>
                </div>
                <div class="attention-discription03">
                    <p>・特定のチームや選手,サポーターへの誹謗中傷は如何なる理由であれ警告対象となります。</p>
                </div>
            </div>
        </div>
        <div class="post-form">
            <div class="post-form-title">
                <h2>Input form</h2>
                <p>入力フォーム</p><br>
            </div>
            <form action="#" method="POST" class="post-stadium">
                <h3>スタジアム</h3>
                <select name="stadiumlist" class="stadium-list-box box" id="stadium_list" size="1">
                    <option value="スタジアムを選択してください" style="display: none;">--スタジアム名を選択してください--</option>
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
            <form action="#" method="POST" class="post-category">
                <h3>カテゴリー</h3>
                <select name="category" class="post-category-box box" id="category_list" size="1">
                    <option value="" style="display: none;">--カテゴリーを選択してください(必須)--</option>
                    <option value="スタジアムグルメ">スタジアムグルメ</option>
                    <option value="交通情報(駐車場や公共交通機関等)">交通情報(駐車場や公共交通機関等)</option>
                    <option value="座席(座席確保・座席の特徴・見やすさ)">座席(座席確保・座席の特徴・見やすさ)</option>
                    <option value="周辺情報(飲食店・ホテル・観光地等)">周辺情報(飲食店・ホテル・観光地等)</option>
                    <option value="チーム特有の情報(ダービーなど)">チーム特有の情報(ダービーなど)</option>
                    <option value="その他">その他</option>
                </select>
            </form>
            <form action="#" method="POST" class="post-title-information">
                <h3>タイトル</h3>
                <input type="text" name="subject" class="post-title-information-box" id="title_box" placeholder="20字以内で入力してください" maxlength="20" minlength="1">
            </form>
            <form action="#" method="POST" class="post-text-information">
                <h3>本文</h3>
                <CharacterCount></CharacterCount>
                <h3>画像(3枚まで)</h3>
                <div class="post-picture">
                    <input type="file" name="picture" class="picture"><br>
                    <input type="file" name="picture" class="picture"><br>
                    <input type="file" name="picture" class="picture"><br>
                </div>
                <p class="execute" @click="postPopupShow">投稿する！</p>
            </form>
            <section class="reconfirmation" v-if="popupShow">
                <p>投稿してもよろしいですか？</p>
                <p class="cancel" @click="popupHide">戻る</p>
                <form action="">
                    <input type="submit" class="post-btn" value="投稿する！">
                </form>
            </section>
            <div class="reconfirmation-cover" v-if="coverShow" @click="popupHide"></div>
            <div class="post-warning">
                <p>※投稿内容が警告対象に当てはらないかもう一度確認してから投稿する！ボタンを押してください。<br>
                    警告対象となる行為は<a href="https://jwatch-48c7e.web.app/warning/warning.html" target="_brank" rel="nofollow noopener noreferrer">こちら</a></p>
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
import CharacterCount from "../../components/CharacterCount.vue"
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
    CharacterCount,
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
    color:rgb(28.8%, 29.6%, 28.8%);
}
/*タイトル*/
.post-title{
    margin-left: 20%;
    margin-top: 250px;
}

.post-title h1{
    font-size: 48px;
}

.post-title p{
    font-size: 21px;
}

/*注意点*/
.attention{
    margin-top: 100px;
    margin-bottom: 50px;
    margin-right: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
}

.attention-title h2{
    font-size: 32px;
}

.attention-title p{
    font-size: 18px;
}


.attention-discriptions{
    font-size: 18px;
    padding-left: 10%;
}

.attention-discriptions p{
    line-height: 2.5em;
}

.attention-discriptions a{
    color: rgb(28.8%, 29.6%, 28.8%);
    position: relative;
    display: inline-block;
    text-decoration: none;

}
.attention-discriptions a::after{
    position: absolute;
    bottom: 8px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
}
.attention-discriptions a:hover::after{
    transform: scale(1,1);
}

.attention-discription01{
    margin-bottom: 30px;
}

.attention-discription02{
    margin-bottom: 30px;
}


.attention-discription03{
    color: #ff0000;
}

/*観戦情報の入力フォーム*/

.post-form{
    margin-top: 100px;
    margin-bottom: 50px;
    margin-left: 10%;
    padding: 100px 80px;
    background-color: #f2f2f2;
    text-align: center;
}

.post-form-title{
    text-align: left;
}

.post-form-title h2{
    font-size: 32px;
}

.post-form-title p{
    font-size: 18px;
}

.post-stadium {
    text-align: center;
}

.post-form h3{
    font-size: 21px;
    font-weight: normal;
}

.post-form p{
    font-size: 18px;
}

.box{
    width: 60%;
    height: 40px;
    font-size: 18px;
    margin-bottom: 40px;
}
/*スタジアムを選択する*/
.post-stadium h3{
    font-size: 21px;
}

/*カテゴリーを選択する*/
.post-category h3{
    font-size: 21px;
}

/* 題名 */
input.post-title-information-box{
    width: 60%;
    height: 40px;
    font-size: 18px;
}

/*画像を挿入*/
.post-picture{
    display: flex;
}
.picture{
    margin: auto;
}

/* 送信ボタン*/
.execute{
    width: 150px;
    font-size: 18px;
    font-weight: 500;
    color: #484b48;
    text-decoration: none;
    border:2px solid #484b48;
    background-color: #fff;
    margin:30px auto;
    padding: 10px 20px;
    border-radius: 10px;
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

/*注意喚起*/

.post-warning p{
    font-size: 18px;
    text-align: center;
    line-height: 2.0em;
}

.post-warning a{
    text-decoration: none;
    color:rgb(28.8%, 29.6%, 28.8%);
    position: relative;
    display: inline-block;
}

.post-warning a::after{
    position: absolute;
    bottom: 2px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
}

.post-warning a:hover::after{
    color: gray;
    transform: scale(1, 1);
}
@media (max-width:959px ){
/* メイン */
/*タイトル*/
.post-title{
  margin-left: 10%;
  margin-top: 250px;
}

/*注意点*/
.attention{
  text-align: center;
  margin-right: 0;
}

.attention-discriptions{
  padding-left: 0;
}

/*観戦情報の入力フォーム*/
.post-form{
  margin-left: 0;
}

.post-form-title{
  text-align: center;
}
/* 選択 */
.box{
  width: 90%;
}

/* 題名 */
input.post-title-information-box{
  width: 90%;
}

/*画像を挿入*/
.post-picture{
  display: block;
}

.picture{
  margin:20px auto;
}
}

@media (max-width:559px ){
  /* ヘッダー */
.post-title h1{
  font-size: 36px;
}
/* メイン */
/*タイトル*/
.post-title p{
  font-size: 18px;
}

.attention-title h2{
  font-size: 28px;
}

.attention-title p{
  font-size: 16px;
}

/*注意点*/
.attention{
  padding: 50px 40px;
}
.attention-discriptions{
  font-size: 16px;
  padding-left: 0;
}
/*観戦情報の入力フォーム*/
.post-form{
  padding: 50px 40px;
}

.post-form h3{
  font-size: 18px;
}

.post-form-title h2{
  font-size: 28px;
}

.post-form-title p{
  font-size: 16px;
}
/* 選択 */
.box{
  font-size: 16px;
}

/* 送信ボタン*/
.execute{
  font-size: 16px;
}

/* 再確認のホップアップ */
.reconfirmation{
  width:350px;
}

.reconfirmation p{
  font-size: 16px;
}

.cancel{
  width: 300px;
}

.post_btn{
  width: 320px;
}

.post_btn p{
  font-size: 16px;
}
/* 注意喚起 */

.post-warning p{
  font-size: 16px;
}
}
</style>