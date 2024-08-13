<template>
   <v-row v-for="liveclass in classes" :key="liveclass.id" class="d-flex align-center">
    <v-col cols="12" md="3">
      <div class="d-flex d-md-none text-grey"><div>Lecture Name</div></div>
      <div class="d-flex align-center">
        <div class="d-none d-md-block mr-2">
            <img :width="15" :src="liveclass.checkbox" alt="">
        </div>
        <div class="d-flex align-center">
            <div class="mr-2 mt-1"><img :width="35" :src="liveclass.avatar" alt=""></div>
            <div>
                <div class="d-flex align-center lecture">
                <p class="name text-grey">{{ liveclass.name }}</p>
                <img :width="15" :height="10" :src="liveclass.flag" alt="">
                </div>
                <p class="name text-grey">{{liveclass.email}}</p>
            </div>
        </div>
      </div>
    </v-col>
    <v-col cols="12" md="3">
      <div class="d-flex d-md-none text-grey"><div>Subject</div></div>
      <div>{{liveclass.subject  }}</div>
    </v-col>
    <v-col cols="12" md="2">
        <div class="d-flex d-md-none text-grey"><div>Start Time</div></div>
      <div>{{liveclass.startTime }}</div>
    </v-col>
    <v-col cols="12" md="2">
        <div class="d-flex d-md-none text-grey"><div>End  Time</div></div>
      <div>{{liveclass.endTime }}</div>
    </v-col>
    <v-col cols="12" md="2">
        <div class="d-flex d-md-none text-grey"><div>Date</div></div>
      <div>{{liveclass.date }}</div>
    </v-col>
    <v-divider></v-divider>
</v-row>
</template>
<script>
export default{
    name: 'LiveClass',
    data(){
        return{
            classes: [
            { name: 'John', email: 'john@gmail.com', checkbox: '/assets/Checkbox.png', flag: '/assets/image 17.png', avatar:'/assets/Frame 35291.png', subject: 'English', startTime: '9.00',endTime: '1.00', date: '20.10.2023' },
            { name: 'Doe', email: 'doe@gmail.com', checkbox: '/assets/Checkbox.png', flag: '/assets/image 17.png', avatar:'/assets/Frame 35291.png', subject: 'Programming', startTime: '9.00',endTime: '1.00', date: '21.10.2023' },
            { name: 'Sam', email: 'sam@gmail.com', checkbox: '/assets/Checkbox.png', flag: '/assets/image 17.png', avatar:'/assets/Frame 35291.png', subject: 'Database', startTime: '9.00',endTime: '1.00', date: '22.10.2023' },
            { name: 'Kumar', email: 'kumar@gmail.com', checkbox: '/assets/Checkbox.png', flag: '/assets/image 17.png', avatar:'/assets/Frame 35291.png', subject: 'Networking', startTime: '9.00',endTime: '1.00', date: '23.10.2023' },
            { name: 'Sanjay', email: 'sanjay@gmail.com', checkbox: '/assets/Checkbox.png', flag: '/assets/image 17.png', avatar:'/assets/Frame 35291.png', subject: 'Security', startTime: '9.00',endTime: '1.00', date: '24.10.2023' },            
          ],
        }
    }
}
</script>
<style scoped>
.lecture{
    gap: 20px;
}    
.name{
    font-size: 13px !important;
}
</style>