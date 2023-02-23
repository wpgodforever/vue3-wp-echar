import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'

const store = createPinia()
let app = createApp(App)
app.use(store)

app.mount('#app')
