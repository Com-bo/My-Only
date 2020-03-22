<!-- Homemain -->
<template>
<div class='Homemain'>
    <div class="home-news">
        <div class="home-news-img">
            <img src="@/assets/img/shangcheng.png" alt="">
        </div>
        <div class="home-news-list">
            <ul id="newlist">
                <li>新闻</li>
                <li>热点</li>
                <li>音乐</li>
                <li>旅行</li>
                <li>电影</li>
            </ul>
        </div>
        <div class="home-news-more">
            更多
            <i class="iconfont icon-category"></i>
        </div>
    </div>
    <div class="home-ad">
        <div>
            <img src="@/assets/img/001.jpg" alt="">
        </div>
        <div>
            <img src="@/assets/img/002.jpg" alt="">
        </div>
    </div>
</div>
</template>

<script>

export default {
data() {

return {

};
}
}
</script>
<style lang='less' scoped>
.home-news{
    width: 100%;
    display: flex;
    height: 1.3rem;
    line-height: 1.3rem;
    margin-top: 15px;
    overflow: hidden;
    .home-news-img{
        width: 10%;
        img{
            height: 0.9rem;
            margin-top: 0.2rem;
            margin-left: 10px;
        }
    }
    .home-news-list{
        width: 75%;
        position: relative;
        ul{
            position: absolute;
            width: 100%;
            top: 0;
            li{
                font-size: 0.37rem;
                margin-left: 20px;
            }
            
        }
    }
    .home-news-more{
        width: 15%;
        font-size: 0.37rem;
        margin-right: 10px;
    }

}
.home-ad{
    display: flex;
    div{
        width: 50%;
        img{
            width: 100%;
        }
    }
}
</style>