<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in myslider" :key="index">
      <img :src='slide' class="myimg"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  props: ['myslider'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.myslider.length < 10) {
    //     this.myslider.push(this.myslider.length + 1)
    //   }
    // }, 3000)
  }
}
</script>
<style scoped>
.myimg{
  width:100%
}
</style>
