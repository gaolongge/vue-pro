let Vue;

class HistoryRoute {
	constructor() {
		// 记录当前路由的url变化的值
		this.current = null
	}
}
class VueRouter {
	constructor(options) {
		// 模式： mode, history
		this.mode = options.mode || 'hash'
		// routes数组，路由列表
		this.routes = options.routes || []
		// routes转换Map，方便操作
		this.routeMap = this.createMap(this.routes)
		console.log(this.routeMap, 'this.routeMap')
		this.history = new HistoryRoute()
		this.init()
	}
	createMap(routes) {
		return routes.reduce((pre, current) => {
			pre[current.path] = current.component
			return pre
		}, {})
	}
	init() {
		if (this.mode === 'hash') {
			// hash模式
			// 先判断用户打开时有没有hash值，没有的话跳转到 #/
			location.hash ? '' : location.hash = '/'
			window.addEventListener('hashchange', () => {
				// 记录当前的hash值
				// console.log(location.hash.slice(1), 'hashchange')
				this.history.current = location.hash.slice(1)
			})
			// 页面第一次加载时，不会触发hashchange事件，无法监听到，
			window.addEventListener('load', () => {
				// 记录当前的hash值
				this.history.current = location.hash.slice(1)
			})
		} else {
			// history模式
			location.pathname ? '' : location.pathname = "/",
			window.addEventListener('popstate', (e) => {
				e.preventDefault()
				// 记录当前的history值
				this.history.current = location.pathname
			})
			// 页面第一次加载时，不会触发popstate事件，无法监听到，
			window.addEventListener('load', () => {
				// 记录当前的hash值
				this.history.current = location.pathname
			})
		}
	}
}
VueRouter.install = function(v) {
	// install 给每个vue实例添加东西
	Vue = v
	Vue.mixin({
		beforeCreate() {
			// 在mainjs中 new Vue()时，在根组件中挂载了VueRouter的实例router
			// 如果是根组件
			if (this.$options && this.$options.router) {
				// 把当前实例挂载根 _routerRoot 上
				this._routerRoot = this
				// 把router实例挂载到当前组件实例上
				this._router = this.$options.router
				Vue.util.defineReactive(this, "_route", this._router.history)
			} else {
				// 如果是子组件, 给子组件挂载根routerRoot
				this._routerRoot = this.$parent && this.$parent._routerRoot
			}

			//  给组件挂载router实例信息
			Object.defineProperty(this, '$router', {
				get() {
					return this._routerRoot._router
				}
			})
			// 给组件挂载route信息
			Object.defineProperty(this, '$route', {
				get() {
					return this._routerRoot._router.history.current
				}
			})
		}
	})

	//新增代码
	Vue.component('router-link', {
		props: {
			to: String
		},
		render(h) {
			let mode = this._self._routerRoot._router.mode;
			let to = mode === "hash" ? "#/" + this.to : this.to
			return h('a', {
				attrs: {
					href: to
				}
			}, this.$slots.default)
		}
	})
	Vue.component('router-view', {
		render(h) {
			// this 指proxy，this._self 指向当前组件
			let current = this._self._routerRoot._router.history.current
			let routeMap = this._self._routerRoot._router.routeMap;
			return h(routeMap[current])
		}
	})

}

export default VueRouter
