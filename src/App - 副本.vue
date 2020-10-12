<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<Parent />
		<button @click="handTh">函数节流</button>
		<input @input="handInput" v-model="input"/>
		<Test />
		<ul>
			<TreeItem :treedata='data'></TreeItem>
		</ul>
		<br />
		<br />
		<br />
		<TreeItem1 :treedata='data1'></TreeItem1>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	import Parent from '@/views/Parent'
	import Test from '@/views/Test'
	import TreeItem from '@/views/Tree'
	import TreeItem1 from '@/views/Tree1'
	import api from '@/api'

import * as utils from '@/utils'
	export default {
		name: 'App',
		components: {
			HelloWorld,
			Parent,
			Test,
			TreeItem,
			TreeItem1,
		},
		data() {
			return {
				input: '',
				data: {
					title: '一级title--1',
					children: [{
							title: '二级title--1',
							children: [{
									title: '三级title--1',
								},
								{
									title: '三级title--2',
								},
								{
									title: '三级title--3',
								}
							]
						},
						{
							title: '二级title--2',
							children: [{
									title: '三级title--31111111111',
								},
								{
									title: '三级title--444444444444111111',
								},
								{
									title: '三级title--565555555111111',
								},
							]
						},
						{
							title: '二级title--3',
						}
					]
				},
				data1: [{
						title: '一级title--1',
						children: [{
								title: '二级title--1',
								children: [{
										title: '三级title--1',
									},
									{
										title: '三级title--2',
									},
									{
										title: '三级title--3',
									}
								]
							},
							{
								title: '二级title--2',
								children: [{
										title: '三级title--31111111111',
									},
									{
										title: '三级title--444444444444111111',
									},
									{
										title: '三级title--565555555111111',
									},
								]
							},
							{
								title: '二级title--3',
							}
						]
					},
					{
						title: '1212'
					}
				]
			}
		},
		mounted() {
			// this.getData()
		},
		methods: {
			getData() {
				api.queryList({
					organizationInfoExt: {},
					pageNum: 0,
					pageSize: 0
				}).then(res => {
					console.log(res, 999)
				});
				api.queryRoleList({
					adminInfoExt: {
						orderBy: "create_time desc"
					},
					pageNum: 1,
					pageSize: 10
				}).then(res => {
					console.log(res, 999)
				})
			},
			handInput:utils.Debounce(function(){
				console.log(1, this.input)
			}, 5000),
			handTh:utils.Throttle(function(){
				console.log(1,this)
			},1000),
			handle() {
				console.log(1)
			},
		
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
