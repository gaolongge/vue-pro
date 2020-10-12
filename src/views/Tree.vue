<template>
	<li>
		<div @click="toggle()">
			<span>{{treedata.title}}</span>
			<span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
		</div>
		<ul v-show="isOpen" v-if="treedata.children">
			<tree :treedata='child' :key='index' v-for="(child, index) in treedata.children"></tree>
		</ul>
	</li>
</template>

<script>
	export default {
		name: 'tree',
		props: {
			treedata: Object
		},
		data() {
			return {
				isOpen: false
			};
		},
		computed: {
			isFolder() {
				return this.treedata.children && this.treedata.children.length;
			}
		},
		methods: {
			toggle() {
				if (this.isFolder) {
					this.isOpen = !this.isOpen;
				}
				console.log(this.isFolder)
			},
		}
	}
</script>

<style>
	ul {
		text-align: left;
	}
</style>
