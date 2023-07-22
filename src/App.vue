<template>
  <div>
    <h1>Где бы нам пообедать?</h1>

    <div class="container">
      <cafe-list />
    </div>
  </div>
</template>
<script>
import CafeList from "./components/CafeList.vue";

export default {
  components: { CafeList },
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
