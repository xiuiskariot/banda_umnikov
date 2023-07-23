<template>
  <div class="card">
    <div class="pic">
      <img v-if="cafe.photo" :src="cafe.photo" alt="" />
      <img v-else src="../assets/istockphoto-697965658-612x612.jpg" alt="" />
    </div>

    <div class="card_info">
      <p class="card_info_name">{{ cafe.name }}</p>

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
      <button @click="$router.push(`/${cafe.id}`)">Поделиться</button>
    </div>
    
  </div>
</template>
<script>
import Places from '@/indexAPI';
export default {
  props: {
    cafe: {
      type: Object,
      required: true,
    },
    
  },
  methods: {
    async fetchCafe() {
      const placeID = this.$route.params.id;
      const response = await Places.getOne(placeID);
      this.onePlace = response;
    }
  }
  , mounted() {
    this.fetchCafe()
  }
};
</script>
<style>
.pic {
  height: 100%;
}
img {
  height: 199px;
  width: 250px;
  border-radius: 10px 0 0 10px;
}
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-right: 20px;

  border: 2px solid hotpink;
  margin-bottom: 20px;
  width: 700px;
  height: 202px;
  border-radius: 12px;
  transition: 0.3s;
}
.card:hover {
  scale: 1.03;
  box-shadow: 0px 1px 23px 0px rgba(255, 105, 180, 1);
}

.card_info {
  font-size: 14px;
}

.card_info_name {
  text-align: center;
  margin: 7px 0 15px;

  font-weight: bold;
}
.card_info_cuisine {
  display: flex;
  margin-bottom: 7px;
}
.card_info_lunch {
  margin-bottom: 7px;
}

@media (max-width: 769px) {
  .card {
    width: 500px;
  }

  img {
    height: 199px;
    width: 200px;
    border-radius: 10px 0 0 10px;
  }
}

@media (max-width: 568px) {
  .card {
    width: 400px;
    height: 172px;
    
  }

  .card_info {
    font-size: 10px;
  }

  img {
    height: 170px;
    width: 180px;
    border-radius: 10px 0 0 10px;
  }
}

@media (max-width: 400px) {
  .card {
    width: 370px;
    height: 174px;
    gap: 1rem;
    
    
  }
}
</style>
