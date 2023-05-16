<template>
  <section class="service">
    <div><p class="service-text">Comming soon</p></div>
    <div>
      <img
        class="service-img"
        key="service "
        src="@/assets/service.png"
        alt="Image"
      />
    </div>
  </section>
</template>
<style scoped>
.service {
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* padding-top: 100px; */
}
.service-text {
  font-size: 2rem;
  margin-bottom: -100px;
}
.service-img {
  scale: 0.5;
}
</style>
>
