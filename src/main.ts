import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import { tagListModel } from './models/tagListModel'

Vue.config.productionTip = false
//全局引入底部导航栏组件
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

window.tagList = tagListModel.fetch()
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === "duplicated") {
    window.alert("该类名已经存在");
  } else {
    return;
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
