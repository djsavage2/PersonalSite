<script>
	import ContactMe from '../components/ContactMe.svelte';
import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: #F3F8F2;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		overflow: auto;
		padding-bottom: 180px;
	}

	.wrap {
		height: 100%;
		min-height: 100%;
	}
</style>

<div class="wrap">
	<Nav {segment}/>

	<main>
		<slot></slot>
	</main>
</div>

<ContactMe />