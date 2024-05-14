import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/pages/NotFound.vue'
import TimeSeriesPage from '@/pages/TimeSeriesPage.vue'
import TopStocksPage from '@/pages/TopStocksPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/top-stocks',
    name: 'TopStocks',
    component: TopStocksPage,
  },
  {
    path: '/time-series/:stockSymbol',
    name: 'TimeSeries',
    component: TimeSeriesPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
