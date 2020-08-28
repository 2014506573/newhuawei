<template>
    <div>
           <div class="find"><p class="find_1">发现频道</p></div>
           <div class="find1"></div>
           <div class="find2">
                <ul>
                    <li v-for="(item,index) in lis1">
                        <div>
                            <img :src="item.src" alt="">
                            <p>{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <span class="f1">商城头条<span>声明<img src="../assets/images/b3.png" alt=""></span></span>
            <div class="find3">
                <div>
                    <ul>
                      <li v-for="(item,index) in lis2"><img :src="item.src" alt=""></li>
                    </ul>
                </div>
            </div>
            <div class="find4">
                <ul>
                    <li v-for="(item,index) in lis3">
                        <div>
                            <img :src="item.src" alt="">
                            <p>{{item.name1}}</p>
                            <p>{{item.name2}}</p>
                            <p class="find41"><span>{{item.name3}}</span><em>{{item.name4}}</em></p>
                        </div>
                    </li>
                </ul>
                <div class="find_43">
                    <div>发现更多<p class="find_421"></p></div>
                </div>
            </div>
            <p class="find5"></p>
            <div class="find6">
                <p>口碑好货</p>
                <div>
                    <ul>
                        <li v-for="(item,index) in lis4">
                            <img :src="item.src" alt="">
                            <p>{{item.name1}}</p>
                            <p class="f3">{{item.name2}}</p>
                            <p class="find61"><span>{{item.name3}}</span><em>{{item.name4}}</em></p>
                        </li>
                    </ul>
                </div>
                <p>发现更多<span class="find_421"></span></p>
            </div>
    </div>
</template>
<script>

export default{
        data(){
            return{
                lis1:[
                    {
                        src:'./src/assets/images/b1.png',
                        name:'商城公告'
                    },
                    {
                        src:'./src/assets/images/b1.png',
                        name:'商城公告'
                    },
                    {
                        src:'./src/assets/images/b1.png',
                        name:'商城公告'
                    },
                    {
                        src:'./src/assets/images/b1.png',
                        name:'商城公告'
                    },
                    {
                        src:'./src/assets/images/b1.png',
                        name:'商城公告'
                    }
                ],
                lis2:[
                    {
                        src:'./src/assets/images/c1.png',
                    },
                    {
                        src:'./src/assets/images/c1.png',
                    },
                    {
                        src:'./src/assets/images/c1.png',
                    },
                    {
                        src:'./src/assets/images/c1.png',
                    },
                    {
                        src:'./src/assets/images/c1.png',
                    }
                ],
                lis3:[
                    {
                        src:'./src/assets/images/b4.jpg',
                        name1:'华为5款新品悉数登场，欢迎围观',
                        name2:'一篇看全华为MateBook系列新品发布会',
                        name3:'2020-08-19',
                        name4:'14361阅读'
                    },
                    {
                        src:'./src/assets/images/b5.jpg',
                        name1:'华为5款新品悉数登场，欢迎围观',
                        name2:'一篇看全华为MateBook系列新品发布会',
                        name3:'2020-08-19',
                        name4:'14361阅读'
                    },
                    {
                        src:'./src/assets/images/b6.png',
                        name1:'华为5款新品悉数登场，欢迎围观',
                        name2:'一篇看全华为MateBook系列新品发布会',
                        name3:'2020-08-19',
                        name4:'14361阅读'
                    },
                    {
                        src:'./src/assets/images/b7.jpg',
                        name1:'华为5款新品悉数登场，欢迎围观',
                        name2:'一篇看全华为MateBook系列新品发布会',
                        name3:'2020-08-19',
                        name4:'14361阅读'
                    },
                    {
                        src:'./src/assets/images/b8.jpg',
                        name1:'华为5款新品悉数登场，欢迎围观',
                        name2:'一篇看全华为MateBook系列新品发布会',
                        name3:'2020-08-19',
                        name4:'14361阅读'
                    }
                ],
                lis4:[
                    {
                        src:'./src/assets/images/b9.jpg',
                        name1:'WATCH GT 2e 外观设计漂亮，表盘丰富',
                        name2:'外观设计很漂亮，表盘很丰富，内容显示很全。最看重的心脏心率失常检测很有用，也很方便。压力检测还挺准的。',
                        name3:'2020-06-01',
                        name4:'来自遗**的推荐'
                    },
                    {
                        src:'./src/assets/images/b9.jpg',
                        name1:'WATCH GT 2e 外观设计漂亮，表盘丰富',
                        name2:'外观设计很漂亮，表盘很丰富，内容显示很全。最看重的心脏心率失常检测很有用，也很方便。压力检测还挺准的。',
                        name3:'2020-06-01',
                        name4:'来自遗**的推荐'
                    },
                    {
                        src:'./src/assets/images/b9.jpg',
                        name1:'WATCH GT 2e 外观设计漂亮，表盘丰富',
                        name2:'外观设计很漂亮，表盘很丰富，内容显示很全。最看重的心脏心率失常检测很有用，也很方便。压力检测还挺准的。',
                        name3:'2020-06-01',
                        name4:'来自遗**的推荐'
                    },
                ]
            }
        }
}
</script>
<style>
        .find{
            position: fixed;
            width: 100%;
            padding-top:3%;
            z-index: 10;
            background-color: white;
        }
       .find_1{
           text-align: center;
           font-size: 20px;
       }
       .find1{
           height:20px;
           margin-bottom:10%;
       }
       .find2{
           width:100%;
           margin-bottom: 35%;
       }
       .find2 li{
           float:left;
           width:20%;
           font-size:11px;
           text-align:center;
       }
       .find2 li img{
           width:60%;
       }
       .find3{
           width:100%;
           overflow:auto;
           margin-top: 5%;
       }
       .find3::-webkit-scrollbar{
         height:0;
       }
       .find3 div{
           width:220%;
       }
       .find3 ul{
          margin-left: 2%;
       }
       .find3 li{
           float:left;
           width:13%;
           margin-right: 2%;
       }
       .find3 li img{
           width:100%;
       }
       .f1{
           margin-left:41%;
           font-size:16px;
       }
       .f1 span{
           margin-left:26%;
           font-size:13px;
       }
       .f1 img{
           width:3%;
           margin-top: 5%;
           margin-left: 1%;
       }
       .find4{
           width:96%;
           margin-left: 2%;
           margin-right: 2%;
           margin-bottom:19%;
       }
       .find41{
            font-size: 14px;
            color: gainsboro;
            margin-bottom: 3%;
       }
       .find4 img{
           width:100%;
           border-radius: 10px;
       }
       .find4 em{
           margin-left:50%;
       }
       .find4_1{
           border-top-left-radius:10px;
           border-bottom-left-radius:10px;
       }
       .find4_2{
           border-radius:10px;
       }
       .find4_3{
           margin-top:5%;
       }
       .find4_3 p{
           text-align:center;
       }
       .find5{
           height:20px;
           background-color:rgba(248, 248, 245, 1.6);
       }
       .find6{
           width:96%;
           margin-top:5%;
           margin-left: 2%;
           margin-right: 2%;
           margin-bottom:19%;
       }
       .find6>p{
           text-align:center;
           margin-bottom:5%;
       }
       .find6 li{    
           float:left;
            margin-bottom: 5%;
       }.find6 img{
           width:100%;
           border-radius:10px;
       }
       .f3{
           font-size:14px;
       }
       .find6 em{
           margin-left:36%;
       }
       .find61{
            font-size: 14px;
            color: gainsboro;
            margin-top: 2%;
       }
       .find_43>div{
           margin-top:5%;
           margin-left:42%;
       }
       .find_421{
           display:inline-block;
        width:9px;
        height:9px;
        border-right:1px solid black;
        border-bottom:1px solid black;
        margin-left:1%;
        transform:rotate(-42deg);
       }
</style>