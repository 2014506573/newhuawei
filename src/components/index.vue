<template>
    <div>
            <header id="q1">
                <div class="header_1">
                    <h1><a href="https://m.vmall.com/"><img src="../assets/images/logo_vmall.png" alt=""></a></h1>  
                    <router-link to='/search'>
                            <div class="header_12">
                               <i></i>   
                            </div> 
                    </router-link>                 
                    <img src="../assets/images/icon_message_black.png" alt="">
                    <router-link to="/login"><span class="land">登陆</span></router-link>
                </div>
                <div id="header_2">
                    <div class="header_21">
                        <ul>
                            <li>精彩推荐</li>
                            <li>华为专区</li>
                            <li>荣耀专区</li>
                            <li>P40系列</li>
                            <li>安心专区</li>
                            <li>拼团</li>
                        </ul>
                    </div>
                    <span class="header_2s" v-on:click="change()"></span>
                </div>
                <div id="hide" v-show="show">
                    <p>全部<span  class="header_2s" id="header_2s1" v-on:click="change1()"></span></p>
                    <ul>
                        <li style="border: 1px solid red;color: red;">精彩推荐</li>
                        <li>P40系列</li>
                        <li>华为专区</li>
                        <li>荣耀专区</li>
                        <li>安心居家</li>
                        <li>拼团</li>
                    </ul>
                </div>
            </header>
            <div class="rp1"></div>
            <div class="rp">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item><img src="../assets/images/rp1.jpg"></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/images/rp2.jpg"></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/images/rp3.jpg"></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/images/rp4.jpg"></mt-swipe-item>
                        <mt-swipe-item><img src="../assets/images/rp5.png"></mt-swipe-item>
                    </mt-swipe>
            </div>
            <div class="middle">
                <div class="middle_top">
                     <ul>
                         <li v-for="(item,index) in list">
                                <img v-bind:src="item.src" alt="">
                                <p>{{item.name}}</p>
                         </li>
                       </ul>
                </div>
                <div class="middle_top1"></div>
                <div class="middle_bottom">
                    <p><img src="../assets/images/pic14.png" alt=""></p>
                    <div>
                         <ul>
                             <li>
                                  <div></div>华为上层大放送
                             </li>
                         </ul>
                    </div>
                    <span>更多</span>
                </div>
            </div>
            <div class="middle_1">
                <h3>
                    <span class="s1">限时购</span>
                    <span class="s2"></span>
                    <span class="s3">{{a}}</span>
                    <span class="s4">后结束</span>
                </h3>
                <div class="middle_11">
                    <ul>
                        <li v-for="(item,index) in lists">
                            <div>
                                <img :src="item.src" alt="">
                                <p>{{item.name1}}</p>
                            </div>
                            <p>{{item.name2}}<del class="de1">{{item.name3}}</del></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="middle_2">
                <div class="middle_21">
                    <ul class="middle_211">
                        <li>
                            <img src="../assets/images/phone1.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/images/phone2.jpg" alt="">
                            <img src="../assets/images/phone3.jpg" alt="">
                        </li>
                    </ul>
                    <ul class="middle_212">
                        <li v-for="(item,index) in list1">
                            <img :src="item.src" alt="">
                        </li>
                    </ul>
                </div>
                <div class="middle_22">
                    <ul>
                        <li v-for="(item,index) in list2">
                                <div class="middle_22_d">
                                    <span>{{item.name5}}</span>
                                    <img :src="item.src" alt="">
                                    <p>{{item.name1}}</p>
                                    <p class="p1">{{item.name2}}</p>
                                    <p>{{item.name3}}<del class="de_1">{{item.name4}}</del></p>
                                </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="middle_3">
                <p>精品推荐</p>
                <div class="middle_31">
                    <ul>
                        <li v-for="(item,index) in list3">
                              <div>
                                 <div class="s2">{{item.name4}}</div>
                                 <div class="s2">{{item.name5}}</div>
                                 <div class="s2">{{item.name6}}</div>
                                 <img :src="item.src" alt="">
                                 <p>{{item.name1}}</p>
                              </div>
                              <p>{{item.name2}}</p>
                              <p class="s2">{{item.name3}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="middle_4">
                <p>手机</p>
                <ul class="middle_41">
                    <li v-for="(item,index) in list4">
                        <div>
                            <img :src="item.src" alt="">
                            <p>{{item.name1}}</p>
                        </div>
                        <p>{{item.name2}}</p>
                        <p class="s2">{{item.name3}}</p>
                    </li>
                </ul>
                <div class="middle_42">
                    <ul>
                        <li v-for="(item,index) in list5">
                            <div>
                                <img :src="item.src" alt="">
                                <p>{{item.name1}}</p>
                            </div>
                            <p>{{item.name2}}</p>
                            <p class="s2">{{item.name3}}</p>
                        </li>
                    </ul>
                </div>
                <div class="middle_43">
                    <div>发现更多<p class="middle_421"></p></div>
                </div>
            </div>
            <div class="footer">
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

    import { Toast } from 'mint-ui';
    export default{
            data(){
                return{

                    a:'',
                    show:false,
                    list:[
                        {
                            src:'./src/assets/images/pic4.png',
                            name:'会员领券'
                        },
                        {
                            src:'./src/assets/images/pic5.png',
                            name:'华为数码'
                        },
                        {
                            src:'./src/assets/images/pic6.png',
                            name:'教育优惠'
                        },
                        {
                            src:'./src/assets/images/pic7.png',
                            name:'新品上市'
                        },
                        {
                            src:'./src/assets/images/pic8.png',
                            name:'以旧换新'
                        },
                        {
                            src:'./src/assets/images/pic9.png',
                            name:'邀请有礼'
                        },
                        {
                            src:'./src/assets/images/pic10.png',
                            name:'众测'
                        },
                        {
                            src:'./src/assets/images/pic11.png',
                            name:'直播频道'
                        },
                        {
                            src:'./src/assets/images/pic12.png',
                            name:'积分商城'
                        },
                        {
                            src:'./src/assets/images/pic13.png',
                            name:'生态产品'
                        },
                    ],
                    lists:[
                        {
                            src:'./src/assets/images/p1.png',
                            name1:'Matebook X',
                            name2:'优惠100+鼠标'
                        },
                        {
                            src:'./src/assets/images/p2.png',
                            name1:'荣耀Play4 Pro',
                            name2:'¥2689',
                            name3:'¥2899'
                        },
                        {
                            src:'./src/assets/images/p3.png',
                            name1:'MateBook 14',
                            name2:'优惠100+鼠标'
                        },
                        {
                            src:'./src/assets/images/p4.png',
                            name1:'笔记本Pro 2020',
                            name2:'100最高抵1100'
                        },
                        {
                            src:'./src/assets/images/p5.png',
                            name1:'FreeLace Pro',
                            name2:'新品优惠50'
                        },
                        {
                            src:'./src/assets/images/p6.png',
                            name1:'荣耀平板V6',
                            name2:'免息+赠耳机'
                        },
                        {
                            src:'./src/assets/images/p7.png',
                            name1:'荣耀平板6',
                            name2:'千元首选'
                        },
                        {
                            src:'./src/assets/images/p8.png',
                            name1:'MatePad Pro',
                            name2:'预订立省200元'
                        },
                        {
                            src:'./src/assets/images/p9.png',
                            name1:'笔记本14 2020',
                            name2:'订金100抵200'
                        },
                        {
                            src:'./src/assets/images/p10.png',
                            name1:'FreeBuds 3',
                            name2:'预订最高省200'
                        },
                        {
                            src:'./src/assets/images/p11.png',
                            name1:'FlyPods 3真无线耳机',
                            name2:'¥599免息'
                        },
                        {
                            src:'./src/assets/images/p12.png',
                            name1:'华为手表GT 2',
                            name2:'预订特惠200元'
                        },
                    ],
                    list1:[
                        {
                            src:'./src/assets/images/phone4.jpg'
                        },
                        {
                            src:'./src/assets/images/phone5.jpg'
                        },
                        {
                            src:'./src/assets/images/phone6.png'
                        },
                        {
                            src:'./src/assets/images/phone7.jpg'
                        }
                    ],
                    list2:[
                        {
                            src:'./src/assets/images/phone8.png',
                            name1:'HUAWEI nova 5z',
                            name2:'预售直降300元',
                            name3:'¥1499',
                            name4:'¥1799',
                            name5:'限时特惠'
                        },
                        {
                            src:'./src/assets/images/phone9.png',
                            name1:'荣耀30S',
                            name2:'限量送移动电源',
                            name3:'¥2399'
                        },
                        {
                            src:'./src/assets/images/phone10.png',
                            name1:'华为畅享Z 5G',
                            name2:'最高省50+赠耳机',
                            name3:'¥1699'
                        },
                    ],
                    list3:[
                        {
                            src:'./src/assets/images/i1.png',
                            name1:'预订省100+蓝牙鼠标+6期免息',
                            name2:'HUAWEI MateBook 13',
                            name3:'¥5099',
                            name4:'新品上市'
                        },
                        {
                            src:'./src/assets/images/i2.png',
                            name1:'预订最高优惠400元',
                            name2:'【新品预订】荣耀智慧屏X1系列 ',
                            name3:'¥3699'
                        },
                        {
                            src:'./src/assets/images/i3.png',
                            name1:'特惠预订省200元',
                            name2:'HUAWEI WATCH GT 2',
                            name3:'¥1488',
                            name5:'热销爆款'
                        },
                        {
                            src:'./src/assets/images/i4.png',
                            name1:'预订省100+赠鼠标+3期免息',
                            name2:'MateBook X Pro',
                            name3:'¥9488',
                            name6:'3K触控屏'
                        },
                        {
                            src:'./src/assets/images/i5.png',
                            name1:'预订立省200元',
                            name2:'MatePad Pro',
                            name3:'¥3799'
                        },
                    ],
                    list4:[
                        {
                            src:'./src/assets/images/i6.png',
                            name1:'享6期免息|限量赠礼',
                            name2:'HUAWEI nova 7 Pro',
                            name3:'¥3799'
                        },
                        {
                            src:'./src/assets/images/i7.png',
                            name1:'最高优惠100元',
                            name2:'荣耀X10 Max 5G',
                            name3:'¥3799'
                        },
                        {
                            src:'./src/assets/images/i8.png',
                            name1:'领券减100|6期免息',
                            name2:'荣耀20pro',
                            name3:'¥3799'
                        },
                        {
                            src:'./src/assets/images/i9.png',
                            name1:'最高优惠100元',
                            name2:'荣耀30青春版',
                            name3:'¥3799'
                        },
                    ],
                    list5:[
                        {
                            src:'./src/assets/images/i10.png',
                            name1:'最高优惠100元',
                            name2:'荣耀20PRO',
                            name3:'¥3799'
                        },
                        {
                            src:'./src/assets/images/i10.png',
                            name1:'最高优惠100元',
                            name2:'荣耀20PRO',
                            name3:'¥3799'
                        },
                        {
                            src:'./src/assets/images/i10.png',
                            name1:'最高优惠100元',
                            name2:'荣耀20PRO',
                            name3:'¥3799'
                        },
                        {
                            src:'./src/assets/images/i10.png',
                            name1:'最高优惠100元',
                            name2:'荣耀20PRO',
                            name3:'¥3799'
                        },
                        {
                            src:'./src/assets/images/i10.png',
                            name1:'最高优惠100元',
                            name2:'荣耀20PRO',
                            name3:'¥3799'
                        },
                    ],
                    list6:[
                        {
                            src:'./src/assets/images/rp1.jpg'
                        }, 
                        {
                            src:'./src/assets/images/rp2.jpg'
                        }, 
                        {
                            src:'./src/assets/images/rp3.jpg'
                        }, 
                        {
                            src:'./src/assets/images/rp4.jpg'
                        }, 
                        {
                            src:'./src/assets/images/rp5.png'
                        }, 
                    ]
                }
            },
            mounted(){
                var _this=this
                //  var od1=document.getElementsByClassName('s3');
                function go(time){
                var date2=new Date();
                var date3=new Date(time);
                var date4=date3.getTime()-date2.getTime();//毫秒
                var days=parseInt(date4/(24*3600*1000));//天数
                var leave1=date4%(24*3600*1000)    //计算天数后剩余的毫秒数
                var hours=parseInt(leave1/(3600*1000));
                var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
                var minutes=parseInt(leave2/(60*1000));
                var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
                var seconds=parseInt(leave3/1000)
                _this.a=days+":"+hours+": "+minutes+":"+seconds
           }
           setInterval(function(){
                go('2020,11,11');
           },1000)
            },
            methods:{
                change(){
                    this.show=!this.show;
                    header_2.style.display='none';
                },
                change1(){
                    this.show=!this.show;
                    header_2.style.display='block'
                    header_2s1.style.transform='rotate(180deg)'
                }
            }
        }


</script>
        
<style>
    header{
        width: 100%;
        position: fixed;
        background-color: white;
        margin-top: -23%;
        width: 100%;
        position: fixed;
        background-color: white;
        z-index: 10;
    }
    .header_1{
        height: 48px;
        width: 100%;
        float: left;
        line-height:48px;
        /* background-color: chartreuse; */
    }
    .header_1 h1{
        float: left;
        position: absolute;
        left: 3.125%;
    }
    .header_1 h1 img{
        width: 50%;
    }
    .header_12{
        height: 32px;
        width: 46.875%;
        border: none;
        background-color: #f9f9f9;;
        
        float: left;
        border-radius: 45px;
        margin-top: 5.6px;
        margin-left: 24%;
        /* left: 24%; */
    }
    .header_12>input{
        float: right;
        height: 35px;
        border: none;
        outline: none;
        background-color: rgba(240, 237, 237,0);
        position: absolute;
        right: 0px;
        top:0px; 
    }
    .header_1>img{
        width: 25px;
        height: 25px;
        position: absolute;
        right: 13%;
        top: 10px;
    }
    .header_1 span{
        float: right;
        font-size:15px;
        color: black;
        position: absolute;
        right: 2%;
        line-height: 48px;
    }
    .header_12>i{
        width: 30px;
        height:30px;
        background: url('../assets/images/icon_search.png') no-repeat;
        background-size: 25px 25px;
        position: absolute;
        left: 27%;
        top: 10px;
    }
    #hide{
        width:100%;
        margin-top: 12%;
    }
    #hide>p{
        margin-left:2%;
    }
    #hide li{
        width:27.33%;
        height: 22px;
        float:left;
        border:1px solid;
        border-radius:12px;
        margin-bottom:3%;
        text-align:center;
        margin-left:2%;
        margin-right:2%;
        margin-top: 3%;
        padding-top: 1%;
    }
    #header_2{
        float: left;
        width: 100%;
        position: relative;
    }
    .header_21::-webkit-scrollbar{
      height:0;
    }
    .header_21{
        overflow: auto;
        width: 85%;
        position: relative;
        float: left;
         height:35px;
    }
    .header_21 ul{
        width: 200%;
        line-height: 35px;
    }
    .header_21 li{
        float: left;
        width:13%;
        font-size:17px;
        /* position: absolute; */
        text-align: center;
    }
    .header_2s{
        position: absolute;
        top: 33%;
        right: 5%;
        float: right;
        background: url('../assets/images/pic1.png') no-repeat;
        background-size: contain;
        width: 15px;
        height:15px;
    }
    #header_2s1{
        top: 32%;
    }
    .rp{
        height:160px;
        width:100%;
    }
    .rp img{
        width:96%;
        margin-left:2%;
        border-radius:10px;
    }
    .rp1{
        margin-top:23%;
    }
    .middle{
        width:100%;
       
        background:url('../assets/images/pic2.png') no-repeat;
        background-size: 100%;
        overflow-x:auto;   
    }
    .middle_top{
        overflow-x:auto; 
    }
    .middle_top::-webkit-scrollbar{
      height:0;
    }
    .middle_top ul{
        width:348%;
        margin-left: -2.5%;
    }
    .middle_top ul li{
        width:6%;
        float:left;
        text-align:center;
        display: inline-block;
    }
    .middle_top ul li img{
        width:44%;
        margin-top:45%;  
    }
    .middle_top ul li p{
        font-size:12px;
    }
    .middle_top1{
        width:8%;
        height:28px;
        margin-left:auto;
        margin-right:auto;
    }
    .middle_bottom{
        width:100%;
    }
    .middle_bottom p{
        float:left;
        margin-left: 4%;
        margin-top: 1%;
    }
    .middle_bottom img{
        float:left;
         width:30%;
    }
    .middle_bottom div{
        float:left;
        margin-left:-26%;
        margin-right:5%;
        padding-bottom: 2%;
    }
    .middle_bottom div li{
        float:left;
    }
    .middle_bottom span{
        float:right;
        margin-right: 5%;
        margin-top: 1%;
    }
    .middle_bottom div li div{
        width:2%;
        border:2px solid gray;
        border-radius:50%;
        background-color:gray;
        display:inline-block;
        margin-left: -13%;
        margin-top: 5%;
    }
    .middle_1{
        
        background-color: rgba(248, 248, 245, 1.6);
    }
    .middle_1 h3{
        text-align:center;
    }
    .middle_1 h3 .s1{
        
        line-height:42px;
        width:0%;
        font-size: 18px;
    }
    .middle_1 h3 .s2{
        display:inline-block;
        width:17%;
        height:31px;
        background:url('../assets/images/pic15.png') no-repeat;
        background-size: 17px 23px;
        margin: -14px -8px;
    }
    .middle_1 h3 .s3{
        margin-left:-12%;
        width:2%;
    }
    .middle_1 h3 .s4{
        font-size: 12px;
    }
    .middle_11{
     overflow: auto;
     width: 100%;
    }
    .middle_11::-webkit-scrollbar{
      height:0;
    }
    .middle_11 ul{
        width:300%;
        margin-left: 2%;
    }
    .middle_11 li{
        float: left;
        width: 7%;
        text-align: center;
        font-size: 8px;
    }
    .middle_11 li div{
        width:93%;
        border-radius:10px;
        background-color: white;
    }
    .middle_11 li div>p{
        margin-top:1%;
        color:gray;
        display: -webkit-box;
         -webkit-box-orient: vertical;
         /* 行数 */
         -webkit-line-clamp: 1;
         overflow: hidden;
         text-overflow: ellipsis;
         word-break: break-all;
    }
    .middle_11 .de1{
        color:gray;
        margin-left:2%;
    }
    .middle_11 li>p{
        color:red;
        font-size: 10px;
        margin-top:2%;
    }
    .middle_11 li img{
        width: 80%;

    }
    .middle_211{
         overflow:auto;
         margin-left:2%;
    }
    .middle_211 li{
         width: 47%;
         float:left;
    }
    .middle_211 li img{
         width: 100%;
    }
    .middle_212{
         overflow:auto;
         margin-left:2%;
    }
    .middle_212 li{
        float:left;
        width:47%;
    }
    .middle_212 li img{
         width: 100%;
    }
    .middle_22{
        overflow:auto;
        width:96%;
         margin-bottom: 4%;
        margin-left:2%;
    }
    .middle_22 li{
         width: 30.666%;
         float:left;
         margin-right:2%;
         text-align:center;
         font-size:12px;
    }
    .middle_22_d{
        background-color:rgba(248, 248, 245, 1.6);
        position:relative;
        padding-top: 17%;
    }
    .middle_22_d .p1{
        color:gray;
    }
    .middle_22_d span{
        background-color:red;
        position:absolute;
        top:2%;
        left:30%;
        color:white;
    }
    .middle_22 img{
         width: 100%;
    }
    .de_1{
        color:gray;
        margin-left:2%;
    }
    .middle_31{
        overflow: auto;
        width: 100%;
    }
    .middle_31::-webkit-scrollbar{
      height:0;
    }
    .middle_3>p{
        text-align:center;
        margin-bottom: 4%;
    }
    .middle_31 ul{
        width: 200%;
        margin-left: 2%;
    }
    .middle_31 li{
        float:left;
        width:19%;
        font-size: 8px;
    }
    .middle_31 ul li>div{
        background-color: rgba(248, 248, 245, 1.6);
        width:94%;
        text-align:center;
    }
    .middle_31 li>p{
        text-align:center;
        font-size:11px;
    }
    .middle_31 li .s1{
        color:red;
    }
    .middle_31 div img{
        width:68%;
    }
    .s2{
        color:red;
    }
    .middle_4{

    }
    .middle_4>p{
        text-align:center;
        margin-bottom: 4%;
        margin-top: 2%;
    }
    .middle_41{
        margin-left:3%;
    }
    .middle_41 span{
        background-color:red;
        color:white;
    }
    .middle_41 li{
        float:left;
        width:47%;
        margin-right:3%;
        margin-bottom:4%;
        text-align:center;
    }
    .middle_41 li img{
        width:94%;
        margin-top:7%;
    }
    .middle_41 div{
        background-color: rgba(248, 248, 245, 1.6);
        border-radius:10px;
    }
    .middle_42{
        overflow: auto;
        width: 100%;   
    }
    .middle_42::-webkit-scrollbar{
      height:0;
    }
    .middle_42 ul{
        width: 200%;
        margin-left: 2%;
    }
    .middle_42 ul li{
        float: left;
        width: 20%;
        font-size: 8px;
        text-align:center;
        margin-right: -3%;
    }
    .middle_42 ul div{
        width:80%;
        margin: 0px auto;
        background-color: rgba(248, 248, 245, 1.6);
        border-radius:10px;
    }
    .middle_42 ul div img{
        width:98%;
    }
    .middle_43>div{
        margin-left:40%;
        margin-bottom: 5%;
        margin-top: 5%;
    }
    .middle_421{
        display:inline-block;
        width:9px;
        height:9px;
        border-right:1px solid black;
        border-bottom:1px solid black;
        margin-left:1%;
        transform:rotate(-42deg);
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