<template>
    <div id="lista_projetos">
      <v-list three-line>
        <template v-for="(projeto, index) in projetos">
         <v-list-tile-content>
           <v-list-tile-title v-html="projeto.nome"/>
           <v-list-tile-sub-title>{{projeto.status}} {{projeto.ultima_atualizacao}}</v-list-tile-sub-title>
         </v-list-tile-content>
        </template>
      </v-list>
    </div>
</template>

<script>
  import ftbase from "../firebaseService"

  let db = ftbase.db
  let projetosRef = db.ref("projetos")

    export default {
        name: "Lembretes",

        firebase:{
          projetos : projetosRef
        }
    }
</script>

<style scoped>

</style>