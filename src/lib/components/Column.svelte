<script lang="ts">
	import type { ColumnComponents } from '$lib/types';

	let { weight, children }: ColumnComponents = $props();
</script>

<div class="column" style="flex: {weight}">
	{@render children()}
</div>
