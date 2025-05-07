<script lang="ts">
	import type { ImageComponents } from '$lib/types';

	let { source, width, title }: ImageComponents = $props();
</script>

<img src={source} style={width ? `max-width: ${width}px` : ''} alt={title} />

<style>
	img {
		margin: 12px;
		align-self: center;
		width: 100%;
		border: 6px solid #ffcc6f;
		box-sizing: border-box;
	}
</style>
