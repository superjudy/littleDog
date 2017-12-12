<template>
  <div class="container product">
    <div class="row">
      <div class="col-xs-3">
        <ul class="pro-intro">
          <li class="overflow-left" v-for="val in goods" :key="val.name">
           <span v-if="val.type==1">
             <img src="../../assets/img/special_1@2x.png" alt="">
           </span>
           <span v-if="val.type!=1">
             <img src="../../assets/img/decrease_1@2x.png" alt="">
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
import res from "../../data.json"
export default {
  name: 'product',
  data () {
    return {
      seller: null,
      goods: null
    }
  },
  methods:{
    abc:function(){
     var _this = this;
     _this.seller = res.seller;
     _this.goods = res.goods;
    }
  },
  created:function(){
      this.abc()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

