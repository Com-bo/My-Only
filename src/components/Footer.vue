<!-- 底部 -->
<template>
<div class='footer'>
    <ul>
        <router-link to="/home" tag="li">
            <div class="navimg">
                <i class="iconfont icon-home1" v-if="active==='home'"></i>
                <i class="iconfont icon-home" v-else></i>
            </div>
            <span>首页</span>
        </router-link>
        <router-link to="/category" tag="li">
            <div class="navimg">
                <i class="iconfont icon-categoryselected" v-if="active==='category'"></i>
                <i class="iconfont icon-category" v-else></i>
            </div>
            <span>分类</span>
        </router-link>
        <router-link to="/cart" tag="li">
            <div class="navimg">
                <i class="iconfont icon-cart1" v-if="active==='cart'"></i>
                <i class="iconfont icon-cart" v-else></i>
            </div>
            <span>购物车</span>
        </router-link>
        <router-link to="/mine" tag="li">
            <div class="navimg">
                <i class="iconfont icon-minefill" v-if="active==='mine'"></i>
                <i class="iconfont icon-mine" v-else></i>
            </div>
            <span>我的</span>
        </router-link>
    </ul>
</div>
</template>

<script>


export default {
components: {},
data() {
return {
    active:"home"
};
},
mounted(){
    // console.log(this.$route.path);
    this.active=this.$route.path.slice(1)
    
}
}
</script>
<style lang='less' scoped>
.footer{
    position:fixed;
    background-color: white;
    width: 100%;
    bottom: 0;
    ul{
        display: flex;
        height: 1.4rem;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #ccc;
        li{
            width: 25%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            span{
                font-size: 0.32rem;
            }
        }
    }
}
.router-link-active{
    color: green;
}

</style>