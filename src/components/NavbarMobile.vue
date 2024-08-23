<template>
  <v-app-bar app class="bg-primary mobilenav" prominent flat>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      <span class="text-btn intro">{{ pageTitle }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat variant="plain" @click="toggleNotifications">
      <img :width="25" src="/assets/notification (1) 1.png" alt="" />
    </v-btn>
    <v-btn variant="plain" :to="{ path: '/forum' }">
      <img :width="25" src="/assets/message 1.png" alt="" />
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    class="bg-btn sidebar-small"
    persistent
  >
    <v-list-item
      class="d-flex justify-space-between ml-5 align-center px-0 logo pt-5"
    >
      <img :width="100" src="/assets/logo.png" alt="" class="ml-1" />
      <template v-slot:append> </template>
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
            <img :src="link.avatar" />
          </template>
          <v-list-item-title class="text-black">{{
            link.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
  <v-navigation-drawer
    v-model="notificationDrawer"
    temporary
    location="right"
    class="notification-drawer bg-notification notification-small"
  >
    <Notification />
  </v-navigation-drawer>
</template>
<script>
import Notification from "@/components/Notification.vue";
export default {
  name: "NavbarMobile",
  components: { Notification },
  data() {
    return {
      notificationDrawer: false,
      drawer: false,
      group: null,
      links: [
        { avatar: "/assets/home 2.png", text: "Home", route: "/home" },
        {
          avatar: "/assets/online-learning 1.png",
          text: "My Courses",
          route: "/courses",
        },
        {
          avatar: "/assets/paper 2.png",
          text: "Assignments",
          route: "/assignments",
        },
        {
          avatar: "/assets/schedule 1.png",
          text: "Time Table",
          route: "/timetable",
        },
        { avatar: "/assets/chat 1.png", text: "Forum", route: "/forum" },
        {
          avatar: "/assets/setting 1.png",
          text: "Settings",
          route: "/settings",
        },
      ],
    };
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title || "Default Title";
    },
  },
  methods: {
    group() {
      this.drawer = false;
    },
    toggleNotifications() {
      this.notificationDrawer = !this.notificationDrawer;
    },
  },
};
</script>
<style scoped>
.notification-drawer {
  height: 550px !important;
  border: none !important;
  display: none !important;
}
.v-navigation-drawer__scrim {
  background: transparent !important;
}
.notification-small.v-navigation-drawer--temporary.v-navigation-drawer--active {
  width: 370px !important;
  box-shadow: none !important;
  position: fixed !important;
  display: block !important;
  transition: all 0.3s ease;
}
</style>
