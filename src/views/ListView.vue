<template>
  <div>
    <my-button v-show="showList" type="button" @click="getRandom"
      >Мне повезет</my-button
    >
    <div>
      <my-button v-show="!showList" type="button" @click="showList = true">
        Показать весь список</my-button
      >
      <my-button v-show="!showList" type="button" @click="getRandom"
        >Попробовать еще</my-button
      >
    </div>
  </div>

  <cafe-list :cafes="cafes" v-if="showList" />
  <div v-else><cafe-card :cafe="cafes[randomId]" /></div>
</template>

<script>
import axios from "axios";
import CafeList from "@/components/CafeList.vue";
import CafeCard from "@/components/CafeCard.vue";

export default {
  data() {
    return {
      cafes: [],
      showList: true,
      randomId: 0,
    };
  },
  components: {
    CafeList,
    CafeCard,
  },
  methods: {
    async fetchCafes() {
      try {
        const response = await axios.get(
          "https://bandaumnikov.ru/api/test/site/get-index"
        );
        this.cafes = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    getRandom() {
      this.randomId = Math.floor(Math.random() * this.cafes.length);
      this.showList = false;
    },
  },
  mounted() {
    this.fetchCafes();
  },
};
</script>
<style scoped></style>
