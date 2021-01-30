// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: "How I Use my Free Time",
		date: "Last Updated: January 30, 2021",
		description: "Shows I'm streaming, Projects I'm working on, etc.",
		slug: "free-time-journal",
		html: `
			<h3>Entry: January 30, 2021</h3>
			
			<p>This month has been a whirlwind for me. Starting my career in software has invigorated me to hone my skills and become a more well-rounded developer.</p>
			<p>I have thrown myself into a few frontend projects, but this personal site was the first that I've seen through. I was attracted to <a href="https://svelte.dev/">Svelte</a>
			by some videos I found through
			YouTube (thank you <a href="https://www.youtube.com/watch?v=xgER1OutVvU">Ben Awad</a>) and flew through the provided tutorial in just a couple days.</p>
			<p>I decided to embark on a personal site as my first real project. I stood up a couple drafts of this site using vanilla Svelte, just enough to get comfortable with the
			framework. For the final product, my first instinct was to grab a static site generator like <a href="https://elderguide.com/tech/elderjs/https://elderguide.com/tech/elderjs/">Elder.js</a>
			(which also supports SSR) initially, I decided exposing myself to Sapper for routing would be more valuable to me since Svelte's WIP official router, 
			<a href="https://svelte.dev/blog/whats-the-deal-with-sveltekit">SvelteKit</a>, is essentially a rewrite of Sapper.</p>
			<p>In the time I haven't spent in front of my computer screeen, I have largely been seated in front of my television's. This month, thanks to getting my hands on HBO Max
			(thanks Ma!), I flew through Silicon Valley. In fact, I only have the series finale remaining as I write this out. While I was initially hooked by the depiction of 
			"nerd culture", the humour of the show proved to be second to none. On Netflix I watched Dead to Me with my SO, Tess, and we loved the first season. Unfortunately, the
			second season was lackluster, and we gave up on it after just two episodes. The direction and cinematography fell off a cliff, and we noticed an excessive amount of
			product placement shoehorned in.</p>
			<p>Netflix, you need to stop cashing out on your series after one decent season. Please.</p>
			<p>I found myself scrambling for any piece of information that could help me ramp up into my new gig. I got my hands on some reading material that has helped me out.
			Being human, I failed to recognize that my attention span was absolutely nuked by being locked indoors for what has been essentially the past year. As a result, 
			I made it through at most ~100 pages into any book I actually started on. Here is the list of what I've been reading lately:</p>
			<ul>
				<li class="listHeader reading"><span>Title</span> <span>Author</span> <span>Progress:</span></li>

				<li class="reading"><span>Clean Code (Reread)</span> <span>Uncle Bob</span> <span>Completed</span></li>
				<li class="reading"><span><a href="https://www.robmiles.com/c-yellow-book/">C# Yellow Book</a></span> <span>Rob Miles</span> <span>Page: 120</span></li>
				<li class="reading"><span>Being Geek</span> <span>Michael Lopp</span> <span>Page: 75</span></li>
			</ul>
			<p>and here's what I've got on deck:</p>
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
		title: "Building this Site - WIP",
		date: "Published: TBD",
		description: "How a backend engineer makes a portfolio site.",
		slug: "making-this-site",
		html: `
			<p>This is an example of what a post may look like.</p>
			<p>I will make an effort to write this out later.</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
