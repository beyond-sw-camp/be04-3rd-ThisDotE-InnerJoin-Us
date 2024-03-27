import { createApp } from 'vue'

import router from './router/index.js'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App);
app.provide('$axios', axios);
app.use(router);
app.mount('#app');
