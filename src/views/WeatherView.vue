<template>
  <div class="weather-api" id="weather-api">
    <section>
      <div class="search-city">
        <input
          type="text"
          class="search-bar"
          placeholder="Gib deine Stadt ein"
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>

      <div class="weather-container" v-if="typeof weather.main !== 'undefined'">
        <div class="location-content">
          <div class="location">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">{{ currentDate() }}</div>
        </div>

        <div class="weather-content">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "weatherView",
  data() {
    return {
      api_key: "61236004be27dce5f9396fb0e590a643",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    currentDate() {
      let d = new Date();
      let months = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ];
      let days = [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style scoped>
.weather-api {
  background-image: url("@/assets/flowers-gb00485f2a_1920.jpg");
  background-size: cover;
  background-position: bottom;
  text-align: center;

  height: 100vw;
  padding: 25px;
}

.search-bar {
  font-family: sans-serif;
  background: var(--primary-dark);
  border: 3px solid var(--primary-dark);
  border-radius: 2px;
  box-shadow: 2px 2px 2px black;
  width: 50%;
  height: 25px;
  line-height: normal;
  color: black;
  user-select: auto;
  font-size: 12px;
  padding: 0 8px;
  margin-right: 1%;
}
input:focus {
  outline: none;
}

.weather-container {
  margin: 10%;
  font-size: 25px;
  color: white;

  background-color: rgb(66, 179, 137, 0.25);
  border-radius: 20px;
}

.location-content .date {
  text-align: center;
  color: white;
  text-shadow: 1px 3px black;
}

.location-content .location {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 5px;
  font-size: 40px;
  text-shadow: 1px 3px black;
}

.weather-content {
  text-align: center;
}
.weather-content .temp {
  display: inline-block;
  padding: 10px 25px;
  color: black;

  background-color: aliceblue;
  border: 16px;
  border-radius: 3px;
  margin: 40px 0px;
  box-shadow: 3px 6px black;
}

.weather-content .weather {
  text-shadow: 1px 3px black;
  padding-bottom: 20px;
}
</style>
