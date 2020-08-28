<template>
    <div>
        <div class="log1">
            <p class="log1_1"><img src="../assets/images/login1.png" alt=""></p>
            <p class="log1_2">华为账号</p>
            <p class="log1_3">登录华为帐号以使用云空间、华为应用及更多服务</p>
        </div>
        <div class="log_2">
            <p class="log2"><i>国家/地区</i><span>中国  +86</span><img src="../assets/images/right.png"></p>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone1"></mt-field>
            <mt-field label="短信验证码" placeholder="短信验证码" type="tel" v-model="phone2"><span id="log_1" >获取验证码</span></mt-field>
        </div>
        <button class="log3">登录/注册</button>
        <p class="log4"><router-link to="/login2">密码登录</router-link></p>
        <p class="log5">其他方式登录</p>
        <p class="log6"><img src="../assets/images/login2.png"><img src="../assets/images/login3.png"></p>
        <p class="log4">遇到问题       |       隐私声明</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                phone1:'',
                phone2:''
            }
        },
        watch:{
            phone1(){
                log_1.style.color='#007dff'  
            },
        }
    }

   

</script>
<style>
    .log1{
        width:100%;
    }
    .log1>p{
        text-align:center;
        
    }
    .log1_1{
        margin-top:6%;
    }
    .log1_1 img{
        width:12%;
    }
    .log1 .log1_2{
        font-size:23px;
        margin-top:6%;
        font-family:"黑体";
        font-weight:bold;
    }
    .log .log1_2{
        font-size:12px;
    }
    .log1_3{
        margin-top:2%;
        font-size:13px;
        color:rgba(0,0,0,0.6);
    }
    .log_2{
        margin-left:2%;
    }
    .log2{
        margin-left:4%;
        margin-top:23%;
        margin-bottom:4%;
        position: relative;
    }
    .log2 i{
        font-size:16px;
        font-style: normal;
        font-weight: bold;
    }
    .log2 span{
        margin-left:48%;
        font-size:14px;
    }
    .log2 img{
        width: 3%;
        position: absolute;
        right: 4%;
    }
    #log_1{
        color: rgba(0,125,255,0.2);
    }
    .log3{
        width:81%;
        background-color:#007dff;
        color:white;
        outline: none;
        border-radius:14px;
        font-size:16px;
        margin-left:9%;
        margin-top:5%;
        height:31px;
    }
    .log4{
        color:#007dff;
        text-align:center;
        font-size:14px;
        font-weight:bold;
        margin-top:4%;
    }
    .log4 a{
        text-decoration: none;
    }
    
    .log5{
        text-align:center;
        margin-top:30%;
    }
    .log6{
        text-align:center;
        margin-top:4%;
    }
    .log6 img{
        width: 12%;
        margin-right: 3%;
        margin-left: 2%;
    }

</style>