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
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    answerquestion: "src/pages/answerquestion/main.js",
    answerreception: "src/pages/answerreception/main.js",
    deleteAccount: "src/pages/deleteAccount/main.js",
    inquiry: "src/pages/inquiry/main.js",
    introduction: "src/pages/introduction/main.js",
    login: "src/pages/login/main.js",
    loginAnonymous: "src/pages/loginAnonymous/main.js",
    loginComplete: "src/pages/loginComplete/main.js",
    loginEmail: "src/pages/loginEmail/main.js",
    loginGoogle: "src/pages/loginGoogle/main.js",
    loginTwitter: "src/pages/loginTwitter/main.js",
    mainpage: "src/pages/mainpage/main.js",
    mypage: "src/pages/mypage/main.js",
    popular: "src/pages/popular/main.js",
    posting: "src/pages/posting/main.js",
    question: "src/pages/question/main.js",
    reportpage: "src/pages/reportpage/main.js",
    request: "src/pages/request/main.js",
    searchinformation: "src/pages/searchinformation/main.js",
    usage: "src/pages/usage/main.js",
    inquirymail: "src/pages/inquirymail/main.js",
    management: "src/pages/management/main.js",
    reportlist: "src/pages/reportlist/main.js",
    viewinformations: "src/pages/viewinformations/main.js",
    warning: "src/pages/warning/main.js",
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