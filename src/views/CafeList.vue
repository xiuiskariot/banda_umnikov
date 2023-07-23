<!-- <template>
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
import MyButton from "../components/UI/MyButton";

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
</style> -->

<!-- <template>
  <div>
    <my-button v-show="showList" type="button" @click="getRandom">Мне повезет</my-button>

    <div class="btns" v-show="!showList">
      <my-button type="button" @click="showList = true">Показать весь список</my-button>
      <my-button type="button" @click="getRandom">Попробовать еще</my-button>
    </div>

    <ul class="cards" v-if="showList">
      <li v-for="cafe in cafes" :key="cafe.id">
        <cafe-card :cafe="cafe" />
      </li>
    </ul>
    <cafe-card v-else :cafe="selectedCafe" />
  </div>
</template>

<script>
import axios from "axios";
import CafeCard from "./CafeCard.vue";
import MyButton from "../components/UI/MyButton";

export default {
  components: { CafeCard, MyButton },
  data() {
    return {
      cafes: [],
      showList: true,
      selectedCafeId: null, // Добавляем свойство для хранения id выбранного кафе
      selectedCafe: null, // Добавляем свойство для хранения выбранного кафе
    };
  },
  methods: {
    async fetchData() {
      const response = await axios.get("https://bandaumnikov.ru/api/test/site/get-index");
      this.cafes = response.data.data;
    },
    getRandom() {
      const randomId = Math.floor(Math.random() * this.cafes.length);
      this.selectedCafe = this.cafes[randomId];
      this.selectedCafeId = null; // Сбрасываем значение id выбранного кафе, чтобы список отобразился
      this.showList = false;
    },
    async loadCafeById(id) {
      // Загрузка данных о выбранном кафе по его id
      // Например, используем метод loadCafeById() для этой цели
      // Обновляем значение selectedCafe с данными о выбранном кафе
      this.selectedCafe = this.cafes.find((cafe) => cafe.id === id);
    },
  },
  watch: {
    // Следим за изменениями id в URL и обновляем выбранное кафе при необходимости
    "$route.params.id": function (newId) {
      if (!isNaN(newId)) {
        // Проверяем, что id является числом
        this.selectedCafeId = Number(newId); // Преобразуем id в число
        this.showList = false; // Скрываем список, чтобы отобразить только выбранную карточку
        this.loadCafeById(this.selectedCafeId); // Загружаем данные о выбранном кафе
      } else {
        this.showList = true; // Если id не является числом, отображаем список всех кафе
        this.selectedCafe = null; // Сбрасываем выбранное кафе
        this.selectedCafeId = null; // Сбрасываем значение id выбранного кафе
      }
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
</style> -->

<!-- <template>
  <div>
    <my-button v-show="showList" type="button" @click="getRandom">Мне повезет</my-button>

    <div class="btns" v-show="!showList">
      <my-button type="button" @click="showList = true">Показать весь список</my-button>
      <my-button type="button" @click="getRandom">Попробовать еще</my-button>
    </div>

    <ul class="cards" v-if="showList">
      <li v-for="cafe in filteredCafes" :key="cafe.id">
        <router-link :to="`/cafe/${cafe.id}`">
          <cafe-card :cafe="cafe" />
        </router-link>
      </li>
    </ul>
    <router-view v-else />
  </div>
</template>

<script>
import axios from "axios";
import CafeCard from "./CafeCard.vue";
import MyButton from "../components/UI/MyButton";

export default {
  components: { CafeCard, MyButton },
  data() {
    return {
      cafes: [],
      showList: true,
      selectedCafeId: null, // Добавляем свойство для хранения id выбранного кафе
    };
  },
  methods: {
    async fetchData() {
      const response = await axios.get("https://bandaumnikov.ru/api/test/site/get-index");
      this.cafes = response.data.data;
    },
    getRandom() {
      const randomId = Math.floor(Math.random() * this.cafes.length);
      this.selectedCafeId = this.cafes[randomId].id;
      this.showList = false;
    },
  },
  computed: {
    // Фильтруем список кафе, чтобы отобразить только выбранную карточку
    filteredCafes() {
      return this.showList ? this.cafes : this.cafes.filter(cafe => cafe.id === this.selectedCafeId);
    },
  },
  watch: {
    // Следим за изменениями id в URL и обновляем выбранное кафе при необходимости
    $route(to, from) {
      const newId = to.params.id;
      if (!isNaN(newId)) {
        // Проверяем, что id является числом
        this.selectedCafeId = Number(newId); // Преобразуем id в число
        this.showList = false; // Скрываем список, чтобы отобразить только выбранную карточку
      } else {
        this.showList = true; // Если id не является числом, отображаем список всех кафе
        this.selectedCafeId = null; // Сбрасываем значение id выбранного кафе
      }
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
</style> -->

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
<!-- <script>
import axios from "axios";
import CafeCard from "./CafeCard.vue";
import MyButton from "../components/UI/MyButton";

export default {
  components: { CafeCard, MyButton },
  data() {
    return {
      cafes: [],
      showList: true,
      randomId: 0,
      selectedCafeId: null, // Добавляем свойство для хранения id выбранного кафе
      selectedCafe: null, // Добавляем свойство для хранения выбранного кафе
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

      this.selectedCafe = this.cafes[this.randomId];
      this.selectedCafeId = null; // Сбрасываем значение id выбранного кафе, чтобы список отобразился
      this.showList = false;
    },
    async loadCafeById(id) {
      // Загрузка данных о выбранном кафе по его id
      // Например, используем метод loadCafeById() для этой цели
      // Обновляем значение selectedCafe с данными о выбранном кафе
      this.selectedCafe = this.cafes.find((cafe) => cafe.id === id);
    },
    async getOne(id) {
      const response = await axios.get(
        `https://bandaumnikov.ru/api/test/site/get-view?id=${id}`
      );
      return response.data.data;
    },
  },
  watch: {
    // Следим за изменениями id в URL и обновляем выбранное кафе при необходимости
    "$route.params.id": function (newId) {
      if (!isNaN(newId)) {
        // Проверяем, что id является числом
        this.selectedCafeId = Number(newId); // Преобразуем id в число
        this.showList = false; // Скрываем список, чтобы отобразить только выбранную карточку
        this.getOne(this.selectedCafeId); // Загружаем данные о выбранном кафе
      } else {
        this.showList = true; // Если id не является числом, отображаем список всех кафе
        this.selectedCafe = null; // Сбрасываем выбранное кафе
        this.selectedCafeId = null; // Сбрасываем значение id выбранного кафе
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script> -->

<script>
import axios from "axios";
import CafeCard from "./CafeCard.vue";
import MyButton from "../components/UI/MyButton";

export default {
  components: { CafeCard, MyButton },
  data() {
    return {
      cafes: [],
      showList: true,
      selectedCafeId: null,
    };
  },
  methods: {
    async fetchData() {
      const response = await axios.get("https://bandaumnikov.ru/api/test/site/get-index");
      this.cafes = response.data.data;
    },
    getRandom() {
      const randomId = Math.floor(Math.random() * this.cafes.length);
      this.selectedCafeId = this.cafes[randomId].id;
      this.showList = false;
    },
  },
  computed: {
    sortedCafes() {
      // Если есть выбранный id, сортируем массив данных по этому id
      if (this.selectedCafeId) {
        return this.cafes.filter(cafe => cafe.id === this.selectedCafeId);
      }
      // Если нет выбранного id, возвращаем исходный массив данных
      return this.cafes;
    },
  },
  watch: {
    // Следим за изменениями id в URL и обновляем выбранное кафе при необходимости
    "$route.params.id": function (newId) {
      if (!isNaN(newId)) {
        // Проверяем, что id является числом
        this.selectedCafeId = Number(newId); // Преобразуем id в число
        this.showList = false; // Скрываем список, чтобы отобразить только выбранную карточку
      } else {
        this.showList = true; // Если id не является числом, отображаем список всех кафе
        this.selectedCafeId = null; // Сбрасываем значение id выбранного кафе
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.action {
  padding: 2rem;
  margin: 1rem;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
