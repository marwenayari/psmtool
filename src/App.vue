<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <router-view>
        
    </router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Header,
    Navbar,
    Home
  }
}
</script>

<style>

@import './assets/css/main.css';
@import './assets/css/darkly-bootstrap.min.css';


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 0;
}
</style>
