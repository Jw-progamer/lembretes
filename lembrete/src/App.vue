<template>
  <v-app>
    <v-content>
      <Top/>
      <mainpage/>
      <Botton/>
    </v-content>
  </v-app>
</template>

<script>
import mainpage from "./views/MainPage";
import Top from "./components/Top";
import Botton from "./components/Botton";
export default {
  name: "App",
  components: {
    mainpage,
    Top,
    Botton
  },
};
</script>
