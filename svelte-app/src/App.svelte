<script lang="ts">
	import Navbar from "./Navbar.svelte";
	export let name: string;
</script>

<Navbar/>
<body>
	<h1>{name}</h1>
	<p> Test Code Color</p>
</body>

<style>
	body {
		background-color: #000000;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color:#CCCCCC;
		font-size: 4em;
		font-weight: 100;
		font-family: Noto Mono;
	}

	p {
		color: #00FF00;
		font-family: Noto Mono;
	}
</style>