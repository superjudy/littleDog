<template>
  <div class="merchant container">
    <div class="row" style="background:#ffffff;">
      <p class="text-left pd20 mchant-title">{{seller.name}}</p>
      <p class="text-left pd20">
        <ul class="star" style="display:inline-block;">
          <li v-for="value in star" :key="value">
            <img v-if="value" src="../../assets/img/star24_on@2x.png" alt="">
            <img v-if="!value" src="../../assets/img/star24_off@2x.png" alt="">            
          </li>
        </ul>
        <span>({{ratings.length}})</span>
        <span>月售{{seller.sellCount}}单</span>
      </p>
      <ul class="mchant-info">
        <li>
          <span class="info-text">起送价</span><br/>
          <span class="info-num">{{seller.minPrice}}</span>
          元
        </li>
        <li>
          <span class="info-text">商家配送</span><br/>
          <span class="info-num">{{seller.deliveryPrice}}</span>
          元 
        </li>
        <li>
          <span class="info-text">平均配送时间</span><br/>
          <span class="info-num">{{seller.deliveryTime}}</span>
          分钟 
        </li>
      </ul>
    </div>
    <div class="row" style="margin-top:30px; background:#ffffff;">
      <div>
        <p class="text-left pd20 mchant-title">公告与活动</p>
        <p class="text-left notice1">{{seller.bulletin}}</p>
      </div>
      <ul class="notice2">
        <li v-for="value in supports" :key="value.description" class="text-left">
          <a href="javascript:;" v-if="value.type == 0">
            <img src="../../assets/img/decrease_1@2x.png" alt="">
          </a>
          <a href="javascript:;" v-if="value.type == 1 || value.type == 2">
            <img src="../../assets/img/discount_1@2x.png" alt="">
          </a>
          <a href="javascript:;" v-if="value.type == 3 || value.type == 4">
            <img src="../../assets/img/special_1@2x.png" alt="">
          </a>
          {{value.description}}
        </li>
      </ul>
    </div>
    <div class="row" style="margin-top:30px; background:#ffffff;">
      <p class="text-left pd20 mchant-title">商家实景</p>
      <ul class="mchant-pic">
        <li>
          <img v-for="pic in pics" :key="pic" :src="pic" alt="">
        </li>
      </ul>
    </div>
    <div class="row" style="margin-top:30px; background:#ffffff;padding-bottom:300px;">
      <p class="text-left pd20 mchant-title">商家信息</p>
      <div>
        <p v-for="info in seller.infos" :key="info" class="text-left p-infos">{{info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import res from "../../data.json"
export default {
  name: 'merchant',
  data () {
    return {
      seller:null,
      star:[],
      ratings:null,
      supports: null,
      pics:null
    }
  },
  created:function(){
      this.abc();
  },
  methods:{
    abc:function(){
      var _this = this;
      _this.seller = res.seller;
      _this.ratings = res.ratings;
      _this.supports = res.seller.supports;
      _this.pics = res.seller.pics;

    for (var i = 0; i < 5; i++) {
       if(i < _this.seller.score){
         _this.star.push(true)
       }else{
         _this.star.push(false)
       }
     }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.merchant{
  color: #333333;
  background: #f4f4f4;
  overflow-y:auto;
  height:100%;
}
.star li{
  display: inline;
}
.pd20{
  padding-left: 20px;
}
.mchant-title{
  line-height: 4rem;
  font-size: 2.6rem;
  border-top:1px solid #cccccc;
  padding-top: 20px;
}
.info-num{
  font-size: 4rem;
}
.info-text{
  color:darkgray;
  font-size: 2rem;
}
.mchant-info{
  width: 100%;
  overflow: hidden;
  border-top:1px solid #cccccc;
  border-bottom:1px solid #cccccc;
  padding:20px 0;
}
.mchant-info li{
  float: left;
  width:33%;
}
.notice1{
  color:#ff0000;
  font-size: 2rem;
  line-height: 3rem;
  width:90%;
  margin:0 auto;
}
.notice2{
  width: 100%;
  height:auto;
  margin-top: 20px;
}
.notice2 li{
  height: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  width:90%;
  margin:0 auto;
  border-top:1px solid #cccccc;
}
.mchant-pic{
  height: 180px;
  overflow: hidden;
}
.mchant-pic img{
  margin:0 5px;
}
.p-infos{
  width: 90%;
  margin:0 auto;
  line-height: 5rem;
  font-size: 2.2rem;
  border-top:1px solid #cccccc;
}
</style>