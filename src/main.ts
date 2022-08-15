import { createApp } from 'vue'
import App from './App.vue'
import { setup as setupFirebase } from '@/services/firebase.service'

setupFirebase()

createApp(App).mount('#app')
