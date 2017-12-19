<template>
  <div class="appraise container"  style="overflow-y:auto;height:100%;">
      <div class="row bt-line">
        <div class="col-xs-4 xs4">
          <p class="score">3.9</p>
          <p>综合评分</p>
          <p>高于周边商家</p>
        </div>
        <div class="col-xs-8 xs8 text-left">
          <div>
            综合评分
            <a>
              <img src="../../assets/img/star24_on@2x.png" alt=""/>
            </a>
            <a>
                <img src="../../assets/img/star24_off@2x.png" alt="/">
            </a>
            <span style="color:orangered;">3.9</span>
          </div>
          <div>
            服务态度
            <a>
              <img src="../../assets/img/star24_on@2x.png" alt=""/>
            </a>
            <a>
                <img src="../../assets/img/star24_off@2x.png" alt="/">
            </a>
            <span style="color:orangered;">4.0</span>
          </div>
          <div>送达时间 <span style="color:#888888;">44 分钟</span></div>
        </div>
      </div>
      <div class="row tb-list">
        <ul class="nav nav-pills" role="tablist">
          <li role="presentation" class="active"><a href="#">全部<span class="badge">42</span></a></li>
          <li role="presentation"><a href="#">满意</a></li>
          <li role="presentation"><a href="#">不满意<span class="badge">3</span></a></li>
        </ul>
      </div>
      <div class="row" v-for="value in ratings" :key="value.username">
        <div class="col-xs-2"><img :src="value.avatar" class="img-circle" alt=""/></div>
        <div class="col-xs-10"></div>
      </div>
  </div>
</template>

<script>
import res from "../../data.json"
export default {
  name: 'appraise',
  data () {
    return {
      ratings:null
    }
  },
  methods:{
    abc:function(){
      var _this = this;
      _this.ratings = res.ratings;
    }
  },
  created:function(){
      this.abc()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appraise{
  color: #333333;
  background: #f4f4f4;
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
</style>