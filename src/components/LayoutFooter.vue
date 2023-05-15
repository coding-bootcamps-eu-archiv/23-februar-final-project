<template>
  <footer>
    <nav class="home-logo">
      <nav>
        <router-link to="/"><HomeLogo alt="Home" /></router-link>
      </nav>
    </nav>
    <div>
      <a
        class="link-footer"
        href="mailto:bkmso158@gmail.com?to=raphaela.becker@posteo.de"
        >Kontakt</a
      >
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
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px; /* Height of the footer */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
}
/* 
@media screen and (max-width: 768px) {
  footer {
    flex-direction: row;
    justify-content: center;
  }
} */
.link-footer {
  color: #77facb;
}
</style>
