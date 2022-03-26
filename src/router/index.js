import { createRouter, createWebHistory } from 'vue-router'
import guard from '@/router/guard.js'

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
		name: 'EditOrder',
		path: '/edit-order',
		component: () => import('@/views/EditOrder.vue')
	},
	{
		name: 'AddItemOrder',
		path: '/add-item-order',
		component: () => import('@/views/AddItemOrder.vue')
	}, 
	{
		name: 'EditSchedule',
		path: '/edit-schedule',
		component: () => import('@/views/EditSchedule.vue')
	},
	{
		name: 'AddProduct',
		path: '/add-product',
		component: () => import('@/views/AddProduct.vue')
	},
	{
		name: 'Settings',
		path: '/settings',
		component: () => import('@/views/Settings.vue')
	},
	{
		name: 'ChangePassword',
		path: '/password',
		component: () => import('@/views/Password.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

//guard(router)

export default router
