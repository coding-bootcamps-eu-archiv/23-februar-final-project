<template>
  <section class="area-main">
    <article class="item">
      <h2>Die Idee</h2>
      <p>
        Ein Garten kann ein wunderbarer Ort sein, um abzuschalten und seiner
        Arbeit beim wachsen zuzusehen. Damit das gelingt wollen wir, das sind
        Barbara und Raphaela, interessierte Gärtner*innen mit der App beim
        Hobbygärtnern unterstützen. Du kannst dich mit hier über einzelne
        Pflanzen informieren, dir auf einen Blick anschauen, in welchem Monat
        welche Pflanzen gesät werden und herausfinden, ob die Pflanzen, die du
        in deinem Garten haben möchtest, zusammenpassen, oder sich nicht gut
        vertragen. Und du kannst das Wetter checken, wenn du einen Tag im Garten
        verbringen möchtest.
      </p>
    </article>
    <article class="item">
      <h2>Garten Infos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam ad
        eius eaque debitis nobis error labore, ex qui. Deleniti rem et ad iste
        expedita eos nobis voluptate sapiente corporis!
      </p>
    </article>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.area-main {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 5px;
  background-image: url("@/assets/flowers-gb00485f2a_1920.jpg");

  background-size: cover;
  background-position: bottom;
  text-align: center;

  height: 100%;
  padding: 25px;
}
.item {
  width: 100%;
  background-color: #42b389;
  padding: 0.6rem;
  margin-inline: auto;
  border-radius: 10px 10px 10px 10px;
}
</style>
