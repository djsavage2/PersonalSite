import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		version: 'v0.1',
		name: "Dakota Savage"
	}
});

export default app;