<template>
  <div class="admin-page">
    <h1>Admin Dashboard</h1>
    <v-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Program</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.fullName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.program }}</td>
          <td>{{ user.status }}</td>
          <td>
            <v-btn @click="selectUser(user)">Edit</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-dialog v-model="showEditDialog">
      <template #default>
        <v-card>
          <v-card-title>Edit User</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="selectedUser.fullName"
              label="Full Name"
            ></v-text-field>
            <v-text-field
              v-model="selectedUser.program"
              label="Program"
            ></v-text-field>
            <v-select
              v-model="selectedUser.status"
              :items="['active', 'inactive']"
              label="Status"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="updateUser">Save</v-btn>
            <v-btn @click="cancelEdit">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  data() {
    return {
      users: [], // All users
      selectedUser: null, // Selected user for editing
      showEditDialog: false, // Edit dialog visibility
    };
  },
  methods: {
    selectUser(user) {
      this.selectedUser = { ...user }; // Clone user data
      this.showEditDialog = true;
    },
    async updateUser() {
      const userDoc = doc(db, "users", this.selectedUser.id);
      await updateDoc(userDoc, {
        fullName: this.selectedUser.fullName,
        program: this.selectedUser.program,
        status: this.selectedUser.status,
      });
      this.showEditDialog = false;
      this.fetchUsers(); // Refresh user list
    },
    cancelEdit() {
      this.showEditDialog = false;
      this.selectedUser = null;
    },
    async fetchUsers() {
      const usersSnapshot = await getDocs(collection(db, "users"));
      this.users = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },
  },
  async created() {
    await this.fetchUsers();
  },
};
</script>
