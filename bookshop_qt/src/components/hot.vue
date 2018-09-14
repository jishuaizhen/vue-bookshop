<template>
  <div class="detail">
      <topbar :isback="true">热门书籍</topbar>
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
        <div class="item">
          <label for="">图片:</label>
          <!-- <input type="text" v-model="book.bookCover"> -->
          <input type="file" @change="inputChange" ref="bookimg">
          <img :src="book.bookCover" alt="">
      </div>
        <button @click="addBook">添加图书</button>
    </div>
  </div>
</template>
<script>
import topbar from '../base/topbar.vue'
import {addOneBook} from '../api/index.js'
export default{
  methods: {
    async addBook () {
      let res = await addOneBook(this.book)
      console.log(res)
      if (res.status === 1) {
        this.$router.push('/category')
      }
    },
    inputChange () {
      // console.log(this.$refs.bookimg.files[0])
      var file = new FileReader()
      file.readAsDataURL(this.$refs.bookimg.files[0])
      file.onload = (data) => {
        // console.log(data.target.result)
        this.book.bookCover = data.target.result
      }
    }
  },
  data () {
    return {
      book: {bookCover: ''}
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
