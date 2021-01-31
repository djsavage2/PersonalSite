<script>
	import ContactMe from '../components/ContactMe.svelte';
import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: #fff;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		overflow: auto;
	}

	.wrap {
		height: auto;
		min-height: calc(100% - 3.5rem);
		width: 100%;
		display: inline-block;
	}
</style>

<div class="wrap">
	<Nav {segment}/>

	<main>
		<slot></slot>
	</main>
</div>

<ContactMe />