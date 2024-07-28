<template>
      <v-app-bar
        app
        class="bg-primary px-3 mobilenav"
        prominent
        flat
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="text-btn intro">{{ pageTitle}}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="plain">
        <img :width="25" src="/public/assets/notification (1) 1.png" alt="">
      </v-btn>
      <v-btn variant="plain">
        <img :width="25" src="/public/assets/message 1.png" alt="">
      </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        temporary
        class="bg-btn sidebar-small"
        persistent
      >
      <v-list-item class="d-flex justify-space-between align-center px-0 logo">
        <img :width="100" src="/assets/oxfordtrans 1.png" alt="">
        <template v-slot:append>
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
      
</template>
<script>
export default {
    name : 'NavbarMobile',
    data () {
      return{
      drawer: false,
      group: null,
      links: [
        { avatar: '/assets/home 2.png', text: 'Home', route: '/home' },
        { avatar: '/assets/online-learning 1.png', text: 'My Courses', route: '/courses' },
        { avatar: '/assets/paper 2.png', text: 'Assignments', route: '/assignments' },
        { avatar: '/assets/schedule 1.png', text: 'Time Table', route: '/timetable' },
        { avatar: '/assets/chat 1.png', text: 'Forum', route: '/forum' },
        { avatar: '/assets/setting 1.png', text: 'Settings', route: '/settings' },
      ]
  };
    },
    computed: {
    pageTitle() {
      return this.$route.meta.title || 'Default Title';
    }
  },
    methods: {
      group () {
        this.drawer = false
      },
    },
  }
</script>