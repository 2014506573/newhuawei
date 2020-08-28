<template>
    <div>
        <div class="page1">
            <span><router-link to="/buy"><img src="../assets/images/g1.png"></router-link></span>
            <span class="page1_2"><img src="../assets/images/g2.png"></span>
            <div class="page1_1">
                <mt-swipe :auto="4000">
                    <mt-swipe-item><img src="../assets/images/g3.png"></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/images/g4.png"></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/images/g5.png"></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/images/g6.png"></mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <div class="page2">
            <p class="page2_1"><small>¥</small>3999</p>
            <p class="page2_2">荣耀30 Pro 50倍超稳远摄 超感光高清夜拍 双模5G 麒麟990 5G SoC 8GB+128GB 钛空银</p>
            <p class="page2_3">会员日：①享24期免息②购机晒单抽好礼</p>
        </div>
        <div class="page3">领券<span class="page3_1">满十减十</span><img src="../assets/images/g8.png"></div>
        <div class="page4">
            <span>促销</span>
            <img src="../assets/images/g8.png">
            <ul class="page4_2">
                <li>
                    <div class="page4_1"><em>一站式换新</em></div>
                    <span>APP专享，最高补贴600元</span>
                </li>
                <li>
                    <div class="page4_1"><em>分期免息</em></div>
                    <span>花呗、掌上生活分期付款</span>
                </li>
                <li>
                    <div class="page4_1"><em>赠送积分</em></div>
                    <span>购买即赠商城积分，积分可抵现</span>
                </li>
            </ul>
        </div>
        <div class="page4">
            <span>颜色</span>
            <ul class="page4_3">
                <li>
                    <div class="page4_5"><em>幻夜黑</em></div>
                </li>
                <li>
                    <div class="page4_4"><em>绿野仙踪</em></div>
                </li>
                <li>
                    <div class="page4_4"><em>太空银</em></div>
                </li>
            </ul>
        </div>
        <div class="page4">
            <span>版本</span>
            <ul class="page4_6">
                <li>
                    <div class="page4_5"><em>8GB+128GB</em></div>
                </li>
                <li>
                    <div class="page4_4"><em>8GB+256GB</em></div>
                </li>
                <li>
                    <div class="page4_4"><em>6GB+128GB</em></div>
                </li>
                <li>
                    <div class="page4_4"><em>10GB+256GB</em></div>
                </li>
            </ul>
        </div>
        <div class="page4">
            <span>类型</span>
            <ul class="page4_6">
                <li>
                    <div class="page4_5"><em>官方标配</em></div>
                </li>
            </ul>
        </div>
        <div class="page4">
            <span>类型</span>
            <ul class="page4_6">
                <li>
                    <div class="page4_5"><em>单品</em></div>
                </li>
                <li>
                    <div class="page4_4"><em>音乐套餐</em></div>
                </li>
            </ul>
        </div>
        <div class="page5">
            <i>数量</i>
            <span><img src="../assets/images/g9.png"></span>
            <span>1</span>
            <img src="../assets/images/g10.png">
        </div>
        <div class="page6">保障<span class="page3_1">选购 碎屏保</span><img src="../assets/images/g8.png"></div>
        <div class="page4">
            <span>送至</span>
            <img src="../assets/images/g8.png">
            <ul class="page4_2">
                <li>
                    <span>海南 海口市 龙华区</span>
                </li>
                <li>
                    <span style="color:#d0021b;">现货</span>
                    <span>，今天21:59前付款，预计8月28日（周五）送达</span>
                </li>
            </ul>
        </div>
        <div class="page4">
            <span>服务</span>
            <img src="../assets/images/g8.png">
            <ul class="page4_2">
                <li class="page4_6">
                    <img src="../assets/images/g11.png">
                    <span>已满48元包邮</span>
                </li>
                <li class="page4_7">
                    <img src="../assets/images/g11.png">
                    <span>由华为终端提供商品、发货开票及售后服务</span>
                </li>
            </ul>
        </div>
        <div class="page8">
            <div class="page8_1"></div>
            <div class="page8_3">以旧换新</div>
            <span>高价回收送多重购新补贴</span>
            <div class="page8_2"><img src="../assets/images/right.png"></div>
        </div>
        <div class="page7">
            <ul>
                <li v-for="(item,index) in lis8">
                    <img :src="item.src" alt="">
                </li>
            </ul>
        </div>
        <div class="page9">
            <ul>
                <router-link to="/index">
                    <li>
                        <img src="../assets/images/z1.png" alt="">
                        <p>首页</p>
                    </li>
                </router-link>
                <li>
                    <img src="../assets/images/z2.png" alt="">
                    <p>客服</p>
                </li>
                <router-link to="/cart">
                    <li>
                        <img src="../assets/images/z3.png" alt="">
                        <p>购物车</p>
                    </li>
                </router-link>
            </ul>
            <div class="page9_3">
                <div class="page9_1">立即购买</div>
                <div class="page9_2">加入购物车</div>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
            data(){
                return{
                    lis7:[
                        {
                            src:'./src/assets/images/g3.png'
                        },
                        {
                            src:'./src/assets/images/g4.png'
                        },
                        {
                            src:'./src/assets/images/e7.png'
                        },
                        {
                            src:'./src/assets/images/g5.png'
                        },
                        {
                            src:'./src/assets/images/g6.png'
                        },
                    ],
                    lis8:[
                        {
                            src:'./src/assets/images/f1.jpg'
                        },
                        {
                            src:'./src/assets/images/f2.jpg'
                        },
                        {
                            src:'./src/assets/images/f3.jpg'
                        },
                        {
                            src:'./src/assets/images/f4.jpg'
                        },
                        {
                            src:'./src/assets/images/f5.jpg'
                        },
                        {
                            src:'./src/assets/images/f6.jpg'
                        },
                        {
                            src:'./src/assets/images/f7.jpg'
                        },
                        {
                            src:'./src/assets/images/f8.jpg'
                        }
                    ]
                }
            }
    }
</script>
<style>
.page1{
    width:100%;
    margin-top:2%;
    position: relative;
}
.page1>span img{
    margin-left:2%;
    position: absolute;
    width:7%;
}
.page1_2{
    margin-left:88%;
}
.page1_1{
    overflow:auto;
    width: 100%;
}
.page1_1 .mint-swipe-items-wrap{
    padding-bottom:100%;
}
.page1_1 img{
    width:100%;
}
.page2{
    margin:0% 2%;
}
.page2_1{
    color:red;
    font-weight:bold;
    font-size:18px;
    margin:2% 0%;
}
.page2_2{
    font-weight:bold;
    font-size:18px;
    margin:2% 0%;
}
.page2_3{
    color:red;
    font-size:14px;
}
.page3{
    margin:5% 2%;
    position: relative;
    background:url('../assets/images/g7.png') no-repeat;
    background-position: 18% 95%;
    background-size: 20%;
}
.page3_1{
    margin-left:8%;
     margin-left: 8%;
    position: absolute;
    top: 3px;
    left: 8%;
    font-size: 14px;
}
.page3 img{
    position: absolute;
    top: -50%;
    right: 2%;
    width: 8%;
}
.page4{
    margin-left:2%;
    position: relative;
    overflow:hidden;
    margin-top: 2%;
}
.page4 img{
    position: absolute;
    top: -9%;
    right: 4%;
    width: 8%;
}
 .page4_2{
    margin-left:14%;
    margin-top:-4%;
}
.page4_2 li{
    margin-bottom:1%;
}
.page4_1{
    display:inline-block;
    border:1px solid red;
    border-radius:10px;
    color:red;
    font-size: 14px;
    padding: 1%;
}
.page4_3 li{
    float:left;
    margin-right: 6%;
    margin-left: 14%;
}
.page4_4{
    font-size: 14px;
    padding: 7% 1%;
    width:100%;
    display:inline-block;
    border:1px solid black;
    border-radius:10px;
}
.page4_5{
    border:1px solid red;
    color:red;
    border-radius:10px;
    font-size: 14px;
    padding: 7% 1%;
    width:100%;
}
.page4_6 li{
    float:left;
    margin-right: 5%;
    margin-left: 13%;
    margin-top: 3%;
}
.page5{
    margin-top:2%;
    margin-left:2%;
    position: relative;
}
.page5 span>img{
    width:7%;
    margin:2% 4%;
    position: absolute;
    top:-58%;
    left:10%;
}
.page5>img{
    width:7%;
    margin:2% 6%;
    position: absolute;
    top:-58%;
    left:23%;
}
.page5>i{
    font-style: normal;
}
.page5>span{
    margin-left:6%;
}
.page6{
    margin:5% 2%;
    position: relative;
}
.page6 img{
    position: absolute;
    top: -50%;
    right: 2%;
    width: 8%;
}
.page4_6{
    margin-left:2%;
}
.page4_6 span{
    margin-left:5%;
}
.page4_6 img{
    width:5%;
    margin-right:2%;
    margin-left:10%;
    left: 4%;
    top: 2%;
}
.page4_7{
    margin-left:2%;
}
.page4_7 span{
    margin-left:5%;
}
.page4_7 img{
    width:5%;
    margin-right:2%;
    margin-left:10%;
    left: 4%;
    top: 37%;
}
.page7{
    width:100%;
}
.page7 li{
    margin-bottom: -2%;
}
.page7 img{
    width:100%;
}
.page8{
    margin-top:2%;
    margin-bottom:2%;
    position: relative;
}
.page8>div{
    display:inline-block;
}
.page8_1{
    background:url('../assets/images/f9.png') no-repeat;
    width: 8%;
    height: 30px;
    margin: 0% 6%;
    background-size: 30px 30px;
}
.page8 .page8_3{
    border:1px solid red;
    position: absolute;
    border-radius:10px;
    font-size: 13px;
    color:red;
    left:19%;
    top:25%;
}
.page8 span{
    position: absolute;
    left:37%;
    top:25%;
}
.page8 img{
    width:29%;
}
.page8_2{
    position: absolute;
    left:87%;
    top:9%;
}
.page9{
    width: 100%;
    color: black;
    position: fixed;
    bottom: 0px;
    background-color: white;
    left: 0px;
    z-index: 10;
}
.page9 li{
    width:16%;
    margin:0px;
    float:left;
    margin-top:3%;
    color: black;
    text-align:center;
}
.page9 li img{
    width:40%;
}
.page9_1{
    display:inline-block;
    float:left;
    padding-bottom: 6%;
    padding-top:6%;
    border-top-left-radius:18px;
    border-bottom-left-radius:18px;
    background-color:orange;
    font-size: 14px;
    color: white;
}
.page9_2{
    display:inline-block;
    float:left;
    padding-bottom: 6%;
    padding-top:6%;
    border-top-right-radius:18px;
    border-bottom-right-radius:18px;
    background-color:red;
    font-size: 14px;
    color: white;
}
.page9_3{
    display:inline-block;
    float:left;
    margin-left:11%;
    margin-top: 4%;
}
</style>
