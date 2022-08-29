<template>
  <div class="primary">
    <Header />
    <RouterView class="primary__content" />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

onMounted(async () => {
  await getCurrency();
});

const getCurrency = () => store.dispatch("getCurrency");
</script>

<style lang="scss">
.primary {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: $Comfortaa;
  &__content {
    flex-grow: 1;
  }
}
</style>
