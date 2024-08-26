<template>
  <div class="px-5 pt-5 ml-2 chat" style="padding-top: 90px !important">
    <v-app-bar app flat class="bg-primary topbar">
      <v-toolbar-title class="pl-2">
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
      v-model="notificationDrawer"
      temporary
      location="right"
      class="notification-drawer bg-notification"
    >
      <Notification />
    </v-navigation-drawer>
    <v-row>
      <!-- Sidebar for contacts -->
      <v-col cols="4">
        <div class="search-top">
          <v-text-field
            v-model="search"
            variant="outlined"
            prepend-inner-icon="bi bi-search"
            class="rounded-lg text-grey"
            label="search"
          ></v-text-field>
          <div class="wrap">
            <div class="mt-1">
              <v-card class="bg-transparent" flat>
                <h3 class="ml-4 mt-1 text-black">Lectures</h3>
                <v-row
                  v-for="lecture in lectures"
                  :key="lecture.id"
                  class="lecturer"
                  @click="selectContact(lecture)"
                >
                  <v-col cols="2">
                    <img :width="35" :src="lecture.avatar" class="mt-2" />
                  </v-col>
                  <v-col cols="6">
                    <p class="text-black mt-3">{{ lecture.name }}</p>
                  </v-col>
                  <v-col cols="4" class="stat">
                    <span class="text-grey mt-1">{{ lecture.day }}</span>
                    <span class="text-grey">{{ lecture.time }}</span>
                  </v-col>
                  <v-divider class="mx-3"></v-divider>
                </v-row>
              </v-card>
            </div>
            <div class="mt-3">
              <v-card class="bg-transparent" flat>
                <h3 class="ml-4 mt-1 text-black">Students</h3>
                <v-row
                  class="student"
                  v-for="student in students"
                  :key="student.id"
                  @click="selectContact(student)"
                >
                  <v-col cols="2">
                    <img :width="35" :src="student.avatar" class="mt-1" />
                  </v-col>
                  <v-col cols="6">
                    <p class="text-black name mt-1">{{ student.name }}</p>
                    <span class="text-grey message">{{ student.message }}</span>
                  </v-col>
                  <v-col cols="4" class="stat">
                    <span class="text-grey">{{ student.day }}</span>
                    <v-row class="message-status">
                      <v-col cols="8">
                        <span class="text-grey">{{ student.time }}</span>
                      </v-col>
                      <v-col cols="4">
                        <img :width="15" :src="student.messageStatus" alt="" />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-divider class="mx-3"></v-divider>
                </v-row>
              </v-card>
            </div>
          </div>
        </div>
      </v-col>
      <!-- Chat window -->
      <v-col cols="8" class="chat-window" v-if="selectedContact">
        <v-card flat class="bg-transparent">
          <div class="d-flex align-center px-3 justify-space-between pt-1">
            <div class="d-flex align-center cursor-pointer">
              <div>
                <img :width="50" :src="selectedContact.avatar" alt="" />
              </div>
              <div class="ml-2 anil-profile">
                <h3 class="text-black">{{ selectedContact.name }}</h3>
                <span class="text-grey"
                  >Online - Last seen, {{ selectedContact.time }}</span
                >
              </div>
            </div>
            <div class="d-flex request">
              <div>
                <v-btn flat varient="plain" class="bg-transparent">
                  <img
                    :width="15"
                    :height="15"
                    src="/assets/audio.png"
                    alt=""
                  />
                </v-btn>
              </div>
              <div class="mx-2">
                <v-btn flat varient="plain" class="bg-transparent">
                  <img
                    :width="20"
                    :height="20"
                    src="/assets/video.png"
                    alt=""
                  />
                </v-btn>
              </div>
              <v-menu offset-y>
                <template v-slot:activator="{ props }">
                  <v-btn
                    flat
                    v-bind="props"
                    varient="plain"
                    class="bg-transparent"
                  >
                    <img
                      :width="20"
                      :height="20"
                      src="/assets/menu.png"
                      alt=""
                    />
                  </v-btn>
                </template>
                <v-list class="bg-transparent">
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
              </v-menu>
            </div>
          </div>
          <v-divider class="my-1 mx-4"></v-divider>
          <div class="chat-room px-3 py-2">
            <div
              v-for="(message, index) in chats[selectedContact.name]"
              :key="index"
            >
              <button class="bg-blue message-receiver px-2 py-1 rounded mt-2">
                {{ message }}
              </button>
            </div>
          </div>
          <div class="px-3 py-2">
            <div class="d-flex align-center justify-center">
              <span>
                <i class=""></i>
                <input
                  v-model="newMessage"
                  type="text"
                  placeholder="Message"
                  @keyup.enter="sendMessage"
                />
              </span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Notification from "@/components/Notification.vue";
export default {
  name: "DesktopChat",
  components: { Notification },
  data() {
    return {
      notificationDrawer: false,
      search: "",
      selectedContact: null,
      newMessage: "",
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
      lectures: [
        {
          id: 1,
          avatar: "/assets/Ellipse 3.png",
          name: "Mr. Niruban",
          day: "Today,",
          time: "9.52pm",
        },
        {
          id: 2,
          avatar: "/assets/Ellipse 4.png",
          name: "Mr. Sam",
          day: "Yesterday,",
          time: "12.31pm",
        },
        {
          id: 3,
          avatar: "/assets/Ellipse 5.png",
          name: "Mr. Nirmal",
          day: "Wednesday,",
          time: "9.12am",
        },
      ],
      students: [
        {
          id: 1,
          avatar: "/assets/Ellipse 6.png",
          name: "Anil",
          message: 'April fool"s day ',
          day: "Today",
          time: "9.52pm",
          messageStatus: "/assets/Vector.png",
        },
        {
          id: 2,
          avatar: "/assets/Ellipse 7.png",
          name: "Chuuthiya",
          day: "Today",
          time: "12.11pm",
          messageStatus: "/assets/one.png",
        },
        {
          id: 3,
          avatar: "/assets/Ellipse 8.png",
          name: "Mary",
          message: "You have to report it",
          day: "Today",
          time: "2.40pm",
          messageStatus: "/assets/one.png",
        },
        {
          id: 4,
          avatar: "/assets/Ellipse 9.png",
          name: "Bill Gates",
          message: "Never mind",
          day: "Yesterday",
          time: "12.31pm",
          messageStatus: "/assets/five.png",
        },
        {
          id: 5,
          avatar: "/assets/Ellipse 10.png",
          name: "Victoria H",
          message: 'Okay, brother lets"s see ',
          day: "Wednesday",
          time: "11.12am",
          messageStatus: "/assets/Vector.png",
        },
        {
          id: 6,
          avatar: "/assets/Ellipse 10.png",
          name: "Victoria H",
          message: 'Okay, brother lets"s see ',
          day: "Wednesday",
          time: "11.12am",
          messageStatus: "/assets/Vector.png",
        },
      ],
      chats: {
        "Mr. Niruban": [],
        "Mr. Sam": [],
        "Mr. Nirmal": [],
        Anil: [],
        Chuuthiya: [],
        Mary: [],
        "Bill Gates": [],
        "Victoria H": [],
      },
    };
  },
  methods: {
    selectContact(contact) {
      this.selectedContact = contact;
    },
    sendMessage() {
      if (this.newMessage.trim() && this.selectedContact) {
        this.chats[this.selectedContact.name].push(this.newMessage);
        this.newMessage = "";
      }
    },
    toggleNotifications() {
      this.notificationDrawer = !this.notificationDrawer;
    },
    toggleRail() {
      this.rail = !this.rail;
    },
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title || "Default Title";
    },
  },
};
</script>

<style>
.chat .notification-drawer {
  height: 550px !important;
  border: none !important;
  display: none !important;
}
.chat .v-navigation-drawer__scrim {
  background: transparent !important;
}
.chat .v-navigation-drawer--temporary.v-navigation-drawer--active {
  width: 370px !important;
  box-shadow: none !important;
  position: fixed !important;
  display: block !important;
}
.chat .search-top {
  position: fixed;
}
.chat .v-field__outline {
  border-radius: 50px !important;
  box-shadow: 0 0 3px 1px #a4cbe0;
  border: none !important;
  outline: none !important;
}
.chat .v-field--variant-outlined .v-field__outline__start,
.chat .v-field--variant-outlined .v-field__outline__notch::before,
.chat .v-field--variant-outlined .v-field__outline__notch::after,
.chat .v-field--variant-outlined .v-field__outline__end {
  border: 0 none !important;
}
.chat .v-field--variant-outlined .v-label.v-field-label--floating {
  background: #e8f1f2;
  padding: 10px;
}
.chat .v-field--variant-outlined .v-field__outline__start {
  border-top-left-radius: 50px !important;
  border-bottom-left-radius: 50px !important;
  padding: 20px;
}
.stat span {
  display: block;
  font-size: 13px;
}
.chat .v-card .v-row .cols-2 {
  display: none !important;
}
.wrap .v-row {
  margin: 0px !important;
  cursor: pointer;
  transition: all 0.3s ease;
}
.wrap .v-row.student:hover,
.wrap .v-row.lecturer:hover {
  background: rgba(119, 118, 118, 0.1) !important;
}
.chat .v-card {
  border-radius: 15px !important;
  box-shadow: 0 0 3px 1px #a4cbe0;
}
.wrap .v-col {
  padding: 0 !important;
  padding-left: 14px !important;
}
.message {
  font-size: 13px;
}
.name {
  margin-bottom: -8px !important;
  font-weight: 500;
}
.chat .wrap {
  overflow-y: auto;
  height: 100vh;
  scrollbar-width: none;
  padding-right: 8px;
  padding-left: 8px;
  padding-bottom: 70% !important;
}
.anil-profile h3 {
  margin-bottom: -10px;
}
.anil-profile span {
  font-size: 13px;
}
.request .v-btn--size-default {
  min-width: 0px;
  padding: 0 10px;
}
.message-status.v-row {
  margin-left: -12px !important;
}
.chat-room {
  height: 350px !important;
  overflow-y: auto;
  scrollbar-width: none;
}
.message-receiver {
  position: relative;
  left: 0 !important;
}
.message-receiver::after {
  position: absolute;
  content: "";
  background: #000;
  width: 8px;
  height: 8px;
  padding: 0;
  bottom: -8px;
  right: -10px;
  border-radius: 50%;
}
</style>
