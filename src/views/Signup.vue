<template>
  <section class="bg-primary" style="width: 100%;">
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="7" md="5" lg="5" class="bg-white rounded-lg mt-5">
        <v-card class="form-center" flat>
          <v-card-text>
            <div class="d-flex justify-center">
              <div>
                <v-img :width="150" src="/assets/logo2.png" contain class="pb-5 ml-5"></v-img>
                <div class="text-label text-dark text-center pt-3">Signup in Your Account</div>
              </div>
            </div>
            <v-form ref="form" class="mt-2 form px-5" @submit.prevent="submitForm">
              <div>
                <div class="text-label text-dark">Username</div>
                <v-text-field 
                  v-model="name" 
                  :rules="nameRules" 
                  variant="outlined" 
                  prepend-inner-icon="bi bi-person" 
                  class="rounded-lg text-grey"
                ></v-text-field>
              </div>
              <div>
                <div class="text-label text-dark">Email</div>
                <v-text-field 
                  v-model="email" 
                  :rules="emailRules" 
                  variant="outlined" 
                  prepend-inner-icon="bi bi-envelope" 
                  class="rounded-lg text-grey"
                ></v-text-field>
              </div>
              <div>
                <div class="text-label text-dark" >Password</div>
                <v-text-field 
                  v-model="password" 
                  :rules="passwordRules" 
                  variant="outlined" 
                  prepend-inner-icon="bi bi-lock" 
                  class="rounded-lg text-grey"
                  :append-inner-icon="visible ? 'bi bi-eye' : 'bi bi-eye-slash'"
                  :type="visible ? 'text' : 'password'"
                  @click:append-inner="visible = !visible"
                ></v-text-field>
              </div>
              <v-btn block class="bg-btn" @click="submitForm" flat
              >Sign Up</v-btn>
            </v-form>
            <div class="px-5 mt-5"
            >Already have an account 
            <span class="text-link">
            <router-link to="/"
             class="textblack"
             >sign in</router-link>
            </span></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </section>
</template>
<script>  
import { ref } from 'vue';
import { register} from '../auth';
import { useRouter } from 'vue-router';

export default {  
  name: 'Signup',  
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const visible = ref('false');

    const nameRules = [
      v => !!v || 'Name is required',
      v => (v && v.length <= 7) || 'Name must be less than or equal to 7 characters',
    ];

    const emailRules = [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid',
    ];

    const passwordRules = [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be at least 6 characters',
    ];
  const router = useRouter();
    const submitForm = async () => {
      try {
        await register(email.value, password.value);
        router.push('/')
      } catch (error) {
        
      } finally {

      }
    };
    return {
      name,
      email,
      password,
      visible,
      nameRules,
      emailRules,
      passwordRules,
      submitForm
    };
  }
};
</script>
<style scoped>
.text-label{
  font-size: 18px;
  font-weight: 400;
  color: #000000;
}
.text-link{
  font-size: 15px;
  font-weight: 500;
  font-family: inherit;
}
.textblack{
  color: #000000;
  font-family: inherit;
  font-weight: 500;
  font-size: 15px;
}
</style>