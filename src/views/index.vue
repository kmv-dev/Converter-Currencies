<template>
  <div class="currency-list">
    <div class="currency-list__inner">
      <input
        class="currency-list__search"
        type="text"
        v-model="search"
        placeholder="Поиск валютной пары"
      />
      <div v-for="item in filteredCurrency" :key="item.ID">
        <CurrencyPair
          v-if="item.CharCode !== 'RUB'"
          :data="item"
          :baseCurrency="baseCurrency"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import CurrencyPair from "@/components/CurrencyPair/index.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const baseCurrency = ref("RUB");
const search = ref("");
const getCurrencies = computed(() => store.getters.getCurrency);
const filteredCurrency = computed(() => {
  let newArr = Object.values(getCurrencies.value);
  return newArr.filter((item) => {
    return (
      item.CharCode.toUpperCase().indexOf(search.value.toUpperCase()) !== -1 ||
      item.NumCode.indexOf(search.value) !== -1
    );
  });
});
</script>

<style lang="scss" scoped>
.currency-list {
  max-width: 1000px;
  min-width: 824px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 12px;
  border: 1px solid #d9dbe9;
  &__search {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
