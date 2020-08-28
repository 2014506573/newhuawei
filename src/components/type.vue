<template>
<div>
    <div class="head">
      <i></i>
      <input type="text" class="search">
        <ul class="message">
            <li></li>
        </ul>
    </div>
    <!-- navbar -->
        <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">新品</mt-tab-item>
        <mt-tab-item id="2">华为手机</mt-tab-item>
        <mt-tab-item id="3">荣耀手机</mt-tab-item>
        <mt-tab-item id="4">笔记本</mt-tab-item>
        <mt-tab-item id="5">平板</mt-tab-item>
        <mt-tab-item id="6">智能穿戴&VR</mt-tab-item>
        <mt-tab-item id="7">智慧屏</mt-tab-item>
        <mt-tab-item id="8">智慧家居</mt-tab-item>
        <mt-tab-item id="9">耳机音箱</mt-tab-item>
        <mt-tab-item id="10">专属配件</mt-tab-item>
        <mt-tab-item id="11">通用配件</mt-tab-item>
        <mt-tab-item id="12">生产产品</mt-tab-item>
        <mt-tab-item id="13">增值服务</mt-tab-item>
        <mt-tab-item id="14">智能计算</mt-tab-item>
        </mt-navbar>
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <section>
           <div  class="current">
                <img src="../assets/images/A01.jpg" />
                <img src="../assets/images/A02.jpg" />
                <div  class="w-1">
                    <div class="pos">
                        <ul>
                            <li><img src="../assets/images/A01.png" /></li>
                            <li><img src="../assets/images/A02.png" /></li>
                            <li><img src="../assets/images/A03.png" /></li>
                            <li><img src="../assets/images/A04.png" /></li>
                            <li><img src="../assets/images/A05.png" /></li>
                        </ul>
                    </div>
                </div>
                <p style="text-align:center">手机</p>
                <div style="margin-top:5%">
                    <ul class="w-2">
                        <li><img src="../assets/images/A06.png" /><span class="stan">HUAWEI P40 5G</span></li>
                        <li><img src="../assets/images/A07.png" /><span class="stan">HUAWEI P40 Pro+</span></li>
                        <li><img src="../assets/images/A08.png" /><span class="stan">HUAWEI P40 Pro 5G</span></li>
                        <li><img src="../assets/images/A09.png" /><span class="stan">荣耀30 Pro 5G</span></li>
                        <li><img src="../assets/images/B01.png" /><span class="stan">荣耀30青春版 5G</span></li>
                        <li><img src="../assets/images/B02.png" /><span class="stan">荣耀30 5G</span></li>
                        <li><img src="../assets/images/A06.png" /><span class="stan">HUAWEI P40 5G</span></li>
                        <li><img src="../assets/images/A07.png" /><span class="stan">HUAWEI P40 Pro+</span></li>
                        <li><img src="../assets/images/A08.png" /><span class="stan">HUAWEI P40 Pro 5G</span></li>
                        <li><img src="../assets/images/A09.png" /><span class="stan">荣耀30 Pro 5G</span></li>
                        <li><img src="../assets/images/B01.png" /><span class="stan">荣耀30青春版 5G</span></li>
                        <li><img src="../assets/images/B02.png" /><span class="stan">荣耀30 5G</span></li>
                    </ul>
                </div>
            </div>
        </section>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
         <section>
           <div  class="current">
                <img src="../assets/images/AA1.jpg" />
                <p style="text-align:center">HUAWEI P系列</p>
                <div style="margin-top:5%">
                    <ul class="w-2">
                        <li><img src="../assets/images/A06.png" /><span class="stan">HUAWEI P40 5G</span></li>
                        <li><img src="../assets/images/A07.png" /><span class="stan">HUAWEI P40 Pro+</span></li>
                        <li><img src="../assets/images/A08.png" /><span class="stan">HUAWEI P40 Pro 5G</span></li>
                    </ul>
                </div>
                <p style="text-align:center">HUAWEI Mate系列</p>
                <div style="margin-top:5%">
                    <ul class="w-2">
                        <li><img src="../assets/images/AA3.png" /><span class="stan">HUAWEI Mate 30 Pro 5G</span></li>
                        <li><img src="../assets/images/AA4.png" /><span class="stan">HUAWEI Mate 30 5G</span></li>
                        <li><img src="../assets/images/AA5.png" /><span class="stan">HUAWEI Mate Xs 5G</span></li>
                    </ul>
                </div>
                <p style="text-align:center">HUAWEI nova系列</p>
                <div style="margin-top:5%">
                    <ul class="w-2">
                        <li><img src="../assets/images/A07.png" /><span class="stan">HUAWEI P40 Pro+</span></li>
                        <li><img src="../assets/images/A08.png" /><span class="stan">HUAWEI P40 Pro 5G</span></li>
                        <li><img src="../assets/images/A09.png" /><span class="stan">荣耀30 Pro 5G</span></li>
                    </ul>
                </div>
                <p style="text-align:center">HUAWEI nova系列</p>
                <div style="margin-top:5%">
                    <ul class="w-2">
                        <li><img src="../assets/images/A07.png" /><span class="stan">HUAWEI P40 Pro+</span></li>
                        <li><img src="../assets/images/A08.png" /><span class="stan">HUAWEI P40 Pro 5G</span></li>
                        <li><img src="../assets/images/A09.png" /><span class="stan">荣耀30 Pro 5G</span></li>
                        <li><img src="../assets/images/B01.png" /><span class="stan">荣耀30青春版 5G</span></li>
                        <li><img src="../assets/images/B02.png" /><span class="stan">荣耀30 5G</span></li>
                        <li><img src="../assets/images/B02.png" /><span class="stan">荣耀30 5G</span></li>
                    </ul>
                </div>
            </div>
          </section>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <img src="../assets/images/AA2.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <img src="../assets/images/AA3.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <img src="../assets/images/AA1.png" />
      </mt-tab-container-item>
      <mt-tab-container-item id="6">
        <img src="../assets/images/AA4.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="7">
        <img src="../assets/images/AA5.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="8">
        <img src="../assets/images/AA6.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="9">
        <img src="../assets/images/AA7.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="10">
        <img src="../assets/images/AA8.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="11">
        <img src="../assets/images/AA9.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="12">
        <img src="../assets/images/AA10.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="13">
        <img src="../assets/images/AA11.jpg" />
      </mt-tab-container-item>
      <mt-tab-container-item id="14">
        <img src="../assets/images/AA2.png" />
      </mt-tab-container-item>
    </mt-tab-container>
</div>
</template>
 
<script>
export default {
  name: 'page-navbar',
 
  data() {
    return {
      selected: '1'
    };
  }
};
</script>
</div>
</template>
<style>
.head{
    height: 40px;
    background: white;
}
.head i{
    background:url('../assets/images/icon_search.png') no-repeat 50%;
    height: 3.0rem;
    width: 4.4rem;
    padding: 0;
    display: inline-block;
    position: absolute;
    background-size: 1.3rem 1.3rem;
}
.search{
    border-radius: 30px;
    height: 35px;
    width: 80%;
    border: 0px solid #b3b3b3;
    background: #e6e6e6;
    margin-left: 4%;
    margin-top: 1%;
    float: left;
    outline: none;
}
.message{
  width:16%;
  height:25px;
  float:right;
}
.message li{
    background:url('../assets/images/icon_message_black.png') no-repeat 50%;
    display: inline-block;
    position: relative;
    margin: 7px 0.7rem;
    height: 1.9rem;
    width: 1.8rem;
    background-size: 100% 100%;
    background-position: center;
}
.mint-tab-container{
    display: inline-block;
    float: right;
    width: 77%;
}
.page-part{
    display: inline-block;
    width: 20%;
    height:85vh;
    overflow:auto;
}
.page-part::-webkit-scrollbar{
    width:0;
}
.mint-navbar .mint-tab-item.is-selected{
    border-right: 3px solid #26a2ff;
    border-bottom: 3px solid white;
}
section>div>div>.w-2>li>img{
    width:90%;
}
section>div>div>.w-2>li{
    width:25%;
    float:left;
    margin-left:8%;
    height:17vh;
}
.current{
    height:87vh;
    overflow-x:hidden;
}
.current::-webkit-scrollbar{
    width:0;
}
.current>img{
    width:100%;
    height:11vh;
}
.stan{
    text-align:center;
    word-break: break-all;
    font-size:1vh;
    display: -webkit-box;
}
.w-1{
    width:200%;
    height:10vh;
    overflow: auto;
}
.w-1>div>ul>li{
    width:10%;
    float:left;
    margin-left:1%;
    height:8vh;
}
.w-1>div>ul>li>img{
    width:100%
}
.pos{
  width:152%;
  overflow:auto;
}
.w-1::-webkit-scrollbar{
  height:0;
}
.pos>ul{
  width:124%;
}
.mint-tab-container-item>img{
    width:100%;
}
.mint-tab-item-label {
    font-size: 15px;
}
</style>