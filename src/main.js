import { createApp } from 'vue'
import './styles2.css'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"

createApp(App)
    .use(router)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"