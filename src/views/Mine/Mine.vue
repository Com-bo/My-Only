<!-- 我的 -->
<template>
<div class=''>
    <MainHeader titles="个人中心"/>
    <Minemain/>
    <Footer/>
</div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue"
import Footer from "@/components/Footer.vue"
import Minemain from "./Minemain.vue"
export default {

components: {
  MainHeader,
  Footer,
  Minemain
},
data() {
//这里存放数据
return {

};
}
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>