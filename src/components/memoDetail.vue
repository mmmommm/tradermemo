<template>
<v-app>
  <v-container>
  <v-layout>
  <div class="index">
    <div class ="memo">
      <v-card width="600px">
        <v-layout>
          <v-card-title>日付</v-card-title>
          <v-card-title>{{ date }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>合計</v-card-title>
          <v-card-title>{{ sum }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_a }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_a }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_b }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_b }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_c }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_c }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_d }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_d }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_e }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_e }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_f }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_f }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_g }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_g }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_h }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_h }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_i }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_i }}</v-card-title>
        </v-layout>
        <v-layout>
          <v-card-title>銘柄名</v-card-title>
          <v-card-title>{{ code_j }}</v-card-title>
          <v-card-title>損益額</v-card-title>
          <v-card-title>{{ gain_j }}</v-card-title>
        </v-layout>
      </v-card>
      <v-card width="600px">
          <v-card-title>感想・反省</v-card-title>
          <v-card-text class="ml-4">{{ reason }}</v-card-text>
      </v-card>
    </div>
  </div>
  </v-layout>
  </v-container>
</v-app>
</template>
<script>
import db from "../../firebaseInit"

export default {
  name: "memo-detail",
  data(){
    return {
      date: null,
      sum: null,
      gain_a: null,
      gain_b: null,
      gain_c: null,
      gain_d: null,
      gain_e: null,
      gain_f: null,
      gain_g: null,
      gain_h: null,
      gain_i: null,
      gain_j: null,
      reason: null,
      code_a: null,
      code_b: null,
      code_c: null,
      code_d: null,
      code_e: null,
      code_f: null,
      code_g: null,
      code_h: null,
      code_i: null,
      code_j: null,
    }
  },
  beforeRouteEnter(to, from, next){
      db.collection('memos').where('slug', '==', to.params.memo).get().then((querySnapshot) =>{
          querySnapshot.forEach((doc) =>{
              next(vm => {
                  vm.date = doc.data().date
                  vm.sum = doc.data().sum
                  vm.gain_a = doc.data().gain_a
                  vm.gain_b = doc.data().gain_b
                  vm.gain_c = doc.data().gain_c
                  vm.gain_d = doc.data().gain_d
                  vm.gain_e = doc.data().gain_e
                  vm.gain_f = doc.data().gain_f
                  vm.gain_g = doc.data().gain_g
                  vm.gain_h = doc.data().gain_h
                  vm.gain_i = doc.data().gain_i
                  vm.gain_j = doc.data().gain_j
                  vm.reason = doc.data().reason
                  vm.code_a = doc.data().code_a
                  vm.code_b = doc.data().code_b
                  vm.code_c = doc.data().code_c
                  vm.code_d = doc.data().code_d
                  vm.code_e = doc.data().code_e
                  vm.code_f = doc.data().code_f
                  vm.code_g = doc.data().code_g
                  vm.code_h = doc.data().code_h
                  vm.code_i = doc.data().code_i
                  vm.code_j = doc.data().code_j
              })
          })
      })
  },
  watch:{
      '$route': 'fetchData'
  },
  methods:{
      fetchData(){
          db.collection('memos').where('slug', '==', this.$route.params.memo).get().then((querySnapshot)=>{
              querySnapshot.forEach((doc)=>{
                  // eslint-disable-next-line no-console
                  console.log(doc.id, '==', doc.data())
                  this.date = doc.data().date
                  this.sum = doc.data().sum
                  this.gain_a = doc.data().gain_a
                  this.gain_b = doc.data().gain_b
                  this.gain_c = doc.data().gain_c
                  this.gain_d = doc.data().gain_d
                  this.gain_e = doc.data().gain_e
                  this.gain_f = doc.data().gain_f
                  this.gain_g = doc.data().gain_g
                  this.gain_h = doc.data().gain_h
                  this.gain_i = doc.data().gain_i
                  this.gain_j = doc.data().gain_j
                  this.reason = doc.data().reason
                  this.code_a = doc.data().code_a
                  this.code_b = doc.data().code_b
                  this.code_c = doc.data().code_c
                  this.code_d = doc.data().code_d
                  this.code_e = doc.data().code_e
                  this.code_f = doc.data().code_f
                  this.code_g = doc.data().code_g
                  this.code_h = doc.data().code_h
                  this.code_i = doc.data().code_i
                  this.code_j = doc.data().code_j
              })
          })
      },
  }
}
</script>

<style scoped>
.memo{
  display: flex;
}
</style>