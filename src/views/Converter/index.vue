<template>
  <div class="converter">
    <ConverterWidget :data="getCurrencies" />
  </div>
</template>

<script setup>
import ConverterWidget from "@/components/ConverterWidget/index.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const getCurrencies = computed(() => store.getters.getCurrency);
</script>

<style lang="scss" scoped>
.converter {
  margin: 0 auto;
  padding: 12px;
  border: 1px solid #d9dbe9;
}
</style>
