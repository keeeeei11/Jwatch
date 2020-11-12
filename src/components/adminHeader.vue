<template>
    <header>
      <div class="header-contents">
        <div class="header-title">
          <a href="https://jwatch-8411c.web.app/management/index.html">管理者画面</a>
        </div>
        <div class="header-menu">
          <a href="https://jwatch-8411c.web.app/reportlist/index.html">通報一覧</a>
          <a href="https://jwatch-8411c.web.app/inquirymail/index.html">お問い合わせメール</a>
        </div>
      </div>
    </header>
</template>

<style scoped>
header{
  width: 100%;
  position: fixed;
  top:0;
  background-color:white;
  border-bottom: 1px solid #efefef;
  z-index: 2;
}
.header-contents{
  height: 50px;
  display: flex;
  margin: auto 50px;
  justify-content: space-around;
}

.header-contents{
  margin-top: 30px;
}

.header-contents a{
  text-decoration: none;
  color: #484b48;
  margin: 0 30px;
}

.header-contents a:hover{
  color: gray;
}
</style>