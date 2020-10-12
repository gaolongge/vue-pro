<template>
  <div class="hello">
	<el-button>按需加载</el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
	'el-button': Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
