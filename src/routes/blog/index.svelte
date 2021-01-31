<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
		width: 100%;
		font-weight: 600;
	}

	h2 {
		margin: 0;
	}

	a {
		text-decoration: none;
		font-weight: 600;
		color: #606060
	}

	article {
		margin: 2rem 0;
	}
</style>

<svelte:head>
	<title>recent posts</title>
</svelte:head>

<h1>recent posts</h1>

<div>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<article>
			<header>
				<h2><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></h2>
				<small>{post.date}</small>
			</header>
			<section>
				{post.description}
			</section>
		</article>
	{/each}
	</div>
