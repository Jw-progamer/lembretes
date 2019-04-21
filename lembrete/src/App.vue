<template>
  <v-app>
    <v-content>
      <v-layout column wrap>
        <Top/>
        <mainpage/>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import mainpage from "./views/MainPage";
import Top from "./components/Top";
export default {
  name: "App",
  components: {
    mainpage,
    Top
  }
};
</script>
