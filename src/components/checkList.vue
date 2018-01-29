<template>
<div class="clist-bg">

  <div class="check-list cl1-list" :class="{'show1': isOpen}">
    <div class="topBar">
      <div class="cancel" @click="toggleList">取消</div>
      <div class="title">购物车</div>
      <div class="confirm" @click="confirmData">确定</div>
    </div>
    <div class="list">

      <div class="line" v-for="(v,index) in itemData" :key="v.name">
        <div class="line-item">{{v.name}}</div>
        <div class="line-price">￥{{v.price}}</div>
        <div class="line-num-oper">
          <input type="button" value="-" @click="addNum(index,-1)"/>
          <input type="text" v-model="v.num">
          <input type="button" value="+" @click="addNum(index,1)"/>
        </div>
      </div>

    </div> 
  </div>

  <!-- mask 
  <div class="cl-mask" v-if="isOpen"></div>
  -->
</div>
</template>


<script>
import res from "../data.json"
export default {
  name:"checklist",
  data () {
    return {
      isOpen: false,
      price:30,
      num:1,
      itemData:null
    }
  },
  created:function(){
    this.param();
  },
  methods:{
    param:function(){
      var that = this;
      setInterval(function () {
         that.itemData = that.$store.state.checkListData;
         console.log(that.itemData);
      },10000)
    },
    toggleList:function(){
       this.isOpen = !this.isOpen;
       this.$emit('getSome',this.isOpen);
    },
    addNum:function(index,type){
      for (var i = 0; i < this.itemData.length; i++) {
        if(i == index && type > 0){
          this.itemData[i].num ++;
        }else if(i == index && type < 0){
          this.itemData[i].num --;
          if(this.itemData[i].num == 0){
            this.itemData.splice(index,1);
          }
        }
        
      }
    },
    confirmData:function(){
      this.isOpen = false;
      var obj = {
        price: this.price,
        num: this.num
      };
      this.$emit('transformData',obj);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clist-bg{
	width: 100%;
	height: 200px;
	position: fixed;
	left:0;
	bottom:0;
}
.check-list{
  width:100%;
  position:fixed;
  left:0;
  bottom:60px;
  z-index:9;
  color:#333333;
  background:#fff;
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
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; 
  overflow-scrolling: touch;
}
.list .line{
  display:-webkit-flex;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:50px;
  padding:3px 15px;
  border-bottom:1px solid #eee;
}
.line-num-oper{
  display:-webkit-flex;
  display:flex;
  justify-content: space-between;
  align-items: center; 
  width:90px;
  height:50px;
  line-height:30px;
}
.line-num-oper input{
  width:30px;
  text-align:center;
  height:30px;
  border:0;
  outline:none;
}
.line-num-oper input[type="text"]{
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
}
.line-item{
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width:60%;
  height:50px;
  line-height:50px;
}
.line-price{
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:15%;
  height:50px;
  line-height:50px; 
}
.cl1-list{
    overflow: hidden;
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-transform: translateY(100%);
	transform: translateY(100%);
}
.cl1-list.show1{
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
}
.cl-mask{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.4);
}
</style>
