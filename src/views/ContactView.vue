<template>
  <section class="contact-content contact">
    <div>
      <h2>Raphaela Becker</h2>
      <p>raphaela.becker@posteo.de</p>
      <a href="https://github.com/RaphaelaBecker">
        <div class="home-logo">
          <img
            class="github-logo"
            key="github-logo "
            src="@/assets/github-mark-white.png"
            alt="Logo"
          />
        </div>
      </a>
    </div>
    <div>
      <h2>Barbara</h2>
      <p>bkmso158@gmail.com</p>
      <a href="https://github.com/Bibi-S">
        <div class="home-logo">
          <img
            class="github-logo"
            key="github-logo "
            src="@/assets/github-mark-white.png"
            alt="Logo"
          />
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  /* position: absolute; */
  /* width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  row-gap: 10px;
  background-image: url("@/assets/flowers-gb00485f2a_1920.jpg");
  object-fit: contain; */
  /* background-size: cover; */
  /* background-position: bottom; */
  background-image: url("@/assets/flowers-gb00485f2a_1920.jpg");
  background-size: cover;
  background-position: bottom;
  text-align: center;

  height: 100vw;
  padding: 25px;
}

.contact > div {
  padding-top: 2rem;
}
.github-logo {
  height: 3rem;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
}
h2,
p {
  color: white;
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
