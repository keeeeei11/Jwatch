<template>
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
</template>

<script>
import Paginate from "vuejs-paginate";
export default {
  data(){

  },
  methods:{
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    },
  },
  computed: {
    getItems: function () {
      let current = this.currentPage * this.parPage;
      let start = current - this.parPage;
      return this.postMultipleData.slice(start, current);
    },
    getPageCount: function () {
      return Math.ceil(this.postMultipleData.length / this.parPage);
    },
  },
}
</script>

<style>
/* ページネーション */
.paginate {
  margin-top: 100px;
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

@media (max-width: 959px) {
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
</style>