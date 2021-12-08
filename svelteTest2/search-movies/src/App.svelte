<script>
	export let name;
	export let lastname;
	// Alos 2 segundos, queremos que name pasae a ser frotener
	setTimeout(function(){
		name = 'frotener'
	},2000)
</script>

<main>
	<h1>Hola {name} {lastname}!</h1>
	<p>Loco loco <a href="https://svelte.dev/tutorial">YEaaaaa</a> Pero esto es javascript, todo se ejecuta aqui</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>