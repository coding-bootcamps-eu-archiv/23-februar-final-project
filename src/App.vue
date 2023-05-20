<template>
  <header>
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

import "./assets/styles.css";

import { useMainStore } from "@/store/MainStore.js";

export default {
  name: "App",
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  setup() {
    const store = useMainStore();
    store.getQuickLinkData();
  },
};
</script>
