<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    class="bg-btn sidebar" app
  >
    <v-list-item class="d-flex justify-space-between align-center px-0 logo">
      <img :width="100" src="/assets/oxfordtrans 1.png" alt="">
      <template v-slot:append>
        <v-btn
          variant="text"
          class="ham"
        >
          <img :width="30" src="/assets/Group 37962.png" class="pr-1">
        </v-btn>
      </template>
    </v-list-item>
    <v-list-item>
      <div class="profile-main">
        <UserProfile />
      </div>
    </v-list-item>
    <div class="d-flex justify-center">
      <v-list nav>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.route"
          router
          class="bg-list sidebar-btn px-5"
        >
          <template v-slot:prepend>
            <img :src="link.avatar">
          </template>
          <v-list-item-title class="text-black">{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
  
  <v-app-bar app flat class="bg-primary pt-5 topbar">
    <v-toolbar-title class="pl-5">
      <span class="text-btn intro">{{ pageTitle }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat variant="plain" @click="toggleNotifications">
      <img :width="25" src="/assets/notification (1) 1.png" alt="">
    </v-btn>
    <v-btn variant="plain">
      <img :width="25" src="/assets/message 1.png" alt="">
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="notificationDrawer"
    temporary
    location="right"
    class="notification-drawer bg-notification notification-big"
    
  >
    <Notification />
  </v-navigation-drawer>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import Notification from '@/components/Notification.vue';

export default {
  name: 'NavbarDesktop',
  components: { UserProfile, Notification },
  data() {
    return {
      drawer: true,
      rail: false,
      notificationDrawer: false,
      links: [
        { avatar: '/assets/home 2.png', text: 'Home', route: '/home' },
        { avatar: '/assets/online-learning 1.png', text: 'My Courses', route: '/courses' },
        { avatar: '/assets/paper 2.png', text: 'Assignments', route: '/assignments' },
        { avatar: '/assets/schedule 1.png', text: 'Time Table', route: '/timetable' },
        { avatar: '/assets/chat 1.png', text: 'Forum', route: '/forum' },
        { avatar: '/assets/setting 1.png', text: 'Settings', route: '/settings' },
      ],
    };
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title || 'Default Title';
    },
  },
  methods: {
    toggleNotifications() {
      this.notificationDrawer = !this.notificationDrawer;
    },
    toggleRail() {
      this.rail = !this.rail;
    },
  },
};
</script>

<style scoped>
.notification-drawer {
  height: 550px !important;
  border: none !important;
}
.v-navigation-drawer__scrim{
  background: transparent !important;
}
.v-navigation-drawer--temporary.v-navigation-drawer--active {
  width: 370px !important;
  box-shadow: none !important;
  position: fixed !important;
}
</style>
