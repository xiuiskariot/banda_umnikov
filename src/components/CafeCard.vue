<template>
  <div class="card">
    <div class="pic">
      <img v-if="cafe.photo" :src="cafe.photo" alt="" />
      <img v-else src="../assets/istockphoto-697965658-612x612.jpg" alt="" />
    </div>
    <div class="card_info">
      <h2 class="card_info_name">{{ cafe.name }}</h2>

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

      <button class="btn" @click="copyLinkToClipboard" v-show="isCopyied">Поделиться</button>
      <button class="btn" v-if="isCopyied == false">Ссылка скопирована</button>
      
    </div>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";
export default {
  data() {
    return {
      isCopyied: true,
    }
  },
  props: {
    cafe: {
      type: Object,
      required: true,
    },
  },
   methods: {
    copyLinkToClipboard() {
      const baseUrl = window.location.origin; // Получаем основную ссылку текущего сайта
      const link = `${baseUrl}/${this.cafe.id}`; // Формируем ссылку с идентификатором cafe.id

      new ClipboardJS(".btn", {
        text: function () {
          return link;
        },
      });
      this.isCopyied = false

    },
  },
};
</script>

<style scoped>
.pic {
  height: 100%;
}
img {
  height: 219px;
  width: 250px;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
}
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-right: 20px;

  border: 2px solid hotpink;
  margin-bottom: 20px;
  width: 700px;
  height: 222px;
  border-radius: 12px;
  transition: 0.3s;
  background: rgb(245, 235, 238);
}
.card:hover {
  scale: 1.03;
  box-shadow: 0px 1px 23px 0px rgba(255, 105, 180, 1);
}

.card_info {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  height: 100%;
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
.btn {
  margin-top: auto;
  justify-self: start;
  background: none;
  border: 1px solid hotpink;
  color: hotpink;
  padding: 0.3rem;
  margin: auto 0 10px;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  background: hotpink;
  color: white;
}

@media (max-width: 769px) {
  .card {
    width: 500px;
  }

  img {
    height: 219px;
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
    height: 169px;
    width: 180px;
    border-radius: 10px 0 0 10px;
  }
}


</style>
