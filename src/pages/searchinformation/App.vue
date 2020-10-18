<template>
<div id="app">
  <div class="wrap">
        <header>
            <div class="header-contents">
                <div class="header-contents-left">
                    <div class="header-left-shortcut">
                        <div class="header-title">
                            <a href="https://jwatch-48c7e.web.app/mainpage/mainpage.html">
                                <h1>Jwatch</h1>
                            </a>
                        </div>
                        <div class="header-username" id="header_username">
                            <p v-if="!isAnonymous">こんにちは <span id="visitor"></span> さん！</p>
                            <p v-else>こんにちは 匿名ログイン さん！</p>
                        </div>
                    </div>
                </div>
                <div class="header-contents-right">
                    <div class="header-shortcut">
                       <div class="header-menu">
                            <a href="https://jwatch-48c7e.web.app/usage/usage.html">詳しい使い方</a>
                            <a href="https://jwatch-48c7e.web.app/searchinformation/searchinformation.html">観戦情報を探す</a>
                            <a href="https://jwatch-48c7e.web.app/posting/posting.html">観戦情報を投稿する</a>
                            <a href="https://jwatch-48c7e.web.app/answerreception/answerreception.html">回答受付中の質問</a>
                            <a href="https://jwatch-48c7e.web.app/popular/popular.html">人気の投稿</a>
                        </div>
                        <!-- ログインしていない時 -->
                        <div class="header-login" id="header_login">
                            <a href="https://jwatch-48c7e.web.app/login/login.html">
                                <i class="fas fa-door-open">
                                    <p>Login</p>
                                </i>
                            </a>
                        </div>
                        <!-- ログインしている時 -->
                        <div class="header-mypage" id="header_mypage">
                            <a href="https://jwatch-48c7e.web.app/mypage/mypage.html">
                                <i class="fas fa-user-edit">
                                    <p>Mypage</p>
                                </i>
                            </a>
                        </div>
                        <div class="humburgar">
                            <div class="menu-bar">
                                <i class="fas fa-bars" id="show">
                                <p>menu</p>
                                </i>
                            </div>
                            <div id="cover"></div>
                            <div class="menu-content" id="menu">
                                <i class="fa fa-times" id="hide">
                                    <p class="">close</p>
                                </i>
                                <ul>
                                    <li><a href="https://jwatch-48c7e.web.app/usage/usage.html">詳しい使い方</a></li>
                                    <li><a href="https://jwatch-48c7e.web.app/searchinformation/searchinformation.html">観戦情報を探す</a></li>
                                    <li><a href="https://jwatch-48c7e.web.app/posting/posting.html">観戦情報を投稿する</a></li>
                                    <li><a href="https://jwatch-48c7e.web.app/answerreception/answerreception.html">回答受付中の質問</a></li>
                                    <li><a href="https://jwatch-48c7e.web.app/popular/popular.html">人気の投稿</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    <!-- 以下メイン-->
    <main>
        <div class="search-information">
            <div class="search-information-title">
                <h1>Search Information</h1>
                <p>スタジアムとカテゴリーを選択してください</p>
            </div>
            <div class="select-stadium">
                <form action="#" method="POST" class="search" name="stadium">
                    <h2>スタジアムを選択してください</h2><br>
                    <!-- 送信ボタンを設置する -->
                    <select name="stadiumlist" class="stadium-list" id="stadium_list" size="1"><br>
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
                    <input type="button" class="select-button" value="選択する！" onclick="displayStadium()">
                </form>
            </div>
                <div class="stadium-basic-information">
                    <div class="stadium-name">
                        <h3 id="selectedStadium"></h3>
                    </div>
                </div>
                <div class="categories">
                    <div class="categories-first-line">
                        <a href="#" class="stadium-gourmet-box">
                            <div class="stadium-gourmet category">
                                <h4>スタジアム<br>グルメ</h4>
                                <p>スタジアムグルメに関する情報</p>
                            </div>
                        </a>
                        <a href="#" class="traffic-box">
                            <div class="traffic category">
                                <h4>交通情報</h4>
                                <p>駐車場や公共交通機関等<br>交通情報に関する情報</p>
                            </div>
                        </a>
                    </div>
                <div class="categories-second-line">
                    <a href="#" class="seat-box">
                        <div class="seat category">
                            <h4>座席</h4>
                            <p>座席確保・座席の特徴・見やすさ等<br>に関する情報</p>
                        </div>
                    </a>
                    <a href="#" class="nearby-information-box">
                        <div class="nearby category">
                            <h4>周辺情報</h4>
                            <p>飲食店・ホテル・観光地等<br>に関する情報</p>
                        </div>
                    </a>
                </div>
                <div class="categories-third-line">
                    <a href="#" class="unique-information-box">
                        <div class="unique-information category">
                            <h4>チーム特有の情報</h4>
                            <p>ダービーやチーム特有のイベント等<br>に関する情報</p>
                        </div>
                    </a>
                    <a href="#" class="others-box">
                        <div class="others category">
                            <h4>その他</h4>
                            <p>その他スタジアム観戦<br>に役立つ情報</p>
                        </div>
                    </a>
                </div>
                </div>
                <div class="request-nav">
                    <h3>求めている情報が見つからないときはこちら！</h3>
                    <a href="https://jwatch-48c7e.web.app/request/request.html">
                        <div class="request-nav-contents">
                            <div class="request-nav-ja">
                                <p>リクエストする！</p>
                            </div>
                            <div class="request-nav-en">
                                <p>Let’s request!</p>
                            </div>
                        </div>
                    </a>
                </div>
        </div>
    </main>
<!--以下フッター-->
<footer>
    <div class="footer-contants">
        <div class="footer-title">
            <h3>Jwatch</h3>
            <p>〜全ての人にサッカー観戦の楽しみを〜</p>
        </div>
        <div class="link">
            <a href="https://jwatch-48c7e.web.app/inquiry/inquiry.html">ご要望＆ご意見はこちら</a><br>
            <a href="https://jwatch-48c7e.web.app/question/question.html">Q&A</a><br>
            <a href="https://jwatch-48c7e.web.app/introduction/introduction.html">About 管理人</a>
        </div>
        <div class="sns">
            <div class="icon-title">
                <p>share</p>
            </div>
            <div class="icon-img">
                <div class="icon-top">
                    <div class="twitter">
                        <a href="https://twitter.com/intent/tweet?url=https://jwatch-8411c.web.app/&text=Jwatch Jリーグのスタジアム観戦情報を投稿＆閲覧できるサイト&hashtags=Jwatch&hashtags=Jリーグ" target="_blank" rel="nofollow noopener noreferrer">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="line">
                        <a href="https://social-plugins.line.me/lineit/share?url=https://jwatch-8411c.web.app/" target="_blank" rel="nofollow noopener noreferrer">
                        <i class="fab fa-line"></i>
                        </a>
                    </div>
                </div>
                <div class="icon-bottom">
                    <div class="facebook">
                        <a href="http://facebook.com/share.php?u=https://jwatch-8411c.web.app/" target="_blank" rel="nofollow noopener noreferrer">
                        <i class="fab fa-facebook-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  methods:{

  }
}
</script>

<style>
.wrap{
    overflow: hidden;
}
/*以下ヘッダー*/
header{
    width: 100%;
    position: fixed;
    top:0;
    background-color:white;
    border-bottom: 1px solid #efefef;
    z-index: 2;
}

.header-contents{
    display: flex;
    margin: auto 50px;
    overflow-x: hidden;
}

.header-left-shortcut{
    display: flex;
}
/*ヘッダーのタイトル*/
.header-title{
    margin-left: 2%;
    margin-right: 5%;
}
.header-title a{
    text-decoration: none;
}
.header-title h1{
    color:black;
    font-weight: normal;
}
/* ログイン時のユーザー名 */
.header-username{
    width: 230px;
    margin: 0 10px;
    font-size: 14px;
    padding-top: 25px;
}

.header-contents-right{
    margin: 0 0 0 auto;
}
/*ヘッダーのリンク*/
.header-shortcut{
    display: flex;
}

.header-menu{
    margin-top: 35px;
    margin-right: 10px;
}

.header-menu a{
    color: rgb(28.8%, 29.6%, 28.8%);
    font-size: 14px;
    margin-left: 20px;
    position: relative;
    display: inline-block;
    text-decoration: none;

}
.header-menu a::after{
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform .3s;
}
.header-menu a:hover::after{
    transform: scale(1,1);

}
/*ヘッダーのログインボタン*/

.header-login{
    margin: 25px 10px 0px 20px;
    text-align: center;
}

.header-login a{
    text-decoration: none;
    color:rgb(28.8%, 29.6%, 28.8%);
    transition:color 0.4s linear;
}

.header-login a:hover{
    color: gray;
    transition:0.4s;
}
.header-login i{
    font-size: 36px;
    margin: 0;
}
.header-login p{
    font-size: 12px;
    font-weight: bold;
    /* aタグとpタグの間の空白を適切に調整 */
    line-height: 0.1em;
}

/* マイページ */
.header-mypage{
    margin: 25px 10px 0px 20px;
    text-align: center;
}

.header-mypage a{
    text-decoration: none;
    color:rgb(28.8%, 29.6%, 28.8%);
    transition:color 0.4s linear;
}

.header-mypage a:hover{
    color: gray;
    transition:0.4s;
}
.header-mypage i{
    font-size: 36px;
    padding-left: 10px;
}
.header-mypage p{
    font-size: 12px;
    font-weight: bold;
    /* aタグとpタグの間の空白を適切に調整 */
    line-height: 0.1em;
}

/* ハンバーガーメニュー(980px以上は非表示) */

.humburgar{
    display: none;
}

#show {
    font-size: 40px;
    cursor: pointer;
    margin-left: 10px;
    color: #484B49;
}

#show i {
    font-size: 36px;
}

#show p{
    font-size: 12px;
    margin: 0;
    padding-top: 5px;

}

#cover {
    background: #ffffff;
    opacity: 0;
    width: 100vh;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
}

#menu {
    position: absolute;
    top: 0;
    right: -100%;
    color: #ffffff;
    background: rgba(88, 88, 88, 0.9);
    padding: 8px;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    z-index: 2;
    transition: 0.4s;
}

#menu ul {
    margin: 90px 5px 0px 5px;
    padding: 10px;
}

#menu li {
    padding: 20px 0px;
    text-align: center;
    list-style: none;
}

#menu a {
    color: #efefef;
    font-size: 21px;
    text-decoration: none;
    line-height: 2.5em;
}

#hide {
    float: right;
    font-size: 36px;
    margin: 30px 30px 0 30px;
}

.menu-content p {
    font-size: 12px;
    padding: 0;
    margin: 0;
}

body.menu-open {
    overflow-y: hidden;
}
body.menu-open #cover{
    display: block;
}

body.menu-open #menu{
    right: 0;
}
/*以下メイン*/

main{
    color: rgb(28.8%, 29.6%, 28.8%);
}

.search-information-title{
    margin-left: 20%;
    margin-top: 250px;
}

.search-information-title h1{
    font-size: 48px;
}

.search-information-title p{
    font-size: 21px;
}

/* スタジアム選択 */
.select-stadium{
        margin-top: 100px;
        margin-bottom: 50px;
        margin-left: 10%;
        padding: 100px 80px;
        background-color: #f2f2f2;
        text-align: center;
        display: block;
}

.select-stadium h2{
    font-size: 21px;
}

.stadium-list{
    width: 70%;
    height: 40px;
    font-size: 18px;
    border-radius: 10px;
    text-align: center;
}

.stadium-basic-information{
    margin: 50px auto;
    text-align: center;
}

.stadium-basic-information h3{
    font-size: 32px;
}

.select-button{
    outline: none;
    font-size: 18px;
    background-color: #fff;
    color: #484b48;
    border: 2px solid #484b48;
    border-radius: 10px;
    padding:10px 30px;
    transition: background-color 0.4s linear;
    display: block;
    margin: 50px auto 0;
}

.select-button:hover{
    color: #fff;
    background-color: #484b48;
    transition: 0.4s;
    cursor: pointer;
}

/* カテゴリー選択 */

.categories a{
    width: 300px;
    height: 150px;
    margin:50px auto;
    padding: 30px;
    background-color:#f2f2f2;
    text-decoration: none;
    color: rgb(28.8%, 29.6%, 28.8%);
    border-radius: 10px;
}

.categories a:hover{
    background-color: beige;
}

.category h4{
    font-size: 21px;
}

.category p{
    font-size: 18px;
}

.categories-first-line, .categories-second-line, .categories-third-line{
    text-align: center;
    display: flex;
    justify-content: space-around;
}

/* リクエストするボタン */
.request-nav h3{
    text-align: center;
    font-weight: normal;
    font-size: 18px;
}

.request-nav a{
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

.request-nav a:hover{
    background-color: #202020;
}

.request-nav-contants{
    display: block;
    font-size: 18px;
}

/*以下フッター*/

footer{
    background-color:#f2f2f2;
    border-top: 1.5px solid #efefef;
    width: 100%;
    height: 100%;
}
.footer-contants{
    padding: 50px 60px;
    display: flex;
    justify-content: space-between;
}
.footer-title{
    height: 150px;
    padding: 0;
    margin: 0;
}

.footer-title h3{
    font-size: 36px;
    font-weight: 700;
}

.footer-title p{
    font-size: 16px;
}

.link{
    width: 250px;
    margin-left: 30%;
}

.link a{
    color: rgb(28.8%, 29.6%, 28.8%);
    font-size: 16px;
    margin-left: 20px;
    margin-bottom: 40px;
    position: relative;
    display: inline-block;
    text-decoration: none;

}
.link a::after{
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
}
.link a:hover::after{
    transform: scale(1,1);
}

/*以下SNS連携*/

.sns{
    display: flex;
    /* float: right; */
    margin-bottom: 10px;
    margin-left: 10%;
}

.sns a{
    display: flex;
    margin: 0px 10px;
    color: rgb(28.8%, 29.6%, 28.8%);
    text-decoration: none;
    padding: 0 10px;
    transition:color 0.4s linear;
}

.sns a:hover{
    color: gray;
    transition: 0.4s;
}

.sns i {
    font-size: 26px;
    padding-bottom: 20px;
}

.icon-title{
    margin-right: 10px;
}

.icon-title p{
    color: #484b48;
    font-size: 16px;
    margin-block-start: 0em;

}

.icon-img{
    display: block;
}

/* 公式ガイドラインで決められた色を使用すること(白黒はNG) */
.fa-twitter{
    color: #00A1F9;
}

.fa-line{
    color: #06B900;
}

.fa-facebook-square{
    color: #1A78F2;
}
@media (max-width:959px ){
  /* ヘッダー */
.header-menu{
    display: none;
}

.header-login{
    margin-top: 19px;
}

.header-mypage{
  margin-top: 19px;
}

.header-username{
  padding: 0em;
}

.header-left-shortcut{
  display: block;
}
.humburgar{
    display: block;
}

.menu-bar {
    display: block;
    margin-right:10px;
}

#show{
    font-size: 36px;
    margin-top: 20px;
    cursor: pointer;
}

/* メイン */
/* タイトル */
.search-information-title{
  margin-left: 10%;
}

/* スタジアム選択 */
.select-stadium{
  margin-left: 0%;
}

.stadium-list{
  width: 90%;
}

/* スタジアム基本情報
.stadium-basic-information{
  text-align: center;
} */

.stadium-basic-information h3{
  font-size: 28px;
  padding: 0px;
}

/* カテゴリー選択 */

.categories a{
  width: 250px;
  padding: 30px 15px;
}


/* フッター */
.footer-contants{
  display: block;
}

.link{
  margin-left: 0em;
}
.link a{
margin-left:0;
}

.sns{
  margin-left: 0em;
}

.sns{
  padding: 0em;
}
.icon-img{
  display: flex;
}
}

@media (max-width:559px ){
  /* ヘッダー */
.header-contents{
margin: auto 10px;
}

#menu a {
font-size: 18px;
}
/* メイン */
/* タイトル */
.search-information-title h1{
  font-size: 36px;
}

.search-information-title p{
  font-size: 16px;
}
/* スタジアム選択 */
.select-stadium{
  padding: 50px 40px;
}
.select-stadium h2{
  font-size: 18px;
}
.stadium-list{
  font-size: 16px;
}
/* スタジアム基本情報 */
.stadium-basic-information{
  padding: 40px;
}

/* カテゴリー選択 */
.categories a{
  display: block;
  width: 80%;
}

.categories-first-line, .categories-second-line, .categories-third-line{
  display: block;
}

.category h4{
  font-size: 18px;
}

.category p{
  font-size: 16px;
}

/* リクエストするボタン */
.request-nav h3{
  font-size: 16px;
}

.request-nav a{
  height: 200px;
}

.request-nav-contants{
  display: block;
  font-size: 16px;
}
/* フッター */
.footer-contants{
  padding: 20px 30px;
}
}
</style>