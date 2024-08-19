<template>
    <div class="mx-5 my-3 timetable main">
            <v-tabs v-model="tab" class="mx-5 time">
            <v-tab :value="1" class="bg-btn rounded live">live class</v-tab>
            <v-tab :value="2" class="bg-btn rounded text-uppercase">recorded class</v-tab>
        </v-tabs>
        <div class="mx-5 mt-5">
    <v-card flat class="mt-5 px-4 py-2 bg-table d-none d-md-flex">
        <v-row class="d-none d-md-flex">
    <v-col cols="12" md="3" class="checkbox">
        <div class="mt-1 mr-1"><img :width="15" src="/assets/Checkbox.png" alt=""></div>
      <div class="text-grey">Lecturer Name</div>
    </v-col>
    <v-col cols="12" md="3">
      <div class="text-grey">Subject</div>
    </v-col>
    <v-col cols="12" md="2">
      <div class="text-grey">Start Time</div>
    </v-col>
    <v-col cols="12" md="2">
      <div class="text-grey">End Time</div>
    </v-col>
    <v-col cols="12" md="2">
      <div class="text-grey">Date</div>
    </v-col>
  </v-row>
    </v-card>
    </div>
    <div class="mt-2">
        <v-card  flat class="mx-5">
    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
      <v-container fluid>
        <LiveClass />
        <!-- live class -->
      </v-container>
</v-tabs-window-item>


<v-tabs-window-item :value="2">
      <v-container fluid>
        <RecordedClass  />
      </v-container>
      <!-- recorded class -->
</v-tabs-window-item>

    </v-tabs-window>
  </v-card>
  
</div>
</div>
</template>

<script>
import LiveClass from '@/components/LiveClass.vue';
import RecordedClass from '@/components/RecordedClass.vue';
export default{
    name: 'Courses',
    data(){
        return{
           components: { LiveClass, RecordedClass },
          tab: null,
         
        }
    }
}
</script>
<style>
.v-slide-group__content{
    justify-content: space-between !important;
    display: flex !important;
}
.time.v-tabs--density-default {
    --v-tabs-height: 70px;
}
.time .v-tab__slider {
    display: none;
}
.time.v-tab{
    padding-left: 20px;
    padding-right: 20px;
}
.live.v-tab{
    padding-left: 30px;
    padding-right: 40px;
}
.checkbox{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>