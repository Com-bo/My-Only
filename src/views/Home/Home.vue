<!-- 主页 -->
<template>
<div class=''>
  <MainHeader titles="蓝果小镇商城"/>
  <Homeban/>
  <Homelist/>
  <Footer/>
</div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue"
import Homeban from "@/views/Home/components/Homeban.vue"
import Homelist from "@/views/Home/components/Homelist.vue"
import Footer from "@/components/Footer.vue"
export default {

components: {
  MainHeader,
  Homeban,
  Homelist,
  Footer
},
data() {

return {

};
}
}
</script>
<style>

</style>