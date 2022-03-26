//Navigation guard
import http from '@/http'

const guard = router => {
	router.beforeEach((to, next) => {
		http.get('/verification', res => {
			if (res.status && to.name !== 'Home') next()
			router.push({ name: 'Home' })
		})
	})
}

export default guard
