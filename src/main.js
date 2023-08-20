import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import ProductPage from './components/ProductPage';
import MainPage from './components/MainPage';

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/details/:id', component: ProductPage },
  ],
});

app.use(pinia);
app.use(router);

app.mount('#app');