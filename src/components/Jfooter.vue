<template>
    <footer>
    <div class="footer-contants">
      <div class="footer-title">
          <h3>Jwatch</h3>
          <p>〜全ての人にサッカー観戦の楽しみを〜</p>
      </div>
      <div class="link">
        <a href="https://jwatch-8411c.web.app/inquiry/index.html">ご要望＆ご意見はこちら</a><br>
        <a href="https://jwatch-8411c.web.app/question/index.html">Q&A</a><br>
        <a href="https://jwatch-8411c.web.app/introduction/index.html">About 管理人</a>
      </div>
      <div class="sns">
        <div class="icon-title">
            <p>share</p>
        </div>
        <div class="icon-img">
            <div class="icon-top">
                <div class="twitter">
                    <a href="https://twitter.com/intent/tweet?url=https://jwatch-8411c.web.app/mainpage/index.html&text=Jwatch Jリーグのスタジアム観戦情報を投稿＆閲覧できるサイト&hashtags=Jwatch&hashtags=Jリーグ" target="_blank" rel="nofollow noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                    </a>
                </div>
                <div class="line">
                    <a href="https://social-plugins.line.me/lineit/share?url=https://jwatch-8411c.web.app/mainpage/index.html" target="_blank" rel="nofollow noopener noreferrer">
                    <i class="fab fa-line"></i>
                    </a>
                </div>
            </div>
            <div class="icon-bottom">
                <div class="facebook">
                    <a href="http://facebook.com/share.php?u=https://jwatch-8411c.web.app/mainpage/index.html" target="_blank" rel="nofollow noopener noreferrer">
                    <i class="fab fa-facebook-square"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
  </footer>
</template>

<style lang="scss" scoped>
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
  h3{
    font-size: 36px;
    font-weight: 700;
  }
  p{
    font-size: 16px;
  }
}

.link{
  width: 250px;
  margin-left: 30%;
  a{
    color: rgb(28.8%, 29.6%, 28.8%);
    font-size: 16px;
    margin-left: 20px;
    margin-bottom: 40px;
    position: relative;
    display: inline-block;
    text-decoration: none;
  }
  a::after{
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
  a:hover::after{
    transform: scale(1,1);
  }
}

/*以下SNS連携*/

.sns{
  display: flex;
  margin-bottom: 10px;
  margin-left: 10%;
  a{
    display: flex;
    margin: 0px 10px;
    color: rgb(28.8%, 29.6%, 28.8%);
    text-decoration: none;
    padding: 0 10px;
    transition:color 0.4s linear;
  }
  a:hover{
    color: gray;
    transition: 0.4s;
  }
  i {
    font-size: 26px;
    padding-bottom: 20px;
  }
}

.icon-title{
  margin-right: 10px;
  p{
    color: #484b48;
    font-size: 16px;
    margin-block-start: 0em;
  }
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

@media (max-width:959px)
{
      /* フッター */
    .footer-contants{
        display: block;
    }

    .link{
        margin-left: 0em;
      a{
        margin-left:0;
      }
    }

    .sns{
        margin-left: 0em;
        padding: 0em;
    }

    .icon-img{
        display: flex;
    }
}

@media (max-width:559px)
{
    /* フッター */
    .footer-contants{
        padding: 20px 30px;
    }
}
</style>