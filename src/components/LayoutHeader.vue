<template>
  <header class="header">
    <section class="header__section">
      <div class="input-header">
        <input type="search" results="5" placeholder="Search..." name="s" />
      </div>
      <div class="background-img"></div>
      <nav class="home-logo">
        <nav>
          <router-link to="/"><HomeLogo alt="Home" /></router-link>
        </nav>
      </nav>
      <p class="header-text">HERBA URBANA</p>
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
    background-image: url("@/assets/header_neu.png");
  }
}

@media (min-width: 1260px) {
  .background-img {
    background-image: url("@/assets/header_neu.png");
  }
}

.header-text {
  font-size: 20px;
  color: var(--secondary);
  position: absolute;
  top: 80px;
  right: 50px;
}

.home-logo {
  position: absolute;
  top: 0.5px;
  left: 10px;
}
.input-header {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
