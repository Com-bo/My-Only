<!-- 分类 -->
<template>
<div class='Cat'>
  <MainHeader titles="分类"/>
  <Categorymain/>
  <Footer/>
</div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue"
import Categorymain from "./components/Categorymain.vue"
import Footer from "@/components/Footer.vue"

// import {get} from "@/assets/js/category.js"
export default {

components: {
  MainHeader,
  Categorymain,
  Footer
},
data() {
//这里存放数据
return {

};
},
// mounted(){
//   get()
// }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>
