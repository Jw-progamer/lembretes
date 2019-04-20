<template>
  <v-app>
    <v-content>
      <Top/>
      <mainpage/>
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
    Top,
  },
};
</script>
