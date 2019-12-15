<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Trader memo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="isAuthenticated">
        <div class="my-2">
          <v-btn to="/" text x-large>Home</v-btn>
        </div>
        <div class="my-2">
          <v-btn to="/memoAdd" text x-large>Add</v-btn>
        </div>
        <div class="my-2">
          <v-btn @click="logout" text x-large>logout</v-btn>
        </div>
      </template>
      <template v-if="!isAuthenticated">
        <div class="my-2">
          <v-btn to="/memoLogin" text x-large>Login</v-btn>
        </div>
        <div class="my-2">
          <v-btn to="/memoRegister" text x-large>Register</v-btn>
        </div>
      </template>
    </v-app-bar>
    <v-content>
      <transition name="fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    isAuthenticated() {
      return this.$store.getters.idToken !== null;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
};
</script>