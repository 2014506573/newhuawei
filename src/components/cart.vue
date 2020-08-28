<template>
    <div class="cart">
        <div class="cart1"><router-link to="/buy"><img src="../assets/images/s1.png"></router-link><p>购物车<span class="cart2">编辑</span></p></div>
        <div class="cart1_1"></div>
        <div class="cart3">
            <img :src="src1" v-on:click="change3()">
            <div class="cart2_2"><img src="../assets/images/f11.png"></div>
            <div class="cart2_3">
                <p>HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）</p>
                <p><span class="cart2_4">零度白,5G全网通 8GB+256GB,官方标配</span></p>
                <div class="cart2_5"><em class="">分期免息</em></div>
                <p class="cart2_6"><small>¥</small>6999<span><img src="../assets/images/g9.png"  v-on:click="del()"></span><span class="cart2_7">{{num1}}</span><img src="../assets/images/g10.png"  v-on:click="add()"></p>
                <p class="cart2_8">限购20件</p>
            </div>
        </div>
        <div class="cart3">
            <img :src="src3" v-on:click="change4()">
            <div class="cart2_2"><img src="../assets/images/f11.png"></div>
            <div class="cart2_3">
                <p>HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）</p>
                <p><span class="cart2_4">零度白,5G全网通 8GB+256GB,官方标配</span></p>
                <div class="cart2_5"><em class="">分期免息</em></div>
                <p class="cart2_6"><small>¥</small>3999<span><img src="../assets/images/g9.png"  v-on:click="dels()"></span><span class="cart2_7">{{num2}}</span><img src="../assets/images/g10.png"  v-on:click="adds()"></p>
                <p class="cart2_8">限购20件</p>
            </div>
        </div>
        <div class="cart4">
            <img :src="src4" v-on:click="change5()"><span style="font-size:12px;margin-left:11%;position: absolute;top: 30%;">全选</span>
            <span class="cart4_1"><span style="color:black">总计：</span><small>¥</small>{{6999*num1+3999*num2}}</span>
            <div class="cart4_2"><p class="cart4_3">结算({{num1+num2}})</p></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                num1:1,
                num2:1,
                src5:'./src/assets/images/f10.png',
                src1:'./src/assets/images/f10.png',
                src3:'./src/assets/images/f10.png',
                src4:'./src/assets/images/f10.png',
                src2:'./src/assets/images/f12.png'
            }
        },
        methods:{
            add(){
                this.num1++;
                this.src1=this.src5;
            },
            del(){
                if(this.num1==0){
                    return;
                }
                this.num1--
                if(this.num1==0){
                    this.src1=this.src2;
                    return;
                }   
            },
            adds(){
                this.num2++;
                this.src3=this.src5;
            },
            dels(){
                if(this.num2==0){
                    return;
                }
                this.num2--;
                if(this.num2==0){
                    this.src3=this.src2
                    return;
                }
            },
            change3(){
                this.src1=this.src2;
                this.src4=this.src2
                this.num1=0
            },
            change4(){
                this.src3=this.src2;
                this.src4=this.src2
                this.num2=0
            },
            change5(){
                this.src4=this.src5;
                this.src1=this.src5;
                this.src3=this.src5;
                if(this.num1==0){
                    this.num1++
                }
                if(this.num2==0){
                    this.num2++
                }
            }
        }
    }
</script>
<style>
.cart{
    background-color:#fafafa;
}
.cart1_1{
    width: 100%;
    padding-bottom: 6%;
    font-size:16px;
    background-color:red;
}
.cart1 img{
    position: absolute;
    width:7%;
    top: 30%;
    left: 2%;
}
.cart1 p{
    margin-top:6%;
    margin-left:43%;
    font-size:18px;
}
.cart1{
    position:fixed;
    width: 100%;
    padding-bottom: 6%;
    font-size:16px;
    background-color:white;
}
.cart2{
    margin-left:47%;
    font-size:14px;
}
.cart3{
    margin-left: 2%;
    margin-top: 16%;
    padding-top: 17%;
    width: 90%;
    background-color: ;
    position: relative;
}
.cart2_1{
    width:10%;
}
.cart3>img{
    width: 6%;
    position: absolute;
    top: 27%;
    left: 2%;
}
.cart2_2{
    display: inline-block;
    margin-left: 6%;
    margin-top: -15%;
    width: 31%;
    padding-bottom: 17%;
}
.cart2_2 img{
    width:100%;
    padding-bottom: 17%;
}
.cart2_3{
    position: absolute;
    top: 9%;
    left: 37%;
}
.cart2_4{
    font-size:12px;
}
.cart2_5{
    border:1px solid white;
    border-radius:10px;
    font-size:12px;
    width: 28%;
    color:red;
}
.cart2_6{
    color:red;
    margin-top:2%;
    font-weight:bold;
    position: absolute;
}
.cart2_6 span img{
    position: absolute;
    top: 2%;
    left: 323%;
    width:46%;
}
.cart2_6>img{
    position: absolute;
    top: 2%;
    left: 457%;
    width:46%;
}
.cart2_7{
    position: absolute;
    top: 2%;
    left: 398%;
    color:black;
}
.cart2_8{
    color:red;
     margin-top: 12%;
    font-size: 11px;
}
.cart4{
    position: fixed;
    background-color:white;
    height:7vh;
    bottom:0px;
    width:100%;
}
.cart4 img{
    position: absolute;
    top: 25%;
    left: 4%;
    width:6%;
}
.cart4_1{
    position: absolute;
    top: 27%;
    left: 42%;
    color:red;
    font-weight:bold;
}
.cart4_2{
    border-radius:14px;
    background-color:red;
    color:white;
    width:24%;
    height:67%;
    position: absolute;
    top: 15%;
    left: 73%;
}
.cart4_3{
    margin:8% 18%;
    font-size: 12px;
}
</style>