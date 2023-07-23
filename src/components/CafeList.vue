<template>
  <div class="section_places">

    <div class="places_wrapper">
      <cafe-card
        v-for="cafe in cafes"
        :key="cafe.id"
        :cafe="cafe"
        class="places"
      />
    </div>
  </div>
</template>

<script>
import CafeCard from "./CafeCard.vue";
export default {
  components: { CafeCard },
  data() {
    return {
      
    }
  },
  props: {
    cafes: {
      type: Array,
      required: true,
    },

  },
};
</script>

<style scoped>
.section_places {
  padding: 0 3%;
}
.places_header {
  align-self: center;
}
.places_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(207px, 1fr));
  gap:  15px; */
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  max-width: 1050px;
}
</style>
