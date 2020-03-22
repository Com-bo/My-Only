<!-- 产品详情页 -->
<template>
<div class=''>
    <MainHeader titles="商品详情"/>
    <div class="detail-wrap">
        <div class="banner-wrap">
             <mt-swipe :auto="2000">
                <mt-swipe-item  v-for="ban in bannerdata" :key="ban.image_id">
                    <img :src="ban.image_url" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="detail-content">
            <h2 class="title">{{detaildata.product_name}}</h2>
            <h3>
                <span class="price">{{detaildata.product_price}}</span>
                <span class="dprice">{{detaildata.product_dprice}}</span>
            </h3>
            <div class="productinfo">
                <p>品牌：小米笔记本</p>
                <p>支付：微信支付</p>
            </div>
        </div>
        <div class="tab">
            <div class="click" @click="tabA">图文详情</div>
            <div id="canshu" @click="tabB">产品参数</div>
        </div>
        <div class="tabinfoA" v-show="flagA">
            <h3>小米笔记本Air</h3>
            <p>全金属机身,12小时超长续航</p>
            <p class="xianka">12.5集成显卡<span>英特尔酷睿i5处理器</span></p>
            <div class="img">
                <img src="@/assets/img/111.jpg" alt="">
            </div>
        </div>
        <div class="tabinfoB" v-show="flagB">
            <h3>小米笔记本产品参数</h3>
        </div>
    </div>
    <div class="detailFooter">
        <div class="kefu">
            <i class="iconfont icon-mine"></i>
            <span>客服</span>
        </div>
        <div class="shoucang">
            <i class="iconfont icon-search"></i>
            <span>收藏</span>
        </div>
        <div class="cart">
            <router-link to="/cart">
                <i class="iconfont icon-cart"></i>
                <span>购物车</span>
                <em>{{cartslength}}</em>
            </router-link>
        </div>
        <div class="addCart">
            <span @click="addcarts(detaildata)">添加购物车</span>
        </div>
        <div class="buy">
            <span>立即购买</span>
        </div>
    </div>
</div>
</template>

<script>
import HomeJson from "@/data/Home.json"
import MainHeader from "@/components/MainHeader.vue"
export default {
components: {
    MainHeader
},
data() {
//这里存放数据
return {
    bannerdata:[],
    detaildata:{},
    flagA:true,
    flagB:false
};
},
methods:{
    addcarts(data){
        // console.log(this.$store.state.carts);
        if(this.$store.state.carts!="undefined"){
            var isCarts=this.$store.state.carts.find(function(value){
                return value.product_id==data.product_id
            })
        console.log(isCarts);
        if(!isCarts){
            var cartData={
                product_id: data.product_id,
                category_id: data.category_id,
                product_name: data.product_name,
                product_price: data.product_price,
                product_img_url: data.product_img_url,
                value:1,
                showHide:false
            }
        }
        }
        this.$store.commit("setcarts",cartData)
    },
    tabA(){
        this.flagA=true,
        this.flagB=false
    },
     tabB(){
        this.flagB=true,
        this.flagA=false
    }
},
computed:{
    cartslength(){
        var cartCount=0
        this.$store.state.carts.forEach(cartdata => {
            cartCount+=cartdata.value
        });
        return cartCount
    }
},
mounted(){
    let id=this.$route.params.pid-1
    this.bannerdata=HomeJson.list[id].bannerimg
    this.detaildata=HomeJson.list[id] 
    var a=document.getElementsByClassName("tab")[0].children
    for(var i=0;i<a.length;i++){ 
        a[i].onclick=function(){
            for(var j=0;j<a.length;j++){
                a[j].className=""
            } 
            this.className="click";
        }
    }
}
}
</script>
<style lang='less' scoped>
.detail-wrap{
    width: 100%;
    margin-top: 1.3rem;
    margin-bottom: 1.4rem;
    .banner-wrap{
        width: 100%;
        height: 10rem;
        img{
            width: 100%;
            height: 10rem;
        }
    }
    .detail-content{
        margin: 30px 0;
        padding: 10px;
        h3{
            span{
                &::before{
                    content: "￥"
                }
            }
            .price{
                color: red;
                font-size: 0.8rem;
            }
            .dprice{
                color: #999;
                font-size: 0.4rem;
                margin-left: 20px;
                text-decoration: line-through;
            }
        }
        .title{
            font-size: 0.62rem;
            margin: 20px 0;
            color: #333;
            font-weight: bold;
        }
        .detail{
            font-size: 0.37rem;
             margin: 20px 0;
             line-height: 0.5rem;
        }
        .productinfo{
            color: #999;
            font-size: 0.45rem;
        }
    }
    .tab{
        width: 100%;
        display: flex;
        div{
            height: 1.2rem;
            line-height: 1.2rem;
            flex: 1;
            text-align: center;
            font-size: 0.45rem;
            border: 1px solid #999;
            border-top: none;
            border-left: none;
        }
        #canshu{
            border-right: none !important;
            }
    }
    .click{
            color: red;
            border-bottom:1px solid red !important;
        }
    .tabinfoA,.tabinfoB{
        height: 450px;
        width: 100%;
        text-align: center;
        h3{
            margin-top: 1.5rem;
            font-weight: normal;
        }
        p{
            margin-top: 0.5rem;
            margin-bottom: 0.7rem;
            color: #999;
        }
        .xianka{
            font-size: 0.4rem;
            color: #f44;
            span{
                margin-left: 10px;
                border: 1px solid #f44;
                padding:0 5px;
            }
        }
        .img{
            width: 100%;
            img{
                width: 90%;
            }
        }
    }
}
.detailFooter{
    width: 100%;
    height: 1.4rem;
    border-top: 1px solid #efefef;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    div{
        flex: 1;
       display: flex;
       flex-direction: column;
       justify-content: center;
       text-align: center;
       color: #666;
        span{
            display: block;
            font-size: 0.32rem;
        }
        i{
            font-size: 0.7rem;
        }
    }
    .addCart{
        flex: 2;
        background-color: #f44;
        color: #fff;
    }
    .buy{
        flex: 2;
        background-color: #ff976a;
        color: #fff;
        font-size: 0.37rem;
    }
    .cart{
        position: relative;
        em{
            display: block;
            font-style: normal;
            background: red;
            color: white;
            position: absolute;
            top: 0.1rem;
            right: 0.1rem;
            min-width: 0.48rem;
            height: 0.48rem;
            border-radius: 50%;
            font-size: 0.32rem;
        }
    }
}
</style>