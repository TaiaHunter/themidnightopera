<script lang="ts">
	import Header from './Header.svelte';

	import '$lib/app.css';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>© 2025 Erika Gozar. All Rights Reserved.</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1000px;
		box-sizing: border-box;
		margin: 0px auto;
		padding: 20px;
	}
</style>
