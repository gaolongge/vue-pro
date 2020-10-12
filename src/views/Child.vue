<template>
	<div>
		<header>
			<slot name="header" :user="user" ts='ssd12'></slot>
		</header>
		<main>
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
		<div>
			{{pname}} {{obj}}
			<p>{{childV}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		inject: ['pname', 'obj'],
		data() {
			return {
				user: {
					firstname: '我十点二级',
					lastname: '我ddsd技术的空地上',
				},
				childV: ''
			}
		},
		created() {
			this.childV = this.pname
			console.log(this.pname)
		}
	}
</script>

<style>
</style>
