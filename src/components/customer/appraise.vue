<template>
  <div class="appraise container">
      <div class="row bt-line">
        <div class="col-xs-4 xs4">
          <p class="score">{{seller.score}}</p>
          <p>综合评分</p>
          <p>高于周边商家{{seller.rankRate}}%</p>
        </div>
        <div class="col-xs-8 xs8 text-left">
          <div>
            综合评分
            <ul class="star" style="display:inline-block;">
              <li v-for="value in star" :key="value">
                <img v-if="value" src="../../assets/img/star24_on@2x.png" alt="">
                <img v-if="!value" src="../../assets/img/star24_off@2x.png" alt="">            
              </li>
            </ul>
            <span style="color:orangered;">{{seller.score}}</span>
          </div>
          <div>
            服务态度
            <ul class="star" style="display:inline-block;">
              <li v-for="value in star" :key="value">
                <img v-if="value" src="../../assets/img/star24_on@2x.png" alt="">
                <img v-if="!value" src="../../assets/img/star24_off@2x.png" alt="">            
              </li>
            </ul>
            <span style="color:orangered;">{{seller.serviceScore}}</span>
          </div>
          <div>送达时间 <span style="color:#888888;">{{seller.deliveryTime}} 分钟</span></div>
        </div>
      </div>
      <div class="row tb-list">
        <ul class="nav nav-pills" role="tablist">
          <li role="presentation" class="active"><a href="#">全部<span class="badge">{{ratings.length}}</span></a></li>
          <li role="presentation"><a href="#">满意<span class="badge">{{agreeNum}}</span></a></li>
          <li role="presentation"><a href="#">不满意<span class="badge">{{ratings.length-agreeNum}}</span></a></li>
        </ul>
      </div>
      <div class="row ap-list" v-for="value in ratings" :key="value.username">
        <div class="col-xs-2">
          <img :src="value.avatar" class="img-circle ap-img" alt=""/>
        </div>
        <div class="col-xs-10">
          <p class="text-left">
            {{value.username}}
            <span class="text-right ap-span">{{value.rateTime | time}}</span>
          </p>
          <p class="text-left">
            <ul class="star">
              <li v-for="val in value.scoreArr" :key="val">
                <img v-if="val == '1'" src="../../assets/img/star24_on@2x.png" alt="">
                <img v-if="val == '0'" src="../../assets/img/star24_off@2x.png" alt="">            
              </li>
            </ul>
            <span v-show="value.deliveryTime != ''">{{value.deliveryTime}}分钟送达</span>
          </p>
          <p class="text-left" v-show="value.text != ''">{{value.text}}</p>
          <p class="text-left">
            <a href="javascript:;" v-for="recd in value.recommend" :key="recd" class="ap-icon">
              {{recd}}
            </a>
          </p>
        </div>
      </div> 
  </div>
</template>

<script>
import res from "../../data.json"
export default {
  name: 'appraise',
  data () {
    return {
      ratings:null,
      seller:null,
      star:[],
      agreeNum:null
    }
  },
  created:function(){
      this.abc();
      this.createAgreeNum();
      this.createStarArray();
  },
  methods:{
    abc:function(){
      var _this = this;
      _this.seller = res.seller;
      _this.ratings = res.ratings;

    for (var i = 0; i < 5; i++) {
       if(i < _this.seller.score){
         _this.star.push(true)
       }else{
         _this.star.push(false)
       }
     }
    },
    createAgreeNum:function(){
      var sum = 0;
      for (var i = 0; i < this.ratings.length; i++) {
        if (this.ratings[i].score > 3) {
          sum++;
        }
      }
      this.agreeNum = sum;
    },
    createStarArray:function(){
      for (var i = 0; i < this.ratings.length; i++) {
        var arr = [];
        for(var j = 0; j < 5; j++){
          if(this.ratings[i].score > j){
            arr.push(1);
          }else{
            arr.push(0);
          }
        }
        this.ratings[i].scoreArr = arr;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appraise{
  color: #333333;
  background: #f4f4f4;
  overflow-y:auto;
  height:100%;
}
.xs4{
  border-right:1px solid #cccccc;
  box-sizing: border-box;
}
.score{
  color: orangered;
  font-size: 5rem;
}
.xs8>div{
  font-size: 2rem;
  line-height: 3rem;
  padding-left: 40px;
}
.xs8>div:first-child{
  margin-top: 10px;
}
.bt-line,.tb-list{
  border-bottom:1px solid #cccccc;
  border-top:1px solid #cccccc;
  margin-bottom: 20px;
  padding:20px 0;
  background: #ffffff;
}
.tb-list{
  margin: 0;
}
.tb-list>ul{
  width:90%;
  margin:0 auto;
}
.ap-img{
  width: 70px;
}
.ap-list{
  padding:20px 0;
  margin:20px auto;
  border-bottom:1px solid #cccccc;
}
.ap-list p{
  width: 100%;
}
.ap-span{
  width:50%;
  float: right;
  margin-right: 20px;
}
.ap-icon{
  padding:5px;
  border:1px solid #cccccc;
  margin:0 5px;
  text-decoration: none;
  color:#888888;
}
.star li{
  display: inline;
}
</style>