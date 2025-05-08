<script lang="ts">
	import type { ColumnsComponents } from '$lib/types';

	let { reversed, children }: ColumnsComponents = $props();
</script>

<div class="columns" style={reversed ? '--flex-direction: row-reverse' : '--flex-direction: row'}>
	{@render children()}
</div>

<style>
	div {
		display: flex;
		text-align: center;
		flex-direction: var(--flex-direction);
	}

	@media (max-width: 480px) {
		div {
			flex-direction: column;
		}
	}
</style>
