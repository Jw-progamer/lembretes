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
      <v-layout column centered>
        <v-flex xs12 wrap>
          <v-btn
            block
            color="warning"
            @click="deleteProjetoLembrete"
            :disabled="lembrete_key == 'new'"
          >revomer lembrete</v-btn>
          <v-btn block color="info" @click="updateDatabase">Confirmar lembrete de projeto</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>
<script>
import firebaseref from '../firebaseService'

let dbRef = firebaseref.db

export default {
  name: 'formulario',
  props: {
    lembrete_key: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      lembrete: {
        nome: null,
        status: null,
        ultima_atualizacao: null
      },
      status_option: [
        'Em desenvolvimento sem release',
        'Em desenvolvimento com release',
        'Em homologação',
        'Em produção'
      ]
    }
  },
  firebase () {
    return {
      lembrete: {
        source: dbRef.ref('projetos').child(this.lembrete_key),
        asObject: true
      }
    }
  },
  methods: {
    updateDatabase () {
      if (this.lembrete_key === 'new') {
        dbRef.ref('projetos').push({
          nome: this.lembrete.nome,
          status: this.lembrete.status,
          ultima_atualizacao: this.lembrete.ultima_atualizacao
        })
        this.$router.push('/')
      } else {
        dbRef
          .ref('projetos')
          .child(this.lembrete_key)
          .set({
            nome: this.lembrete.nome,
            status: this.lembrete.status,
            ultima_atualizacao: this.lembrete.ultima_atualizacao
          })
        this.$router.push('/')
      }
    },
    deleteProjetoLembrete () {
      dbRef
        .ref('projetos')
        .child(this.lembrete_key)
        .remove()
      this.$router.push('/')
    }
  }
}
</script>
