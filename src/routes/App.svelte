<script lang="ts">
	import Navbar from "../components/Navbar.svelte";
	export let name: string;
</script>

<Navbar/>
<body>
	<h1>{name}</h1>
	<p>Test Code Color</p>
</body>

<style lang="scss">
	$terminal-black: #000000;
	$terminal-white: #CCCCCC;
	$terminal-green: #00FF00;

	body {
		background-color: $terminal-black;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: $terminal-white;
		font-size: 4em;
		font-weight: 100;
		font-family: Noto Mono;
	}

	p {
		color: $terminal-green;
		font-family: Noto Mono;
	}
</style>