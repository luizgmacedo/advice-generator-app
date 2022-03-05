<template>
  <div class="advice-card">
    <div class="card" v-if="advice">
      <h2 class="heading">Advice #{{ advice.id }}</h2>
      <p class="advice">"{{ advice.advice }}"</p>
    </div>
    <div class="divider">
      <img class="mobile" src="@/assets/images/pattern-divider-mobile.svg" alt="" />
      <img class="desktop" src="@/assets/images/pattern-divider-desktop.svg" alt="" />
    </div>
    <generate-button
      @handle-click="generateAdvice"
      class="generate-button"
    ></generate-button>
  </div>
</template>

<script>
import GenerateButton from "@/components/GenerateButton/GenerateButton";

export default {
  name: "AdviceCard",
  components: {
    GenerateButton,
  },
  data() {
    return {
      advice: null,
    };
  },
  methods: {
    generateAdvice() {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => (this.advice = data.slip));
    },
  },
  created() {
    this.generateAdvice();
  }
};
</script>

<style lang="scss" scoped>
@use "./style";
</style>