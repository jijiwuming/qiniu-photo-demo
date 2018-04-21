import Vue from 'vue'
import Router from 'vue-router'
import photoWall from '../pages/photoWall.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: photoWall
    }
  ]
})
