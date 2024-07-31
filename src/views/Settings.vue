<template>
    <div class="mx-5 px-5 mt-2 settings main">
        <v-row>
            <v-col col="12" md="5">
                <v-card flat>
                    <div class="d-flex justify-space-between align-center px-2 py-2 mx-2 my-2" v-for="setting in settings" :key="setting.id">
                        <div>
                            <p>{{ setting.text }}</p>
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