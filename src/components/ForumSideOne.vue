<template>
    <v-text-field 
     v-model="email" 
     :rules="emailRules" 
     variant="outlined" 
     prepend-inner-icon="bi bi-search"
     label="Search" 
     class="rounded-xl text-grey"
    ></v-text-field>
</template>
<script>
export default{
    name: 'ForumSideOne'
}
</script>
<style scoped>
.v-field {
    border-radius: 40px !important;
}
.bi-search{
    font-size: 8px !important;
}
</style>