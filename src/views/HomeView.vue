<template>
  <section class="area-main">
    <article class="item">
      <h2>Die Idee</h2>
      <p>
        Ein Garten kann ein wunderbarer Ort sein, um abzuschalten und seiner
        Arbeit beim wachsen zuzusehen. Damit das gelingt wollen wir, das sind
        Barbara und Raphaela, interessierte Gärtner*innen mit der App beim
        Hobbygärtnern unterstützen.
      </p>
      <p>
        Du kannst dich mit hier über einzelne Pflanzen informieren, dir auf
        einen Blick anschauen, in welchem Monat welche Pflanzen gesät werden und
        herausfinden, ob die Pflanzen, die du in deinem Garten haben möchtest,
        zusammenpassen, oder sich nicht gut vertragen. Und du kannst das Wetter
        checken, wenn du einen Tag im Garten verbringen möchtest.
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
  text-align: center;
  padding: 25px;
  margin-bottom: 20px;
}
.item {
  background: var(--primary-dark);
  border-radius: 10px 10px 10px 10px;
  padding: 20px;
}
p {
  margin-bottom: 15px;
}

@media screen and (min-width: 900px) {
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  .github-logo {
    height: 5rem;
  }
}
</style>
