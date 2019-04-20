<template>
  <v-container grid-list-sm>
    <v-form>
      <label for="nome_sistema"></label>
      <v-text-field
        name="nome_sistema"
        label="sistema"
        id="id_nome"
        placeholder="Digite o nome do novo sistema"
        v-model="lembrete.nome"
      ></v-text-field>
      <v-combobox
        name="status_sistema"
        label="status"
        id="id_status"
        placeholder="Selecione o status do novo sistema"
        v-model="lembrete.status"
        :items="status_option"
      ></v-combobox>
      <v-layout row align-content-center="true">
        <v-date-picker
          v-model="lembrete.ultima_atualizacao"
          locale="pt-BR"
          :reactive="true"
          full-width
        ></v-date-picker>
      </v-layout>
      <v-btn block color="info">Adicionar</v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  name: "formulario",
  data() {
    return {
      lembrete: {
        nome: null,
        status: null,
        ultima_atualizacao: null
      },
      status_option: [
        "Em desenvolvimento sem release",
        "Em desenvolvimento com release",
        "Em homologação",
        "Em produção"
      ]
    };
  }
};
</script>
 
