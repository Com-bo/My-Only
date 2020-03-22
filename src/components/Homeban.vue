<!-- Homeban -->
<template>
<div class='Homeban' id="Homeban">
    <mt-swipe :auto="4000">
        <mt-swipe-item  v-for="ban in bannerimg" :key="ban.id">
            <img src="@/assets/img/2.jpeg" alt="">
        </mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    bannerimg:[{
        id:1,
        imgurl:""
    },{
        id:2,
        imgurl:"@/assets/img/2.jpeg"
    }]
};
}
}
</script>
<style lang='less' scoped>
.Homeban{
    height: 4.5rem;
    img{
        width: 100%;
        height: 4.5rem;
    }
}

</style>