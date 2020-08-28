<template>
   <main>
    <router-view></router-view>
    <ul class="a1">
        <li v-for="(item,index) in list">
            <router-link :to="item.path">
                <img :src="item.src"  class="src">
                <img :src="item.pic" class="pic">
            </router-link>
            <p>{{item.con}}</p>
        </li>
    </ul>
   </main>
</template>

<script>
export default{
    // 如果数据是在data放置的话，图片的路径是相对于index.html写
    // 如果路径直接写在src的话，相对于当前的vue
    data(){
        return{
            list:[
                {
                    path:'/index',
                    con:'首页',
                    pic:'./src/assets/images/nav1.png',
                    src:'./src/assets/images/nav1_s.png'
                },
                 {
                    path:'/type',
                    con:'分类',
                    pic:'./src/assets/images/nav2.png',
                    src:'./src/assets/images/nav2_s.png'
                },
                 {
                    path:'/sup',
                    con:'发现',
                    pic:'./src/assets/images/nav3.png',
                    src:'./src/assets/images/nav3_s.png'
                },
                {
                    path:'/buy',
                    con:'购物车',
                    pic:'./src/assets/images/nav4.png',
                    src:'./src/assets/images/nav4_s.png'
                },
                {
                    path:'/my',
                    con:'我的',
                    pic:'./src/assets/images/nav5.png',
                    src:'./src/assets/images/nav5_s.png'
                }
            ]
        }
    },
    // methods:{
    //     change(a,b){
    //         if(b==0){
    //             a.con=''
    //         }
    //     }
    // }
}
</script>




<style >
    .a1{
            width: 100%;
            position: fixed;
            bottom: 0px;
            background-color: white;
            left: 0px;
            z-index: 10;
    }
    .a1 li{
        width:20%;
        margin:0px;
        margin-top:3%;
        text-align:center;
        display: inline-block;
    }
    .a1 img{
        width:40%;
    }
    .a1 p{
        font-size:14px;
    }
    .pic{
        display:inline-block;
    }
    .src{
        display:none
    }
     .router-link-active .pic{
        display: none;
    }
    .router-link-active .src{
        display: inline-block;
    }
</style>