<template>
    <div class="ismy">
        <div class="my">
            <div class="my1">
                <p class="my1_1"><router-link to="/set"><img src="../assets/images/c4.png"></router-link><img src="../assets/images/c6.png"></p>
                <div class="my1_2">
                    <img src="../assets/images/c3.png">
                    <span><router-link to="/login">登陆/注册</router-link></span>
                    <i><img src="../assets/images/c5.png">签到领积分</i>
                </div>
            </div>
            <div class="my2">
                <ul>
                    <li>
                        <p>-</p>
                        <p>积分</p>
                    </li>
                    <li class="my2_1">  
                        <p>-</p>
                        <p>优惠券</p>
                    </li>
                    <li>
                        <p>-</p>
                        <p>代金券</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="my3">
            <p><span>我的订单</span><i>全部订单</i><img src="../assets/images/right.png"></p>
            <ul class="my3_1">
                <li v-for="(item,index) in list7">
                    <img :src="item.src">
                    <p>{{item.name}}</p>
                </li>
            </ul>
            <div>
                <mt-swipe :auto="4000">
                    <mt-swipe-item><img src="../assets/images/c9.jpg"></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/images/c10.jpg"></mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <div class="my4">
            <p>我的VAMLL</p>
            <ul>
                <li v-for="(item,index) in list8">
                    <img :src="item.src" alt="">
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
        <div class="my4" id="my4_">
            <p>我的服务</p>
            <ul>
                <li v-for="(item,index) in list9">
                    <img :src="item.src" alt="">
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
        <div class="my4" id="my5_">
            <p>华为生活</p>
            <div>
                <ul class="my4_1">
                    <li v-for="(item,index) in list10">
                      <img :src="item.src" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <p class="my5">为你推荐</p>
        <div class="my4" id="my_3">
            <p class="my4_11"><img src="../assets/images/e4.jpg"></p>
            <p class="my4_11"><img src="../assets/images/e5.jpg"></p>
        </div>
        <div class="footer" id="my_4">
                <p>登陆    |    注册</p>
                <p>
                     <a><img src="../assets/images/bg1.png"></img></a>
                     <a><img src="../assets/images/bg2.png"></img></a>
                     <a><img src="../assets/images/bg3.png"></img></a>
                </p>
                <p class="p1"><span>客户端</span><span>触屏版</span><span>电脑版</span></p>
                <p class="p2"><a>隐私政策</a>  |  <a>用户协议</a>  |   <a>关于Cookie</a></p>
                <p class="p1">Copyright 2012-VMALL.COM 版权所有</p>
                <p class="p1">营业执照  备案主体编号：44201919072182</p>
                <p class="p1">粤ICP备19015064号  粤公网安备 44190002003939号</p>
                <p class="p1">增值电信业务经营许可证：粤B2-20190762</p>
            </div>
    </div>
</template>
<script>
    export default{
            data(){
                return{
                    list7:[
                        {
                            src:'./src/assets/images/c8.png',
                            name:'待付款'
                        },
                        {
                            src:'./src/assets/images/c8.png',
                            name:'已支付'
                        },
                        {
                            src:'./src/assets/images/c8.png',
                            name:'待评价'
                        },
                        {
                            src:'./src/assets/images/c8.png',
                            name:'退换/退款'
                        },
                        {
                            src:'./src/assets/images/c8.png',
                            name:'回执单'
                        },
                    ],
                    list8:[
                        {
                            src:'./src/assets/images/a1.png',
                            name:'会员频道'
                        },
                        {
                            src:'./src/assets/images/a2.png',
                            name:'邀请有礼'
                        },
                        {
                            src:'./src/assets/images/a3.png',
                            name:'教育优惠'
                        },
                        {
                            src:'./src/assets/images/a4.png',
                            name:'优购码'
                        },
                        {
                            src:'./src/assets/images/a5.png',
                            name:'我的拼团'
                        },
                        {
                            src:'./src/assets/images/a6.png',
                            name:'收货地址'
                        },
                        {
                            src:'./src/assets/images/a7.png',
                            name:'优惠记录'
                        },
                        {
                            src:'./src/assets/images/a8.png',
                            name:'企业购'
                        }
                    ],
                    list9:[
                        {
                            src:'./src/assets/images/d1.png',
                            name:'自助服务'
                        },
                        {
                            src:'./src/assets/images/d1.png',
                            name:'特色服务'
                        },
                        {
                            src:'./src/assets/images/d2.png',
                            name:'零售店'
                        },
                        {
                            src:'./src/assets/images/d3.png',
                            name:'实名认证'
                        },
                        {
                            src:'./src/assets/images/d4.png',
                            name:'以旧换新'
                        },
                        {
                            src:'./src/assets/images/d5.png',
                            name:'补助保障'
                        },
                        {
                            src:'./src/assets/images/d7.png',
                            name:'换电池'
                        },
                        {
                            src:'./src/assets/images/d8.png',
                            name:'常见问题'
                        },
                    ],
                    list10:[
                        {
                            src:'./src/assets/images/e1.png'
                        },
                        {
                            src:'./src/assets/images/e2.png'
                        },
                        {
                            src:'./src/assets/images/e3.png'
                        }
                    ]
                }
            }
    }
</script>
<style>
.ismy{
    background-color:#fafafa;
}
.my1{
    background-color:red;
    height:150px;
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
}
.my1_1{
    text-align:right;
}
.my1_1 img{
    width: 7%;
    margin-right: 2%;
    margin-top: 2%;
}
.my1_2{
    position:relative;
}
.my1_2 img{
    width:17%;
    margin-left:2%;
    margin-right: 2%;
}
.my1_2 span{
    position: absolute;
    top:12%;
    color:white;
    font-size: 20px;
}
.my1_2 span a{
    color:white;
    text-decoration: none;
}
.my1_2 i img{
    width:12px;
    height:12px;
}
.my1_2 i{
    font-style: normal;
    color: white;
    width: 26%;
    font-size: 13px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    position: absolute;
    top: 50%;
}
.my2{
    width:90%;
    height:67px;
    background-color:white;
    border-radius: 10px;
    margin-top:-5%;
    margin-left:5%;
    padding-bottom: 2%;
}
.my2 li{
    float:left;
    width:20%;
    text-align:center;
    margin-top: 4%;
    margin-left: 8%;
}
.my3{
    background-color:white;
    margin-left:2%;
    margin-right:2%;
    margin-top: 4%;
    border-radius: 10px;
}
.my3 p{
    position: relative;
}
.my3 p>span{
    margin-left:2%;
}
.my3 p>i{
    margin-left:52%;
    font-style: normal;
}
.my3 p img{
    width: 3%;
    position: absolute;
    top: -2%;
}
.my3_1{
    height:100px;
    margin-top:5%;
    font-size:12px;
}
.my3_1 li{
    float:left;
    text-align:center;
    width:20%;
}
.my3_1 img{
    width:70%;
}
.my3>div{
    width:100%;
    border-radius:10px;
}
.my3>div img{
    width:100%;
    border-radius:10px;
}
.mint-swipe-items-wrap{
    padding-bottom:30%;
}
.my4{
    width:96%;
    margin-left:2%;
    margin-right:2%;
    padding-bottom: 35%;
    border-radius: 10px;
    background-color: white;
}
.my4 li{
    float:left;
    font-size:14px;
    width:25%;
    text-align:center;
}
.my4 img{
    width:50%;
}
#my4_{
    margin-top:2%;
}
.my4_1{
    width:140%;
}
.my4_1 li{
    width:30%;
}
.my4_1 img{
    width:90%;
}
.my4>div{
    overflow:auto;
}
.my4>div::-webkit-scrollbar{
  height:0;
}
.my5{
    text-align:center;
    font-size:20px;
    margin-top:2%;
    margin-bottom:2%;
}
#my5_{
    margin-top:2%;
    padding-bottom: 4%;
}
.my4_11{
    text-align:center;
}
.my4_11 img{
    width:96%;
    border-radius: 10px;
    margin-top:2%;
    margin-left:2%;
    margin-right:2%;
}
#my_3{
    padding-bottom:2%;
}
#my_4{
    background-color: white;
}
.footer{
    width:100%;
    padding-bottom: 20%;
}
.footer p{
    text-align:center;
}
.footer span{
    margin-right:5%;
}
.footer img{
    width:11%;
    margin-right: 1%;
    margin-top:5%;
}
.p1{
    font-size:12px;
    margin-top:2%;
}
.p2{
    font-size:14px;
    margin-top:2%;
}
</style>