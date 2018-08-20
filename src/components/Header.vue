<template>
<div id="header">
    <img alt="Vue logo" src="../assets/logo-72x72.png">
    <h1>Welcome to PSM Tool</h1>
</div>
</template>

<script>
export default {
    name: 'Header',
    data (){
        return{
            message: "Marwen"
        }
    }
}
</script>

<style>
#header{
    background-color: rgba(2,2,2,0.7);
    padding: 10px;
}
</style>
