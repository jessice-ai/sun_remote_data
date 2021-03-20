<template>
  <div id="app">
    <div>{{name}}</div>
    <sun_search />
    <sun_main />
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger" @click="sunToast">danger</mt-button>
  </div>
</template>

<script>

import sun_main from "./components/sun_main.vue"
import sun_search from "./components/sun_search.vue"
import { Toast } from 'mint-ui';
export default {
  name: 'App',
  data(){
    return {
      "name":"",
    }
  },
  methods:{
    sunToast(){
      Toast({
        message: 'Upload Complete',
        position: 'bottom',
        duration: 1000
      });
    }
  },
  components: {
    sun_main,
    sun_search
  },
  //声明周期函数 第一个阶段 初始化阶段 --- 执行顺序4 只执行一次 (常用)
  //初始化显示之后立刻调用,只调用一次
  // mounted(){
  //   const url = "https://api.github.com/search/repositories?q=v&sort=stars"
  //   this.$http.get(url).then(
  //     response=>{
  //       //请求成功
  //       const sun = response.data["items"]
  //       this.name = sun[0]["name"]
  //       //console.log(sun)
  //     },
  //     reponse=>{
  //       //请求失败
  //       alert("请求失败!"+reponse.data)
  //     }
  //   )
  // }
}
</script>

<style>

</style>
