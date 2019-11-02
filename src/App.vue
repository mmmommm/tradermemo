<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Trader memo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="my-2">
        <v-btn to="/" text x-large>Home</v-btn>
      </div>
      <div class="my-2">
        <v-btn to="/addMemo" text x-large>Add</v-btn>
      </div>
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
  components: {
  },
  data: () => ({
    //
  }),
};
</script>