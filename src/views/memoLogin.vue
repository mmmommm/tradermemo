<template>
  <v-app>
    <v-img src="@/assets/login-photo.jpeg">
    <div>
      <v-container>
        <v-layout justify-center>
          <v-card shaped raised outlined width="800px" height="600px" class="mt-12">
            <v-layout justify-center>
              <v-card-title class="font-weight-bold my-8 headline">LOG IN</v-card-title>
            </v-layout>
            <v-form>
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
              <v-btn outlined rounded x-large @click="login">log in</v-btn>
            </v-layout>
          </v-card>
        </v-layout>
      </v-container>
    </div>
    </v-img>
  </v-app>
</template>

<script>
import { firebaseauth } from '../firebase/firebaseAuth.js';
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
    login() {
      firebaseauth
      //firebaseAuth.jsでfirebase.auth()まで書いてあるのでここから
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          //成功したらemailとpasswordを空に
          data.email = '';
          data.password = '';
          //成功したらホームにリダイレクト
          this.$router.push('/memoHome');
          //変数にidtokenを代入
          // const idtoken = firebaseauth.currentUser.getIdToken();
        })
        .catch(() => {})
    }
  }
};
</script>
<style scoped>
.signin {
  border-radius: 20%;
}
</style>