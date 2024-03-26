<script setup>
    import {RouterLink, RouterView} from 'vue-router';
</script>


<template>
<header>
    <div class="wrapper">
        <RouterLink to="/mainpagebeforelogin"></RouterLink>
    </div>
</header>
<main>
    <RouterView/>
</main>

</template>

<style scoped>

</style>