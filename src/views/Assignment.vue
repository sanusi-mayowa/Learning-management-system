<template>
    <div class="mx-5 px-5 courses main">
        <div class="my-5 py-3 px-5 mx-5 nav-tabs-main">
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
      <v-container fluid>
  <!-- Header Row for Larger Screens -->
  <v-row class="d-none d-md-flex assignment-row pb-1">
    <v-col cols="12" md="3" class="py-5">
      <div>Unit</div>
    </v-col>
    <v-col cols="12" md="3" class="py-5">
      <div>Subject</div>
    </v-col>
    <v-col cols="12" md="2" class="py-5">
      <div>Issued Date</div>
    </v-col>
    <v-col cols="12" md="2" class="py-5">
      <div>Deadline</div>
    </v-col>
    <v-col cols="12" md="2" class="py-5">
      <div>Status</div>
    </v-col>
    <v-divider class="d-none d-md-flex"></v-divider>
  </v-row>

  <!-- Assignment Rows -->
  <v-row v-for="assignment in assignment1" :key="assignment.id" class=" pt-3">
    <v-col cols="12" md="3" class="py-5">
      <!-- Header for Smaller Screens -->
      <div class="d-flex d-md-none assignment-row"><div>Unit</div></div>
      <div>{{ assignment.unit }}</div>
    </v-col>
    <v-col cols="12" md="3" class="py-5">
      <!-- Header for Smaller Screens -->
      <div class="d-flex d-md-none assignment-row"><div>Subject</div></div>
      <div>{{ assignment.subject }}</div>
    </v-col>
    <v-col cols="12" md="2" class="py-5">
      <!-- Header for Smaller Screens -->
      <div class="d-flex d-md-none assignment-row"><div>Issued Date</div></div>
      <div>{{ assignment.issues_date }}</div>
    </v-col>
    <v-col cols="12" md="2" class="py-5">
      <!-- Header for Smaller Screens -->
      <div class="d-flex d-md-none assignment-row"><div>Deadline</div></div>
      <div>{{ assignment.deadline }}</div>
    </v-col>
    <v-col cols="12" md="2" class="py-5">
      <!-- Header for Smaller Screens -->
      <div class="d-flex d-md-none assignment-row"><div>Status</div></div>
      <div>
        <v-chip :class="assignment.status">{{ assignment.status }}</v-chip>
      </div>
    </v-col>
    <v-divider></v-divider>
  </v-row>
</v-container>

      </v-tabs-window-item>














<!-- 
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
      </v-tabs-window-item> -->
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
          assignment1: [
            { unit: '03', subject: 'CRP', issues_date: '03/02/2023', deadline: '03/05/2023', status: 'Submitted'},
            { unit: '01', subject: 'Programming', issues_date: '03/09/2023', deadline: '03/09/2025', status: 'Pending'},
            { unit: '01', subject: 'Database', issues_date: '03/02/2024', deadline: '03/10/2026', status: 'Pending'},
            { unit: '01', subject: 'Networking', issues_date: '02/05/2022', deadline: '03/11/2023', status: 'Pending'},
            { unit: '02', subject: 'Security', issues_date: '02/08/2022', deadline: '03/10/2023', status: 'Late Submission'},
          ],
          assignment2: [
            { unit: '03', subject: 'CRP', issues_date: '03/02/2023', deadline: '03/05/2023', status: 'Submitted'},
            { unit: '01', subject: 'Programming', issues_date: '03/09/2023', deadline: '03/09/2025', status: 'Pending'},
            { unit: '01', subject: 'Database', issues_date: '03/02/2024', deadline: '03/10/2026', status: 'Pending'},
            { unit: '01', subject: 'Networking', issues_date: '02/05/2022', deadline: '03/11/2023', status: 'Pending'},
            { unit: '02', subject: 'Security', issues_date: '02/08/2022', deadline: '03/10/2023', status: 'Late Submission'},
          ],
          assignment3: [
            { unit: '03', subject: 'CRP', issues_date: '03/02/2023', deadline: '03/05/2023', status: 'Submitted'},
            { unit: '01', subject: 'Programming', issues_date: '03/09/2023', deadline: '03/09/2025', status: 'Pending'},
            { unit: '01', subject: 'Database', issues_date: '03/02/2024', deadline: '03/10/2026', status: 'Pending'},
            { unit: '01', subject: 'Networking', issues_date: '02/05/2022', deadline: '03/11/2023', status: 'Pending'},
            { unit: '02', subject: 'Security', issues_date: '02/08/2022', deadline: '03/10/2023', status: 'Late Submission'},
          ],
          assignment4: [
            { unit: '03', subject: 'CRP', issues_date: '03/02/2023', deadline: '03/05/2023', status: 'Submitted'},
            { unit: '01', subject: 'Programming', issues_date: '03/09/2023', deadline: '03/09/2025', status: 'Pending'},
            { unit: '01', subject: 'Database', issues_date: '03/02/2024', deadline: '03/10/2026', status: 'Pending'},
            { unit: '01', subject: 'Networking', issues_date: '02/05/2022', deadline: '03/11/2023', status: 'Pending'},
            { unit: '02', subject: 'Security', issues_date: '02/08/2022', deadline: '03/10/2023', status: 'Late Submission'},
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

