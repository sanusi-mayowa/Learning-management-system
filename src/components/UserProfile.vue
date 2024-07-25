<template class="bg-red">
    <div class="text-center pa-4">
      <v-dialog
        v-model="dialog"
        max-width="600"
        persistent
      >
        <template v-slot:activator="{ props: activatorProps }">
            <div class="profile px-3 d-flex" v-bind="activatorProps">
            <div><img :width="35" src="/src/assets/profile 1.png" alt=""></div>
            <div v-if="!rail">
              <span>Hi, Alex</span>
              <br>
              <small class="small">E173037</small>
            </div>
          </div>
        </template>
  
        <v-card class="bg-btn rounded">
            <div class="d-flex align-center justify-space-between px-5 py-3">
            <img :width="45" src="/src/assets/Small Logo.png" alt="">
            </div>
            <template class="text-center">
            <img src="/src/assets/28ee4eaeabfe7f9b568b4c73297e14f0.jpeg" alt="">
            </template>
          <template v-slot:actions>
            <v-btn @click="dialog = false">
              Back
            </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          dialog: false,
        }
      },
    }
</script>
<style>

</style>
