<template>
  <section class="footer-wrapper">
    <nav class="home-logo">
      <nav>
        <router-link to="/"><HomeLogo alt="Home" /></router-link>
      </nav>
    </nav>
    <div class="intern-flex">
      <div>
        <nav>
          <router-link to="/contact" class="link-footer">Kontakt</router-link>
        </nav>
      </div>
      <div>
        <nav>
          <router-link to="/impressum" class="link-footer"
            >Impressum</router-link
          >
        </nav>
      </div>
    </div>
  </section>
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
.footer-wrapper {
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

.intern-flex {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  flex-direction: column;
}
.link-footer {
  color: #77facb;
}
</style>
