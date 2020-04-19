<template>
<v-app>
  <form @submit.prevent="saveMemo">
  <v-container>
    <v-layout>
      <div class="memo">
            <v-card width="600px">
              <v-layout>
                <v-card-title>日付</v-card-title>
                <input v-model="date" type="text" placeholder="2020/04/01">
              </v-layout>
              <v-layout>
                <v-card-title>合計</v-card-title>
                <v-card-title>{{ sum }}</v-card-title>
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_a" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_a" class="capitalgain" type="number">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_b" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_b" type="number">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_c" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_c" type="number">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_d" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_d" type="number">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_e" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_e" type="number">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_f" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_f" type="number">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_g" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_g" type="number">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_h" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_h" type="number">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_i" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_i" type="number">
              </v-layout>
              <v-layout>
                <v-card-title>銘柄名</v-card-title>
                <input v-model="code_j" type="text" placeholder="コード/銘柄名">
                <v-card-title>損益額</v-card-title>
                <input v-model.number="gain_j" type="number">
              </v-layout>
            </v-card>
            <v-card width="600px">
              <v-card-title>感想・反省</v-card-title>
              <textarea v-model="reason" cols="60" rows="25" class="ml-4" placeholder="感想・反省これから気をつけることなど"></textarea>
              <br>
              <v-btn type="submit" x-large class="ml-12">Addmemo</v-btn>
            </v-card>
      </div>
    </v-layout>
  </v-container>
  </form>
  </v-app>
</template>
<script>
import { firestore } from "../firebase/fireStore.js";
export default {
  name: "memo-add",
  data(){
    return{
      date: null,
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
      gain_a:0,
      gain_b:0,
      gain_c:0,
      gain_d:0,
      gain_e:0,
      gain_f:0,
      gain_g:0,
      gain_h:0,
      gain_i:0,
      gain_j:0,
      reason: null,
    }
  },
  methods:{
        saveMemo(){
          const slug = this.generateUUID()
          firestore.collection('memos').add({
            date: this.date,
            code_a: this.code_a,
            code_b: this.code_b,
            code_c: this.code_c,
            code_d: this.code_d,
            code_e: this.code_e,
            code_f: this.code_f,
            code_g: this.code_g,
            code_h: this.code_h,
            code_i: this.code_i,
            code_j: this.code_j,
            gain_a: this.gain_a,
            gain_b: this.gain_b,
            gain_c: this.gain_c,
            gain_d: this.gain_d,
            gain_e: this.gain_e,
            gain_f: this.gain_f,
            gain_g: this.gain_g,
            gain_h: this.gain_h,
            gain_i: this.gain_i,
            gain_j: this.gain_j,
            reason: this.reason,
            sum: this.sum,
            slug: slug
          }).then(function (docRef){
            // eslint-disable-next-line no-console
            console.log("Document written with ID: ", docRef.id)
            // this.$router.push(`/${slug}/success`)
          }).catch(function (error){
            // eslint-disable-next-line no-console
            console.error('Error adding document:', error);
          });
          this.$router.push({path: "/"})
        },
        generateUUID () {
          let d = new Date().getTime();
          let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0
            d = Math.floor(d / 16)
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
          });
          return uuid;
        }
  },
  computed:{
    sum:{
      get(){
        return this.gain_a + this.gain_b + this.gain_c + this.gain_d + this.gain_e + this.gain_f + this.gain_g + this.gain_h + this.gain_i + this.gain_j
      },
      set(sum){
        this.updateValue({sum})
      }
    }
  }
}

</script>
<style scoped>
.memo{
  display: flex;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>