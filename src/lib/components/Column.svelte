<script lang="ts">
	import type { ColumnComponents } from '$lib/types';

	let { weight, children, noResize }: ColumnComponents = $props();
</script>

<div class="column" style={noResize ? 'flex-grow: 0; flex-shrink: 0' : `flex: ${weight}`}>
	{@render children()}
</div>
