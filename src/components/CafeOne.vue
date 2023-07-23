<template>
  <div class="wrapper">
    <router-link to="/" class="btn">Вернуться к списку</router-link>

    <cafe-card :cafe="onePlace" />
  </div>
</template>

<script>

import CafeCard from "./CafeCard.vue";
import axios from "axios";

export default {
  components: { CafeCard},
  data() {
    return {
      onePlace: {},
    };
  },

  methods: {
    async fetchPlace() {
      const placeID = this.$route.params.id;
      try {
        const response = await axios.get(
          `https://bandaumnikov.ru/api/test/site/get-view?id=${placeID}`
        );
        this.onePlace = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.fetchPlace();
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

a:active, /* активная/посещенная ссылка */
a:hover,  /* при наведении */
a {
  text-decoration: none;
  color: hotpink;
}
a:hover {
  color: white;
  transition: 0.3s;
}

.btn {
  background: none;
  text-decoration: none;
  border: 1px solid hotpink;
  color: hotpink;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  transition: 0.3s;
  background: rgb(245, 235, 238);
}

.btn:hover {
  background: hotpink;
  color: white;
}
</style>
