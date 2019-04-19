<template>
  <v-list-tile :color="cor_status" to="/edit">
    <v-list-tile-content>
      <v-list-tile-title v-text="lembrete.nome"></v-list-tile-title>
      <v-list-tile-sub-title>Status atual: {{lembrete.status}}. ultima atualização:{{lembrete.ultima_atualizacao}}</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>
<script>
export default {
  props: {
    lembrete: {
      type: Object
    },
  },
  computed: {
    cor_status: function() {
      switch (this.lembrete.status) {
        case "Em desenvolvimento sem release":
          return "#4dd2ff";
        case "Em desenvolvimento com release":
          return "#0000cc";
        case "Em homologação":
          return "#cccc00";
        case "em produção":
          return "#33cc33";
        default:
          return "#ff3300";
      }
    }
  }
};
</script>

