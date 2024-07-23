<template class="bg-red">
    <div class="text-center pa-4">
      <v-dialog
        v-model="dialog"
        max-width="600"
        persistent
      >
        <template v-slot:activator="{ props: activatorProps }">
            <div class="profile px-3 d-none d-sm-flex" v-bind="activatorProps">
            <div><img :width="35" src="/src/assets/profile 1.png" alt=""></div>
            <div v-if="!rail">
              <span>Hi, Alex</span>
              <br>
              <small class="small">E173037</small>
            </div>
          </div>
          <div class="px-3 d-sm-none" v-bind="activatorProps">
            <div><img :width="35" src="/src/assets/profile 1.png" alt=""></div>
          </div>
        </template>
  
        <v-card class="bg-btn">
            <v-btn>
            img
            </v-btn>
          <template v-slot:actions>
            <v-btn @click="dialog = false">
              Agree
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
