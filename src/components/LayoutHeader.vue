<template>
  <div>
    <div class="header-container">
      <div class="header-left">
        <MenuSidebar />
        <nav class="home-logo-wrapper">
          <router-link to="/">
            <HomeLogo alt="Home" />
          </router-link>
        </nav>
      </div>

      <p class="header-text">HERBA URBANA</p>
    </div>
    <MonthsBar />
  </div>
</template>

<script>
import HomeLogo from "@/components/HomeLogo.vue";

import MonthsBar from "@/components/MonthsBar.vue";

import MenuSidebar from "@/components/MenuSidebar.vue";

export default {
  name: "HomeView",
  components: {
    HomeLogo,
    MonthsBar,
    MenuSidebar,
  },
};
</script>

<style scoped>
.header-text {
  margin-block: 0;

  color: var(--secondary);
  font-family: "denseletters";
  font-size: 45px;
  text-shadow: 4px 4px 5px black;
  text-align: right;
}
.header-container {
  background-image: url("@/assets/header_neu.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding-right: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

.header-left {
  display: flex;

  grid-row: span 2;
}

.home-logo-wrapper {
  align-self: center;
}

.home-logo-wrapper img.home-logo {
  height: auto;
  width: min(80%, 150px);
}

.header__section {
  display: flex;
}

.input-header,
.header-text {
  justify-self: end;
}

.input-header {
  align-self: center;
  padding-block: 1rem;
}

.header-text {
  grid-column: 2 / 3;
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
</style>
