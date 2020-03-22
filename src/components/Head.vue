<!-- 产品公共头部 -->
<template>
<div class='head'>
    <class class="header">
        <a class="iconfont icon-jiantou-copy" onclick="window.history.back()"></a>
        <div class="title">{{titles}}</div>
    </class>
</div>
</template>

<script>
export default {
components: {},
data() {
return {

};
},
props:["titles"]
}
</script>
<style lang='less' scoped>
.header{
    width: 100%;
    height: 1.3rem;
    background:#fff;
    border-bottom: 1px solid #efefef;
    text-align: center;
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    a{
        display: block;
        width: 15%;
        line-height: 1.3rem;
        color: black;
        position: relative;
        z-index: 999;
    }
    .title{
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        width: 100%;
        line-height: 1.3rem;
        font-size: 0.37rem;
    }
}

</style>