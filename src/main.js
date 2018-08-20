import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Plugins from './components/Plugins.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home},
  { path: '/about', component: About},
  { path: '/plugins', component: Plugins}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
