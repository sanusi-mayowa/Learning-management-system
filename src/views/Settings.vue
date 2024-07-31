<template>
    <div class="mx-5 px-5 settings main">
        <v-row>
            <v-col col="12" md="5">
                <v-card flat class="bg-purple">
                    <div class="d-flex justify-space-between mx-2 my-2 bg-red" v-for="setting in settings" :key="setting.id">
                        <div cols="10">
                            <p>{{ setting.text }}</p>
                        </div>
                        <div cols="2" end>
                            <img :src="setting.backward" alt="">
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
                { icon: '/assets/home 2.png', text: 'Notifications', backward:'/assets/Backward.png'},
                { icon: '/assets/home 2.png', text: 'Notifications', backward:'/assets/Backward.png'},
                { icon: '/assets/home 2.png', text: 'Notifications', backward:'/assets/Backward.png'},
                { icon: '/assets/home 2.png', text: 'Notifications', backward:'/assets/Backward.png'},
                { icon: '/assets/home 2.png', text: 'Notifications', backward:'/assets/Backward.png'},
                { icon: '/assets/home 2.png', text: 'Notifications', backward:'/assets/Backward.png'},
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