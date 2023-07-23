<template>
  <main>
    <cafe-card
      v-for="cafe in cafes"
      :key="cafe.id"
      :cafe="cafe"
    />
  </main>
</template>

<script>
import CafeCard from "./CafeCard.vue";
export default {
  components: { CafeCard },
  data() {
    return {};
  },
  props: {
    cafes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
