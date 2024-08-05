<template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="dialog"
        max-width="600"
        persistent
      >
        <template v-slot:activator="{ props: activatorProps }">
            <div class="profile px-3 d-flex" v-bind="activatorProps">
            <div><img :width="35" src="/assets/profile 1.png" alt=""></div>
            <div v-if="!rail">
              <span>Hi, Alex</span>
              <br>
              <small class="small">E173037</small>
            </div>
          </div>
        </template>
  
        <v-card class="bg-user rounded user-info">
            <div class="d-flex align-center justify-space-between px-5 py-5">
            <img :width="45" src="/assets/Small Logo.png" alt="">
            </div>
            <div class="text-center" style="position: relative;">
              <img :width="200" src="/assets/user.png" alt="user profile">
              <img :width="166" src="/assets/Ellipse.png" alt="" style="position: absolute; right: 32%; bottom: -1.5px;">
            </div>
            <div class="text-center mt-3">
              <p class="text-h5 mb-1">Alex</p>
              <span class="text-grey">HND in  Computing </span>
              <p class="py-3 px-5 mx-5" style="font-size: 13px;">A kiddo who uses <span class="text-comment"> Bootstrap</span> and <span class="text-comment"> Laravel</span> in web development. Currently playing around with design via Figma</p>
              <div>
                <v-btn flat class="bg-email" style="font-size: 12px;">joeylenerivera@gmail.com</v-btn>
              </div>
              <ul class="d-flex align-center justify-center mt-3">
                <li v-for="social in socials" :key="social.id">
                    <a :href="social.url" target="_blank" class="mx-4">
                    <i :class="social.iconClass"></i>
                    </a>
                </li>
              </ul>
            </div>        
            <template v-slot:actions>
            <v-btn @click="dialog = false" class="mb-5 mr-5 back">
              Back
            </v-btn>
          </template>
          <div>
          <img  src="/assets/Rectangle.png" alt="" class="rectangle">
          </div>
        </v-card>
      </v-dialog>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          dialog: false,
          socials:[
          { iconClass: 'bi bi-twitter', url: 'https://twitter.com' },
          { iconClass: 'bi bi-linkedin', url: 'https://linkedin.com' },
          { iconClass: 'bi bi-github', url: 'https://github.com' },
          { iconClass: 'bi bi-facebook', url: 'https://facebook.com' },
          ]
        }
      },
    }
</script>
<style>
li{
  list-style-type: none;
}
li, a, i{
  color: #A79AE0;
  font-size: 20px !important;
}
.back{
  margin-right: 90px !important;
}
</style>