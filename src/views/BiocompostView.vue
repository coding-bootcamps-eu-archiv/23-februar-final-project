<template>
  <section class="main-section">
    <div>
      <section class="area-main">
        <article class="item">
          <h2>Warum Biodünger</h2>
          <p>
            Jede Pflanze braucht gewisse Nährstoffe, wie z.B. Kalium, Stickstoff
            oder Phosphor um stark und gesund zu bleiben. Auch der Boden muss
            mit zusätzlichen Mineralstoffen versorgt werden. Als Alternative für
            chemische Düngemittel, kann ein selbsthergestellter Biodünger
            ausgewählt werden.
          </p>
        </article>
        <article class="item2 item">
          <h2>Ein paar Ideen</h2>
          <p>
            Im Garten oder im Biomüll finden wir verschiedene Sachen wie, z.B.
            Eierschalen, Gemüsereste, Kaffeesatz oder Laub, aus denen wir einen
            Biodünger herstellen können. Wenn wir Hühner oder Enten im Garten
            halten, können wir das Gemüsebeet mit dem Mist von Nutztieren
            düngen. Hier ein paar Beispiele für organische Biodünger:
          </p>
          <ul>
            <li><span>🥚</span> Eierschalen-Dünger</li>
            <li><span>🍂</span> Brennesseljauche</li>
            <li><span>☕</span> Kaffeesatz-Dünger</li>
            <li><span>🐔</span> Tiermist-Dünger</li>
            <li><span>🪣</span> Kompost</li>
          </ul>
          <p>
            Lass dich inspirieren und verzichte auf Chemikalien - denn
            <em> "Du bist was du isst"</em> , sagte mal der deutsche Philosoph
            Ludwig Feuerbach!
          </p>
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
  padding: 20px;
}
p {
  margin-bottom: 15px;
}
ul {
  margin-bottom: 15px;
  list-style-type: none;
}
[data-icon]:before {
  font-family: icons; /* BYO icon font, mapped smartly */
  content: attr(data-icon);
  speak-as: none;
}
</style>
