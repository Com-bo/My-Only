<!-- Minemain -->
<template>
<div class=''>
    <div class="logo">
        <div class="img">
            <img src="@/assets/img/1.jpeg" alt="">
        </div>
        <p>寒星晓月</p>
    </div>
    <div class="info">
        <div class="list">
            <p>全部订单</p>
            <i>查看全部订单 <a class="iconfont icon-jiantou"></a></i>
        </div>
        <div class="lists">
            <div class="item">
                <i  class="iconfont icon-cart1"></i>
                <p>待付款<span>(0)</span></p>
            </div>
            <div class="item">
                <i  class="iconfont icon-cart1"></i>
                <p>待收货<span>(0)</span></p>
            </div>
            <div class="item">
                <i  class="iconfont icon-cart1"></i>
                <p>已完成<span>(0)</span></p>
            </div>
            <div class="item">
                <i  class="iconfont icon-cart1"></i>
                <p>售后<span>(0)</span></p>
            </div>
        </div>
        <div class="list">
             <p>地址管理</p>
            <i class="iconfont icon-jiantou"></i>
        </div>
        <div class="list">
            <p>优惠券</p>
            <i class="iconfont icon-jiantou"></i>
        </div>
        <div class="list">
            <p>联系客服</p>
           <i class="iconfont icon-jiantou"></i>
        </div>       
    </div>
</div>
</template>

<script>
export default {
components: {},
data() {
return {

};
}
}
</script>
<style lang='less' scoped>
.logo{
    margin-top: 1.3rem;
    height: 3.5rem;
    background: green;
    padding-top: 0.8rem;
    .img{
        margin: 0 auto;
        border: 2px solid white;
        border-radius: 50%;
        overflow: hidden;
        width: 2.4rem;
        height: 2.4rem;
        img{
            height: 100%;
        }
    }
    p{
        text-align: center;
        font-size: 0.5rem;
        color: white;
    }
}
.info{
    .list{
        height: 1.4rem;
        line-height: 1.4rem;
        padding:0 20px;
        font-size: 16px;
        border-bottom: 1px solid #999;
        display: flex;
        p{
            flex: 1;
        }
        i{
            flex: 1;
            text-align: right;
            font-style: normal;
             color: #999;
        }
    }
    .lists{
        display: flex;
        color: #999;
        .item{
            flex: 1;
            padding: 15px;
           font-size: 0.43rem;
            text-align: center;
            i{
                display: block;
            }
            p{
                margin-top: 10px;
                font-size: 0.38rem;
                span{
                    color: red;
                }
            }
        }
    }
}

</style>