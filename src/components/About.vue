<template>
<div id="About">
    <h1>Hello</h1>
    <h3>This is a simple helpful desktop application called PSM Tool, made to help TUIU Sarl employees in their work on PSM projects.</h3>
    <h4>It was made with <span class="love">♥</span> by <span class="success">Marwen Ayari</span> using <span class="success">electron</span> javascript library</h4>
</div>
</template>

<script>
export default {
    name: 'About',
    data (){
        return{
            
        }
    }
}
</script>

<style>

#About{
    background-color: rgba(2,2,2,0.7);
     width: 80%;
    height: 100vh;
    float: left;
    padding: 10px;
    text-align: left;
}

.success{
    color: #00bc8c;
}

.love{
    color:  red;
}
</style>
