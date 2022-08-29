<template>
  <div class="pair">
    <span
      class="pair__icon"
      :class="{
        'icon-short_up': data.Value > data.Previous,
        'icon-short_down': data.Value < data.Previous,
      }"
      :style="{ background: data.Value > data.Previous ? 'green' : 'red' }"
    />
    <div class="pair__char-code">{{ data.CharCode }}/{{ baseCurrency }}</div>
    <div class="pair__info">
      <span class="pair__count">1</span> {{ !swap ? data.Name : oneRub }} =
      <span class="pair__count">{{ !swap ? data.Value : calcAmount }}</span>
      {{ !swap ? manyRub : data.Name }}
    </div>
    <BaseButton class="pair__button" @click="swap = !swap">
      <span class="icon-swap_horizontal" />
    </BaseButton>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import BaseButton from "@/components/ui/BaseButton/index.vue";
const props = defineProps({
  data: {
    type: Object,
  },
  baseCurrency: {
    type: String,
  },
});
const swap = ref(false);
const oneRub = ref("Рубль");
const manyRub = ref("Рублей");
const calcAmount = computed(() => (1 / props.data.Value).toFixed(4));
</script>

<style lang="scss" scoped>
.pair {
  display: flex;
  justify-content: flex-start;
  &__icon {
    margin-right: 5px;
  }
  &__char-code {
    margin-right: 10px;
  }
  &__info {
    margin-right: auto;
  }
  &__button {
    margin-left: 15px;
  }
  &__count {
    font-weight: bold;
  }
}
</style>
