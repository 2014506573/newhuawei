<template>
    <div class="s">
        <div class="s1">
           <ul>
               <li>
                    <router-link to="/nav"><img src="../assets/images/s1.png" alt=""></router-link>
               </li>
               <li class="s11"><u></u><input class="s12" type="text" placeholder="nova 7"></li>
               <span>搜索</span>
           </ul>     
        </div>
        <div class="s2">
            <p>热门搜索</p>
            <ul>
                <li><span>nova 7</span></li>
                <li><span>荣耀30</span></li>
                <li><span>荣耀10X</span></li>
                <li><span>P40</span></li>
                <li><span>MateBook</span></li>
                <li><span>笔记本</span></li>
            </ul>
        </div>     
    </div>
</template>
<style>
    .s1{
        width:100%;
        margin-top:5%;
    } 
    .s1 li{
        float:left;
        margin-right: 5%;
        border-radius: 10px;
    }  
    .s1 img{
        width:23%;
        margin-left:24%;
        margin-top:-3%;
    } 
    .s1 input{
        outline:none;
        border:none;
        background-color:gainsboro;
        border-radius:10px;
        height:27px;
        margin-left: 15%;
        width:91%;
    }
    .s1 u{
        width: 30px;
        height: 30px;
        margin-right:2%;
        background: url('../assets/images/icon_search.png') no-repeat;
        background-size: 16px 16px;
        position: absolute;
        left: 25%;
        top: 3%;
    }
    .s1 span{
        margin-right:10%;
    }
    .s1 .s11{
        background-color:gainsboro;
        margin-left: -7%;
        height: 27px;
         margin-top: -1%;
    }
   .s .s2{
        margin-top:5%;
        color:black;
    }
    .s2 p{
        margin-left: 3%;
    }
    .s2 li{
        float:left;
        width: 32%;
        margin-top: 3%;
        text-align: center;
        margin-bottom: 3%;
    }
    .s2 span{
        background-color:#f9f9f9;
        display:block;
        width: 53%;
        height: 18px;
        margin-left: 23%;
    }
</style>