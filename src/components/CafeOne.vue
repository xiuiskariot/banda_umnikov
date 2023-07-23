<template>
  <router-link to="/" class="btn">Вернуться к списку</router-link>
  <cafe-card :cafe="cafeOne" />
</template>

<script>
import CafeCard from "./CafeCard.vue";
import axios from "axios";

export default {
  components: { CafeCard },
  data() {
    return {
      cafeOne: {},
    };
  },

  methods: {
    async fetchCafes() {
      const cafeId = this.$route.params.id;
      try {
        const response = await axios.get(
          `https://bandaumnikov.ru/api/test/site/get-view?id=${cafeId}`
        );
        this.cafeOne = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.fetchCafes();
  },
};
</script>

<style scoped>
a:active,
a:hover,
a {
  text-decoration: none;
  color: hotpink;
  border: 1px solid hotpink;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  transition: 0.3s;
  background: rgb(245, 235, 238);
}
a:hover {
  color: white;
  transition: 0.3s;
  background: hotpink;

}


</style>
