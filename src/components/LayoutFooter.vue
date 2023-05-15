<template>
  <footer>
    <div><HomeLogo class="logo-footer" /></div>
    <div>
      <a
        class="link-footer"
        href="mailto:bkmso158@gmail.com?to=raphaela.becker@posteo.de"
        >Kontakt</a
      >
    </div>
  </footer>
</template>

<script>
import HomeLogo from "@/components/HomeLogo.vue";

export default {
  name: "FooterMain",
  components: {
    HomeLogo,
  },
};
</script>

<style scoped>
footer {
  background-color: #fa8369;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px; /* Height of the footer */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 
@media screen and (max-width: 768px) {
  footer {
    flex-direction: row;
    justify-content: center;
  }
} */
.link-footer {
  color: #42b389;
}
.logo-footer {
  /* scale: 0.5; */
  position: absolute;
  left: 0px;
  top: -100px;
}
</style>
