<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created:function(){ 
    //this.rou();
  },  
  methods:{
    rou:function(){
      this.$router.push({
        path:'/index/product'
      });
    }
  }
}
</script>

<style>
#app {
  width:640px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
}
.container,.container-fluid,.col-xs-2,.col-xs-10{
  padding:0;
}
.row{
  margin: 0;
}

</style>
