<template>
<div class="check-list">

  <div>
    <div class="topBar">
      <div class="cancel">取消</div>
      <div class="title">购物车</div>
      <div class="confirm">确定</div>
    </div>
    <div class="list">

      <div class="line">
        <div class="line-item">名字名字名字</div>
        <div class="line-price">￥30</div>
        <div class="line-num-oper">
          <input type="button" value="-"/>
          <input type="text" value="1"/>
          <input type="button" value="+"/>
        </div>
      </div>

    </div> 
  </div>



</div>
</template>


<script>
import res from "../data.json"
export default {
  name:"checklist",
  data () {
    return {
    }
  },
  methods:{
  },
  created:function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.check-list{
  width:100%;
  position:fixed;
  left:0;
  bottom:60px;
  z-index:999;
  color:#333333;
}
.topBar{
  display:-webkit-flex;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  font-size: 16px;
  padding: 0 13px;
  border-bottom: 1px solid rgb(217,217,217);
}
.topBar .cancel{
  color: rgb(159,159,159);
}
.topBar .confirm{
  color: rgb(46,166,242);
}
.list{
  max-height:300px;
}
.list .line{
  display:-webkit-flex;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:45px;
  padding:0 15px;
}
.line-num-oper{
  display:-webkit-flex;
  display:flex;
  justify-content: space-between;
  align-items: center; 
}
.line-item{
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width:40%;
  background:#666;
}
</style>
