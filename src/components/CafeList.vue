<template>
  <my-button v-show="showList" type="button" @click="getRandom"
    >Мне повезет</my-button
  >
  <div class="btns">
    <my-button v-show="!showList" type="button" @click="showList = true">
      Показать весь список</my-button
    >

    <my-button v-show="!showList" type="button" @click="getRandom"
      >Попробовать еще</my-button
    >
  </div>

  <ul class="cards" v-if="showList">
    <li v-for="cafe in cafes" :key="cafe.id">
      <cafe-card :cafe="cafe" />
    </li>
  </ul>
  <cafe-card v-else :cafe="cafes[randomId]" />
</template>
<script>
import axios from "axios";
import CafeCard from "./CafeCard.vue";
import MyButton from "./UI/MyButton.vue";

export default {
  components: { CafeCard, MyButton },
  data() {
    return {
      cafes: [],
      showList: true,
      randomId: 0,
    };
  },
  methods: {
    async fetchData() {
      const response = await axios.get(
        "https://bandaumnikov.ru/api/test/site/get-index"
      );
      this.cafes = response.data.data;
    },
    getRandom() {
      this.randomId = Math.floor(Math.random() * this.cafes.length);
      this.showList = false;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
