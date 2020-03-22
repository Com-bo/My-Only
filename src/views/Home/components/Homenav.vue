<!-- Homenav -->
<template>
<div class='Homenav'>
    <ul>
        <li v-for="nav in homenavlist" :key="nav.id">
            <img :src="nav.imgurl" alt="">
            <span>{{nav.title}}</span>
        </li>
    </ul>
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
    homenavlist:[{
        id:1,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺1"
    },{
        id:2,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺2"
    },{
        id:3,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺3"
    },{
        id:4,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺4"
    },{
        id:5,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺5"
    },{
        id:6,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺6"
    },{
        id:7,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺7"
    },{
        id:8,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺8"
    },{
        id:9,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺9"
    },{
        id:10,
        imgurl:"https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792344400.png",
        title:"店铺10"
    }]

};
}
}
</script>
<style lang='less' scoped>
.Homenav{
    width: 100%;
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        li{
            width: 20%;
            text-align: center;
            img{
                width: 100%;
            }
            span{
                font-size: 0.40rem;
                display: block;
            }
        }
    }
}

</style>