import Vue from 'vue'
// https://www.cnblogs.com/wisewrong/p/11497394.html
export let store = Vue.observe({
  count: 0,
  name: '张三'
});
export let mutation = {
	setCount(count) {
	   store.count = count
	},
	changeName(name) {
	   store.name = name
	}
}