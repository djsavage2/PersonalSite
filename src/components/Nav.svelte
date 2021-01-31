<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid #80808060;
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #000;
		display: block;
		bottom: -1px;
	}

	div.nav {
		float: right;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	.logo {
		padding: 1em 0.5em;
		position: absolute;
	}

	.blink {
		animation: blinker 1s steps(1, end) infinite;
	}

	@keyframes blinker {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

<nav>
	<a class="logo" href="./">{'>'} dakota savage<span class="blink">_</span></a>
	<ul>
		<div class="nav">
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
			<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
		</div>
	</ul>
</nav>
