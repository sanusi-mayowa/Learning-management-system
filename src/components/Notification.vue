<template>
    <v-list>
      <v-list-item v-for="(notification, i) in notifications" :key="i">
        <v-list-item-content>
            hhhhhhhhhhhhhhh
          <v-list-item-title>{{ notification.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ notification.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </template>
  
  <script>
  export default {
    name: 'Notification',
    data() {
      return {
        notifications: [
          { title: 'Notification 1', subtitle: 'This is the first notification.' },
          { title: 'Notification 2', subtitle: 'This is the second notification.' },
          // Add more notifications as needed
        ],
      };
    },
  };
  </script>
  