<template>
  <div class="container product">
    <div class="row" style="height:100%;">
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
      <div class="set-meal col-xs-9 text-left" style="overflow-y:auto;height:100%;">
        <div class="row" v-for="val in goods" :key="val.name">
          <h3>{{val.name}}</h3>
          <div v-for="food in val.foods" :key="food.name">
            <div class="row food-item">
              <div class="col-xs-3">
                <img :src="food.icon" alt=""/>
              </div>
              <div class="col-xs-9" style="position:relative;">
                <p @click="productDetial(food)">{{food.name}}</p>
                <router-view/>
                <p class="overflow-left">{{food.description}}</p>
                <p><span>月售{{food.sellCount}}份</span><span style="margin-left:10px;">好评率{{food.rating}}%</span></p>
                <p style="color:#ff0000;">￥{{food.price}}</p>
                <span class="add-cart" @click="addCart(food)">加入购物车</span>
              </div>
            </div>
          </div>
        </div>
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
      goods: null,
      food:null
    }
  },
  methods:{
    abc:function(){
     var _this = this;
     _this.seller = res.seller;
     _this.goods = res.goods;
    },
    productDetial:function(str){
      this.$router.push({
        path:'/productDetial',
        query:str
      });
    },
    addCart:function(v){
      var checkGoods = {
        name: v.name,
        price: v.price,
        num:1
      }
      this.$store.state.checkListData.push(checkGoods);
      this.$root.Bus.$emit('eventConfirmData');
    }
  },
  created:function(){
      this.abc()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product{
  width:640px;
  height: auto;
  position: absolute;
  top:261px;
  bottom:0;
  left:0;
  overflow:hidden;
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
.set-meal{
  color: #333333;
}
.set-meal h3{
  color: #aaaaaa;
  background: #eeeeee;
  height: 4rem;
  line-height: 4rem;
  width: 97%;
  padding-left: 3%;
  font-size: 2rem;
  margin:0 auto;
}
.food-item{
  width:98%;
  margin:10px auto;
}
.add-cart{
  position:absolute;
  right:10px;
  bottom:10px;
  color:red;
  border:1px solid red;
  font-size:14px;
  padding:3px 10px;
  border-radius:12px;
  cursor:pointer;
}
</style>

