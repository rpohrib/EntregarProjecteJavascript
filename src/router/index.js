import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue'; // Canvia les rutes segons el teu projecte
import CalculadoraPage from '@/views/CalculadoraPage.vue'; // Pàgina de la calculadora
import FetchData from '@/views/FetchData.vue'; // Pàgina de Dades Fetch
import AxiosData from '@/views/AxiosData.vue'; // Pàgina de Dades Axios

const routes = [
  { path: '/', component: HomePage },
  { path: '/calculator', component: CalculadoraPage },
  { path: '/fetch-data', component: FetchData },
  { path: '/axios-data', component: AxiosData },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
