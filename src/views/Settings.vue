<template>
    <div class="mx-5 px-5 settings main">
        <v-row>
            <v-col col="12" md="5">
                <v-card flat class="bg-purple">
                    <v-row class="mx-2 my-2 bg-red" v-for="setting in settings" :key="setting.id">
                        <v-col cols="8">
                            <p>{{ setting.text }}</p>
                        </v-col>
                        <v-col end>
                            <img :src="setting.backward" alt="">
                        </v-col>
                    </v-row>
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