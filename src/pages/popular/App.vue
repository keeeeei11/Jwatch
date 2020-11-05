<template>
<div id="app">
      <div class="wrap">
      <Jheader :visitorName="visitorName" :isLogin="isLogin" :isAnonymous="isAnonymous"></Jheader>
        <div class="popular">
            <PageTitle title="Popular posts" description="人気のある投稿が記載されています。チームごとに情報を絞ることも可能です。"></PageTitle>
            <div class="choose-stadium">
                <form>
                  <select v-model="stadium" class="stadium-list" size="1" @change="getData(stadium)">
                    <option value="" selected disabled>--スタジアム名を選択してください--</option>
                    <option value="allstadium">全チーム</option>
                    <option disabled>--北海道--</option>
                    <option value="[コンサドーレ札幌] 札幌厚別公園競技場">[コンサドーレ札幌] 札幌厚別公園競技場</option>
                    <option value="[コンサドーレ札幌] 札幌ドーム">[コンサドーレ札幌] 札幌ドーム</option>
                    <option disabled>--東北--</option>
                    <option value="[ヴァンラーレ八戸] プライフーズスタジアム">[ヴァンラーレ八戸] プライフーズスタジアム</option>
                    <option value="[いわてグルージャ盛岡] いわぎんスタジアム">[いわてグルージャ盛岡] いわぎんスタジアム</option>
                    <option value="[いわてグルージャ盛岡] 北上総合運動公園北上陸上競技場">[いわてグルージャ盛岡] 北上総合運動公園北上陸上競技場</option>
                    <option value="[ベガルタ仙台] ユアテックスタジアム仙台">[ベガルタ仙台] ユアテックスタジアム仙台</option>
                    <option value="[ブラウブリッツ秋田] ソユースタジアム">[ブラウブリッツ秋田] ソユースタジアム</option>
                    <option value="[モンテディオ山形] ＮＤソフトスタジアム山形">[モンテディオ山形] ＮＤソフトスタジアム山形</option>
                    <option value="[福島ユナイテッドFC] 郡山西部サッカー場">[福島ユナイテッドFC] 郡山西部サッカー場</option>
                    <option value="[福島ユナイテッドFC] とうほう・みんなのスタジアム">[福島ユナイテッドFC] とうほう・みんなのスタジアム</option>
                    <option value="[福島ユナイテッドFC] 会津総合運動公園あいづ陸上競技場">[福島ユナイテッドFC] 会津総合運動公園あいづ陸上競技場</option>
                    <option disabled>--関東--</option>
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
                    <option disabled>--北陸--</option>
                    <option value="[アルビレックス新潟] デンカビッグスワンスタジアム">[アルビレックス新潟] デンカビッグスワンスタジアム</option>
                    <option value="[カターレ富山] 富山県総合運動公園陸上競技場">[カターレ富山] 富山県総合運動公園陸上競技場</option>
                    <option>[ツエーゲン金沢] 石川県西部緑地公園陸上競技場</option>
                    <option value="[ツエーゲン金沢] 石川県西部緑地公園陸上競技場">[カターレ富山] テクノポート福井スタジアム</option>
                    <option disabled>--甲信越--</option>
                    <option value="[ヴァンフォーレ甲府] 山梨中銀スタジアム">[ヴァンフォーレ甲府] 山梨中銀スタジアム</option>
                    <option value="[松本山雅FC] サンプロ アルウィン">[松本山雅FC] サンプロ アルウィン</option>
                    <option value="[AC長野パルセイロ] 長野Ｕスタジアム">[AC長野パルセイロ] 長野Ｕスタジアム</option>
                    <option value="[FC岐阜] 岐阜メモリアルセンター長良川競技場">[FC岐阜] 岐阜メモリアルセンター長良川競技場</option>
                    <option disabled>--東海--</option>
                    <option value="[ジュビロ磐田] ヤマハスタジアム">[ジュビロ磐田] ヤマハスタジアム</option>
                    <option value="[清水エスパルス] ＩＡＩスタジアム日本平">[清水エスパルス] ＩＡＩスタジアム日本平</option>
                    <option value="[アスルクラロ沼津] 愛鷹広域公園多目的競技場">[アスルクラロ沼津] 愛鷹広域公園多目的競技場</option>
                    <option value="[藤枝MYFC] 藤枝総合運動公園サッカー場">[藤枝MYFC] 藤枝総合運動公園サッカー場</option>
                    <option value="[名古屋グランパス] 豊田スタジアム">[名古屋グランパス] 豊田スタジアム</option>
                    <option value="[名古屋グランパス] パロマ瑞穂スタジアム">[名古屋グランパス] パロマ瑞穂スタジアム</option>
                    <option disabled>--近畿--</option>
                    <option value="[京都サンガF.C.] たけびしスタジアム京都">[京都サンガF.C.] たけびしスタジアム京都</option>
                    <option value="[京都サンガF.C.] サンガスタジアム ｂｙ ＫＹＯＣＥＲＡ">[京都サンガF.C.] サンガスタジアム ｂｙ ＫＹＯＣＥＲＡ</option>
                    <option value="[セレッソ大阪] ヤンマースタジアム長居">[セレッソ大阪] ヤンマースタジアム長居</option>
                    <option value="[ガンバ大阪] パナソニック スタジアム 吹田">[ガンバ大阪] パナソニック スタジアム 吹田</option>
                    <option value="[ヴィッセル神戸] ノエビアスタジアム神戸">[ヴィッセル神戸] ノエビアスタジアム神戸</option>
                    <option disabled>--中国--</option>
                    <option value="[ガイナーレ鳥取] Ａｘｉｓバードスタジアム">[ガイナーレ鳥取] Ａｘｉｓバードスタジアム</option>
                    <option value="[ガイナーレ鳥取] チュウブＹＡＪＩＮスタジアム">[ガイナーレ鳥取] チュウブＹＡＪＩＮスタジアム</option>
                    <option value="[ファジアーノ岡山] シティライトスタジアム">[ファジアーノ岡山] シティライトスタジアム</option>
                    <option value="[サンフレッチェ広島] エディオンスタジアム広島<">[サンフレッチェ広島] エディオンスタジアム広島</option>
                    <option value="[レノファ山口FC] 維新みらいふスタジアム">[レノファ山口FC] 維新みらいふスタジアム</option>
                    <option value="[レノファ山口FC] セービング陸上競技場<">[レノファ山口FC] セービング陸上競技場</option>
                    <option disabled>--四国--</option>
                    <option value="[徳島ヴォルティス] 鳴門・大塚スポーツパーク ポカリスエットスタジアム">[徳島ヴォルティス] 鳴門・大塚スポーツパーク ポカリスエットスタジアム</option>
                    <option value="[カマタマーレ讃岐] Ｐｉｋａｒａスタジアム">[カマタマーレ讃岐] Ｐｉｋａｒａスタジアム</option>
                    <option value="[愛媛FC] ニンジニアスタジアム">[愛媛FC] ニンジニアスタジアム</option>
                    <option value="[FC今治] ありがとうサービス．夢スタジアム">[FC今治] ありがとうサービス．夢スタジアム</option>
                    <option disabled>--九州--</option>
                    <option value="[アビスパ福岡] ベスト電器スタジアム">[アビスパ福岡] ベスト電器スタジアム</option>
                    <option value="[ギラヴァンツ北九州] ミクニワールドスタジアム北九州">[ギラヴァンツ北九州] ミクニワールドスタジアム北九州</option>
                    <option value="[サガン鳥栖] 駅前不動産スタジアム">[サガン鳥栖] 駅前不動産スタジアム</option>
                    <option value="[V・ファーレン長崎] トランスコスモススタジアム長崎">[V・ファーレン長崎] トランスコスモススタジアム長崎</option>
                    <option value="[ロアッソ熊本] えがお健康スタジアム">[ロアッソ熊本] えがお健康スタジアム</option>
                    <option value="[大分トリニータ] 昭和電工ドーム大分">[大分トリニータ] 昭和電工ドーム大分</option>
                    <option value="[鹿児島ユナイテッドFC] 白波スタジアム">[鹿児島ユナイテッドFC] 白波スタジアム</option>
                    <option disabled>--沖縄--</option>
                    <option value="[FC琉球] タピック県総ひやごんスタジアム">[FC琉球] タピック県総ひやごんスタジアム</option>
                </select>
                </form>
              </div>
              <div class="popular-posts">
                <div class="post-no-contents" v-if="noData">
                    <p>{{ stadium }}に関する投稿はまだありません…</p>
                    <p>知っている情報があれば投稿して共有してみませんか？</p>
                    <p>※GoogleまたはTwitterアカウントによるログイン,もしくは匿名ログインが必要です。</p>
                    <a href="https://jwatch-8411c.web.app/posting/index.html">観戦情報を投稿する！</a>
                </div>
              <div class="post-contents" v-else>
                  <div v-for="postSingleData in getItems" :key="postSingleData.index" @click="displayDeleteBtn(postSingleData.data().contributorUid)">
                  <!-- <div v-for="postSingleData in getItems" :key="postSingleData.index" :class="[postSingleData.data().contributorUid == this.visitorUid] ? "> -->
                      <div class="post-example-contents">
                          <div class="post-basic-information">
                          <div class="post-basic-information-top">
                              <div class="post-name">
                                  <p>{{ postSingleData.data().contributorName}}</p>
                                  <!-- <p>{{ postSingleData.data().contributorUid}}</p> -->
                              </div>
                              <div class="post-date">
                                  <p>{{ postSingleData.data().created }}</p>
                              </div>
                          </div>
                          <div class="post-basic-information-bottom">
                              <div class="post-stadium">
                                  <p>{{ postSingleData.data().stadium }}</p>
                              </div>
                              <div class="post-category">
                                  <p>{{ postSingleData.data().category }}</p>
                              </div>
                          </div>
                          </div>
                          <div class="post-main-content">
                              <div class="post-title">
                                  <p>{{ postSingleData.data().title }}</p>
                              </div>
                              <div class="post-text">
                                  <p>{{ postSingleData.data().body }}</p>
                              </div>
                              <div class="post-img">
                                  <!-- <img src="../../assets/3602761_s.jpg" alt=""> -->
                                  <!-- <img src="../../assets/2396379_s.jpg" alt=""> -->
                              </div>
                          </div>
                          <div class="post-evaluation">
                              <div class="post-evaluation-contents">
                                  <div class="good-count evaluation-btn">
                                      <button>いいね！ {{ postSingleData.data().likedCounter }}</button>
                                  </div>
                                  <!-- 条件分岐を実装する -->
                                  <div class="reporting evaluation-btn" v-if="!allowDelete">
                                      <button>通報する</button>
                                  </div>
                                  <div class="deleting evaluation-btn" v-else>
                                      <button @click="deleteData(postSingleData.id)">削除する</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            <Paginate :page-count="getPageCount"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'<<'"
            :next-text="'>>'"
            :no-li-surround="true"
            :container-class="'paginate'"
            :prev-link-class="'prev-link'"
            :page-link-class="'page-link'"
            :next-link-class="'next-link'"
            :active-class="'active-page-link'"
            ></Paginate>
        </div>
    <MoveTopBtn></MoveTopBtn>
        </div>
    <Jfooter></Jfooter>
    </div>
</div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Jheader from "../../components/Jheader.vue"
import PageTitle from "../../components/PageTitle.vue"
import MoveTopBtn from "../../components/MoveTopBtn.vue"
import Paginate from 'vuejs-paginate'
import Jfooter from "../../components/Jfooter.vue"
import myFirstMixin from "../../mixin/myFirstMixin";
export default {
  data(){
    return{
      noData: false,
      stadium:"",
      // trueで削除ボタンが表示される
      allowDelete:false,
      // 配列の取得
      postMultipleData:[],
      // ページネーション機能
      sortValue:sessionStorage.getItem("sortkey"),
      parPage: 10,
      currentPage: 1,
    }
  },
  components: {
    Jheader,
    PageTitle,
    MoveTopBtn,
    Paginate,
    Jfooter,

  },
  mixins:[
    myFirstMixin
  ],
  methods:{
    getData: function(stadium){
        this.postMultipleData = [];
        // データの取得
        this.noData = true
        const db = firebase.firestore();
        const postData = db.collection("posts")
        if(this.stadium === "allstadium"){
        // 全てのスタジアム情報を取得する際の動作
          const displayData = postData.orderBy('likedCounter','desc').get()
          .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                  console.log(this.postMultipleData.push(doc));
                  sessionStorage.setItem("sortkey", this.sortValue)
                  // データが1件以上ある時はfalseにする
                  this.noData = false
          })
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
              console.log(displayData)
          });
        } else {
          // 個別のスタジアム情報を取得する時
          const inputData = postData.where("stadium", "==", stadium)
          const displayData = inputData.orderBy('likedCounter','desc').get()
          .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                  console.log(this.postMultipleData.push(doc));
                  sessionStorage.setItem("sortkey", this.sortValue)
                  // データが1件以上ある時はfalseにする
                  this.noData = false
          })
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
              console.log(displayData)
          });
        }
    },
    deleteData: function(id){
      console.log(id);
        if(confirm("このお問い合わせを削除しますか？一度削除すると2度と戻せません。")){
          const db = firebase.firestore();
          const postData = db.collection("posts")
          postData.doc(id).delete()
          .then(function(){
              alert('削除できました。')
              return location.reload();
          })
          .catch(function(error){
              console.error("エラーが発生しました。: ", error);
          })
        }
    },
        clickCallback: function (pageNum) {
        this.currentPage = Number(pageNum);
        window.scrollTo({
            top:0,
            behavior:"instant",
        })
        },
    },
      computed: {
      getItems: function() {
        let current = this.currentPage * this.parPage;
        let start = current - this.parPage;
        return this.postMultipleData.slice(start, current);
      },
      getPageCount: function() {
        return Math.ceil(this.postMultipleData.length / this.parPage);
      },
    },
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
/*人気の投稿*/

.stadium-list{
    width: 70%;
    height: 40px;
    margin: 20px auto;
    font-size: 18px;
    border-radius: 10px;
    text-align: center;
    background-color: #ffffff;
}

.popular-posts{
    margin: 50px 0;
}

/* 投稿が0件の時に表示する */
.post-no-contents{
    text-align: center;
}

.post-no-contents p{
    font-size: 18px;
}

.post-no-contents a{
    display: block;
    width: 200px;
    font-size: 18px;
    font-weight: 500;
    color: #484b48;
    text-decoration: none;
    border:2px solid #484b48;
    background-color: #fff;
    margin:30px auto 30px;
    padding: 15px 20px;
    border-radius: 10px;
    transition: background-color 0.4s linear;
}

.post-no-contents a:hover{
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
}

/* 投稿を表示する部分 */
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

.post-img{
  display: flex;
}

.post-img img{
  margin: 30px auto 20px;
  width:30%;
  height: auto;
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

.evaluation-btn{
  text-align:center;
  border-radius: 10px;
  padding:5px;
  margin: 0 10px;
}

/* ページネーション */
.paginate{
  margin:100px;
  text-align:center;
}

/* 前に戻るボタン */

.prev-link{
  font-size: 24px;
  margin-right: 10px;
  outline: none;
  color:#484b48;
}

/* 数字のボタン */
.page-link{
  font-size: 24px;
  font-weight: lighter;
  padding:15px;
  margin: 10px;
  border:1px solid #484b48;
  border-radius: 5px;
  outline: none;
}

/* 次に進むボタン */
.next-link{
  font-size: 24px;
  margin-left: 10px;
  outline: none;
}

.active-page-link{
  color: #ffffff;
  background-color: gray;
}

@media (max-width:959px ){
}

@media (max-width:559px ){
/* メイン */
.stadium-list{
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