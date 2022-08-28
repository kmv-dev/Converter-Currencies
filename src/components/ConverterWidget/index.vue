<template>
  <div class="widget">
    <div class="widget__inner">
      <input
        type="number"
        v-model="amount"
        @input="calculate"
        class="widget__input"
      />
      <select
        v-model="currencyOne"
        @change="calculate"
        :disabled="currencyOne === 'RUB'"
      >
        <option
          v-for="valute in data"
          :key="valute.ID"
          :value="valute.CharCode"
          :disabled="valute.CharCode === 'RUB'"
        >
          {{ valute.Name }}
        </option>
      </select>
      <BaseButton class="widget__button" @click="reverseValute()">
        <span class="icon-swap_horizontal" />
      </BaseButton>
      <select v-model="currencyTwo" @change="calculate" :disabled="true">
        <option
          v-for="valute in data"
          :key="valute.ID"
          :value="valute.CharCode"
          :disabled="valute.CharCode !== 'RUB'"
        >
          {{ valute.Name }}
        </option>
      </select>
    </div>
    <div>
      <span class="widget__count">{{ amount }}</span>
      {{ data[currencyOne]?.Name }} стоит
      <span class="widget__count">{{ currentPrice }}</span>
      {{ data[currencyTwo]?.Name }}
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton/index.vue";
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
  },
});
const currencyOne = ref("USD");
const currencyTwo = ref("RUB");
const amount = ref(1);
const rate = ref(0);

onMounted(() => {
  calculate();
});
const currentPrice = computed(() => rate.value.toFixed(4));

const calculate = () => {
  if (currencyOne.value === "RUB") {
    rate.value = amount.value / props.data[currencyTwo.value]?.Value.toFixed(4);
    return;
  }
  rate.value = amount.value * props.data[currencyOne.value]?.Value.toFixed(4);
};

const reverseValute = () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
};
</script>

<style lang="scss" scoped>
.widget {
  &__inner {
    display: flex;
    margin-bottom: 10px;
  }
  &__input {
    max-width: 100px;
  }
  &__button {
    margin: 0 10px;
  }
  &__count {
    font-weight: bold;
  }
}
</style>
