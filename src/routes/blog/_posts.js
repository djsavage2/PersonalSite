// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: "Free Time Journal — Entry 1",
		date: "Published: January 30, 2021",
		description: "Shows I'm watching, Projects I'm working on, etc.",
		slug: "free-time-journal-1",
		html: `
			<p>This month has been a whirlwind for me. Starting my career in software has invigorated me to hone my skills and become a more well-rounded developer.</p>
			<p>I have thrown myself into a few frontend projects, but this personal site was the first that I've seen through. I was attracted to <a href="https://svelte.dev/">Svelte</a>
			by some videos I found through
			YouTube (thank you <a href="https://www.youtube.com/watch?v=xgER1OutVvU">Ben Awad</a>) and flew through the provided tutorial in just a couple days.</p>
			<p>I decided to embark on a personal site as my first real project. I stood up a couple drafts of this site using vanilla Svelte, just enough to get comfortable with the
			framework. For the final product, my first instinct was to grab a static site generator like <a href="https://elderguide.com/tech/elderjs/https://elderguide.com/tech/elderjs/">Elder.js</a>
			(which also supports SSR) initially, I decided exposing myself to Sapper for routing would be more valuable to me since Svelte's WIP official router, 
			<a href="https://svelte.dev/blog/whats-the-deal-with-sveltekit">SvelteKit</a>, is essentially a rewrite of Sapper.</p>
			<p>In the time I haven't spent in front of my computer screeen, I have largely been seated in front of my television's. This month I got my hands on HBO Max (thanks Ma!),
			and I have fallen in love with <em>Silicon Valley</em>. In fact, I only have the series finale left to watch as I write this out. I was initially hooked by the show's
			goofy depiction of nerd culture in the software industry, but the comedy has been what keeps me clicking on "Next Episode".</p>
			<p>I watched <em>Dead to Me</em> with my SO, Tess, on Netflix and we loved the first season. Unfortunately, the second season was lackluster, and we gave up on it after just two
			episodes. The direction and cinematography fell off a cliff, and we noticed an excessive amount of product placement shoehorned in.</p>
			<p>Netflix, you need to stop cashing out on your series after one decent season. Please.</p>
			<p>I found myself scrambling for any piece of information that could help me ramp up into my new gig. I got my hands on some reading material that has helped me out.
			Being human, I failed to recognize that my attention span was absolutely nuked by being locked indoors for what has been essentially the past year. As a result, 
			I made it through at most ~100 pages into any book I actually started on. Here is the list of what I've been reading lately:</p>
			<ul>
				<li class="listHeader reading"><span>Title</span> <span>Author</span> <span>Progress:</span></li>

				<li class="reading"><span>Clean Code (Reread)</span> <span>Uncle Bob</span> <span>Completed</span></li>
				<li class="reading"><span><a href="https://www.robmiles.com/c-yellow-book/">The C# Yellow Book</a></span> <span>Rob Miles</span> <span>Page: 120</span></li>
				<li class="reading"><span>Being Geek</span> <span>Michael Lopp</span> <span>Page: 75</span></li>
			</ul>
			<p>And what I've got on deck:</p>
			<ul>
				<li class="listHeader unread"><span>Title</span> <span>Author</span></li>

				<li class="unread"><span>Designing Data Intensive Applications</span> <span>Martin Kleppmann</span></li>
				<li class="unread"><span>The Imposter's Handbook</span> <span>Rob Conery</span></li>
				<li class="unread"><span>The Hitchhiker's Guide to the Galaxy (Reread)</span> <span>Douglas Adams</span></li>
				<li class="unread"><span>Refactoring - Improving the Design of Existing Code</span> <span>Martin Fowler</span></li>
				<li class="unread"><span>The Clean Coder</span> <span>Uncle Bob</span></li>
			</ul>
			<p>I'll try to update this on a monthly basis to keep me motivated and accountable. At some point I would like to start creating video dev logs 
			to post on YouTube. I also have been getting a lot of game dev videos recommended to me lately and would like to dip my toes in the water there, but that is not a high
			priority for me right now. Thanks for making it to the end!</p>
		`
	},
	
	{
		title: "Test Post",
		date: "Published: January 1, 1970",
		description: "Test",
		slug: "test-post",
		html: `
			<br />

			<h2>Test Post</h2>
		
			<p>This is an example of what a post may look like.</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
