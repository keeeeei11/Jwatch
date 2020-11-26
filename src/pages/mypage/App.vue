<template>
  <div id="app">
    <div class="wrap">
      <Jheader
        :visitorName="visitorName"
        :isLogin="isLogin"
        :isAnonymous="isAnonymous"
      ></Jheader>
      <!-- 以下メイン-->
      <main>
        <div class="mypage">
          <div class="mypage-title">
            <p v-if="!isAnonymous">{{ visitorName }} さんのマイページ</p>
            <p v-else>
              匿名<span>{{ visitorUid.slice(0, 10) }}</span
              >さんのマイページ
            </p>
          </div>
          <VueLoading
            v-if="isLoading"
            type="spiningDubbles"
            color="#aaa"
            :size="{ width: '100px', height: '100px' }"
          ></VueLoading>
          <div class="past-posts" v-else>
            <div class="post-no-contents" v-if="noData">
              <p>あなたの投稿はまだありません…</p>
              <p>知っている情報があれば投稿して共有してみませんか？</p>
              <a href="https://jwatch-8411c.web.app/posting/index.html"
                >観戦情報を投稿する！</a
              >
            </div>
            <!-- 選択したスタジアムとカテゴリーで投稿が1つ以上存在する時 -->
            <div class="post-contents" v-else>
              <h2>過去の投稿</h2>
              <div
                v-for="(postSingleData, index) in getItems"
                :key="postSingleData.id"
              >
                <div class="post-example-contents">
                  <div class="post-basic-information">
                    <div class="post-basic-information-top">
                      <div class="post-name">
                        <p>{{ postSingleData.contributorName }} さん</p>
                      </div>
                      <div class="post-date">
                        <p>{{ postSingleData.created }}</p>
                      </div>
                    </div>
                    <div class="post-basic-information-bottom">
                      <div class="post-stadium">
                        <p>{{ postSingleData.stadium }}</p>
                      </div>
                      <div class="post-category">
                        <p>{{ postSingleData.category }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="post-main-content">
                    <div class="post-title">
                      <p>{{ postSingleData.title }}</p>
                    </div>
                    <div class="post-text">
                      <p>{{ postSingleData.body }}</p>
                    </div>
                    <div class="post-img">
                      <!-- <img src="../../assets/3602761_s.jpg" alt=""> -->
                      <!-- <img src="../../assets/2396379_s.jpg" alt=""> -->
                    </div>
                  </div>
                  <div class="post-evaluation">
                    <div class="post-evaluation-contents">
                      <div class="good-count evaluation-btn">
                        <button
                          @click="
                            likedData(index)
                          "
                        >
                          いいね！ {{ postSingleData.likedCounter }}
                        </button>
                      </div>
                      <!-- 投稿者と閲覧者が同じである時 -->
                      <div
                        class="allow-manage"
                        v-if="
                          postSingleData.contributorUid == visitorUid
                        "
                      >
                        <div class="deleting evaluation-btn">
                          <button @click="deleteData(postSingleData.id)">
                            削除する
                          </button>
                        </div>
                        <div class="editing evaluation-btn">
                          <button
                            @click="triggerEditShow(postSingleData)"
                          >
                            編集する
                          </button>
                        </div>
                      </div>
                      <!-- 投稿者と閲覧者が異なる時 -->
                      <div class="disallow-manage" v-else>
                        <div class="reporting evaluation-btn">
                          <button @click="triggerReportShow()">通報する</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 編集画面 -->
                <div class="edit" v-if="editForm">
                  <section class="edit-page">
                    <h3>編集画面</h3>
                    <form class="edit-stadium">
                      <h3>スタジアム</h3>
                      <select
                        name="stadiumlist"
                        v-model="editStadium"
                        class="stadium-list-box box"
                        size="1"
                      >
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
                        <option
                          value="[ヴァンラーレ八戸] プライフーズスタジアム"
                          >[ヴァンラーレ八戸] プライフーズスタジアム</option
                        >
                        <option
                          value="[いわてグルージャ盛岡] いわぎんスタジアム"
                          >[いわてグルージャ盛岡] いわぎんスタジアム</option
                        >
                        <option
                          value="[いわてグルージャ盛岡] 北上総合運動公園北上陸上競技場"
                          >[いわてグルージャ盛岡]
                          北上総合運動公園北上陸上競技場</option
                        >
                        <option value="[ベガルタ仙台] ユアテックスタジアム仙台"
                          >[ベガルタ仙台] ユアテックスタジアム仙台</option
                        >
                        <option value="[ブラウブリッツ秋田] ソユースタジアム"
                          >[ブラウブリッツ秋田] ソユースタジアム</option
                        >
                        <option
                          value="[モンテディオ山形] ＮＤソフトスタジアム山形"
                          >[モンテディオ山形] ＮＤソフトスタジアム山形</option
                        >
                        <option value="[福島ユナイテッドFC] 郡山西部サッカー場"
                          >[福島ユナイテッドFC] 郡山西部サッカー場</option
                        >
                        <option
                          value="[福島ユナイテッドFC] とうほう・みんなのスタジアム"
                          >[福島ユナイテッドFC]
                          とうほう・みんなのスタジアム</option
                        >
                        <option
                          value="[福島ユナイテッドFC] 会津総合運動公園あいづ陸上競技場"
                          >[福島ユナイテッドFC]
                          会津総合運動公園あいづ陸上競技場</option
                        >
                        <option disabled>--関東--</option>
                        <option
                          value="[鹿島アントラーズ] 県立カシマサッカースタジアム"
                          >[鹿島アントラーズ]
                          県立カシマサッカースタジアム</option
                        >
                        <option
                          value="[水戸ホーリーホック] ケーズデンキスタジアム水戸"
                          >[水戸ホーリーホック]
                          ケーズデンキスタジアム水戸</option
                        >
                        <option value="[栃木SC] 栃木県グリーンスタジアム"
                          >[栃木SC] 栃木県グリーンスタジアム</option
                        >
                        <option value="[栃木SC] カンセキスタジアムとちぎ"
                          >[栃木SC] カンセキスタジアムとちぎ</option
                        >
                        <option
                          value="[ザスパクサツ群馬] 正田醤油スタジアム群馬"
                          >[ザスパクサツ群馬] 正田醤油スタジアム群馬</option
                        >
                        <option
                          value="[浦和レッドダイヤモンズ] 浦和駒場スタジアム"
                          >[浦和レッドダイヤモンズ] 浦和駒場スタジアム</option
                        >
                        <option
                          value="[浦和レッドダイヤモンズ] 埼玉スタジアム２００２"
                          >[浦和レッドダイヤモンズ]
                          埼玉スタジアム２００２</option
                        >
                        <option
                          value="[大宮アルディージャ] ＮＡＣＫ５スタジアム大宮"
                          >[大宮アルディージャ] ＮＡＣＫ５スタジアム大宮</option
                        >
                        <option value="[柏レイソル] 三協フロンテア柏スタジアム"
                          >[柏レイソル] 三協フロンテア柏スタジアム</option
                        >
                        <option
                          value="[ジェフユナイテッド千葉] フクダ電子アリーナ"
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
                          >[湘南ベルマーレ] Ｓｈｏｎａｎ ＢＭＷ
                          スタジアム平塚</option
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
                        <option
                          value="[アルビレックス新潟] デンカビッグスワンスタジアム"
                          >[アルビレックス新潟]
                          デンカビッグスワンスタジアム</option
                        >
                        <option
                          value="[カターレ富山] 富山県総合運動公園陸上競技場"
                          >[カターレ富山] 富山県総合運動公園陸上競技場</option
                        >
                        <option
                          >[ツエーゲン金沢] 石川県西部緑地公園陸上競技場</option
                        >
                        <option
                          value="[ツエーゲン金沢] 石川県西部緑地公園陸上競技場"
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
                        <option
                          value="[FC岐阜] 岐阜メモリアルセンター長良川競技場"
                          >[FC岐阜] 岐阜メモリアルセンター長良川競技場</option
                        >
                        <option disabled>--東海--</option>
                        <option value="[ジュビロ磐田] ヤマハスタジアム"
                          >[ジュビロ磐田] ヤマハスタジアム</option
                        >
                        <option value="[清水エスパルス] ＩＡＩスタジアム日本平"
                          >[清水エスパルス] ＩＡＩスタジアム日本平</option
                        >
                        <option
                          value="[アスルクラロ沼津] 愛鷹広域公園多目的競技場"
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
                          >[京都サンガF.C.] サンガスタジアム ｂｙ
                          ＫＹＯＣＥＲＡ</option
                        >
                        <option value="[セレッソ大阪] ヤンマースタジアム長居"
                          >[セレッソ大阪] ヤンマースタジアム長居</option
                        >
                        <option
                          value="[ガンバ大阪] パナソニック スタジアム 吹田"
                          >[ガンバ大阪] パナソニック スタジアム 吹田</option
                        >
                        <option value="[ヴィッセル神戸] ノエビアスタジアム神戸"
                          >[ヴィッセル神戸] ノエビアスタジアム神戸</option
                        >
                        <option disabled>--中国--</option>
                        <option
                          value="[ガイナーレ鳥取] Ａｘｉｓバードスタジアム"
                          >[ガイナーレ鳥取] Ａｘｉｓバードスタジアム</option
                        >
                        <option
                          value="[ガイナーレ鳥取] チュウブＹＡＪＩＮスタジアム"
                          >[ガイナーレ鳥取] チュウブＹＡＪＩＮスタジアム</option
                        >
                        <option
                          value="[ファジアーノ岡山] シティライトスタジアム"
                          >[ファジアーノ岡山] シティライトスタジアム</option
                        >
                        <option
                          value="[サンフレッチェ広島] エディオンスタジアム広島<"
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
                        <option
                          value="[カマタマーレ讃岐] Ｐｉｋａｒａスタジアム"
                          >[カマタマーレ讃岐] Ｐｉｋａｒａスタジアム</option
                        >
                        <option value="[愛媛FC] ニンジニアスタジアム"
                          >[愛媛FC] ニンジニアスタジアム</option
                        >
                        <option
                          value="[FC今治] ありがとうサービス．夢スタジアム"
                          >[FC今治] ありがとうサービス．夢スタジアム</option
                        >
                        <option disabled>--九州--</option>
                        <option value="[アビスパ福岡] ベスト電器スタジアム"
                          >[アビスパ福岡] ベスト電器スタジアム</option
                        >
                        <option
                          value="[ギラヴァンツ北九州] ミクニワールドスタジアム北九州"
                          >[ギラヴァンツ北九州]
                          ミクニワールドスタジアム北九州</option
                        >
                        <option value="[サガン鳥栖] 駅前不動産スタジアム"
                          >[サガン鳥栖] 駅前不動産スタジアム</option
                        >
                        <option
                          value="[V・ファーレン長崎] トランスコスモススタジアム長崎"
                          >[V・ファーレン長崎]
                          トランスコスモススタジアム長崎</option
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
                    </form>
                    <form class="edit-category">
                      <h3>カテゴリー</h3>
                      <select
                        v-model="editCategory"
                        class="edit-category-box box"
                        size="1"
                      >
                        <option value="" selected disabled
                          >--カテゴリーを選択してください(必須)--</option
                        >
                        <option value="スタジアムグルメ"
                          >スタジアムグルメ</option
                        >
                        <option value="交通情報(駐車場や公共交通機関等)"
                          >交通情報(駐車場や公共交通機関等)</option
                        >
                        <option value="座席(座席確保・座席の特徴・見やすさ)"
                          >座席(座席確保・座席の特徴・見やすさ)</option
                        >
                        <option value="周辺情報(飲食店・ホテル・観光地等)"
                          >周辺情報(飲食店・ホテル・観光地等)</option
                        >
                        <option value="チーム特有の情報(ダービーなど)"
                          >チーム特有の情報(ダービーなど)</option
                        >
                        <option value="その他">その他</option>
                      </select>
                    </form>
                    <form class="edit-title-information">
                      <h3>タイトル</h3>
                      <input
                        v-model="editTitle"
                        type="text"
                        class="edit-title-information-box"
                        placeholder="20字以内で入力してください"
                        maxlength="20"
                      />
                    </form>
                    <form class="edit-text-information">
                      <h3>本文</h3>
                      <textarea
                        v-model="editBody"
                        class="edit-body-information-box"
                        placeholder="400字以内で入力してください"
                        maxlength="400"
                      ></textarea
                      ><br />
                      <div class="count-character">
                        <p>残り{{ 400 - editBody.length }}字です</p>
                      </div>
                      <div class="edit-picture">
                        <h3>画像(3枚まで)</h3>
                        <input type="file" class="picture" multiple />
                      </div>
                    </form>
                    <!-- ボタン -->
                    <div class="edit-btn">
                      <button @click="triggerEditHide()">戻る</button>
                      <button
                        @click="
                          editData(postSingleData, postSingleData.id)
                        "
                      >
                        編集する
                      </button>
                    </div>
                  </section>
                  <div class="reconfirmation-cover"></div>
                </div>
                <!-- 通報画面 -->
                <div class="report" v-if="reportForm">
                  <section class="report-page">
                    <h3>通報画面</h3>
                      <div class="report-post-main-content">
                        <div class="report-post-title">
                          <p>{{ postSingleData.title }}</p>
                        </div>
                        <div class="report-post-text">
                          <p>{{ postSingleData.body }}</p>
                        </div>
                      </div>
                    <!-- 通報理由 -->
                    <form class="report-reason">
                      <select
                        v-model="reportReason"
                        class="report-reason-box"
                        size="1"
                      >
                        <option value="" disabled>--通報の理由(必須)--</option>
                        <option value="特定のチーム、選手、サポーターへの誹謗中傷"
                          >特定のチーム、選手、サポーターへの誹謗中傷</option
                        >
                        <option value="有害なサイトへの誘導"
                          >有害なサイトへの誘導</option
                        >
                        <option value="重複する内容を過剰に連投する行為"
                          >重複する内容を過剰に連投する行為</option
                        >
                        <option value="その他">その他</option>
                      </select>
                    </form>
                    <!-- ボタン -->
                    <div class="report-btn">
                      <button class="cancel" @click="triggerReportHide()">
                        戻る
                      </button>
                      <button
                        class="report"
                        @click="reportData(postSingleData)">通報する</button>
                    </div>
                  </section>
                  <div class="reconfirmation-cover"></div>
                </div>
              </div>
              <!-- 編集完了画面 -->
              <div class="edit-complete" v-if="edited">
                <section>
                  <p>編集が完了しました</p>
                  <button @click="triggerEditedHide()">戻る</button>
                </section>
              </div>
              <div class="complete-cover" v-if="edited"></div>
            </div>
            <Paginate
              :page-count="getPageCount"
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
          <div class="mypage-contents">
            <div class="mypage-past-post">
              <div class="logout">
                <p class="logout-execute" @click="logoutPopupShow">
                  ログアウトする
                </p>
              </div>
              <div class="logout-popup" v-if="logoutShow">
                <section class="logout-reconfirmation">
                  <p>ログアウトしてもよろしいですか？</p>
                  <p class="logout-cancel" @click="logoutPopupHide">戻る</p>
                  <a
                    href="https://jwatch-8411c.web.app/logout/index.html"
                    class="logout-btn"
                    >ログアウトする</a
                  >
                </section>
              </div>
              <div class="delete-account">
                <p class="delete-execute" @click="deletePopupShow">
                  アカウント削除する
                </p>
              </div>
              <div class="delete-popup" v-if="deleteShow">
                <section class="delete-reconfirmation">
                  <p>アカウントを削除してもよろしいですか？</p>
                  <p>一度削除すると元に戻せません</p>
                  <p class="delete-cancel" @click="deletePopupHide">戻る</p>
                  <a
                    href="https://jwatch-8411c.web.app/deleteAccount/index.html"
                    class="delete-btn"
                    >削除する</a
                  >
                </section>
              </div>
              <div
                class="reconfirmation-cover"
                v-if="coverShow"
                @click="popupHide"
              ></div>
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
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Jheader from "../../components/Jheader";
import Paginate from "vuejs-paginate";
import MoveTopBtn from "../../components/MoveTopBtn";
import Jfooter from "../../components/Jfooter";
import myFirstMixin from "../../mixin/myFirstMixin";
import { VueLoading } from "vue-loading-template";
export default {
  data() {
    return {
      visitorUid: String,
      logoutShow: false,
      deleteShow: false,
      coverShow: false,
      noData: false,
      // trueで削除ボタンが表示される(投稿者と閲覧者の一致)
      allowDelete: false,
      // firestoreから取得したデータを保管する
      postMultipleData: [],
      // いいねボタンが押されているか
      isLiked: false,
      liKedCount: 0,
      // ページネーション機能
      sortValue: sessionStorage.getItem("sortkey"),
      parPage: 5,
      currentPage: 1,
      // 編集画面
      editForm: false,
      edited: false,
      // 編集データ
      editStadium: "",
      editCategory: "",
      editTitle: "",
      editBody: "",
      // 通報画面
      reportForm: false,
      reported: false,
      reportReason: "",
      // ローディング画面
      isLoading: false,
    };
  },
  components: {
    Jheader,
    MoveTopBtn,
    Jfooter,
    Paginate,
    VueLoading,
  },
  mixins: [myFirstMixin],
  methods: {
    adminJudgment: function() {
      firebase.auth().onAuthStateChanged((user) => {
        const db = firebase.firestore();
        const admin = db.collection("admin");
        admin.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.id == user.uid) {
              location.href =
                "https://jwatch-8411c.web.app/management/index.html";
            } else {
              return;
            }
          });
        });
      });
    },
    getData: function() {
      this.isLoading = true;
      firebase.auth().onAuthStateChanged((user) => {
        this.noData = true;
        const db = firebase.firestore();
        const postData = db.collection("posts");
        const displayData = postData
          .where("contributorUid", "==", user.uid)
          .orderBy("created", "desc")
          .get()
          // 0件の場合はforEachが実行されないのでthis.noData = trueのままで処理が完了する。
          .then((querySnapshot) => {
            this.noData = false;
            querySnapshot.forEach((doc) => {
              this.postMultipleData.push(Object.assign(doc.data(), {id: doc.id}));
            });
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
            console.log(displayData);
            this.isLoading = false;
          });
      });
    },
    triggerEditShow: function(data) {
      this.editForm = true;
      // 既に入力されているデータを表示する
      this.editStadium = data.stadium;
      this.editCategory = data.category;
      this.editTitle = data.title;
      this.editBody = data.body;
    },
    triggerEditHide: function() {
      this.editForm = false;
    },
    // 編集完了画面の表示/非表示
    triggerEditedShow: function() {
      this.editForm = false;
      this.edited = true;
    },
    triggerEditedHide: function() {
      this.edited = false;
      location.reload();
    },
    // 編集処理
    editData: function(data, individualId) {
      const db = firebase.firestore();
      const postdata = db.collection("posts");
      const now = new Date();
      const unchangeData = data;
      const inputdata = {
        stadium: this.editStadium,
        category: this.editCategory,
        title: this.editTitle,
        body: this.editBody,
        updated:
          now.getFullYear() +
          "/" +
          ("0" + (now.getMonth() + 1)).slice(-2) +
          "/" +
          ("0" + now.getDate()).slice(-2),
        contributorName: this.visitorName,
        likedCounter: unchangeData.likedCounter,
        likedUsers: unchangeData.likedUsers,
      };
      // スタジアムとカテゴリーが入力されているか判定する
      if (this.editStadium.length > 0 && this.editCategory.length > 0) {
        // タイトルと本文が入力されているか判定する
        if (this.editTitle.length > 0 && this.editBody.length > 0) {
          postdata
            .doc(individualId)
            .set(inputdata, { merge: true })
            .then(() => {
              this.triggerEditedShow();
            })
            .catch(function(error) {
              console.error(error);
            });
        } else {
          alert("タイトルと本文を入力してください。");
        }
      } else {
        alert("スタジアム名とカテゴリー名を選択してください。");
      }
    },
    // 通報画面の表示/非表示
    triggerReportShow: function() {
      this.reportForm = true;
    },
    triggerReportHide: function() {
      this.reportForm = false;
    },
    // 通報完了画面の表示/非表示
    triggerReportedShow: function() {
      this.reportForm = false;
      this.reported = true;
    },
    triggerReportedHide: function() {
      this.reported = false;
    },
    // 通報データの追加
    reportData: function(data) {
      const db = firebase.firestore();
      const now = new Date();
      const postData = data;
      const inputData = {
        // 通報対象の投稿データ
        postStadium: postData.stadium,
        postCategory: postData.category,
        postTitle: postData.title,
        postBody: postData.body,
        postCreated: postData.created,
        postContributorName: postData.contributorName,
        postContributorUid: postData.contributorUid,
        postUpdated: postData.updated,
        postLikedCounter: postData.likedCounter,
        postlikedUsers: postData.likedUsers,
        // 通報理由
        reportReason: this.reportReason,
        reportCreated:
          now.getFullYear() +
          "/" +
          ("0" + (now.getMonth() + 1)).slice(-2) +
          "/" +
          ("0" + now.getDate()).slice(-2),
      };
      if (this.reportReason.length > 0) {
        const reportData = db.collection("reports");
        reportData
          .add(inputData)
          .then(() => {
            this.triggerReportHide();
            this.triggerReportedShow();
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        alert("通報理由を選択してください");
      }
    },
    // 選択した投稿を削除する
    deleteData: function(id) {
      if (confirm("この投稿を削除しますか？一度削除すると2度と戻せません。")) {
        const db = firebase.firestore();
        const postData = db.collection("posts");
        postData
          .doc(id)
          .delete()
          .then(function() {
            alert("削除できました。");
            return location.reload();
          })
          .catch(function(error) {
            console.error("エラーが発生しました。: ", error);
          });
      }
    },
    // 別のページに飛ぶ処理
    clickCallback: function(pageNum) {
      this.currentPage = Number(pageNum);
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    },
    // スタジアム・カテゴリーを再選択した時に「情報を見るボタン」を押すまで、
    // 情報がないと誤表示するのを防ぐ役割
    noDataHide: function() {
      this.noData = false;
    },
    // ログアウト確認ポップアップの表示
    logoutPopupShow: function() {
      this.logoutShow = true;
      this.coverShow = true;
    },
    logoutPopupHide: function() {
      this.logoutShow = false;
      this.coverShow = false;
    },
    // アカウント削除確認ポップアップの表示
    deletePopupShow: function() {
      this.deleteShow = true;
      this.coverShow = true;
    },
    deletePopupHide: function() {
      this.deleteShow = false;
      this.coverShow = false;
    },
    popupHide: function() {
      (this.logoutShow = false),
        (this.deleteShow = false),
        (this.coverShow = false);
    },
    likedData: function(index) {
      firebase.auth().onAuthStateChanged((user) => {
        const likedUsers = this.postMultipleData[index].likedUsers
        if (!likedUsers.includes(user.uid)) {
          const likedCounter = this.postMultipleData[index].likedCounter+=1
          likedUsers.push(user.uid)
          this.$set(this.postMultipleData[index], 'likedCounter', likedCounter)
          this.$set(this.postMultipleData[index], 'likedUsers', likedUsers)
          // TODO: firebaseのデータを更新する
        }
      })
    }
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
  mounted: function() {
    this.adminJudgment();
    this.getData();
  },
};
</script>

<style>
.wrap {
  overflow: hidden;
}

/*以下メイン*/

main {
  color: rgb(28.8%, 29.6%, 28.8%);
}
.mypage-title {
  text-align: center;
  margin-top: 250px;
  margin-bottom: 50px;
}

.mypage-title p {
  font-size: 32px;
}

.mypage-title span {
  font-size: 18px;
}

/* 投稿が0件の時に表示する */
.post-no-contents {
  text-align: center;
}

.post-no-contents p {
  font-size: 18px;
}

.post-no-contents a {
  display: block;
  width: 200px;
  font-size: 18px;
  font-weight: 500;
  color: #484b48;
  text-decoration: none;
  border: 2px solid #484b48;
  background-color: #fff;
  margin: 30px auto 30px;
  padding: 15px 20px;
  border-radius: 10px;
  transition: background-color 0.4s linear;
}

.post-no-contents a:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

/* 投稿を表示する部分 */
.post-contents {
  text-align: center;
}

.post-example-contents {
  width: 70%;
  margin: 30px auto;
  padding: 20px 40px 20px;
  border: 2px solid #979797;
  border-radius: 10px;
}

.post-basic-information {
  display: block;
}

.post-basic-information-top {
  display: flex;
  height: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
}

.post-basic-information-bottom {
  display: flex;
  justify-content: space-around;
}

.post-name {
  font-size: 21px;
}

.post-stadium {
  font-size: 18px;
}

.post-category {
  font-size: 18px;
}

.post-date {
  font-size: 18px;
}

.post-title p {
  text-align: center;
  font-size: 21px;
}

.post-text {
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
}

.post-text p {
  font-size: 18px;
}

.post-img {
  display: flex;
}

.post-img img {
  margin: 30px auto 20px;
  width: 30%;
  height: auto;
}

.post-evaluation p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 16px;
}

.post-evaluation-contents {
  display: flex;
  justify-content: center;
}

.evaluation-btn {
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  margin: 0 10px;
}

.evaluation-btn button {
  color: #484b48;
  font-size: 16px;
  background-color: #ffffff;
  border: 2px solid #484b48;
  border-radius: 10px;
  padding: 5px 10px;
  transition: background-color 0.4s linear;
}

.evaluation-btn button:hover {
  color: #ffffff;
  cursor: pointer;
  background-color: #484b48;
  transition: 0.4s;
}

.allow-manage {
  display: flex;
}

/* 編集画面 */
.edit-page {
  opacity: 1;
  width: 800px;
  height: 700px;
  position: fixed;
  background: #ffffff;
  padding-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

.edit-page select {
  width: 60%;
  height: 30px;
}

.edit-page input {
  width: 60%;
  height: 30px;
}

.edit-page textarea {
  width: 60%;
  height: 100px;
}

.edit-picture {
  display: inline-block;
}
/* ボタン */
.edit-btn {
  display: flex;
  margin:10px 0;
}

.edit-btn button {
  font-size: 18px;
  width: 300px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  margin: auto;
  background: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
}

.edit-btn button:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.liked button {
  background-color: #484b48;
  color: #fff;
}

/* 編集完了画面 */
.edit-complete {
  opacity: 1;
  width: 450px;
  height: 150px;
  position: fixed;
  background: #ffffff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

.edit-complete button {
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  margin: 28px auto 30px;
  background: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
}

.edit-complete button:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

/* 通報画面 */
.report-page {
  opacity: 1;
  width: 80%;
  padding: 20px 10px;
  position: fixed;
  background: #ffffff;
  padding-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

/* 投稿を表示する部分 */
/* 通報対象の投稿 */
.report-post-title p {
  text-align: center;
  font-size: 21px;
}

.report-post-text {
  margin: 25px 0;
  padding: 0 30px;
  text-align: left;
}

.report-post-text p {
  font-size: 18px;
}

/*通報の理由*/

.report-reason {
  margin: 30px 0;
}

.report-reason-box {
  height: 30px;
  width: 50%;
  font-size: 18px;
  color: rgb(28.8%, 29.6%, 28.8%);
  border-radius: 10px;
}

.report-reason p {
  font-size: 18px;
}

/* ボタン */
.report-btn {
  display: flex;
}

.report-btn button {
  font-size: 18px;
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  margin: auto;
  background: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
}

.report-btn button:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.reconfirmation-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  z-index: 2;
  opacity: 0.8;
}

/* 通報完了画面 */
.report-complete {
  opacity: 1;
  width: 450px;
  height: 150px;
  position: fixed;
  background: #ffffff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

.report-complete button {
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  margin: 28px auto 30px;
  background: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
}

.report-complete button:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.complete-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  z-index: 2;
  opacity: 0.8;
}

/* ページネーション */
.paginate {
  margin: 100px 0px;
  text-align: center;
}

/* 前に戻るボタン */

.prev-link {
  font-size: 24px;
  margin-right: 10px;
  outline: none;
  color: #484b48;
}

/* 数字のボタン */
.page-link {
  font-size: 24px;
  font-weight: lighter;
  padding: 15px;
  margin: 10px;
  border: 1px solid #484b48;
  border-radius: 5px;
  outline: none;
}

/* 次に進むボタン */
.next-link {
  font-size: 24px;
  margin-left: 10px;
  outline: none;
}

.active-page-link {
  color: #ffffff;
  background-color: gray;
}

.mypage-contents {
  text-align: center;
}

.mypage-contents h2 {
  margin-left: 30px;
  font-size: 21px;
}

.mypage-contents a {
  text-decoration: none;
  color: rgb(28.8%, 29.6%, 28.8%);
}

/* ログアウト */
.logout-execute,
.delete-execute {
  font-size: 16px;
  width: 250px;
  text-align: center;
  margin: 70px auto;
  padding: 20px 45px;
  color: #484b48;
  text-decoration: none;
  border: 2px solid #484b48;
  background-color: #fff;
  border-radius: 10px;
  transition: background-color 0.3s linear;
}

.logout-execute:hover,
.delete-execute:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
}

/* 再確認のホップアップ */

.delete-popup {
  font-size: 18px;
}

.logout-reconfirmation,
.delete-reconfirmation {
  opacity: 1;
  position: fixed;
  background: #ffffff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  text-align: center;
  transition: 0.4s;
  z-index: 3;
}

.logout-cancel,
.delete-cancel {
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px 0px;
  margin: 28px auto 30px;
  background-color: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
  transition: background-color 0.4s linear;
}

.logout-cancel:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.delete-cancel:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.logout-btn,
.delete-btn {
  width: 350px;
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 10px 0px;
  margin: 28px auto 30px;
  background: #ffffff;
  color: #484b48;
  border-radius: 10px;
  border: 2px solid #484b48;
}

.logout-btn:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #484b48;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
}

.reconfirmation-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  z-index: 2;
  opacity: 0.8;
}

.reconfirmation-cover.hidden {
  transition: 0.4s;
  display: none;
}

@media (max-width: 959px) {
  /* メイン */
  /* 投稿内容 */
  .post-example-contents {
    width: 80%;
    margin: 10% auto;
  }

  .post-name {
    font-size: 18px;
  }

  .post-stadium {
    font-size: 16px;
  }

  .post-category {
    font-size: 16px;
  }

  .post-date {
    font-size: 16px;
  }
    /* 編集画面 */
  .edit-page{
    width: 500px;
    height: 800px;
  }

  .edit-btn {
    display: block;
  }
  .edit-btn button {
    margin:30px auto;
  }
  /* 通報画面 */
  .report-btn {
    display: block;
  }

  .report-btn button {
    margin:30px auto;
  }
    /* ページネーション機能 */
  .prev-link {
    font-size: 18px;
    margin-right: 5px;
    margin-top: 5px;
  }
  .page-link {
    font-size: 18px;
    padding: 5px;
    margin: 5px;
  }
  .next-link {
    font-size: 18px;
    margin-left: 5px;
  }
}

@media (max-width: 559px) {
  /* メイン */
  .mypage-title h1 {
    font-size: 28px;
  }

  /* 投稿内容*/
  .post-example-contents {
    padding: 20px;
  }
  .post-basic-information-top {
    display: block;
    padding-bottom: 30px;
  }

  .post-basic-information-bottom {
    display: block;
  }
  .post-basic-information-bottom p {
    text-align: center;
  }

  .post-title p {
    text-align: center;
    font-size: 18px;
  }
  .post-text {
    margin: 10px 0;
    padding: 0 10px;
  }

  .post-name {
    font-size: 18px;
  }

  .post-text p {
    font-size: 16px;
  }

  .post-img {
    flex-direction: column;
  }

  .post-img img {
    margin: 20px auto;
    width: 60%;
    height: auto;
  }
    /* 編集画面 */
  .edit-page {
    width: 300px;
  }

  .edit-btn button {
    font-size: 16px;
    width: 200px;
  }

  .post-evaluation p {
    font-size: 14px;
  }

  .evaluation-btn button {
    font-size: 14px;
  }
  .evaluation-btn {
    margin: 0 3px;
  }
    /* 通報画面 */
  .report-post-title p {
    text-align: center;
    font-size: 16px;
  }
  .report-post-text p {
    font-size: 14px;
  }
    /*通報の理由*/
  .report-btn button {
    font-size: 16px;
    width: 200px;
  }
  /* ログアウト/アカウント削除ボタン */
  .mypage-contents h2 {
    font-size: 18px;
  }

  .logout-execute,
  .delete-execute {
    width: 200px;
    margin:30px auto;
  }

  /* 再確認のホップアップ */
  .logout-popup,
  .delete-popup {
    font-size: 16px;
  }

  .logout-execute {
    font-size: 16px;
  }

  .delete-execute {
    font-size: 16px;
  }

  .logout-btn,
  .delete-btn {
    font-size: 16px;
    padding: 10px 0;
    width: 350px;
  }
}
</style>
