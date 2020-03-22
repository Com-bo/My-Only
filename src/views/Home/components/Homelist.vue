<!--Homelist  -->
<template>
<div class='Homelist'>
    <div class="home-product-list">
        <ul>
            <li v-for="product in productlist" :key="product.product_id">
                <router-link :to="'/productdetail/'+product.product_id">
                    <img :src="product.product_img_url" alt="">
                    <h3>{{product.product_name}}</h3>
                   <div class="price">
                    <p>{{product.product_price}}</p>
                    <p>{{product.product_dprice}}</p>
                   </div>
                   <div class="info">
                       <p>新品</p>
                       <p>销量：0</p>
                   </div>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import HomeJson from "@/data/Home.json"
export default {
data() {

return {
    productlist:HomeJson.list
};
}
}
</script>
<style lang='less' scoped>
.Homelist{
    margin-bottom: 2rem;
    .home-product-list{
        ul{
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            li{
                width: 45%;
                margin: 2%;
                border: 1px solid #999;
                padding: 5px 0 2px;
                text-align: center;
                img{
                    width: 90%;
                }
            }
            h3,p{
                text-align: left;
                margin-left: 10px;
            }
            h3{
                font-size: 0.37rem;
                color: black;
                margin-bottom: 5px;
            }
            .price{
                display: flex;
                p{
                    flex: 1;
                    font-size: 0.4rem;
                    color: #ec5151;
                    &::before{
                        content: "￥"
                    }
                }
                p:last-child{
                    color: #999;
                    text-decoration: line-through;
                }

            }
            .info{
                  display: flex;
                  p{
                    flex: 1;
                    font-size: 0.4rem;
                    color: #999;
                }

            }
        }
    }

}
</style>