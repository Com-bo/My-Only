<!-- Categoryright -->
<template>
<div class='Categoryright'>
    <div class="cate-right">
        <div class="category">
            <ul>
                <li v-for="m in msg[0].list" :key="m.id">
                    <div class="img">
                        <img src="@/assets/img/004.jpg" alt="">
                    </div>
                    <span>{{m.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

import Category from "@/data/Category.json"
export default {
data() {
//这里存放数据
return {
    msg:Category.Category
};
}
}
</script>
<style lang='less' scoped>
.Categoryright{
    .cate-right{
        height: 100%;
        padding: 10px;
        overflow-y: scroll;
        .category{
            ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 50%;
                    margin-bottom: 10px;
                    text-align: center;
                    .img{
                         width: 70%;
                         margin-left: 15%;
                         text-align: center;
                         img{
                             width: 100%;
                         }
                    }
                    p{
                        font-size: 0.32rem;
                    }
                }
            }
        }
    
    }
}
</style>