import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import componentsPlugin from './plugins/components'

const app = createApp(App)
	.use(router)
	.use(componentsPlugin)

app.mount("#app");
