<template>
    <div>
        <Navigation></Navigation>
        <router-view></router-view>        
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './global/Footer.vue';
import Navigation from './global/Navigation.vue';

    export default{
        name : 'Layout',
        components : {
            Navigation, 
            Footer,
        }
    };
</script>
