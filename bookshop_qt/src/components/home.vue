<template>
    <div>
        <topbar :isback="false">首页</topbar>
        <template v-if="flag">
          <loading></loading>
        </template>
        <template v-else>
            <swiper :myslider="sliders"></swiper>
            <div class="hotbook">
              <h2>热门书籍</h2>
              <ul>
                <li v-for="(book,index) in booklist" :key="index">
                  <img v-lazy='book.bookCover' alt=''>
                  <span>{{book.bookName}}</span>
                </li>
              </ul>
            </div>
        </template>
    </div>
</template>
<script>
import topbar from '../base/topbar.vue'
import swiper from '../base/swiper.vue'
import {getSliders, getBooks} from '../api/index.js'
import loading from '../base/loading.vue'
export default{
  async created () {
    // ES6 fetch ajax请求方法
    // fetch('http://127.0.0.1:3000/sliders').then((data) => {
    //   return data.json()
    // }).then((data) => {
    //   console.log(data)
    //   this.sliders = data
    // })

    // axios封装的函数方法
    // getSliders().then((data) => {
    //   this.sliders = data.data
    //   // console.log(data.data)
    // })

    // ES5 使用回调函数解决异步请求的问题
    // ES6 使用primise
    // ES7 使用async await

    // 使用 aysnc+await ES7语法
    // let {data} = await getSliders()
    // console.log(data)

    // 使用 aysnc+await ES7语法+axios封装的函数方法
    this.sliders = await getSliders()
    this.booklist = await getBooks(1, 5)
    this.flag = false
  },
  data () {
    return {
      sliders: [],
      booklist: [],
      flag: true
    }
  },
  components: {
    topbar,
    swiper,
    loading
  }
}
</script>
<style scoped>
.hotbook{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
padding:0px 10px;
box-sizing:border-box;
}
.hotbook ul{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
}
.hotbook ul li{
  display:flex;
  flex-direction:column;
  width:100px;
  margin-top:10px;
}
.hotbook ul li img{
  width:90px;
}
</style>
