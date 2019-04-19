<template>
  <div id="lista_projetos">
    <ListLembrete/>
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