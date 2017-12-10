<template>
  <div class="customer container-fluid">
    <!-- 卖家相关信息 -->
    <div class="container-fluid">
      <div class="row cus-bg">
        <div class="col-xs-3"><img src="../assets/img/cus_pro.png" alt=""/></div>
        <div class="col-xs-9">
          <p class="cus-title text-left"><span class="label label-danger">品牌</span> {{seller.name}}</p>
          <p class="cus-info text-left">{{seller.description}} / {{seller.deliveryTime}}分钟到达</p>
          <p class="cus-info text-left"><span class="label bg-white">减</span> {{seller.supports[0].description}} <a href="javascript:;">{{seller.supports.length}}个&gt;</a></p>
        </div>
      </div>
      <p class="cus-intro text-left overflow-left">
        <span class="label bg-white">公告</span> 
        <strong>{{seller.name}}</strong>
      </p>
    </div>

    <!-- 产品信息 -->
    <div class="container-fluid">
      <ul class="nav nav-pills">
        <li role="presentation"><a href="javascript:;" class="active">商品</a></li>
        <li role="presentation"><a href="javascript:;">评价</a></li>
        <li role="presentation"><a href="javascript:;">商家</a></li>
      </ul>
    </div>

    <div class="row">
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
      goods: null
    }
  },
  methods:{
   abc:function(){
     var that = this;
     that.seller = res.seller;
     that.goods = res.goods;

  
     
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
}
.cus-bg{
  padding:36px 18px 4.8rem 36px;
  background: url("../assets/img/cus_bg.png") no-repeat;
  background-size: 100% 100%;
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
.nav>li>a.active{
  color:#ff0000;
}
.pro-intro{
  border-top:1px solid #ccc;
}
.pro-intro>li{
  height: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  color:#333333;
  border-right:1px solid #ccc;
  border-bottom:1px solid #ccc;
  box-sizing: border-box;
}
</style>
