<template>
    <div class="mx-5 px-5 mt-2 forum main">
        <v-row flat>
            <v-col cols="12" md="4">
                <ForumSideOne />
            </v-col>
            <v-col cols="12" md="8">
                <ForumSideTwo />
            </v-col>
        </v-row>

    </div>
</template>
<script>
import ForumSideOne from '@/components/ForumSideOne.vue';
import ForumSideTwo from '@/components/ForumSideTwo.vue';
export default{
    name: 'Forum',
    components: { ForumSideOne, ForumSideTwo },
    data(){
        return{

        }
    }
}
</script>