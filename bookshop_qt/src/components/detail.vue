<template>
    <div class="detail">
        <topbar :isback="true">商品详情</topbar>
        <div class="content">
          <div class="item">
              <label for="">书名:</label>
              <input type="text" name="" id="" v-model="book.bookName">
          </div>
          <div class="item">
              <label for="">描述:</label>
              <input type="text" v-model="book.bookDescript">
          </div>
          <div class="item">
              <label for="">价格:</label>
              <input type="text" v-model="book.bookPrice">
          </div>
          <button @click="updateBook">确定修改</button>
      </div>
    </div>
</template>
<script>
import topbar from '../base/topbar.vue'
import {getOneBook, updateOneBook} from '../api/index.js'
export default{
  created () {
    this.getMybook()
  },
  methods: {
    async getMybook () {
      this.book = await getOneBook(this.$route.params.id)
      //   console.log(this.$route)
      Object.keys(this.book).length > 0 ? void (0) : this.$router.push('/category')
    },
    async updateBook () {
      let res = await updateOneBook(this.book.id, this.book)
      console.log(res)
      if (res.status === 1) {
        this.$router.push('/category')
      }
    }
  },
  data () {
    return {
      book: {}
    }
  },
  components: {
    topbar
  }

}
</script>
<style scoped>
.detail{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:white;
}
.content {

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        box-sizing: border-box
    }
    .content .item {
        margin-bottom: 20px;
    }

    .content .item label{
        font-size: 20px;
    }

    .content .item input {
        height: 35px;;
        width: 280px;
        border: 1px solid #999;
        padding-left: 15px;
    }

    .content button {
        height: 48px;
        width: 120px;
        background: brown;
        font-size: 18px;
        color: white;
        border:none
    }

</style>
