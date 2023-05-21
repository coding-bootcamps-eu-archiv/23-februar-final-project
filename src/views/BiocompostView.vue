<template>
  <section class="main-section">
    <div>
      <section class="area-main">
        <article class="item">
          <h2>Warum Biodünger</h2>
          <p>
            Jede Pflanze braucht gewisse Nährstoffe, wie z.B. Kalium, Stickstoff
            oder Phosphorum stark und gesund zu bleiben. Zusätzlich müss der
            Boden mit zusätzlichen Mineralstoffen besorgt werden. Als eine
            Alternative für chemische Düngermittel, kann ein selbsthergestellter
            Biodünger ausgewählt werden.
          </p>
        </article>
        <article class="item2 item">
          <h2>Ein paar Ideen</h2>
          <div>
            Im Garten oder im Biomüll finden wir verschiedene Zutaten wie,z.B.
            Eierschalen, Gemüsereste, Kaffeesatz oder gefallene Blätter, aus
            denen wir einen Biodünger herstellen können. Wenn wir Hühner oder
            Enten im Garten halten, können wir das Gemüsebeet mit dem Mist von
            Nutztieren düngen. Hier ein Paar Beispiele für organische Biodünger:
            <ul>
              <li>Eierschalend-Dünger</li>
              <li>Brennnesseljauche</li>
              <li>Kaffeesatz-Dünger</li>
              <li>Tiermist-Dünger</li>
              <li>Kompost</li>
            </ul>
            Lass dich inspirieren und verziechte auf Chemikalien.. denn "Du bist
            was du isst." , sagte mal der detuche Pghilosph Ludwig Feuerbach!
          </div>
        </article>
      </section>
    </div>
  </section>
</template>

<style scoped>
.area-main {
  margin-top: 2rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 5px;
}
.item2 {
  margin-bottom: 30px;
}
.item {
  background-color: #42b389;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px 10px 10px 10px;
}
.main-section {
  background-image: url("@/assets/flowers-gb00485f2a_1920.jpg");
  background-size: cover;
  background-position: bottom;
}
ul {
  list-style-type: none;
}
</style>
