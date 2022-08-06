import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setup } from './services/firebase.service'

setup()

createApp(App).mount('#app')
