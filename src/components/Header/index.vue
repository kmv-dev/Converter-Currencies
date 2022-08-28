<template>
  <header class="header">
    <RouterLink class="header__link" to="/">Список валют</RouterLink>
    <RouterLink class="header__link" to="/converter">Конвертер</RouterLink>
  </header>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 0 15px rgb(0, 0, 0, 12%);
  margin-bottom: 10px;
  &__link {
    padding: 8px 0;
    margin: 0 10px;
    color: #000000;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    opacity: 0.7;
  }
  &__link.router-link-active {
    transform: translateY(-3px);
    opacity: 1;
  }
}
</style>
