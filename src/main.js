import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'

import 'bootstrap-icons/font/bootstrap-icons.css';


const app = createApp(App)

registerPlugins(app)

app.mount('#app')

// npx json-server db.json
