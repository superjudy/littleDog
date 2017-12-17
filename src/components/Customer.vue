<template>
<div>
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
          <router-link to="/index/product" class="">商品</router-link>
          <!-- <a v-link="/customer/product" href="javascript:;" class="">商品</a> -->
        </li>
        <li role="presentation">
          <router-link to="/index/appraise" class="">评价</router-link>          
        </li>
        <li role="presentation">
          <router-link to="/index/merchant" class="">商家</router-link>
        </li>
      </ul>
    </div>
    <router-view/>

<!--     <div class="row">
      <div class="col-xs-3">
        <ul class="pro-intro">
          <li class="overflow-left" v-for="val in goods" :key="val.name">
           <span v-if="val.type==1">
             <img src="../assets/img/special_1@2x.png" alt="">
           </span>
           <span v-if="val.type!=1">
             <img src="../assets/img/decrease_1@2x.png" alt="">
           </span>
           {{val.name}}
          </li>
        </ul>
      </div>
      <div class="col-xs-9">
        
      </div>
    </div> -->
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
import res from "../data.json"
export default {
  name:"customer",
  data () {
    return {
      seller: null,
      goods: null,
      supports: null,
      star:[]
    }
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
  overflow-x: hidden;
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
</style>
