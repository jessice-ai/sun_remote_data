<template>
  <div>
  	<h2 v-if="firstView">请输入搜索内容</h2>
  	<h2 v-if="loading">加载中</h2>
  	<h2 v-if="errormsg">{{errormsg}}</h2>
  	<div>
  		<div class="adin" v-for="(user,index) in users" :key="index">
  			<a :href="user.url">
  				<img :src="user.img"  />
  				{{user.name}}
  			</a>
  		</div>
  	</div>
  </div>
</template>

<script>
import pub_sub from "pubsub-js"  //引入订阅发布组件
import axios from "axios"
export default {

	data(){
		return {
			firstView:true,
			loading:false,
			users:null, //[{url:'',img:'',name:''}]
			errormsg:'' //错误提示信息
		}
	},
	mounted(){
		//订阅消息: 两个参数, sun_delete_item 消息订阅名称 msg 暂时没用 index 是传递过来的值
	    pub_sub.subscribe("sun_search",(msg,data)=>{
	      ///this.sun_delete_item(data)

	      // console.log(data)
	      // console.log(msg)
	      const url = "https://api.github.com/search/repositories?q=${data}&sort=stars"
	      //发送ajax请求
	      this.firstView = false
	      this.loading = true
	      //远程请求数据
	      axios.get(url).then(
	      	response=>{
	      		const result = response.data["items"]
	      		console.log(result)
	      		//更新状态
	      		this.loading = false
	      		this.users = result.map(item=>({
	      			url:item["teams_url"],
	      			img:item.owner["avatar_url"],
	      			name:item.name
	      		}))

	      	}).catch(error=>{
	      		this.loading=false
	      		this.errormsg='请求失败'
	      		console.log(error)
	      	})

	    })
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.adin{
	float:left;width:200px;height:100px;overflow: hidden;
}
.adin img{
	float:left;width:100px;height:60px;
}
</style>
