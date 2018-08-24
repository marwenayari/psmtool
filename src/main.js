import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Plugins from './components/Plugins.vue'

import VueHighlightJS from 'vue-highlight.js'
//import highlightjs from 'highlightjs/highlight.pack.js'

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS);

//highlightjs.initHighlightingOnLoad();

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import 'highlight.js/styles/dark.css';


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
