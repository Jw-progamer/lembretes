import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import vuefire from 'vuefire'

Vue.config.productionTip = false
Vue.use(vuefire)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
