<template>
  <div class="pt-5 top-notification-main">
    <div class="top bg-notification">
    <h2 class="text-center">Notifications</h2>
    </div>
    <div class="ml-1 px-1 mr-2 py-2 mt-5 d-flex row"
    v-for="notification in notifications"
    :key="notification.id"
    >
      <div class="img mr-2">
        <img :width="50" :src="notification.avatar" alt="">
      </div>
     <div>
      <p style="font-size: 13px">{{ notification.message }}</p>
      <span class="text-grey">{{ notification.time }}</span>
     </div>
    </div>
  </div>
</template>
  
<script>
export default {
    name: 'Notification',
    data() {
      return {
        notifications: [
          {avatar: '/assets/person1.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '1m Ago' },
          {avatar: '/assets/person2.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '2 weeks Ago' },
          {avatar: '/assets/person3.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '4 weeks Ago' },
          {avatar: '/assets/person4.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '5 month Ago' },
          {avatar: '/assets/person5.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '1 yr Ago' },
          {avatar: '/assets/person4.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '2 yrs Ago' },
          {avatar: '/assets/person1.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '3 yrs Ago' },
          {avatar: '/assets/person2.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '4 yrs Ago' },
          {avatar: '/assets/person5.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '5 yrs Ago' },
          {avatar: '/assets/person3.png', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', time: '6 yrs Ago' },
          
        ],
      };
    },
  };
</script>
<style scoped>
h2.text-center{
  font-size: 18px !important;
  font-weight: 500 !important;
}
.top{
  position: fixed;
  width: 100%;
}
div.row{
  cursor: pointer;
  border-radius: 10px !important;
}
div.row:hover{
  background: rgba(255, 255, 255, 0.5);
}
span.text-grey{
  font-size: 13px !important;
}
</style>  