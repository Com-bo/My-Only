<!-- Categorymain -->
<template>
<div class='Categorymain'>
    <Categoryleft/>
    <Categoryright/>
</div>
</template>

<script>

import Categoryright from "./Categoryright.vue"
import Categoryleft from "./Categoryleft.vue"
export default {
    components:{
        Categoryright,
        Categoryleft
    },
data() {
return {

};
}
}
</script>
<style lang='less' scoped>
.Categorymain{
    width: 100%;
    height: 85%;
    display: flex;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    margin: 1.3rem 0 1.4rem 0;
}

</style>