<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(h3) {
		padding: 1rem 0 0 0;
	}

	.content :global(pre) {
		background-color: #77216f;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		padding: 0;
		color: #f0f0f0;
	}

	.content :global(ul) {
		line-height: 1.5;
		padding: 1rem 0;
	}

	.content :global(.reading) {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto 1fr;
	}

	.content :global(.unread) {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr;
	}

	.content :global(.listHeader) {
		font-weight: 600;
		text-decoration: underline;
		grid-row-start: 1;
		grid-row-end: 2;
		grid-column-start: 1;
		grid-column-end: 3;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
		padding: 0.4rem 0;
		grid-row-start: 2;
		grid-row-end: 3;
	}

	.content :global(li>span) {
		text-align: center;
	}
	
	.content :global(a) {
		color: #6699cc;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<subtitle>{post.date}</subtitle>

<div class="content">
	{@html post.html}
</div>
