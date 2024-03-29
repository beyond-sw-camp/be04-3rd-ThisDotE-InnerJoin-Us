import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.js'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import axios from 'axios'

const app = createApp(App);
app.config.globalProperties.$axios = axios
app.use(router);
app.use(BootstrapVue3)
app.mount('#app');