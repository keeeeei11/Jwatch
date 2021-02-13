<template>
  <Paginate
    :margin-pages    = "marginPages"
    :page-count      = "getPageCount"
    :page-range      = "pageRange"
    :click-handler   = "clickCallback"
    :prev-text       = "'<<'"
    :next-text       = "'>>'"
    :no-li-surround  = "true"
    :container-class = "'paginate'"
    :prev-link-class = "'prev-link'"
    :page-link-class = "'page-link'"
    :next-link-class = "'next-link'"
    :active-class    = "'active-page-link'"/>
</template>

<script>
import Paginate from "vuejs-paginate";
export default {
  data(){
    return {
      currentPage: 1,
      parPage:     10
    }
  },
  props:{
    marginPages:      { type:Number, default:3 },
    pageRange:        { type:Number, default:2 },
    postMultipleData: { type:Array }
  },
  methods:{
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
      window.scrollTo({
        behavior: "instant",
        top: 0,
      });
    },
  },
  components:{
    Paginate,
  },
  computed: {
    getItems: function () {
      const current = this.currentPage * this.parPage;
      const start = current - this.parPage;
      const foo = this.postMultipleData.slice(start, current);
      this.$emit("catchGetItems", foo)
      return foo
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
  margin:100px auto;
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