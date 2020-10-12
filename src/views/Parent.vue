<template>
	<div>
		<childs>
			<template v-slot:header='slotProps'>
				<h3>我是头部</h3>
				<p>姓名：{{slotProps.user.firstname}}</p>
				<p>姓名：{{slotProps}}</p>
			</template>
			<template v-slot:default>
				<h3>我是内容</h3>
			</template>
			<template v-slot:footer>
				<h3>我是尾部</h3>
			</template>
		</childs>
		<div>
			<el-button @click='handFn'>测试，插槽作用域，福及组件是否可以改变子级组件的值</el-button>
		</div>
	</div>
</template>

<script>
	import Childs from '@/views/Child.vue'
	import { Button } from 'element-ui'
	// import {}
	export default {
		provide() {
			return {
				pname: 'pppp附加provide',
				pvalue: 'pppp附加pvalue',
				obj: this.a
			}
		},
		data() {
			return {
				a: 123
			}
		},
		components: {
			Childs,
			'el-button': Button
		},
		methods: {
			handFn() {
				this.a = new Date().getTime()
			}
		}
	}
</script>

<style>
</style>
