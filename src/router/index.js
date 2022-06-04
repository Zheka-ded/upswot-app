import { createRouter, createWebHistory } from 'vue-router'

import Default from '@/layouts/Default.vue'
import Auth from '@/layouts/Auth.vue'

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
	routes,
})

router.beforeEach((to, from, next) => {
	const isAuthenticated = false

	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!isAuthenticated) {
			next({
				name: 'auth',
				query: { next: to.fullPath },
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

export default router