<template>
  <v-app>
    <!-- <NavbarDesktop /> -->
    <NavbarMobile />
    <v-main class="bg-primary" style="min-height: 100vh;">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import NavbarDesktop from '@/components/NavbarDesktop.vue';
import NavbarMobile from '@/components/NavbarMobile.vue';

export default {
  name: 'DefaultLayout',
  components: {
    // NavbarDesktop,
    NavbarMobile
  },
};
</script>
