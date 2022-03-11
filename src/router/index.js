import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: () => import('@/views/Login.vue')
	},
	{
		name: 'Products',
		path: '/products',
		component: () => import('@/views/Products.vue')
	},
	{
		name: 'Notification',
		path: '/notification',
		component: () => import('@/views/Notification.vue')
	},
	{
		name: 'Orders',
		path: '/orders',
		component: () => import('@/views/Orders.vue')
	},
	{
		name: 'CreateProduct',
		path: '/create-product',
		component: () => import('@/views/CreateProduct.vue')
	},
	{
		name: 'EditOrder',
		path: '/edit-order',
		component: () => import('@/views/EditOrder.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
