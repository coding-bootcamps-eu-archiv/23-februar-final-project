<template>
  <section>
    <button class="tab" @click.prevent="handleClick">Jan</button>
    <button class="tab" @click.prevent="handleClick">Feb</button>
    <button class="tab" @click.prevent="handleClick">Mär</button>
    <button class="tab" @click.prevent="handleClick">Apr</button>
    <button class="tab" @click.prevent="handleClick">Mai</button>
    <button class="tab" @click.prevent="handleClick">Jun</button>
    <button class="tab" @click.prevent="handleClick">Jul</button>
    <button class="tab" @click.prevent="handleClick">Aug</button>
    <button class="tab" @click.prevent="handleClick">Sep</button>
    <button class="tab" @click.prevent="handleClick">Okt</button>
    <button class="tab" @click.prevent="handleClick">Nov</button>
    <button class="tab" @click.prevent="handleClick">Dez</button>
  </section>
</template>

<script>
export default {
  name: "MonthBar",
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
    handleClick() {
      this.active = !this.active;
      console.log(this.active);
    },
  },
};
</script>

<style scoped>
.tab {
  width: 50px;
  height: 30px;
  background-color: #fa8369;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-color: #fa8369;
}
</style>
