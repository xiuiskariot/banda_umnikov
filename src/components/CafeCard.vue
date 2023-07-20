<template>
  <div class="card">
    <div class="pic"><img :src="cafe.photo" alt="" /></div>

    <div class="card_info">
      <p>Есть ли бизнес ланч: {{ cafe.business_lunch }}</p>
      <p>Название: {{ cafe.name }}</p>
      <p>Кухня: {{ cafe.cuisine }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cafe: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.pic {
  height: 100%;
}
img {
  height: 199px;
  width: 250px;
  border-radius: 10px 0 0 10px ;
}
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border: 2px solid hotpink;
  margin-bottom: 15px;
  width: 500px;
  height: 202px;
  border-radius: 12px;
  transition: 0.3s;
}
.card:hover {
  scale: 1.03;
  box-shadow: 0px 1px 23px 0px rgba(255, 105, 180, 1);
}
</style>
