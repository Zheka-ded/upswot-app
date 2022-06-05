import { createRouter, createWebHistory } from 'vue-router'

import Default from '@/layouts/Default.vue'
import Auth from '@/layouts/Auth.vue'

import store from '@/store'

const routes = [
	{
		path: '/',
		name: 'default',
		component: Default,
		meta: { requiresAuth: true },
	},
	{
		path: '/auth/',
		name: 'auth',
		component: Auth,
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	// history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	const isAuthenticated = store.getters.isAuthenticated

	console.log('router', isAuthenticated)

	if (to.name !== 'auth' && !isAuthenticated) {
		next({ name: 'auth' })
	}	else {
		next()
	}
})


export default router