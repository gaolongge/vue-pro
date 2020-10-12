export default {
  name: 'Test',
  render(createElement) {
	console.log(createElement, 'createElement');
	return (
		<div>jsx</div>
	)
  }
}