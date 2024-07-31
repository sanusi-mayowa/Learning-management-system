<template>
    <div class="mx-5 px-5 mt-2 settings main">
        <v-row>
            <v-col col="12" md="5">
                <v-card flat>
                    <div class="d-flex justify-space-between align-center px-2 py-2 mx-2 my-2" v-for="setting in settings" :key="setting.id" style="cursor: pointer;">
                        <div class="d-flex align-center">
                            <img :width="20" :src="setting.icon" alt="">
                            <p class="ml-2">{{ setting.text }}</p>
                        </div>
                        <div>
                            <img :width="10" :src="setting.backward" alt="">
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default{
    name: 'Settings',
    data(){
        return{
            settings:[
                { icon: '/assets/bell.png', text: 'Notifications', backward:'/assets/Backward.png'},
                { icon: '/assets/password.png', text: 'Change Password', backward:'/assets/Backward.png'},
                { icon: '/assets/security.png', text: 'Security', backward:'/assets/Backward.png'},
                { icon: '/assets/friends.png', text: 'Friends', backward:'/assets/Backward.png'},
                { icon: '/assets/home 2.png', text: 'Enable Two Step Verification  ', backward:'/assets/Backward.png'},
                { icon: '/assets/home 2.png', text: 'Display and languages', backward:'/assets/Backward.png'},
                { icon: '/assets/home 2.png', text: 'Help', backward:'/assets/Backward.png'},
            ]
        }
    }
}
</script>

<style>
.menu{
    cursor: pointer;
}
.menu:hover{
    background: #000 !important;
}
</style>