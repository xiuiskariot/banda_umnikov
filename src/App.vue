<template>
  <div>
    <h1>Где бы нам пообедать?</h1>
    
    <div class="container">
      <cafe-card v-for="cafe in cafes" :cafe="cafe" :key="cafe.id" />
    </div>
  </div>
</template>
<script>
import CafeCard from "./components/CafeCard.vue";
import axios from "axios";
export default {
  components: { CafeCard },
  data() {
    return {
      cafes: [],
    };
  },
  methods: {
    async fetchCafes() {
      const response = await axios.get(
        "https://bandaumnikov.ru/api/test/site/get-index"
      );
      this.cafes = response.data.data;
      console.log(response);
    },
  },
  mounted() {
    this.fetchCafes();
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --text-color: green;
  --font: "Open-Sans", sans-serif;
}

body {
  font-family: var(--font);
}

h1 {
  color: var(--text-color);
  text-align: center;
  margin: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
