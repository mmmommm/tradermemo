<template>
  <v-app>
    <v-img src="@/assets/register-photo.jpeg">
    <div>
      <v-container>
        <v-layout justify-center>
          <v-card shaped raised="true" outlined width="800px" height="600px" class="mt-12">
            <v-layout justify-center>
              <v-card-title class="font-weight-bold my-8 headline">REGISTER</v-card-title>
            </v-layout>
            <v-form v-model="valid">
              <v-card-subtitle class="title ml-12">Email</v-card-subtitle>
              <v-text-field
                class="px-12"
                type="email"
                v-model="email"
                label="Email"
                :rules="emailRules"
                required
                outlined
                rounded
              ></v-text-field>
              <v-card-subtitle class="title ml-12">Password</v-card-subtitle>
              <v-text-field
                class="px-12"
                type="password"
                v-model="password"
                label="Password"
                :rules="passwordRules"
                required
                outlined
                rounded
              ></v-text-field>
            </v-form>
            <br><br>
            <v-layout justify-center>
              <v-btn outlined rounded x-large @click="register">register</v-btn>
            </v-layout>
          </v-card>
        </v-layout>
      </v-container>
    </div>
    </v-img>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 characters',
      ]
  }),
  methods: {
    register() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      });
      this.email = '';
      this.password = '';
    }
  }
};
</script>