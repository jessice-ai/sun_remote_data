<template>
<div>
  <input type="text" name="" v-model="searchName"> <button @click="search">搜索</button>
</div>
</template>

<script>
import pubsub from "pubsub-js" //引入订阅发布组件
export default {
  data(){
    return {
      searchName:'',

    }
  },
  methods:{
    search(){
      const name = this.searchName.trim()
      if(name){
        //发布消息
        pubsub.publish("sun_search",name)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
