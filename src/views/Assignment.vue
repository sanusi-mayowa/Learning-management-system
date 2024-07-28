<template>
    <div class="mx-5 px-5 courses main">
        <div class="mt-5 pt-5 px-5 mx-5 nav-tabs-main">
            <v-tabs
            v-model="tab"
            color="amber-accent-4"
            class="bg-btn mt-5 nav-tabs px-4 mb-5"
            grow
            >
            <v-tab :value="1">Semester 01</v-tab>
            <v-tab :value="2">Semester 02</v-tab>
            <v-tab :value="3">Semester 03</v-tab>
            <v-tab :value="4">Semester 04</v-tab>
        </v-tabs>
    </div>
    <div class="px-5 nav-tabs-child">
        <v-card class="mx-5 nav-tabs-child" flat>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        :value="1"
      >
        <v-container fluid v-for="semester in semesters1" :key="semester" :class="`${semester.status}`" >
          <v-row>
            <v-col cols="12" md="3" class="module py-5">
                <div>{{semester.module}}</div>
            </v-col>
            <v-col cols="12" md="3" class="py-5">
                <div>{{ semester.course }}</div>
            </v-col>
            <v-col cols="12" md="3" class="py-5 unit">
                <div>{{ semester.unit }}</div>
            </v-col>
            <v-col class="status py-5" cols="12" md="3">
                <div>
                    <v-chip :class="`${semester.status}`">{{semester.status}}</v-chip>
                </div>
            </v-col>
            <v-divider></v-divider>
          </v-row>
        </v-container>
      </v-tabs-window-item>

      <v-tabs-window-item
      :value="2">
      <v-container fluid v-for="semester in semesters2" :key="semester" :class="`${semester.status}`">
          <v-row>
            <v-col cols="12" md="3" class="module py-5">
                <div>{{semester.module}}</div>
            </v-col>
            <v-col cols="12" md="3" class="py-5">
                <div>{{ semester.course }}</div>
            </v-col>
            <v-col cols="12" md="3" class="py-5 unit">
                <div>{{ semester.unit }}</div>
            </v-col>
            <v-col class="status py-5" cols="12" md="3">
                <div>
                    <v-chip :class="`${semester.status}`">{{semester.status}}</v-chip>
                </div>
            </v-col>
            <v-divider></v-divider>
          </v-row>
        </v-container>
      </v-tabs-window-item>

      <v-tabs-window-item
      :value="3">
      <v-container fluid v-for="semester in semesters3" :key="semester" :class="`${semester.status}`">
          <v-row>
            <v-col cols="12" md="3" class="module py-5">
                <div>{{semester.module}}</div>
            </v-col>
            <v-col cols="12" md="3" class="py-5">
                <div>{{ semester.course }}</div>
            </v-col>
            <v-col cols="12" md="3" class="py-5 unit">
                <div>{{ semester.unit }}</div>
            </v-col>
            <v-col class="status py-5" cols="12" md="3">
                <div>
                    <v-chip :class="`${semester.status}`">{{semester.status}}</v-chip>
                </div>
            </v-col>
            <v-divider ></v-divider>
          </v-row>
        </v-container>
      </v-tabs-window-item>

      <v-tabs-window-item
      :value="4">
      <v-container fluid v-for="semester in semesters4" :key="semester" :class="`${semester.status}`">
          <v-row>
            <v-col cols="12" md="3" class="module py-5">
                <div>{{semester.module}}</div>
            </v-col>
            <v-col cols="12" md="3" class="py-5">
                <div>{{ semester.course }}</div>
            </v-col>
            <v-col cols="12" md="3" class="py-5 unit">
                <div>{{ semester.unit }}</div>
            </v-col>
            <v-col class="status py-5" cols="12" md="3">
                <div>
                    <v-chip :class="`${semester.status}`">{{semester.status}}</v-chip>
                </div>
            </v-col>
            <v-divider></v-divider>
          </v-row>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
  
</div>
</div>    
</template>

<script>
export default{
    name: 'Courses',
    data(){
        return{
            diplomas: [
            { avatar: '/assets/icons8-assignment-50 1.png', text: 'Diploma in English', text2: 'oxf/eng/01' },
            { avatar: '/assets/icons8-assignment-50 1.png', text: 'Diploma in IT', text2: 'oxf/dit/01'},
            { avatar: '/assets/icons8-assignment-50 1.png', text: 'Diploma in Computing', text2: 'oxf/hnd/01' },
          ],
          tab: null,
          semesters1: [
            { module: 'Module 01', course: 'Programming', unit: 'Unit 1', status: 'Completed'},
            { module: 'Module 02', course: 'Networking', unit: 'Unit 1', status: 'Ongoing'},
            { module: 'Module 03', course: 'Database', unit: 'Unit 1', status: 'Pending'},
            { module: 'Module 04', course: 'Professional Practice', unit: 'Unit 1', status: 'Pending'},
          ],
          semesters2: [
            { module: 'Module 05', course: 'Programming', unit: 'Unit 2', status: 'Completed'},
            { module: 'Module 06', course: 'Networking', unit: 'Unit 2', status: 'Ongoing'},
            { module: 'Module 07', course: 'Database', unit: 'Unit 2', status: 'Pending'},
            { module: 'Module 08', course: 'Professional Practice', unit: 'Unit 2', status: 'Pending'},
          ],
          semesters3: [
            { module: 'Module 09', course: 'Programming', unit: 'Unit 3', status: 'Completed'},
            { module: 'Module 10', course: 'Networking', unit: 'Unit 3', status: 'Ongoing'},
            { module: 'Module 11', course: 'Database', unit: 'Unit 3', status: 'Pending'},
            { module: 'Module 12', course: 'Professional Practice', unit: 'Unit 3', status: 'Pending'},
          ],
          semesters4: [
            { module: 'Module 13', course: 'Programming', unit: 'Unit 4', status: 'Completed'},
            { module: 'Module 14', course: 'Networking', unit: 'Unit 4', status: 'Ongoing'},
            { module: 'Module 15', course: 'Database', unit: 'Unit 4', status: 'Pending'},
            { module: 'Module 16', course: 'Professional Practice', unit: 'Unit 4', status: 'Pending'},
          ],
        }
    }
}
</script>
<style>
@media screen and (max-width: 600px) {
.px-5{
    padding-right: 10px !important;
    padding-left: 10px !important;
}
.mx-5{
    margin-right: 10px !important;
    margin-left: 10px !important;
}
.v-row.ml-5{
    margin-left: -10px !important;
}
.nav-tabs-main.mx-5{
    margin-left: -8px !important;
    margin-right: -5px !important;
}
.nav-tabs-child.mx-5{
    margin-left: -10px !important;
    margin-right: -10px !important;
}
}
</style>

