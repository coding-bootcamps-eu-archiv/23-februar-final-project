<template>
  <div class="weather-api" id="weather-api">
    <section>
      <div class="search-city">
        <input
          type="text"
          class="search-bar"
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
      {{ typeof weather.main !== undefined }}
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
        "sonntag",
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

  height: 100vw;
  padding: 25px;
}

.location-content .date {
  text-align: center;
}

.location-content .location {
  font-style: italic;
  text-align: center;
}

.weather-content {
  text-align: center;
}
.weather-content .temp {
  display: inline-block;
  padding: 10px 25px;

  background-color: aliceblue;
  border: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px black;
}

.weather-content .weather {
  font-style: italic;
}
</style>
>
