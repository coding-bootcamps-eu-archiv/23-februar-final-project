<template>
  <footer>
    <nav class="home-logo">
      <nav>
        <router-link to="/"><HomeLogo alt="Home" /></router-link>
      </nav>
    </nav>
    <div>
      <nav>
        <router-link to="/contact" class="link-footer">Kontakt</router-link>
      </nav>
    </div>
  </footer>
</template>

<script>
import HomeLogo from "@/components/HomeLogo.vue";

export default {
  name: "FooterMain",
  components: {
    HomeLogo,
  },
};
</script>

<style scoped>
footer {
  background-color: #ad4731;
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  padding: 10px;
}

.link-footer {
  color: #77facb;
}
</style>
