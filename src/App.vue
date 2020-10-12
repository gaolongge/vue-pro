<template>
	<div id="app">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<h1>
			<router-link to="home">Home</router-link>
			<router-link to="about">About</router-link>
		</h1>
		<router-view></router-view>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	export default {
		name: 'App',
		components: {
			HelloWorld,
		},
		data() {
			return {
				input: '',
			}
		},
		created() {
			console.log(this.$router, this.$route)
		},
		mounted() {
		},
		methods: {
		}
	}
</script>
