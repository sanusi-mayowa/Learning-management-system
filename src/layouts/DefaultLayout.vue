<template>
  <v-app>
    <Navbar />    
    <v-main class="bg-primary" style="min-height: 100vh">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
};
</script>
