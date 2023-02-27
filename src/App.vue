<template>
    <Navbar brand-name="Portafolio" />
    <router-view />
    <Footer dev-name= "Harold Santos"/>
    
</template>

<script>
import Navbar from '../src/components/Navbar/index.vue';
import Footer from '../src/components/Footer/footer.vue';

export default({
  components: {
    Navbar: Navbar,
    Footer: Footer
    
  }
  
})

</script>