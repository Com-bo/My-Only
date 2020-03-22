<!-- Homeheader -->
<template>
<div class='Homeheader' id="header">
    <header class="header">
        <a class="iconfont icon-jiantou-copy" onclick="window.history.back()"></a>
        <div class="title">{{titles}}</div>
        <a>。。。</a>
    </header>
</div>
</template>

<script>
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
props:["titles"]
}
</script>
<style lang='less' scoped>
.Homeheader{
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem;
    background:green;
    text-align: center;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    .header{
        display: flex;
        .title{
            flex: 6;
            color: white;
        }
        a{
            flex: 1;
            display: block;
            width: 15%;
            font-size: 0.37rem;
            line-height: 1.3rem;
            color: #fff;
        }
    }
}

</style>