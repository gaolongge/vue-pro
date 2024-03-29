import Vue from 'vue'
import VueRouter from './mgRouter.js'
// import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
		path: '/home',
		component: () => import('@/views/Home')
	},
	{
		path: '/about',
		component: () => import('@/views/About')
	}
]

const router = new VueRouter({
	mode: 'hash',
	routes // (缩写) 相当于 routes: routes
})

export default router
