<template>
<div style="width:640px;height:100%;">
  <div class="customer container-fluid">
    <!-- 卖家相关信息 -->
    <div class="container-fluid">
      <div class="row cus-bg">
        <div class="col-xs-3"><img :src="seller.avatar" alt="" class="width114"/></div>
        <div class="col-xs-9">
          <p class="cus-title text-left"><span class="label label-danger">品牌</span> {{seller.name}}</p>
          <p class="cus-info text-left">{{seller.description}} / {{seller.deliveryTime}}分钟到达</p>
          <p class="cus-info text-left"><span class="label bg-white">减</span> {{supports[0].description}} <a href="javascript:;"  data-toggle="modal" data-target="#layer" >{{supports.length}}个&gt;</a></p>
        </div>
      </div>
      <p class="cus-intro text-left overflow-left">
        <span class="label bg-white">公告</span> 
        <span style="color:#ffffff;">{{seller.bulletin}}</span>
      </p>
    </div>

    <!-- 产品信息 -->
    <div class="container-fluid">
      <ul class="nav nav-pills">
        <li role="presentation">
          <router-link to="/index/product">商品</router-link>
        </li>
        <li role="presentation">
          <router-link to="/index/appraise">评价</router-link>          
        </li>
        <li role="presentation">
          <router-link to="/index/merchant">商家</router-link>
        </li>
      </ul>
    </div>
    <router-view/>

    <!-- 购物车弹框 -->
    <div class="cl-check-list">
      <div class="cus-check" :class="{'text-color':isOpen}" @click="changeBg($event)" ref="cusCheck">
        <div>
          <p :class="{'p-color':isOpen}">￥
          <span v-if="confirmData">{{confirmData.price}}</span>
          <span v-if="!confirmData">0</span>
          </p>
          <p>
            另需配送费
            <span>5</span>
            元
          </p>
        </div>
        <div>
          结算(
          <span v-if="confirmData">{{confirmData.num}}</span>
          <span v-if="!confirmData">0</span>
          )
        </div>
      </div>

      <check-list ref="cusCheckList" @getSome="getData" @transformData="transData"></check-list>
      
    </div>
    

  </div>

  <!-- 优惠信息弹框 -->
  <div class="modal mask" role="dialog" id="layer">
    <div class="mask-in">
      <div class="seller-title">
        <h3>{{seller.name}}</h3>
        <ul class="stars">
          <li v-for="value in star" :key="value">
            <img v-if="value" src="../assets/img/star24_on@2x.png" alt="">
            <img v-if="!value" src="../assets/img/star24_off@2x.png" alt="">            
          </li>
        </ul>
      </div>
      <div class="discount">
        <h3>优惠信息</h3>
        <ul class="discount-ul">
          <li v-for="value in supports" :key="value.description" class="text-left">
            <a href="javascript:;" v-if="value.type==0">
              <img src="../assets/img/decrease_1@2x.png" alt="">
            </a>
            <a href="javascript:;" v-if="value.type==1 || value.type==2">
              <img src="../assets/img/discount_1@2x.png" alt="">
            </a>
            <a href="javascript:;" v-if="value.type==3 || value.type==4">
              <img src="../assets/img/special_1@2x.png" alt="">
            </a>
            {{value.description}}
          </li>
        </ul>
      </div>
      <div class="notice">
        <h3>商家公告</h3>
        <p class="text-left">{{seller.bulletin}}</p>
      </div>
      <button class="close" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
  </div>  
</div>
</template>


<script>
import res from "../data.json";
import checkList from "./checkList"
export default {
  name:"customer",
  data () {
    return {
      seller: null,
      goods: null,
      supports: null,
      star:[],
      isOpen:false,
      confirmData:null
    }
  },
  components:{
    checkList
  },
  methods:{
   abc:function(){
     var _this = this;
     _this.seller = res.seller;
     _this.goods = res.goods;
     _this.supports = res.seller.supports;

     for (var i = 0; i < 5; i++) {
       if(i < _this.seller.stars){
         _this.star.push(true)
       }else{
         _this.star.push(false)
       }
     }
   },
   changeBg:function(){
    this.$refs['cusCheckList'].toggleList();
   },
   getData:function(val){
     this.isOpen = val;
   },
   transData:function(val){
     this.confirmData = val;
   }
  },
  created:function(){
      this.abc()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customer{
  max-width: 640px;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.cus-bg{
  padding:36px 18px 4.8rem 36px;
  background: url("../assets/img/cus_bg.png") no-repeat;
  background-size: 100% 100%;
}
.width114{
  width:114px;
}
.cus-title{
  font-size: 2.2rem;
  line-height: 2.8rem;
  margin-bottom: 0;
  color: #ffffff;
  font-weight: bold;
}
.cus-info{
  color: #ffffff;
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin-bottom: 0;  
}
.bg-white{
  background:#ffffff;
  color: #f67272;
  padding:0.3em;
}
.cus-info a{
  font-size: 1.6rem;
  float: right;
  padding:2px 15px;
  background: rgba(0,0,0,.3);
  color: #ffffff;
  border-radius: 20px;
  text-decoration: none;
}
.cus-intro{
  height: 3.6rem;
  padding:0 20px;
  font-size: 1.8rem;
  line-height: 3.6rem;
  color:#ffffff;
  margin: -3.6rem 0 0 0;
  background: rgba(0,0,0,.3);
}
.cus-intro>span{
  color:#394149;
}
.nav>li{
  width:33.33%;
  height: 4.5rem;
  margin:0;
  line-height: 4.5rem;
  font-size:2rem;
}
.nav>li>a{
  color:#394149;
  padding:0;
}
.nav>li>a:hover{
  background: none;
}
.nav>li a.router-link-active{
  color: #ff0000;
}

/* 优惠信息弹框 */
.mask{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top:0;
  background: rgba(0,0,0,.75);
}
.seller-title{
  margin: 8rem auto 3rem;
}
.seller-title h3{
  font-weight: bold;
  font-size: 3.3rem;
  line-height: 4.6rem;
  color:#ffffff;
  margin: 0 auto;
  opacity: 0.8;
}
.stars li{
  display: inline;
  margin:0 0.5rem;
}
.discount{
  opacity: 0.8;
}
.discount-ul{
  width:64%;
  margin:1rem auto 2rem;
  opacity: 0.8;
}
.discount-ul li{
  height: 3rem;
  line-height: 3rem;
  font-size: 2rem;
}
.discount h3,
.notice h3{
  font-size: 2.4rem;
  margin-bottom: 2rem;
  opacity: 0.8;
}
.notice{
  margin-top: 3rem;
}
.notice p{
  width: 70%;
  margin:0 auto;
  font-size:1.6rem;
  line-height: 2.4rem;
  opacity: 0.8;
}
.close{
  opacity: 0.8;
  font-size: 8rem;
  color:#ffffff;
  text-shadow:none;
  float: none;
  margin-top: 3rem;
}

/* 购物车弹框 */
.cl-check-list{
  width:100%;
  height:60px;
  background:#efefef;
  position:fixed;
  left:0;
  bottom:0;
  z-index:99;
  color:#333333;
}
.cus-check{
  width: 100%;
  display:-webkit-flex;
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 0 0 0 50px;
  position:fixed;
  left:0;
  bottom:0;
  background:#efefef;
  z-index:99;
}
.cus-check.text-color{
  background:#e8663b;
  color:#ffffff;
}
.cus-check>div:first-child{
  text-align:left;
}
.cus-check>div:last-child{
  background:#e8663b;
  color:#ffffff;
  height:60px;
  line-height:60px;
  padding:0 20px;
}
.cus-check>div:first-child>p{
  margin:0;
  line-height:24px;
}
.cus-check>div:first-child>p:first-child{
  color:#e8663b;
  margin-top:6px;
}
.cus-check>div:first-child>p.p-color{
  color:#ffffff;
}
</style>
