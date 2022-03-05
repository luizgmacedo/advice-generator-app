<template>
  <button class="generate-button" @click="handleClick">
    <img class="image" src="@/assets/images/icon-dice.svg" alt="icon dice" />
  </button>
</template>

<script>
export default {
  name: "GenerateButton",
  methods: {
    handleClick() {
      this.$emit("handle-click");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./style";
</style>