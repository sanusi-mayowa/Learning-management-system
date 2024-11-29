<template>
  <section
    class="signin d-flex align-center justify-center"
    style="min-height: 100vh"
  >
    <v-row>
      <v-col cols="12" md="7" sm="6" class="right-col">
        <img
          src="/assets/login-v2.svg"
          style="height: 100% !important; width: 100% !important"
        />
        <div class="position-fixed left-0 top-0 my-5 ml-5 login-mobile">
          <img src="/assets/logo2.png" width="100" alt="" />
        </div>
      </v-col>
      <v-col
        cols="12"
        md="5"
        sm="6"
        class="d-flex justify-center px-10 signup-right align-center w-100"
      >
        <section class="w-100 mt-8">
          <div class="title">
            <h2 class="text-register-title">
              Welcome back to TECH TALENT ACADEMY! 👋
            </h2>
            <p class="text-register-subtitle-2 mb-5">
              Please sign-in to your account and start the adventure
            </p>
          </div>
          <v-form
            ref="form"
            @submit.prevent="handleSignIn"
            class="mt-2 bg-white w-100"
          >
            <div>
              <div class="form-label">First Name</div>
              <v-text-field
                v-model="firstName"
                :rules="firstnameRules"
                variant="outlined"
                prepend-inner-icon="bi bi-person"
                class="rounded-lg text-grey"
              ></v-text-field>
            </div>

            <div>
              <div class="form-label">Email</div>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                variant="outlined"
                prepend-inner-icon="bi bi-envelope"
                class="rounded-lg text-grey"
              ></v-text-field>
            </div>
            <div>
              <div class="d-flex align-center justify-space-between">
                <div class="form-label">Password</div>
                <div class="form-label">
                  <router-link
                    to="/forgotpassword"
                    class="form-label text-decoration-none text-blue"
                    >Forgot Password?</router-link
                  >
                </div>
              </div>
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
            <v-btn block class="bg-btn" type="submit" flat>Sign In</v-btn>
            <div class="my-5 text-center">
              <p class="text-register-subtitle">
                New on our platform?
                <router-link
                  to="/signup"
                  class="text-decoration-none text-blue"
                >
                  Create an account</router-link
                >
              </p>
            </div>
          </v-form>
        </section>
        <div class="position-fixed mobile-logo top-0 px-5 py-2">
          <img src="/assets/logo2.png" width="100" alt="" />
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useToast } from "vue-toastification";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  name: "Signin",
  data() {
    return {
      firstName: "",
      email: "",
      password: "",
      visible: false,
      firstnameRules: [(v) => !!v || "First Name is required"],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Enter a valid email",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    async handleSignIn() {
      const toast = useToast();
      if (!this.$refs.form.validate()) {
        toast.error("Please fill out all fields correctly.");
        return;
      }
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        const user = userCredential.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();

          if (userData.firstName !== this.firstName) {
            throw new Error("First name does not match the saved record.");
          }

          toast.success(`Welcome back, ${userData.firstName}!`);
          this.$router.push("/dashboard");
        } else {
          throw new Error("User data not found.");
        }
      } catch (error) {
        let errorMessage = "Invalid credentials.";
        if (error.message === "First name does not match the saved record.") {
          errorMessage = "First name does not match our records.";
        } else if (error.code === "auth/user-not-found") {
          errorMessage = "No user found with this email.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect password.";
        }
        toast.error(errorMessage);
      }
    },
  },
};
</script>
