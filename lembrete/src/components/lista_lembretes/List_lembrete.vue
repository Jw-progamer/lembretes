<template>
  <v-list three-line>
    <template v-for="lembrete in projetos">
      <Lembrete :lembrete="lembrete" :key="lembrete['.key']"/>
    </template>
  </v-list>
</template>
<script>
import Lembrete from "./Lembrete";
import ftbase from "../../firebaseService";

let db = ftbase.db;
let projetosRef = db.ref("projetos");

export default {
  name: "Lista_lembretes",
  components: {
    Lembrete
  },
  firebase: {
    projetos: projetosRef
  }
};
</script>
