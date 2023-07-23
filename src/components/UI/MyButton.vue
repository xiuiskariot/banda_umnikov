<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "my-button",
};
</script>
<style scoped>
.btn {
  background: none;
  border: 1px solid hotpink;
  color: hotpink;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  transition: 0.3s;
  background: rgb(245, 235, 238);
}

.btn:hover {
  background: hotpink;
  color: white;
}
</style>
