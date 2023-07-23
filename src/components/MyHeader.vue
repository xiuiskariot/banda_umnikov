<template>
  <header>
    <h1>Где бы нам пообедать?</h1>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 70px;
  margin-top: 20px;
}
h1 {
  color: var(--text-color);
}

@media (max-width: 568px) {
  h1 {
    font-size: 27px;
  }
}
</style>
