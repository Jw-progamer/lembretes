import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'lembretes',
      component: () => import('./views/Lembretes.vue')
    },
    {
      path: '/edit/:lembrete_key',
      name: 'fomulario',
      component: () => import('./views/Lembrete_data.vue'),
      props: true
    }
  ]
})
