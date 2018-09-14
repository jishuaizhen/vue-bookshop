<template>
    <div class="topbar">
        <!-- 判断返回标志是否存在 -->
        <i class="iconfont icon-fanhui" v-if="isback" @click="goback"></i>
        <!-- 添加插槽,每个页面填充自己的名字 -->
        <span><slot></slot></span>
    </div>
</template>
<script>
export default{
  // 自定义属性接收父组件的消息
  props: ['isback'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="less">
.topbar{
    height:50px;
    line-height:50px;
    border-bottom:1px solid #666;
    text-align:center;
    position:relative;
    background:brown;
}
i{
    position:absolute;
    left:20px;
}
span{
    color:white;
    font-size:20px;
}
</style>
