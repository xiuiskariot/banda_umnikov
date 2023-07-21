<template>
  <div class="card">
    <div class="pic">
      <img v-if="cafe.photo" :src="cafe.photo" alt="" />
      <img v-else src="../assets/istockphoto-697965658-612x612.jpg" alt="" />
    </div>

    <div class="card_info">
      <p class="card_info_name">{{ cafe.name.toUpperCase() }}</p>

      <div class="card_info_cuisine">
        <p>Кухня:&nbsp;</p>
        <div v-if="cafe.cuisine">{{ cafe.cuisine }}</div>
        <div v-else>неизвестно :с</div>
      </div>

      <div class="card_info_lunch">
        <div v-if="cafe.business_lunch">
          Бизнес-ланч стоит {{ cafe.price }} р
        </div>
        <div v-else>Бизнес-ланча нет</div>
      </div>

      <div>
        <div v-if="cafe.address">
          <p>📍{{ cafe.address }}</p>
          <p style="margin-bottom: 7px">{{ cafe.landmark }}</p>
          <p>⏱ идти примерно минут {{ cafe.time }} ({{ cafe.distance }} м)</p>
        </div>
      </div>
      <!-- <button @click="fetchRandom">Мне повезет</button> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";


export default {
  data() {
    return {
      cafe: {},
    };
  },
  methods: {
    async fetchRandom() {
      // const response1 = await axios.get(
      //   "https://bandaumnikov.ru/api/test/site/get-index"
      // );
      // const dataLength = response1.data.data.dataLength;
      // const randomId = Math.floor(Math.random() * dataLength);

      const response2 = await axios.get(`https://bandaumnikov.ru/api/test/site/get-view?id=5`)

      this.cafe = response2.data.data
    },
    mounted() {
      this.fetchRandom()
    },
  },
};
</script>
