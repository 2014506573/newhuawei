<template id="index">
    <main>
        <h1>精选推荐</h1>
        <ul>
            <li v-for="(item,index) in list">
                <router-link :to="'/details/'+item.id">{{item.con}}</router-link>
            </li>
        </ul>
    </main>
</template>
<script>
   export default{
       data(){
                    return {
                        list:[
                            {
                                con:'穿越火线',
                                id:'game'
                            },
                            {
                                con:'三十而已',
                                id:'tv'
                            }
                        ]
                    }
                }
   }
</script>