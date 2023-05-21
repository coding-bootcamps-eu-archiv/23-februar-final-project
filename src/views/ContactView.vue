<template>
  <section class="contact">
    <div>
      <h2>Raphaela Becker</h2>
      <p>raphaela.becker@posteo.de</p>
      <a href="https://github.com/RaphaelaBecker">
        <div class="home-logo">
          <img
            class="github-logo"
            key="github-logo "
            src="@/assets/github-mark.png"
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
            src="@/assets/github-mark.png"
            alt="Logo"
          />
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: absolute;
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  row-gap: 10px;
}
.github-logo {
  height: 3rem;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
}
</style>
