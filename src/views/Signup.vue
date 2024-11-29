<template>
  <section class="register d-flex align-center" style="min-height: 100vh">
    <v-row>
      <v-col cols="12" md="7" sm="6" class="position-relative left-col">
        <img
          src="/assets/register-v2.svg"
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
        class="d-flex justify-center px-10 signup-right align-center w-100"
      >
        <section class="w-100 mt-8">
          <div class="title">
            <h2 class="text-register-title">Create Account</h2>
            <p class="text-register-subtitle">
              Fill the below form to create a new account.
            </p>
          </div>
          <v-form ref="form" class="mt-2 bg-white w-100">
            <div>
              <div class="form-label">First Name</div>
              <v-text-field
                label="John"
                v-model="firstName"
                :rules="firstnameRules"
                variant="outlined"
                prepend-inner-icon="bi bi-person"
                class="rounded-lg text-grey"
              ></v-text-field>
            </div>
            <div>
              <div class="form-label">Last Name</div>
              <v-text-field
                label="Doe"
                v-model="lastName"
                variant="outlined"
                :rules="lastnameRules"
                prepend-inner-icon="bi bi-person"
                class="rounded-lg text-grey"
              >
              </v-text-field>
            </div>
            <div>
              <div class="form-label">Email</div>
              <v-text-field
                label="johndoe@gmail.com"
                v-model="email"
                :rules="emailRules"
                variant="outlined"
                prepend-inner-icon="bi bi-envelope"
                class="rounded-lg text-grey"
              ></v-text-field>
            </div>
            <div>
              <div class="form-label">Password</div>
              <v-text-field
                label="***********"
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
            <div>
              <div class="form-label">Program</div>
              <v-select
                prepend-inner-icon="bi bi-book"
                v-model="program"
                :items="programs"
                label="Select Program"
                variant="outlined"
                class="rounded-lg text-grey"
                :rules="programRules"
                required
              ></v-select>
            </div>

            <v-btn block class="bg-btn" flat @click="handleSubmit"
              >Sign Up</v-btn
            >
          </v-form>
          <div class="my-5 text-center">
            <p class="text-register-subtitle">
              Already have an account?
              <router-link to="/" class="text-decoration-none text-blue">
                Sign in instead</router-link
              >
            </p>
          </div>
        </section>
        <div class="position-fixed mobile-logo top-0 px-5 py-2">
          <img src="/assets/logo2.png" width="100" alt="" />
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { useToast } from "vue-toastification";

import router from "@/router";

export default {
  name: "Signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      program: "",
      visible: false,
      programs: [
        "Frontend Development",
        "Backend Development",
        "Fullstack Developer",
        "UI/UX",
        "Cyber Security",
        "Data Science",
      ],
      firstnameRules: [(v) => !!v || "This field is required"],
      lastnameRules: [(v) => !!v || "This field is required"],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Enter a valid email",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
      programRules: [(v) => !!v || "Program is required"],
    };
  },
  methods: {
    async handleSubmit() {
      const toast = useToast();

      if (!this.$refs.form.validate()) {
        toast.error("Please fill out all fields correctly.");
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const fullName = `${this.firstName} ${this.lastName}`;
        await updateProfile(userCredential.user, { displayName: fullName });
        const userRef = doc(db, "users", userCredential.user.uid);
        await setDoc(userRef, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          program: this.program,
          createdAt: new Date(),
        });
        toast.success("Account created successfully!");
        router.push("/");
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.program = "";
      } catch (error) {
        let errorMessage = "Invalid input fields. Please check your data.";
        if (error.code === "auth/weak-password") {
          errorMessage = "Password should be at least 6 characters long.";
        } else if (error.code === "auth/email-already-in-use") {
          errorMessage = "This email is already in use.";
        }
        toast.error(errorMessage);
      }
    },
  },
};
</script>
