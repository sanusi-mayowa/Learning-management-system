<template>
  <section class="bg-primary" style="width: 100%">
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="7" md="5" lg="5" class="bg-white rounded-lg mt-5">
        <v-card class="form-center" flat>
          <v-card-text>
            <div class="d-flex justify-center">
              <div>
                <v-img :width="200" src="/src/assets/oxfordtrans 1.png" contain></v-img>
                <div class="text-label text-dark text-center">Sign in Your Account</div>
              </div>
            </div>
             <v-form class="mt-2 px-5" @submit.prevent="submitForm">
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
              <v-checkbox style="margin-left: -9px;"
              v-model="checkbox"
              color="success"
              label="Remember my preference"
              :rules="[v => !!v || 'You must agree to continue!']"
            ></v-checkbox>
              <span class="mb-2 text-link"><router-link to="/forgotpassword" class="textblack text-decoration-none">Forgot Password?</router-link></span>
              <v-btn block class="bg-btn"
               type="submit" flat>Sign In</v-btn>
            </v-form>
            <div class="px-5 mt-5 text-link">Don't have an account? <span class="text-link"><router-link to="/signup" class="textblack">sign up</router-link></span></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </section>
</template>
<script>
import { ref } from 'vue';
import { login } from '../auth';
import { useRouter } from 'vue-router';

export default {
name: 'Signin',
setup() {
  const email = ref('');
  const password = ref('');
  const visible = ref(false);
  const loading = ref(false);
  const router = useRouter();
  const checkbox = ref(false);

  const emailRules = [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'Email must be valid',
  ];

  const passwordRules = [
    v => !!v || 'Password is required',
    v => (v && v.length >= 6) || 'Password must be at least 6 characters',
  ];

  const submitForm = async () => {
    loading.value = true;
    try {
      await login(email.value, password.value);
      router.push('/dashboard');
    } catch (error) {
      // Error handling is done in auth.js using SweetAlert2
    } finally {
      loading.value = false;
    }
  };

  return {
    email,
    password,
    visible,
    emailRules,
    passwordRules,
    submitForm,
    checkbox
  };
}
};
</script>

<style>
.login{
height: 100vh;
}
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