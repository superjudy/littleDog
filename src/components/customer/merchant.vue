<template>
  <div class="merchant container">
    <div class="row">
      <p>{{seller.name}}</p>
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
      star:[]
    }
  },
  created:function(){
      this.abc();
  },
  methods:{
    abc:function(){
      var _this = this;
      _this.seller = res.seller;

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
}
</style>