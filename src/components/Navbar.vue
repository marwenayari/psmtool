<template>
<div id="navbar">
    <ul class="nav nav-pills flex-column">
    <router-link class="nav-link active" to="/"><img alt="logo" src="../assets/logo-72x72.png"><h5>PSM Tool</h5></router-link>
    </ul>
    <ul class="nav nav-pills flex-column">
        <li class="nav-item">
        <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link " to="/plugins">Plugins</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    data (){
        return{
        }
    }
}
</script>

<style>

#navbar{
    background-color: rgba(2,2,2,0.7);
    width: 20%;
    height: 100vh;
    float: left;
    padding: 10px;
}

ul li {
  list-style: none;
  text-align: left;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link{
    background-color: transparent !important;
}

a.nav-link {
    font-size: 20px;
}
</style>
