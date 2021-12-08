import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Juan Pablo',
		lastname : 'Rodriguez Mendoza'
	}
});

export default app;