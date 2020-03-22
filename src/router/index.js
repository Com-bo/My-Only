import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Category from '../views/Category/Category.vue'
import Cart from '../views/Cart/Cart.vue'
import Mine from '../views/Mine/Mine.vue'
import Productdetail from "../views/Detail/Productdetail.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component:Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/mine',
    name: 'Mine',
    component:Mine
  },
  {
    path: '/productdetail/:pid',
    name: 'Productdetail',
    component: Productdetail
  }
]

const router = new VueRouter({
  routes
})

export default router
