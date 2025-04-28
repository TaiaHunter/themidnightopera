<script lang="ts">
	import type { ImageComponents, SlideshowComponents } from '$lib/types';

	let { sources, width, title }: SlideshowComponents = $props();
</script>

<img src={sources[0]} style={width ? `max-width: ${width}px` : ''} alt={title} />

<style>
	img {
		margin: 12px;
		align-self: center;
		width: 90%;
		border: 6px solid #ffcc6f;
		box-sizing: border-box;
	}
</style>
