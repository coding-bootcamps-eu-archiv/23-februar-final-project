<template>
  <div
    class="side-menu"
    :style="{
      width: active ? '250px' : '0px',
    }"
  >
    <a href="#" class="closebtn" @click.prevent="handleClick">&times;</a>
    <router-link to="/plant">Pflanzen</router-link>
    <router-link to="/matches">Matches</router-link>
    <router-link to="/biocompost">Biodünger</router-link>
    <router-link to="/weather">Wetter-Check</router-link>
    <router-link to="/contact">Kontakt</router-link>
  </div>

  <button class="openbtn" @click="handleClick">&#9776;</button>
</template>

<script>
export default {
  emits: ["button-click"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    handleClick() {
      this.active = !this.active;
      console.log(this.active);
    },
  },
};
</script>

<style scoped>
/* The sidepanel menu */
.side-menu {
  height: 250px; /* Specify a height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #fa8369; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidepanel */
}

/* The sidepanel links */
.side-menu a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.side-menu a:hover {
  color: black;
}

/* Position and style the close button (top right corner) */
.side-menu .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style the button that is used to open the sidepanel */
.openbtn {
  font-size: 20px;
  background-color: #fa8369;
  color: black;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}
</style>
