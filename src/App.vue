<template>
  <div id="app">
    <div>{{name}}</div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      "name":""
    }
  },
  components: {
    
  },
  //声明周期函数 第一个阶段 初始化阶段 --- 执行顺序4 只执行一次 (常用)
  //初始化显示之后立刻调用,只调用一次
  mounted(){
    const url = "https://api.github.com/search/repositories?q=v&sort=stars"
    this.$http.get(url).then(
      response=>{
        //请求成功
        const sun = response.data["items"]
        this.name = sun[0]["name"]
        //console.log(sun)
      },
      reponse=>{
        //请求失败
        alert("请求失败!"+reponse.data)
      }
    )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
