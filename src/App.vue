<template>
  <my-header />
  <div class="container"><router-view /></div>
  
</template>
<script>
import MyHeader from "./components/MyHeader.vue";
export default {
  components: { MyHeader },
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
  background: rgb(199, 229, 199);
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
