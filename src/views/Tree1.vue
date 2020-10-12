<template>
	<ul>
		<li v-for="(item, index) in treedata" :key="index">
			<div @click="toggle(item)">
				<span>{{item.title}}</span> <span v-if="item.children && item.children.length">[{{ isOpen ? '-' : '+' }}]</span>
			</div>
			<tree v-show="isOpen" v-if='item.children' :treedata='item.children'></tree>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'tree',
		props: {
			treedata: Array
		},
		computed: {
			isFolder: function() {
				return true;
			}
		},
		data() {
			return {
				isOpen: false
			}
		},
		methods: {
			toggle(item) {
				if (item.children.length) {
					this.isOpen = !this.isOpen;
				}
				console.log(item.children.length)
			},
		}
	}
</script>

<style>
	ul {
		text-align: left;
	}
</style>
