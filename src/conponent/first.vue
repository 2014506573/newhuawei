<template>
     <main>
         <ul>
             <li v-for="(item,index) in list">
                 <!-- router-link最终渲染成了a 。但是不能直接书写成a -->
                 <router-link :to="item.path">
                     <img src="images/index.png" alt="" class="pic">
                     <img src="images/index_s.png" alt="" class="active">
                     {{item.con}}
                 </router-link>
             </li>
         </ul>
         <router-view></router-view>
     </main>
</template>
<script>

    export default{
        data(){
                    return{
                        list:[
                        {
                            con:'精选推荐',
                            path:'/index'
                        },
                        {
                            con:'电视剧',
                            path:'/tv'
                        },
                        {
                            con:'VIP',
                            path:'/vip'
                        },
                        {
                            con:'电影',
                            path:'/movie'
                        }
                    ]
                }
            }
        }
</script>