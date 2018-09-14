<template>
    <div class="nav">
        <router-link to="/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/category">
            <i class="iconfont icon-fenlei"></i>
            <span>分类</span>
        </router-link>
        <router-link to="/hot">
            <i class="iconfont icon-huo"></i>
            <span>热门</span>
        </router-link>
        <router-link to="/shop">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物</span>
        </router-link>
        <router-link to="/my">
            <i class="iconfont icon-gerenzhongxin"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>
<script>
export default{

}
</script>
<style scoped>
    .nav{
        position:fixed;
        bottom:0;
        left:0;
        height:55px;
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        box-shadow:0 -5px 10px #999;
        background:white;
    }
    .nav a{
        display:flex;
        flex:1;
        flex-direction:column;
        color:#999;
    }
    .nav a i{
        font-size:25px;
    }
    .nav a span{
        font-size:12px;
    }
    a.router-link-active{
        color:#f34545;
    }
</style>
