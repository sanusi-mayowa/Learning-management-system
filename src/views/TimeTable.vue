<template>
    <div class="mx-5 my-3 assignment main">
            <v-tabs v-model="tab" class="mx-5 assignment">
            <v-tab :value="1" class="bg-btn rounded live">live class</v-tab>
            <v-tab :value="2" class="bg-btn rounded text-uppercase">recorded class</v-tab>
        </v-tabs>
    <v-card flat class="mx-5 mt-5 py-2 bg-table pl-3">
        <v-row class="d-none d-md-flex assignment-row">
    <v-col cols="12" md="3" class="checkbox">
        <div class="mt-1"><img :width="18" src="/public/assets/Checkbox.png" alt=""></div>
      <div>Lecture Name</div>
    </v-col>
    <v-col cols="12" md="3">
      <div>Subject</div>
    </v-col>
    <v-col cols="12" md="2">
      <div>Start Time</div>
    </v-col>
    <v-col cols="12" md="2">
      <div>End Time</div>
    </v-col>
    <v-col cols="12" md="2">
      <div>Date</div>
    </v-col>
  </v-row>
    </v-card>
    <div class="nav-tabs-child pt-1 px-5">
        <v-card class="nav-tabs-child" flat>
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
.assignment.v-tabs--density-default {
    --v-tabs-height: 70px;
}
.assignment .v-tab__slider {
    display: none;
}
.assignment.v-tab{
    padding-left: 20px;
    padding-right: 20px;
}
.live.v-tab{
    padding-left: 40px;
    padding-right: 40px;
}
.checkbox{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>