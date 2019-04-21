<template>
  <div id="lista_projetos">
    <ListLembrete/>
    <v-btn :to="'edit/new'" open-on-hover absolute fab right color="secondary">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import ListLembrete from "../components/lista_lembretes/List_lembrete";

export default {
  name: "Lembretes",
  components: {
    ListLembrete
  },
};
</script>

<style scoped>
</style>