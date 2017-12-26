<template>
  <div class="container product-detial">
      <div class="row row-bg" style="margin-top:0px;">
        <img :src="msg.image" alt="" class="pd-img">
        <p class="text-left pd-name">{{msg.name}}</p>
        <p class="text-left">
          <span>月售{{msg.sellCount}}份</span>
          <span>好评率{{msg.rating}}%</span>
        </p>
        <p class="text-left">
          <span class="pd-span">￥{{msg.price}}</span>
          <span v-show="msg.oldPrice != ''" style="text-decoration: line-through;">
           {{msg.oldPrice | oldPrice}}
          </span>
        </p>
      </div>
      <div class="row row-bg">
        <p class="text-left mchant-title">商家介绍</p>
        <p class="text-left notice1 p-notice">{{msg.info}}</p>
      </div>
      <div class="row row-bg">
        <p class="text-left mchant-title">商品评价</p>
        <ul class="nav nav-pills ul-list" role="tablist">
          <li role="presentation" class="active"><a href="#">全部<span class="badge">{{msg.ratings.length}}</span></a></li>
          <li role="presentation"><a href="#">满意<span class="badge">{{agreeNum}}</span></a></li>
          <li role="presentation"><a href="#">不满意<span class="badge">{{msg.ratings.length-agreeNum}}</span></a></li>
        </ul>
        <ul class="ul-list" style="float:none;">
          <li v-for="val in msg.ratings" :key="val.username" style="padding:0 0 20px 0;">
            <p class="text-left pd-text">
              <span>{{val.rateTime | time}}</span>
              <span>
                <img :src="val.avatar" alt=""/>
              </span>
              <span>{{val.username}}</span>
            </p>
            <p v-show="val.text != ''" class="text-left" style="width:100%;">
              {{val.text}}
            </p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import res from "../data.json"
export default {
  name: 'productDetial',
  data () {
    return {
      seller: null,
      goods: null,
      msg:'',
      agreeNum:null
    }
  },
  created:function(){
      this.abc();
      this.param();
      this.createAgreeNum();
  },
  methods:{
    abc:function(){
     var _this = this;
     _this.seller = res.seller;
     _this.goods = res.goods;
    },
    param:function(){
      let routerParams = this.$route.query;
      this.msg = routerParams;
    },
    createAgreeNum:function(){
      var sum = 0;
      for (var i = 0; i < this.ratings.length; i++) {
        if (this.ratings[i].score > 3) {
          sum++;
        }
      }
      this.agreeNum = sum;
    }
  },
  filters: {
    oldPrice:function(val){
      return '￥' + val;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-detial{
  width: 640px;
  height:100%;
  overflow-y: auto;
  color: #333333;
  background: #f4f4f4;
}
p{
  width: 90%;
  margin:0 auto;
}
.pd-img{
  width:100%;
  display: block;
}
.pd-name{
  width: 90%;
  margin: 15px auto 0;
  font-size: 2.4rem;
  line-height: 3.6rem;
  font-weight: bold;
}
.pd-span{
  font-size: 2.2rem;
  color:#ff0000;
  font-weight: 600;
  padding:15px 10px 20px 0;
  height: 5rem;
  line-height: 5rem;
}
.p-notice{
  font-size: 1.8rem;
  line-height: 2.6rem;
  padding:10px 0 15px;
  color: #333333;
}
.ul-list{
  width: 90%;
  margin:15px auto;
}
.pd-text{
  width: 100%;
  overflow: hidden;
  border-top:1px solid #cccccc;
  padding:20px 0 0 0;
}
.pd-text>span{
  float: left;
}
.pd-text>span>img{
  width:30px;
  border-radius: 50%;
}
.pd-text>span:nth-child(2),.pd-text>span:nth-child(3){
  float: right;
  margin:0 5px;
}
</style>