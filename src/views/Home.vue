<template>
    <v-img src="@/assets/portfolio.jpg" height="770">
        <v-container>
            <v-layout justify-space-around wrap>
                    <div v-for="(memo, index) in memos" :key="index">    
                        <v-card width="350" height="150" class="my-5">
                            <v-card-title class="ml-6">{{ memo.date }}</v-card-title>
                            <v-card-text>
                                <v-layout>
                                    <v-btn outlined class="button ml-2 mt-6" :to="{ name: 'memo-detail', params: { memo: memo.slug }}">viewmemo</v-btn>
                                    <!-- <v-btn outlined class="button ml-12 mt-6" @click="deleteMemo">deletememo</v-btn> -->
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </div>
            </v-layout> 
            <v-layout justify-center class="mt-10">
                <v-btn to="/addMemo" x-large color="white">Add</v-btn>
            </v-layout>
        </v-container>
    </v-img>
</template>

<script>
import db from "../../firebaseInit"

export default {
    name:'home',
    data(){
        return {
            memos: [],
        }
    },
    created(){
        db.collection('memos').get().then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
        });
        this.memos = array
        });
    },
    // methods:{
    //     deleteMemo: function(){
    //         db.collection('memos').doc('memo.slug').delete().then(function(){
    //             // eslint-disable-next-line no-console
    //             console.log("document successfully deleted!");
    //         }).catch(function(error){
    //             // eslint-disable-next-line no-console
    //             console.log("error removing document:", error);
    //         });
    //     }
    // }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>