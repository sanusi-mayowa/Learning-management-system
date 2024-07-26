<template>
    <div class="mx-5 px-5 courses main">
        <v-row class="mt-2 ml-5">
            <v-col cols="12" md="4" class="mr-" v-for="diploma in diplomas" :key="diploma.id">
                <v-card class="bg-diploma flat d-flex align-center px-5 py-5 diploma-round">
               <div>
                <img :src="diploma.avatar" class="diploma-img">
               </div>
               <div class="ml-2">
                <span class="diploma-text-span course">{{ diploma.text }}</span>
                <small class="text-center small text-uppercase d-block">{{ diploma.text2 }}</small>
               </div>
            </v-card>
            </v-col>
        </v-row>
        
    </div>
    
</template>

<script>
export default{
    name: 'Courses',
    data(){
        return{
            diplomas: [
            { avatar: '/src/assets/icons8-assignment-50 1.png', text: 'Diploma in English', text2: 'oxf/eng/01' },
            { avatar: '/src/assets/icons8-assignment-50 1.png', text: 'Diploma in IT', text2: 'oxf/dit/01'},
            { avatar: '/src/assets/icons8-assignment-50 1.png', text: 'Diploma in Computing', text2: 'oxf/hnd/01' },
          ],
        }
    }
}
</script>