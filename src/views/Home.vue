<template>
    <div class="mx-5 mt-5 px-5 home">
        <span class="text-btn text-subtitle-2  font-weight-bold">Welcome Back, Alex</span>
        <div class="mt-3">
            <img class="banner" src="/src/assets/banner1 1.png" alt="">
        </div>
        <v-row class="mt-2">
            <v-col cols="12" md="3" class="mr-5" v-for="diploma in diplomas" :key="diploma.id">
                <v-card class="bg-diploma flat d-flex align-center px-5 py-5 diploma-round">
               <div>
                <img :src="diploma.avatar" class="diploma-img">
               </div>
               <div class="ml-2">
                <span class="diploma-text-span">{{ diploma.text }}</span>
                <small class="text-center small text-uppercase d-block">{{ diploma.text2 }}</small>
               </div>
            </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-2">
            <v-col cols="12" md="6" v-for="progress in progresses" :key="progress.id">
                <v-card class="bg-btn flat d-flex justify-space-between align-center px-3 py-3 diploma-round">
                    <div>{{progress.text}}</div>
                    <div>{{ progress.status }}</div>
            </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default{
    name: 'Home',
    data(){
        return{
            diplomas: [
            { avatar: '/src/assets/icons8-assignment-50 1.png', text: 'Diploma in English', text2: 'oxf/eng/01' },
            { avatar: '/src/assets/icons8-assignment-50 1.png', text: 'Diploma in IT', text2: 'oxf/dit/01'},
            { avatar: '/src/assets/icons8-assignment-50 1.png', text: 'Diploma in Computing', text2: 'oxf/hnd/01' },
          ],
          progresses :[
            { text: 'Module Progress :', status: '90%'},
            { text: 'Assignment Progress :', status: '10%'},
            { text: 'Attendance Progress :', status: '97%'},
            { text: 'Course Progress :', status: '50%'},
          ],
        }
    }
}
</script>