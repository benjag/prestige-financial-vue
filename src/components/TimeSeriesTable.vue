<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  items: Array<{
    date: string,
    open: string | number,
    high: string | number,
    low: string | number,
    close: string | number,
    volume: string | number,
  }>,
  symbol: string|string[],
}>()

const getSymbol = computed(() => {
  let symbol = null
  if (typeof props.symbol === 'string') {
    symbol = props.symbol.toUpperCase()
  }
  return symbol

})
</script>

<template>
  <div class="time-series-table__header">
    <img
      v-if="getSymbol"
      :src="`https://financialmodelingprep.com/image-stock/${getSymbol}.png`"
      class="time-series-table__header-image"
    >
    <h1>MSFT Historical Prices</h1>
  </div>
  <table class="time-series-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Open</th>
        <th>High</th>
        <th>Low</th>
        <th>Close</th>
        <th>Volume</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items.slice().reverse()" :key="item.date">
        <td>{{ item.date }}</td>
        <td>{{ item.open }}</td>
        <td>{{ item.high }}</td>
        <td>{{ item.low }}</td>
        <td>{{ item.close }}</td>
        <td>{{ item.volume }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.time-series-table {
  width: 100%;
  th,
  td {
    padding: 2px 40px 2px 0;
  }
}

.time-series-table__header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.time-series-table__header-image {
  width: 32px;
  height: 32px;
  margin-right: 16px;
}
</style>
