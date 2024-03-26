import { createApp } from 'vue'
import router from './router/index.js'
// import axios from 'axios';
import App from './App.vue'


// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
// app.provide('$axios', axios)
// app.config.globalProperties.$axios = axios
