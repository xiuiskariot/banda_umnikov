<template>
  <div>
    <my-header/>
    <router-view
      ><div class="container">
        <cafe-list /></div
    ></router-view>
  </div>
</template>
<script>
import CafeList from "../src/views/CafeList";
import MyHeader from './components/MyHeader.vue'

export default {
  components: { CafeList, MyHeader },
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
