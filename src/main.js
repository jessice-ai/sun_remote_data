import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource' //引入vue-resource插件,作用:远程获取数据
//声明使用VueResource插件
Vue.use(VueResource) //声明使用后，内部会给vm对象与组件对象，添加一个属性,属性名字是$http $http 有两个属性，get，post

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')