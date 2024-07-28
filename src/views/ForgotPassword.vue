<template>
    <section style="width: 100%;" class="bg-primary">
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
      <v-row align="center" justify="center">
      <v-col cols="12" sm="7" md="5" lg="5" class="bg-white rounded-lg mt-5">
        <v-card class="form-center" flat>
          <v-card-text>
            <div class="d-flex justify-center">
              <div>
                  <v-img :width="200" src="/assets/oxfordtrans 1.png" contain></v-img>
                  <div class="text-label text-dark text-center mb-5">Forgot Password</div>
                </div>
              </div>
               <v-form class="mt-5 px-5" @submit.prevent="submitForm">
                <div class="mt-5">
                  <div class="text-label text-dark text-center mt-5">Email</div>
                  <v-text-field 
                    v-model="email" 
                    :rules="emailRules" 
                    variant="outlined" 
                    prepend-inner-icon="bi bi-envelope" 
                    class="rounded-lg text-grey"
                  ></v-text-field>
                </div>
                <v-btn block class="bg-btn"
                 type="submit" flat>Submit</v-btn>
              </v-form>
              <div class="d-flex justify-end mt-5 text-link">Already have an account? <span class="text-link"> <router-link to="/" class="textblack"> sign in</router-link></span></div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </section>
</template>
  
<script>
import { ref } from 'vue';
import { sendResetEmail } from '../auth';
import { useRouter } from 'vue-router';

export default {
  name: 'ForgotPassword',
  setup() {
    const email = ref('');
    const router = useRouter();

    const emailRules = [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid',
    ];

    const submitForm = async () => {
      try {
        await sendResetEmail(email.value);
        router.push('/');
      } catch (error) {
        // Error handling is done in auth.js using SweetAlert2
      } finally {
        
      }
    };

    return {
      email,
      emailRules,
      submitForm
    };
  }
};
</script>