<template>
  <div id="app">
    <div>
      <advice-card></advice-card>
    </div>
  </div>
</template>

<script>
import AdviceCard from "@/components/AdviceCard/AdviceCard";

export default {
  components: { AdviceCard },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@use "./style";
</style>
