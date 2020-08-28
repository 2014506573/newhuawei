<template>
    <div class="buy">
        <div class="buy1"><p>购物车</p></div>
        <div class="buy1_1"></div>
        <p class="buy2"><img src="../assets/images/e6.png" alt=""></p>
        <p class="buy3">您的购物车没有商品</p>
        <div class="buy4"><router-link to="/cart">去购物</router-link></div>
        <div class="buy5">
            <p class="buy5_2">热销推荐</p>
            <ul>
              <router-link to="/page">
                <li v-for="(item,index) in list11">
                    <img :src="item.src">
                    <p>{{item.name1}}</p>
                    <p class="buy5_1"><small>¥</small>{{item.name2}}</p>
                </li>
              </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
            data(){
                return{
                    list11:[
                        {
                            src:'./src/assets/images/e7.png',
                            name1:'HUAWEI P40 Pro',
                            name2:'6488'
                        },
                        {
                            src:'./src/assets/images/e8.png',
                            name1:'荣耀30 Pro',
                            name2:'3999'
                        },
                        {
                            src:'./src/assets/images/e9.png',
                            name1:'Mate 30 Pro 5G',
                            name2:'6399'
                        },
                        {
                            src:'./src/assets/images/e10.png',
                            name1:'荣耀X10',
                            name2:'2199'
                        },
                        {
                            src:'./src/assets/images/e11.png',
                            name1:'HUAWEI nova 7 SE',
                            name2:'2399'
                        },
                        {
                            src:'./src/assets/images/e12.png',
                            name1:'荣耀30S',
                            name2:'2399'
                        }
                    ]
                }
            }
    }

</script>
<style scoped>
.buy{
    background-color:#fafafa;
    height:155vh;
}
.buy1_1{
    width: 100%;
    padding-bottom: 6%;
    font-size:16px;
    background-color:red;
}
.buy1{
    position:fixed;
    width: 100%;
    padding-bottom: 6%;
    font-size:16px;
    background-color:white;
}
.buy1 p{
    text-align:center;
    margin-top:6%;
}
.buy2{
    text-align:center;
    margin-top:7%;
}
.buy2 img{
    width:40%;
}
.buy3{
    margin-top:0%;
    text-align:center;
    color: gainsboro;
}
.buy4{
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 7%;
    width: 20%;
    border-radius: 16px;
    border: 1px solid;
    margin: 3% 35%;
}
.buy4 a{
    text-decoration: none;
    color: black;
}
.buy5{
    width:100%;
    height: 78%;
}
.buy5_1{
    color:red;
}
.buy5 ul{
    margin-left:2%;
}
.buy5 li{
    float:left;
    width:42%;
    padding: 3%;
    text-align:center;
    color: black;
    margin-bottom:2%;
    background:url('../assets/images/e13.png') no-repeat;
    background-size: 16%;
    background-position-x: 100%;
    background-color:white;
}
.buy5 li:nth-of-type(2n){
    margin-left:2%;
}
.buy5 img{
    width:100%;
}
.buy5_2{
    text-align:center;
    font-size:18px;
    font-weight:bold;
    margin:8% 0%;
}
</style>