<template>
  <header>
    <MenuSidebar />
    <LayoutHeader />
  </header>
  <main>
    <router-view />
  </main>

  <footer>
    <LayoutFooter />
  </footer>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader.vue";

import LayoutFooter from "@/components/LayoutFooter.vue";

import MenuSidebar from "./components/MenuSidebar.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    LayoutFooter,
    MenuSidebar,
  },
};
</script>

<style>
@import url("./assets/styles.css");

html,
body,
main {
  width: 100vw;
  height: 100vh;
  /* border: 2px solid black; */
}
</style>
