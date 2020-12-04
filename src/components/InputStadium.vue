<template>
  <div class="input-stadium">
    <h3>スタジアム</h3>
      <select @change="inputStadium" size="1">
      <option value="" selected disabled
        >--スタジアム名を選択してください(必須)--</option
      >
      <option disabled>--北海道--</option>
      <option value="[コンサドーレ札幌] 札幌厚別公園競技場"
        >[コンサドーレ札幌] 札幌厚別公園競技場</option
      >
      <option value="[コンサドーレ札幌] 札幌ドーム"
        >[コンサドーレ札幌] 札幌ドーム</option
      >
      <option disabled>--東北--</option>
      <option value="[ヴァンラーレ八戸] プライフーズスタジアム"
        >[ヴァンラーレ八戸] プライフーズスタジアム</option
      >
      <option value="[いわてグルージャ盛岡] いわぎんスタジアム"
        >[いわてグルージャ盛岡] いわぎんスタジアム</option
      >
      <option
        value="[いわてグルージャ盛岡] 北上総合運動公園北上陸上競技場"
        >[いわてグルージャ盛岡] 北上総合運動公園北上陸上競技場</option
      >
      <option value="[ベガルタ仙台] ユアテックスタジアム仙台"
        >[ベガルタ仙台] ユアテックスタジアム仙台</option
      >
      <option value="[ブラウブリッツ秋田] ソユースタジアム"
        >[ブラウブリッツ秋田] ソユースタジアム</option
      >
      <option value="[モンテディオ山形] ＮＤソフトスタジアム山形"
        >[モンテディオ山形] ＮＤソフトスタジアム山形</option
      >
      <option value="[福島ユナイテッドFC] 郡山西部サッカー場"
        >[福島ユナイテッドFC] 郡山西部サッカー場</option
      >
      <option value="[福島ユナイテッドFC] とうほう・みんなのスタジアム"
        >[福島ユナイテッドFC] とうほう・みんなのスタジアム</option
      >
      <option
        value="[福島ユナイテッドFC] 会津総合運動公園あいづ陸上競技場"
        >[福島ユナイテッドFC] 会津総合運動公園あいづ陸上競技場</option
      >
      <option disabled>--関東--</option>
      <option value="[鹿島アントラーズ] 県立カシマサッカースタジアム"
        >[鹿島アントラーズ] 県立カシマサッカースタジアム</option
      >
      <option value="[水戸ホーリーホック] ケーズデンキスタジアム水戸"
        >[水戸ホーリーホック] ケーズデンキスタジアム水戸</option
      >
      <option value="[栃木SC] 栃木県グリーンスタジアム"
        >[栃木SC] 栃木県グリーンスタジアム</option
      >
      <option value="[栃木SC] カンセキスタジアムとちぎ"
        >[栃木SC] カンセキスタジアムとちぎ</option
      >
      <option value="[ザスパクサツ群馬] 正田醤油スタジアム群馬"
        >[ザスパクサツ群馬] 正田醤油スタジアム群馬</option
      >
      <option value="[浦和レッドダイヤモンズ] 浦和駒場スタジアム"
        >[浦和レッドダイヤモンズ] 浦和駒場スタジアム</option
      >
      <option value="[浦和レッドダイヤモンズ] 埼玉スタジアム２００２"
        >[浦和レッドダイヤモンズ] 埼玉スタジアム２００２</option
      >
      <option value="[大宮アルディージャ] ＮＡＣＫ５スタジアム大宮"
        >[大宮アルディージャ] ＮＡＣＫ５スタジアム大宮</option
      >
      <option value="[柏レイソル] 三協フロンテア柏スタジアム"
        >[柏レイソル] 三協フロンテア柏スタジアム</option
      >
      <option value="[ジェフユナイテッド千葉] フクダ電子アリーナ"
        >[ジェフユナイテッド千葉] フクダ電子アリーナ</option
      >
      <option value="[FC東京] 味の素スタジアム"
        >[FC東京] 味の素スタジアム</option
      >
      <option value="[東京ヴェルディ] 味の素スタジアム"
        >[東京ヴェルディ] 味の素スタジアム</option
      >
      <option value="[FC町田ゼルビア] 町田ＧＩＯＮスタジアム"
        >[FC町田ゼルビア] 町田ＧＩＯＮスタジアム</option
      >
      <option value="[東京ヴェルディ] 味の素フィールド西が丘"
        >[東京ヴェルディ] 味の素フィールド西が丘</option
      >
      <option value="[川崎フロンターレ] 等々力陸上競技場"
        >[川崎フロンターレ] 等々力陸上競技場</option
      >
      <option value="[横浜F・マリノス] 日産スタジアム"
        >[横浜F・マリノス] 日産スタジアム</option
      >
      <option
        value="[湘南ベルマーレ] Ｓｈｏｎａｎ ＢＭＷ スタジアム平塚"
        >[湘南ベルマーレ] Ｓｈｏｎａｎ ＢＭＷ スタジアム平塚</option
      >
      <option value="[横浜F・マリノス] ニッパツ三ツ沢球技場"
        >[横浜F・マリノス] ニッパツ三ツ沢球技場</option
      >
      <option value="[横浜FC] ニッパツ三ツ沢球技場"
        >[横浜FC] ニッパツ三ツ沢球技場</option
      >
      <option value="[Y.S.C.C. 横浜] ニッパツ三ツ沢球技場"
        >[Y.S.C.C. 横浜] ニッパツ三ツ沢球技場</option
      >
      <option value="[SC相模原] 相模原ギオンスタジアム"
        >[SC相模原] 相模原ギオンスタジアム</option
      >
      <option disabled>--北陸--</option>
      <option value="[アルビレックス新潟] デンカビッグスワンスタジアム"
        >[アルビレックス新潟] デンカビッグスワンスタジアム</option
      >
      <option value="[カターレ富山] 富山県総合運動公園陸上競技場"
        >[カターレ富山] 富山県総合運動公園陸上競技場</option
      >
      <option>[ツエーゲン金沢] 石川県西部緑地公園陸上競技場</option>
      <option value="[ツエーゲン金沢] 石川県西部緑地公園陸上競技場"
        >[カターレ富山] テクノポート福井スタジアム</option
      >
      <option disabled>--甲信越--</option>
      <option value="[ヴァンフォーレ甲府] 山梨中銀スタジアム"
        >[ヴァンフォーレ甲府] 山梨中銀スタジアム</option
      >
      <option value="[松本山雅FC] サンプロ アルウィン"
        >[松本山雅FC] サンプロ アルウィン</option
      >
      <option value="[AC長野パルセイロ] 長野Ｕスタジアム"
        >[AC長野パルセイロ] 長野Ｕスタジアム</option
      >
      <option value="[FC岐阜] 岐阜メモリアルセンター長良川競技場"
        >[FC岐阜] 岐阜メモリアルセンター長良川競技場</option
      >
      <option disabled>--東海--</option>
      <option value="[ジュビロ磐田] ヤマハスタジアム"
        >[ジュビロ磐田] ヤマハスタジアム</option
      >
      <option value="[清水エスパルス] ＩＡＩスタジアム日本平"
        >[清水エスパルス] ＩＡＩスタジアム日本平</option
      >
      <option value="[アスルクラロ沼津] 愛鷹広域公園多目的競技場"
        >[アスルクラロ沼津] 愛鷹広域公園多目的競技場</option
      >
      <option value="[藤枝MYFC] 藤枝総合運動公園サッカー場"
        >[藤枝MYFC] 藤枝総合運動公園サッカー場</option
      >
      <option value="[名古屋グランパス] 豊田スタジアム"
        >[名古屋グランパス] 豊田スタジアム</option
      >
      <option value="[名古屋グランパス] パロマ瑞穂スタジアム"
        >[名古屋グランパス] パロマ瑞穂スタジアム</option
      >
      <option disabled>--近畿--</option>
      <option value="[京都サンガF.C.] たけびしスタジアム京都"
        >[京都サンガF.C.] たけびしスタジアム京都</option
      >
      <option
        value="[京都サンガF.C.] サンガスタジアム ｂｙ ＫＹＯＣＥＲＡ"
        >[京都サンガF.C.] サンガスタジアム ｂｙ ＫＹＯＣＥＲＡ</option
      >
      <option value="[セレッソ大阪] ヤンマースタジアム長居"
        >[セレッソ大阪] ヤンマースタジアム長居</option
      >
      <option value="[ガンバ大阪] パナソニック スタジアム 吹田"
        >[ガンバ大阪] パナソニック スタジアム 吹田</option
      >
      <option value="[ヴィッセル神戸] ノエビアスタジアム神戸"
        >[ヴィッセル神戸] ノエビアスタジアム神戸</option
      >
      <option disabled>--中国--</option>
      <option value="[ガイナーレ鳥取] Ａｘｉｓバードスタジアム"
        >[ガイナーレ鳥取] Ａｘｉｓバードスタジアム</option
      >
      <option value="[ガイナーレ鳥取] チュウブＹＡＪＩＮスタジアム"
        >[ガイナーレ鳥取] チュウブＹＡＪＩＮスタジアム</option
      >
      <option value="[ファジアーノ岡山] シティライトスタジアム"
        >[ファジアーノ岡山] シティライトスタジアム</option
      >
      <option value="[サンフレッチェ広島] エディオンスタジアム広島<"
        >[サンフレッチェ広島] エディオンスタジアム広島</option
      >
      <option value="[レノファ山口FC] 維新みらいふスタジアム"
        >[レノファ山口FC] 維新みらいふスタジアム</option
      >
      <option value="[レノファ山口FC] セービング陸上競技場<"
        >[レノファ山口FC] セービング陸上競技場</option
      >
      <option disabled>--四国--</option>
      <option
        value="[徳島ヴォルティス] 鳴門・大塚スポーツパーク ポカリスエットスタジアム"
        >[徳島ヴォルティス] 鳴門・大塚スポーツパーク
        ポカリスエットスタジアム</option
      >
      <option value="[カマタマーレ讃岐] Ｐｉｋａｒａスタジアム"
        >[カマタマーレ讃岐] Ｐｉｋａｒａスタジアム</option
      >
      <option value="[愛媛FC] ニンジニアスタジアム"
        >[愛媛FC] ニンジニアスタジアム</option
      >
      <option value="[FC今治] ありがとうサービス．夢スタジアム"
        >[FC今治] ありがとうサービス．夢スタジアム</option
      >
      <option disabled>--九州--</option>
      <option value="[アビスパ福岡] ベスト電器スタジアム"
        >[アビスパ福岡] ベスト電器スタジアム</option
      >
      <option
        value="[ギラヴァンツ北九州] ミクニワールドスタジアム北九州"
        >[ギラヴァンツ北九州] ミクニワールドスタジアム北九州</option
      >
      <option value="[サガン鳥栖] 駅前不動産スタジアム"
        >[サガン鳥栖] 駅前不動産スタジアム</option
      >
      <option value="[V・ファーレン長崎] トランスコスモススタジアム長崎"
        >[V・ファーレン長崎] トランスコスモススタジアム長崎</option
      >
      <option value="[ロアッソ熊本] えがお健康スタジアム"
        >[ロアッソ熊本] えがお健康スタジアム</option
      >
      <option value="[大分トリニータ] 昭和電工ドーム大分"
        >[大分トリニータ] 昭和電工ドーム大分</option
      >
      <option value="[鹿児島ユナイテッドFC] 白波スタジアム"
        >[鹿児島ユナイテッドFC] 白波スタジアム</option
      >
      <option disabled>--沖縄--</option>
      <option value="[FC琉球] タピック県総ひやごんスタジアム"
        >[FC琉球] タピック県総ひやごんスタジアム</option
      >
      </select>
  </div>
</template>
<script>
export default {
  props:{
    value: { type: String, required: true },
  },
  methods: {
    inputStadium: function(e) {
      this.$emit("input", e.target.value);
    }
  },
}
</script>

<style lang="scss" scoped>
.input-stadium{
  h3 {
    font-size: 21px;
    font-weight: normal;
  }
  select {
    width: 60%;
    height: 40px;
    font-size: 18px;
    margin-bottom: 40px;
  }
}
@media (max-width: 959px) {
  .input-stadium{
    select {
      width: 90%;
    }
  }
}

@media (max-width: 559px) {
  .input-stadium{
    h3 {
      font-size: 18px;
    }

    select {
      font-size: 16px;
    }
  }
}
</style>