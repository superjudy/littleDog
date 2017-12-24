<template>
  <div class="container product-detial">
      <div class="row">
        <img src="" alt="" class="pd-img">
        <p>{{msg}}</p>
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
      msg:''
    }
  },
  created:function(){
      this.abc();
      this.param();
  },
  methods:{
    abc:function(){
     var _this = this;
     _this.seller = res.seller;
     _this.goods = res.goods;
    },
    param:function(){
      let routerParams = this.$route.query.id;
      this.msg = routerParams;
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
}
.pd-img{
  width:100%;
  display: block;
}
</style>

