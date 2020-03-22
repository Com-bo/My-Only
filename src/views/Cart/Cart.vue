<!-- 购物车 -->
<template>
<div class=''>
    <MainHeader titles="购物车"/>
    <div class="cart-content">
      <ul>
        <li v-for="(get,index) in getFn" :key="get.product_id">
          <div class="select" @click="changeRadio(get)">
            <i class="iconfont icon-radio" v-if="!get.showHide"></i>
            <i class="iconfont icon-radio-checked" style="color:red" v-else></i>
          </div>
          <div class="cart-img">
            <img :src="get.product_img_url">
          </div>
          <div class="cart-info">
            <div class="cart-title">{{get.product_detail}}</div>
            <div class="cart-wrap">
              <span class="price">{{get.product_price}}</span>
              <div class="number">
                <a href="javascript:;" @click="jianCartFn(index)">-</a>
                <input type="text" value="1" v-model="get.value"/>
                <a href="javascript:;" @click="addCartsFn(index)">+</a>
                <button @click="deleteCartsFn(index)">删除</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 购物车空空 -->
    <div class="noCart" v-if="!getFn.length">
      <i class="iconfont icon-cart"></i>
      <p>购物车空空</p>
    </div>
    <!-- 结算 -->
    <div class="cartFooter" v-if="getFn.length">
      <div class="checkAll" @click="checkAllFn">
        <i class="iconfont icon-radio" v-if="!flag"></i>
        <i class="iconfont icon-radio-checked" style="color:red" v-else></i>
        <span>全选</span>
      </div>
      <div class="priceAll">
        合计：
        <span>{{total}}</span>元
      </div>
      <div class="tobuy">
        <a href="javascript:;">去结算</a>
      </div>
    </div>
    <Footer/>
</div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import MainHeader from "@/components/MainHeader.vue"
export default {

components: {
  Footer,
  MainHeader
},
data() {
return {
  flag:false
  // 全选按钮
};
},
computed:{
  getFn(){
    return this.$store.state.carts
  },
  total(){
    var priceall=0
     this.$store.state.carts.forEach(cart=>{
        if(cart.showHide){
          priceall+=cart.product_price*cart.value
        }
      })
      return priceall
  }
},
methods:{
  addCartsFn(index){
    this.$store.commit("addCartFn",index)
  },
  jianCartFn(index){
    this.$store.commit("jianCartFn",index)   
  },
  deleteCartsFn(index){
    this.$store.commit("deleteCartsFn",index) 
  },
  changeRadio(cartlistData){
    cartlistData.showHide=!cartlistData.showHide
    var arr=[]
    var carts=this.$store.state.carts
    for(var i=0;i<carts.length;i++){
      if(carts[i].showHide){
        arr.push(carts[i])
      }
    }
    if(arr.length==carts.length){
      this.flag=true;
    }
    if(!cartlistData.showHide){
      this.flag=false;
    }
  },
  checkAllFn(){
    this.flag=!this.flag
    if(this.flag){
      this.$store.state.carts.forEach(cart=>{
        cart.showHide=true
      })
    }else{
      this.$store.state.carts.forEach(cart=>{
        cart.showHide=false
      })
    }
  }
},
mounted(){
}
}
</script>
<style lang='less' scoped>
.cart-content{
  margin-top: 1.3rem;
  width: 100%;
  margin-bottom: 1.4rem;
  ul{
    li{
      display: flex;
      height:  3.6rem;
      border-bottom: 1px solid #efefef;
      .select{
        width: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .cart-img{
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        img{
          width: 100%;
        }
      }
      .cart-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 65%;
        margin-left: 5%;
        input{
          width:1.2rem;
          text-align: center;
          border: 1px solid #efefef;
          outline: none;
           float: left;
           line-height: 18px;
        }
        .cart-title{
          font-size: 0.37rem;
          height: 1rem;
        }
        .price{
          color: red;
          font-size: 0.5rem;
          &::before{
            content: "￥"
          }
          float: left;
        }
        .number{
          float: right;
          a{
            float: left;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            background-color: 0.32rem;
            background: #efefef;
          }
          button{
            width: 40px;
            height: 20px;
            line-height: 20px;
            background-color: 0.32rem;
            background: #efefef;
            border: none;
            outline: none;
            float: left;
            margin: 0 10px;
          }
        }
      }
    }
  }
}
.cartFooter{
  width: 100%;
  height: 1.2rem;
  position: fixed;
  bottom: 1.4rem;
  background-color: #efefef;
  display: flex;
  font-size: 0.37rem;
  line-height: 1.2rem;
  .checkAll{
    width: 30%;
    text-align: center;
  }
  .priceAll{
    width: 40%;
    span{
      color: red;
      font-weight: bold;
      font-size: 0.5rem;
    }
  }
  .tobuy{
    width: 30%;
    background-color: #f44;
    text-align: center;
    a{
      color: #ffffff;
    }
  }
}
.noCart{
  i{
    font-size: 4rem;
    color: #cccccc;
    margin: 2rem 0 0.5rem;
  }
  font-size: 0.37rem;
  color:#999;
  text-align: center;
}
</style>