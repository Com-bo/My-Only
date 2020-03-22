import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//默认的需要下载

import {MessageBox} from "mint-ui"
export default new Vuex.Store({
  state: {
    carts:localStorage["carts"]?JSON.parse(localStorage["carts"]):[]
  },
  mutations: {
    //添加购物车
    setcarts(state,data){
      if(data){
        state.carts.push(data)
      }else{
        MessageBox("提示","不能重复添加")
      }
      localStorage.setItem("carts",JSON.stringify(state.carts))
    },
    //点击加号
    addCartFn(state,index){
      state.carts[index].value++
      localStorage.setItem("carts",JSON.stringify(state.carts))
    },
    //点击减号
    jianCartFn(state,index){
      if(state.carts[index].value==1){
        MessageBox("提示","商品个数不能小于1")
      }else{
        state.carts[index].value--
        localStorage.setItem("carts",JSON.stringify(state.carts))
      }
    },
    //点击删除按钮
    deleteCartsFn(state,index){
      MessageBox.confirm("亲，确定要放弃该宝贝吗").then(()=>{
        state.carts.splice(index,1)
        localStorage.setItem("carts",JSON.stringify(state.carts))
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
