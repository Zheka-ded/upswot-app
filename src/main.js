import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/styles.scss'

import componentsPlugin from './plugins/components'

const app = createApp(App)
	.use(router)
	.use(store)
	.use(componentsPlugin)


store.dispatch('login', localStorage.getItem('isAuthenticated'))

if(localStorage.getItem('user')) {
	store.dispatch('login', JSON.parse(localStorage.getItem('user')))
}

app.mount("#app");
