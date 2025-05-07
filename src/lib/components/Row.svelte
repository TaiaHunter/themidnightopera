<script lang="ts">
	let { children } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: flex;
		/* width: max-content; */
	}

	@media (max-width: 480px) {
		div {
			flex-direction: column;
		}
	}
</style>
