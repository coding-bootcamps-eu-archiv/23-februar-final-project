<template>
  <HomeView />
  <header>
    <LayoutHeader />
  </header>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader.vue";
import HomeView from "@/views/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
    LayoutHeader,
  },
};
</script>
