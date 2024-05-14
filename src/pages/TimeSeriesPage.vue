<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import TimeSeriesTable from '@/components/TimeSeriesTable.vue'
import type { StockData, MonthlyTimeSeries } from '@/types/interfaces'

const route = useRoute()

const stockSymbol = route.params.stockSymbol

const data = ref<null | StockData>(null)

const fetchStockData = async (fetchUrl: string): Promise<StockData> => {
  return await fetch(fetchUrl)
    .then((data) => data.json())
    .then((data) => data)
}

onMounted(async () => {
  // import our API key and check if we're in prod, if not use the dev api
  const apiKey = import.meta.env.VITE_APP_ALPHA_ADVANTAGE_API_KEY
  const fetchUrl = import.meta.env.prod
    ? `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stockSymbol}&apikey=${apiKey}`
    : 'http://jon.allocate.build/msft.json'
  data.value = await fetchStockData(fetchUrl)
})

const transformedData = computed(() => {
  const series: MonthlyTimeSeries|null = data.value && data.value['Monthly Time Series']
  return series && Object.keys(series).map((date) => {
    const entry = series[date]
    return {
      date,
      open: entry['1. open'],
      high: entry['2. high'],
      low: entry['3. low'],
      close: entry['4. close'],
      volume: entry['5. volume'],
    }
  })
})
</script>

<template>
  <div class="time-series-container">
    <TimeSeriesTable v-if="transformedData" :items="transformedData" :symbol="stockSymbol" />
  </div>
</template>

<style type="scss" scoped>
.home-container {
  background-color: white;
}
.time-series-container {
  margin: 0 auto;
  width: 75vw;
}
</style>
