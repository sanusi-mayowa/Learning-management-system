<template>
  <div class="mx-5 px-5 mt-2 settings main">
    <v-row>
      <v-col col="12" md="5">
        <v-card flat>
          <v-list nav>
            <v-list-item
              v-for="setting in settings"
              :key="setting"
              :to="setting.route"
              router
              class=""
            >
              <div
                class="d-flex justify-space-between align-center"
                @click="showNotification"
              >
                <div class="d-flex align-center">
                  <img :width="15" :src="setting.icon" />
                  <v-list-item-title class="text-black ml-2">{{
                    setting.text
                  }}</v-list-item-title>
                </div>
                <div>
                  <img :width="8" :src="setting.backward" alt="" />
                </div>
              </div>
            </v-list-item>
          </v-list>
        </v-card>
        <div class="d-flex justify-space-between mt-3">
          <div></div>
          <v-btn flat class="bg-primary" :to="{ path: '/' }">
            <i class="bi bi-box-arrow-left mr-2"></i>
            Logout
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Settings",
  data() {
    return {
      settings: [
        {
          icon: "/assets/bell.png",
          text: "Notifications",
          backward: "/assets/Backward.png",
          route: "",
          click: true,
        },
        {
          icon: "/assets/password.png",
          text: "Change Password",
          backward: "/assets/Backward.png",
          route: "/forgotpassword",
          click: false,
        },
        {
          icon: "/assets/security.png",
          text: "Security",
          backward: "/assets/Backward.png",
          click: false,
        },
        {
          icon: "/assets/friends.png",
          text: "Friends",
          backward: "/assets/Backward.png",
          click: false,
        },
        {
          icon: "/assets/notifications.png",
          text: "Enable Two Step Verification  ",
          backward: "/assets/Backward.png",
          click: false,
        },
        {
          icon: "/assets/smile.png",
          text: "Display and languages",
          backward: "/assets/Backward.png",
          click: false,
        },
        {
          icon: "/assets/search.png",
          text: "Help",
          backward: "/assets/Backward.png",
          route: "/help",
          click: false,
        },
      ],
    };
  },
  methods: {
    showNotification() {
      this.$emit("closeNotification");
    },
  },
};
</script>
