<script lang="ts">
	let { children } = $props();
</script>

<div class="columns">
	{@render children()}
</div>

<style>
	div {
		display: flex;
		text-align: center;
	}

	@media (max-width: 480px) {
		div {
			flex-direction: column;
		}
	}
</style>
