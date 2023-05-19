<template>
  <div
    class="side-menu"
    :style="{
      width: active ? '250px' : '0px',
    }"
  >
    <a href="#" class="closebtn" @click.prevent="handleClick">&times;</a>

    <details>
      <summary>Pflanzen</summary>
      <div>
        <ul>
          <li>
            <router-link to="/sorting/fruits">Obst</router-link>
          </li>
          <li><router-link to="/sorting/vegetables">Gemüse</router-link></li>
          <li><router-link to="/sorting/herbs">Kräuter</router-link></li>
        </ul>
      </div>
    </details>
    <router-link to="/match">Matches</router-link>
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
      plants: [],
      active: false,
    };
  },
  methods: {
    handleClick() {
      this.active = !this.active;
    },
    readDataFromApi() {
      fetch("http://localhost:3005/plants?_expand=group")
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            console.log("ERROR");
          }
        })
        .then((plantsApi) => {
          this.plants = plantsApi;
        });
    },
  },
  created() {
    this.readDataFromApi();
  },
};
</script>

<style scoped>
.side-menu {
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fa8369;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.side-menu a,
.side-menu summary {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
}

summary {
  cursor: pointer;
}

ul {
  background-color: rgb(0 0 0 / 0.25);
  list-style-type: none;
  padding-left: 0;
  margin-block: 0;
}

.side-menu a:hover {
  color: black;
}

.side-menu .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

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
