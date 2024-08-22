<template>
    <div class="px-5 ml-2 chat">
      <v-row>
        <!-- Sidebar for contacts -->
        <v-col cols="4">
            <div class="search-top">
            <v-text-field 
                  v-model="search"  
                  variant="outlined" 
                  prepend-inner-icon="bi bi-search" 
                  class="rounded-lg text-grey"
                  label="search"
                ></v-text-field>
                <div class="wrap">
                <div class="mt-1">
                    <v-card class="" flat>
                    <h3 class="ml-4 mt-1 text-black">Lectures </h3>
                        <v-row
                        v-for="lecture in lectures" :key="lecture.id">
                            <v-col cols="2">
                                <img :width="35" :src="lecture.avatar" class="mt-2">
                            </v-col>
                            <v-col cols="6">
                                <p class="text-black mt-3">{{ lecture.name }}</p>
                            </v-col>
                            <v-col cols="4" class="stat">
                                <span class="text-grey mt-1">{{ lecture.day }}</span>
                                <span class="text-grey">{{ lecture.time }}</span>
                            </v-col>
                            <v-divider class="mx-3"></v-divider>
                        </v-row>
                    </v-card>
                </div>
                <div class="mt-3">
                    <v-card class="" flat>
                    <h3 class="ml-4 mt-1 text-black">Students </h3>
                        <v-row
                        v-for="student in students" :key="student.id">
                            <v-col cols="2">
                                <img :width="35" :src="student.avatar" class="mt-1">
                            </v-col>
                            <v-col cols="6">
                                <p class="text-black name mt-1">{{ student.name }}</p>
                                <span class="text-grey message">{{ student.message }}</span>
                            </v-col>
                            <v-col cols="4" class="stat">  
                                <span class="text-grey">{{ student.day }}</span>
                                <div class="d-flex">
                                <div><span class="text-grey">{{ student.time }}</span></div>
                                <div class="ml-2">
                                    <img class="" :width="15" :src="student.messageStatus" alt="">
                                </div>
                                </div>
                            </v-col>
                            <v-divider class="mx-3"></v-divider>
                        </v-row>
                    </v-card>
                </div>
                </div>
                </div>
        </v-col>
        <!-- Chat window -->
        <v-col cols="8" class="chat-window">
        side 2
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
                { avatar: '/assets/Ellipse 3.png', name: 'Mr. Niruban', day: 'Today,', time: '9.52pm'},
                { avatar: '/assets/Ellipse 4.png', name: 'Mr. Sam', day: 'Yesterday,', time: '12.31pm',},
                { avatar: '/assets/Ellipse 5.png', name: 'Mr. Nirmal', day: 'Wednesday,', time: '9.12am'},
            ],
            students:[
                { avatar: '/assets/Ellipse 6.png', name: 'Anil', message: 'April fool"s day ', day: 'Today', time: '9.52pm', messageStatus: '/assets/Vector.png'},
                { avatar: '/assets/Ellipse 7.png', name: 'Chuuthiya', day: 'Today', time: '12.11pm', messageStatus: '/assets/one.png'},
                { avatar: '/assets/Ellipse 8.png', name: 'Mary', message: 'You have to report it', day: 'Today', time: '2.40pm', messageStatus: '/assets/one.png'},
                { avatar: '/assets/Ellipse 9.png', name: 'Bill Gates', message: 'Never mind', day: 'Yesterday', time: '12.31pm', messageStatus: '/assets/five.png'},
                { avatar: '/assets/Ellipse 10.png', name: 'Victoria H', message: 'Okay, brother lets"s see ', day: 'Wednesday', time: '11.12am', messageStatus: '/assets/Vector.png'},
                { avatar: '/assets/Ellipse 6.png', name: 'Anil', message: 'April fool"s day ', day: 'Today', time: '9.52pm', messageStatus: '/assets/Vector.png'},
                { avatar: '/assets/Ellipse 7.png', name: 'Chuuthiya', day: 'Today', time: '12.11pm', messageStatus: '/assets/one.png'},
                { avatar: '/assets/Ellipse 8.png', name: 'Mary', message: 'You have to report it', day: 'Today', time: '2.40pm', messageStatus: '/assets/one.png'},
                { avatar: '/assets/Ellipse 9.png', name: 'Bill Gates', message: 'Never mind', day: 'Yesterday', time: '12.31pm', messageStatus: '/assets/five.png'},
                { avatar: '/assets/Ellipse 10.png', name: 'Victoria H', message: 'Okay, brother lets"s see ', day: 'Wednesday', time: '11.12am', messageStatus: '/assets/Vector.png'},
                
            ],
        }
    }
}      
</script>
<style>
.chat .search-top{
    position: fixed;
}
.chat .v-field__outline{
    border-radius: 50px !important;
    box-shadow: 0 0 4px 1px
    #79C5EF;
}
.chat .v-field--variant-outlined .v-field__outline__start {
    border-top-left-radius: 50px !important;
    border-bottom-left-radius: 50px !important;
    padding: 20px;
}
.stat span{
    display: block;
    font-size: 13px;
}
.chat .v-card .v-row .cols-2{
    display: none !important;
}
.wrap .v-row{
    margin: 0px !important;
    cursor: pointer;
    transition: all .3s ease;
}
.wrap .v-row:hover{
    background: rgba(119, 118, 118, 0.1) !important;
}
.chat .v-card{
    border-radius: 15px !important;
    box-shadow: 0 0 4px 1px
    #79C5EF;
}
.wrap .v-col{
    padding: 0 !important;
    padding-left: 14px !important;
}
.message{
    font-size: 13px;
}
.name{
    margin-bottom: -8px !important;
    font-weight: 500;
}
.chat .wrap{
    overflow-y: auto;
    height: 100vh;
    scrollbar-width: none;
    padding-right: 8px;
    padding-left: 8px;
    padding-bottom: 70% !important;
}
</style>