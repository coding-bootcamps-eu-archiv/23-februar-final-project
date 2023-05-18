<template>
  <section class="months-list">
    <button class="tab" @click.prevent="handleClick('Januar')">Jan</button>
    <button class="tab" @click.prevent="handleClick('Februar')">Feb</button>
    <button class="tab" @click.prevent="handleClick('März')">Mär</button>
    <button class="tab" @click.prevent="handleClick('April')">Apr</button>
    <button class="tab" @click.prevent="handleClick('Mai')">Mai</button>
    <button class="tab" @click.prevent="handleClick('Juni')">Jun</button>
    <button class="tab" @click.prevent="handleClick('Juli')">Jul</button>
    <button class="tab" @click.prevent="handleClick('August')">Aug</button>
    <button class="tab" @click.prevent="handleClick('September')">Sep</button>
    <button class="tab" @click.prevent="handleClick('Oktober')">Okt</button>
    <button class="tab" @click.prevent="handleClick('November')">Nov</button>
    <button class="tab" @click.prevent="handleClick('Dezember')">Dez</button>
  </section>
</template>

<script>
export default {
  name: "MonthsBar",
  emits: ["button-click"],
  props: {
    month: { type: String },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    handleClick(clickedMonth) {
      this.active = !this.active;
      this.$router.push({ name: "months", params: { month: clickedMonth } });
      this.$emit("button-click");
      console.log(this.active);
    },
  },
};
</script>

<style scoped>
.months-list {
  display: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0;
}
.tab {
  height: 30px;
  background-color: #fa8369;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-color: #fa8369;
}
</style>
