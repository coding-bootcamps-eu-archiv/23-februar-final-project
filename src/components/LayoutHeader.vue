<template>
  <header class="header">
    <section class="header__section">
      <div class="background-img"></div>
      <nav class="home-logo">
        <HomeLogo />
        <nav><router-link to="/">Home</router-link> |</nav>
        <router-view />
      </nav>
    </section>
  </header>
</template>

<script>
import HomeLogo from "@/components/HomeLogo.vue";

export default {
  name: "HomeView",
  components: {
    HomeLogo,
  },
};
</script>

<style scoped>
.background-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1259px) {
  .background-img {
    background-image: url("@/assets/header-img.png");
  }
}

@media (min-width: 1260px) {
  .background-img {
    background-image: url("@/assets/header-img.png");
  }
}
</style>
