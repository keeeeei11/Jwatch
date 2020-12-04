<template>
  <div class="post-no-contents">
    <p>{{ stadium }}の{{ category }}に関する投稿はまだありません…</p>
    <p>知っている情報があれば投稿して共有してみませんか？</p>
    <p>
      ※GoogleまたはTwitterアカウントによるログイン,もしくは匿名ログインが必要です。
    </p>
    <a href="https://jwatch-8411c.web.app/posting/index.html"
      >観戦情報を投稿する！</a
    >
  </div>
</template>

<script>
export default {
  props:{
    stadium:String,
    category:String
  }
}
</script>

<style lang="scss" scoped>
/* 投稿が0件の時に表示する */
.post-no-contents {
  text-align: center;
  padding: 30px;
  p {
    font-size: 18px;
  }
  a {
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
  a:hover {
    background-color: #484b48;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }
}

@media (max-width: 559px) {
  .post-no-contents{
    p {
      font-size: 16px;
    }
    a {
        font-size: 16px;
    }
  }
}
</style>