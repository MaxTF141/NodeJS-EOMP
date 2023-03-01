<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from './components/NavbarC.vue'
import Footer from './components/FooterC.vue'

export default {
  components:{
    Navbar,
    Footer
  }
}

</script>

<style>

nav a.router-link-exact-active {
  color: crimson;
}
</style>
