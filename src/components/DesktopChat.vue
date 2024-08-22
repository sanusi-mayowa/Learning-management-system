<template>
    <div class="px-5 chat">
      <v-row>
        <!-- Sidebar for contacts -->
        <v-col cols="3" class="sidebar">
            <v-text-field 
                  v-model="search"  
                  variant="outlined" 
                  prepend-inner-icon="bi bi-search" 
                  class="rounded-lg text-grey"
                  label="search"
                ></v-text-field>
                <div>
                    <v-card class="">
                        <v-row class="px-3"
                        v-for="lecture in lectures" :key="lecture.id">
                            <v-col cols="2" class="bg-yellow">
                                <img :width="35" :src="lecture.avatar" class="mt-2">
                            </v-col>
                            <v-col cols="6" class="bg-green">
                                <p class="text-black mt-3">{{ lecture.name }}</p>
                            </v-col>
                            <v-col cols="4" class="stat bg-red">
                                <span class="text-grey">{{ lecture.day }}</span>
                                <span class="text-grey">{{ lecture.time }}</span>
                            </v-col>
                            <v-divider></v-divider>
                        </v-row>
                    </v-card>
                </div>
        </v-col>
        <!-- Chat window -->
        <v-col cols="9" class="chat-window">
        
        </v-col>
      </v-row>
    </div>  
</template>
  
<script>
export default {
    name: 'DesktopChat',
    data(){
        return{
            lectures:[
                { avatar: '/assets/person1.png', name: 'Mr. Niruban', day: 'Today,', time: '9.52pm'},
                { avatar: '/assets/person1.png', name: 'Mr. Sam', day: 'Yesterday,', time: '12.31pm',},
                { avatar: '/assets/person1.png', name: 'Mr. Nirmal', day: 'Wednesday,', time: '9.12am'},
            ]
        }
    }
}      
</script>
<style>
.chat .v-field__outline{
    border-radius: 50px !important;
    box-shadow: 0px 1px 1px 1px red;
}
.chat .v-field--variant-outlined .v-field__outline__start {
    border-top-left-radius: 50px !important;
    border-bottom-left-radius: 50px !important;
    padding: 20px;
}
.stat span{
    display: block;
    font-size: 14px;
}
.chat .v-card .v-row .cols-2{
    display: none !important;
}
</style>