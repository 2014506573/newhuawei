<template>
    <div>
        <div>
            <div class="find">
                <p class="find_1"><router-link to="/my"><img src="../assets/images/s1.png"></router-link>设置</p>
            </div>
            <div class="find1"></div>
        </div>
        <div class="set1">
            <mt-cell
              title="账号中心"
              to="//github.com"
              is-link
              >
            </mt-cell>
            <mt-cell
              title="实名认证"
              to="//github.com"
              is-link
              >
            </mt-cell>
            <mt-cell
              title="邮件地址"
              to="//github.com"
              is-link
              >
            </mt-cell>
            <mt-cell
              title="活动推送"
              to="//github.com"
              is-link
              >
            </mt-cell>
        </div>
    </div>
</template>
<style>
.find{
     position: fixed;
     width: 100%;
     padding-top:3%;
     background-color: white;
 }
 .find1{
           height:20px;
           margin-bottom:10%;
       }
.find_1{
    text-align: center;
    font-size: 20px;
}
.find_1 img{
    width:8%;
    position:absolute;
    top:19%;
    left:5%;
}
</style>