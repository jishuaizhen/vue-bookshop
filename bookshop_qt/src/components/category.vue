<template>
    <div class="category">
        <topbar :isback="true" class="top">分类</topbar>
        <div class="content"  ref="content">
            <pull-to @top-pull="refresh" @infinite-scroll="getmore" class="scroll-view">
          <ul>
                <li v-for="(book,index) in booklist" :key="index">
                  <router-link :to="{name:'detail',params:{id:book.id}}">
                  <img v-lazy='book.bookCover' alt=''>
                  <div>
                    <h3 v-text='book.bookName'></h3>
                    <span class='des'>{{book.bookDescript}}</span>
                    <span class='price'>{{book.bookPrice}}</span>
                   <!-- 因为后台在删除数据的时候需要前台告知删除哪条数据 -->
                    <button @click.prevent="removeBook(book)">删除</button>
                  </div>
                  </router-link>
                </li>
              </ul>
            </pull-to>
        </div>

        <!-- <button @click="loadbook">加载更多</button> -->
    </div>
</template>
<script>
import topbar from '../base/topbar.vue'
import {getBooks, removeBooks} from '../api/index.js'
import PullTo from 'vue-pull-to'
export default{
  data () {
    return {
      booklist: [],
      page: 1,
      pagenum: 5,
      timer: null,
      flag: false
    }
  },
  created () {
    this.getBooksData()
  },
  // mounted () {
  //   // 可以进行dom操作
  //   this.$refs.content.addEventListener('touchstart', (event) => {
  //     var startY = event.touches[0].pageY
  //     console.log(startY)
  //     this.$refs.content.addEventListener('touchmove', (event) => {
  //       var moveY = event.touches[0].pageY
  //       var offset = moveY - startY
  //       if (offset > 100) {
  //         this.$refs.content.style.top = '60px'
  //       }
  //     })
  //     this.$refs.content.addEventListener('touchend', (event) => {
  //       this.$refs.content.style.top = '0px'
  //       getBooks(1, this.pagenum).then((data) => {
  //         this.booklist = data
  //       })
  //     })
  //   })
  // },
  methods: {
    async getBooksData () {
      // ajax请求过程中不可以再次进行请求
      if (!this.flag) {
        this.flag = true
        var list = await getBooks(this.page++, this.pagenum)
        this.flag = false
        if (list.length === 0) {
          alert('加载完毕了！！！')
          this.page--
        }
        this.booklist = [...list, ...this.booklist]
      }
    },
    async removeBook (book) {
      let res = await removeBooks(book.id)
      if (res.status === 1) {
        this.booklist = this.booklist.filter(function (item) {
          return item !== book
        })
      }
    },
    // conscroll () {
    //   // 利用定时器防抖动，防止瞬间多次ajax请求
    //   clearTimeout(this.timer)
    //   this.timer = setTimeout(() => {
    //     // console.log(111)
    //     let {scrollTop, clientHeight, scrollHeight} = this.$refs.content
    //     // console.log(scrollTop, clientHeight, scrollHeight)
    //     if (scrollTop + clientHeight + 50 > scrollHeight) {
    //       this.getBooksData()
    //     }
    //   }, 50)
    // }
    getmore () {
      this.getBooksData()
    },
    async refresh () {
      // console.log("刷新")
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        getBooks(1, this.pagenum).then((data) => {
          this.bookList = data
        })
      }, 500)
    }
  },
  components: {
    topbar,
    PullTo
  }
}
</script>
<style scoped>

.content{
  width: 100%;
  height: 667px;
  overflow: auto;
  position:relative;
}
.scroll-view {
  height: 100%;
}
.category .top{
  position:fixed;
  left:0;
  top:0;
  width:100%;
  z-index: 10;
}
.category ul{
    width: 100%;
    overflow: hidden;
    padding: 70px 0px;
  }

  .category ul li {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #999;
    padding: 15px;
  }
  .category ul li img {
    width: 160px;
    height: 160px;
  }

  .category ul li a {
    display: flex;
    color: black;
    overflow: hidden;
  }

  .category ul li div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0;
    flex: 1;
    overflow: hidden;
  }

  .category ul li div h3 {
    font-size: 20px;
  }

  .category ul li div .price {
    font-size: 14px;
    margin-top: 20px;
  }
  .category ul li div .des {
    font-size: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    display: inline-block;
    text-align: left;
    margin-top: 20px;
  }

  .category ul li div button {
    width: 100px;
    height: 30px;
    margin-top: 10px;
    border: none;
    background: brown;
    font-size: 18px;
    color: white;
    border-radius: 6px;
  }
</style>
