const path = require("path");

module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/pages/mainpage/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    answerquestion: {
      entry:"src/pages/answerquestion/main.js",
      filename:"answerquestion/index.html",
      title:"質問に答える！ Jwatch Jリーグ観戦情報サイト"
    },
    answerreception: {
      entry:"src/pages/answerreception/main.js",
      filename:"answerreception/index.html",
      title:"回答受付中の質問一覧 Jwatch Jリーグ観戦情報サイト",
    },
    deleteAccount: {
      entry:"src/pages/deleteAccount/main.js",
      filename:"deleteaccount/index.html",
      title:"ログアウト画面 Jwatch Jリーグ観戦情報サイト"
    },
    inquiry: {
      entry:"src/pages/inquiry/main.js",
      filename:"inquiry/index.html",
      title:"ご意見＆ご要望はこちら Jwatch Jリーグ観戦情報サイト"
    },
    inquirymail: {
      entry:"src/pages/inquirymail/main.js",
      filename:"inquirymail/index.html",
      title:"お問い合わせメール確認ページ"
    },
    introduction: {
      entry:"src/pages/introduction/main.js",
      filename:"introduction/index.html",
      title:"管理人の紹介 Jwatch Jリーグ観戦情報サイト"
    },
    login: {
      entry:"src/pages/login/main.js",
      filename:"login/index.html",
      title:"ログイン画面 Jwatch Jリーグ観戦情報サイト"
    },
    loginAnonymous: {
      entry:"src/pages/loginAnonymous/main.js",
      filename:"loginAnonymous/index.html",
      title:"ログイン画面 Jwatch Jリーグ観戦情報サイト"
    },
    loginComplete: {
      entry:"src/pages/loginComplete/main.js",
      filename:"loginComplete/index.html",
      title:"ログイン画面 Jwatch Jリーグ観戦情報サイト"
    },
    loginEmail: {
      entry:"src/pages/loginEmail/main.js",
      filename:"loginEmail/index.html",
      title:"ログイン画面 Jwatch Jリーグ観戦情報サイト"
    },
    loginGoogle: {
      entry:"src/pages/loginGoogle/main.js",
      filename:"loginGoogle/index.html",
      title:"ログイン画面 Jwatch Jリーグ観戦情報サイト"
    },
    loginTwitter: {
      entry:"src/pages/loginTwitter/main.js",
      filename:"loginTwitter/index.html",
      title:"ログイン画面 Jwatch Jリーグ観戦情報サイト"
    },
    mainpage: {
      entry:"src/pages/mainpage/main.js",
      filename:"mainpage/index.html",
      title:"Jwatch Jリーグ観戦情報サイト"
    },
    management: {
      entry:"src/pages/management/main.js",
      filename:"management/index.html",
      title:"管理画面トップ"
    },
    mypage: {
      entry:"src/pages/mypage/main.js",
      filename:"mypage/index.html",
      title:"〇〇さんのマイページ Jwatch Jリーグ観戦情報サイト"
    },
    popular: {
      entry:"src/pages/popular/main.js",
      filename:"popular/index.html",
      title:"人気の投稿 Jwatch Jリーグ観戦情報サイト"
    },
    posting: {
      entry:"src/pages/posting/main.js",
      filename:"posting/index.html",
      title:"投稿画面 Jwatch Jリーグ観戦情報サイト"
    },
    question: {
      entry:"src/pages/question/main.js",
      filename:"question/index.html",
      title:"Q&A Jwatch Jリーグ観戦情報サイト"
    },
    reportlist: {
      entry:"src/pages/reportlist/main.js",
      filename:"reportlist/index.html",
      title:"通報一覧確認ページ"
    },
    reportpage: {
      entry:"src/pages/reportpage/main.js",
      filename:"reportpage/index.html",
      title:"通報画面 Jwatch Jリーグ観戦情報サイト"
    },
    request: {
      entry:"src/pages/request/main.js",
      filename:"request/index.html",
      title:"こんな情報が欲しい！ Jwatch Jリーグ観戦情報サイト"
    },
    searchinformation: {
      entry:"src/pages/searchinformation/main.js",
      filename:"searchinformation/index.html",
      title:"情報を探す！ Jwatch Jリーグ観戦情報サイト"
    },
    usage: {
      entry:"src/pages/usage/main.js",
      filename:"usage/index.html",
      title:"詳しい使い方 Jwatch Jリーグ観戦情報サイト"
    },
    viewinformations: {
      entry:"src/pages/viewinformations/main.js",
      filename:"viewinformations/index.html",
      title:"情報を見る！ Jwatch Jリーグ観戦情報サイト"
    },
    warning: {
      entry:"src/pages/warning/main.js",
      filename:"warning/index.html",
      title:"投稿禁止対象の行為について Jwatch Jリーグ観戦情報サイト"
    },
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === "production" ? "(none)" : "source-map",
    resolve: {
      alias: {
        "~": path.join(__dirname, "/src"),
        "@": path.join(__dirname, "/src"),
      },
    },
  },
};