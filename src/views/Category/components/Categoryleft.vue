<!-- Categoryleft -->
<template>
<div class='Categoryleft'>
    <div class="category-left">
        <ul class="cat-ul">
            <li v-for="m in msg" :key="m.id">
                <a>{{m.name}}</a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>

import Category from "@/data/Category.json"
export default {
data() {
//这里存放数据
return {
    msg:[]
};
},
mounted(){
    this.msg=Category.Category; 
}
}
</script>
<style lang='less' scoped>
.category-left{
    width: 90px;
    height: 100%;
    background-color: #eee;
    // overflow-y: scroll;
     ul{
         li{
             height: 1.2rem;
             line-height: 1.2rem;
             text-align: center;
             a{
                 font-size: 0.35rem;
                 display: block;
                 color: #999999;
             }
         }
         .action{
             background-color: #ffffff;
             a{
                 color: #f23030;
             }
         }
     } 

}
</style>