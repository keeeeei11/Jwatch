<template>
  <div class="attention">
    <div class="attention-title">
      <h2>Points to note</h2>
      <p>注意点</p>
    </div>
    <div class="attention-discriptions">
      <div class="attention-discription01">
        <p>
          ・一つの投稿で一つのテーマについて記載してください。<br />
          例)一つの投稿でグルメと交通情報を両方記載する等はお控えください。
        </p>
      </div>
      <div class="attention-discription02">
        <p>
          ・投稿禁止対象に該当する投稿だと運営が判断した場合、投稿禁止とさせていただくことがあります。<br />
          ・投稿禁止対象となる行為は<a
            href="https://jwatch-8411c.web.app/warning/index.html"
            target="_brank"
            rel="nofollow noopener noreferrer"
            >こちら</a
          >をご覧ください。
        </p>
      </div>
      <div class="attention-discription03">
        <p>
          ・特定のチームや選手,サポーターへの誹謗中傷は如何なる理由であれ投稿禁止対象となります。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*注意点*/
.attention {
  margin-top: 100px;
  margin-bottom: 50px;
  margin-right: 10%;
  padding: 100px 80px;
  background-color: #f2f2f2;
}

.attention-title h2 {
  font-size: 32px;
}

.attention-title p {
  font-size: 18px;
}

.attention-discriptions {
  font-size: 18px;
  padding-left: 10%;
}

.attention-discriptions p {
  line-height: 2.5em;
}

.attention-discriptions a {
  color: rgb(28.8%, 29.6%, 28.8%);
  position: relative;
  display: inline-block;
  text-decoration: none;
}
.attention-discriptions a::after {
  position: absolute;
  bottom: 8px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: #333;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}
.attention-discriptions a:hover::after {
  transform: scale(1, 1);
}

.attention-discription01 {
  margin-bottom: 30px;
}

.attention-discription02 {
  margin-bottom: 30px;
}

.attention-discription03 {
  color: #ff0000;
}

@media (max-width: 959px) {
  /* メイン */
  /*注意点*/
  .attention {
    text-align: center;
    margin-right: 0;
  }

  .attention-discriptions {
    padding-left: 0;
  }
}


@media (max-width: 559px) {
  /* メイン */
  /*注意点*/
  .attention {
    padding: 50px 40px;
  }
  .attention-title h2 {
    font-size: 28px;
  }

  .attention-title p {
    font-size: 16px;
  }
  .attention-discriptions {
    font-size: 16px;
    padding-left: 0;
  }
}
</style>