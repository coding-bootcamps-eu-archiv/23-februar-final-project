<template>
  <header class="header">
    <section class="header__section">
      <div class="input-header">
        <input type="text" />
      </div>
      <div class="background-img"></div>
      <nav class="home-logo">
        <HomeLogo class="new-logo" />
        <nav class="new-home"><router-link to="/">Home</router-link> |</nav>
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
  position: relative;
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
.input-header {
  position: absolute;
  right: 10px;
  top: 10px;
}
.new-logo {
  position: absolute;
  left: 0px;
  top: 70px;
}
.new-home {
  position: absolute;
  left: 50px;
  top: 100px;
}
</style>
