<template>
  <section class="register d-flex align-center" style="min-height: 100vh">
    <v-row>
      <v-col cols="12" md="7" sm="6" class="position-relative left-col">
        <img
          src="/assets/forgot-password.svg"
          style="height: 100% !important; width: 100% !important"
        />
        <div class="position-fixed top-0 mt-10 ml-10">
          <img src="/assets/logo2.png" width="100" alt="" />
        </div>
      </v-col>
      <v-col
        cols="12"
        md="5"
        sm="6"
        class="d-flex justify-center px-10 signup-right bg-white align-center w-100"
      >
        <section class="w-100 mt-8 forgot-password bg-white">
          <div class="title">
            <h2 class="text-register-title">Forgot Password? 🔒</h2>
            <p class="text-register-subtitle">
              Enter your email and we'll send you a token to reset your
              password.
            </p>
          </div>
          <v-form
            ref="form"
            @submit.prevent="handleForgotPassword"
            class="mt-3 bg-white w-100"
          >
            <div>
              <div class="form-label">Email</div>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                variant="outlined"
                prepend-inner-icon="bi bi-envelope"
                class="rounded-lg text-grey"
                label="johndoe@gmail.com"
              ></v-text-field>
            </div>
            <v-btn block class="bg-btn mt-3" type="submit" flat>
              Send Token
            </v-btn>
            <p class="text-center mt-4 text-blue">
              <i class="bi bi-arrow-left"></i>
              <router-link to="/" class="text-blue ml-2 text-decoration-none"
                >Back to Login</router-link
              >
            </p>
          </v-form>
        </section>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase";
import { useToast } from "vue-toastification";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Enter a valid email",
      ],
    };
  },
  methods: {
    async handleForgotPassword() {
      const toast = useToast();
      if (!this.$refs.form.validate()) {
        toast.error("Please fill out all fields correctly.");
        return;
      }
      try {
        await sendPasswordResetEmail(auth, this.email);
        toast.success("Reset email sent! Please check your inbox.");
      } catch (error) {
        let errorMessage = "Failed to send reset email.";
        if (error.code === "auth/user-not-found") {
          errorMessage = "No user found with this email.";
        }
        toast.error(errorMessage);
      }
    },
  },
};
</script>
