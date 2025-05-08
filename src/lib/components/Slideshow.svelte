<script lang="ts">
	import type { ImageComponents, SlideshowComponents } from '$lib/types';
	import { Direction, DirectionReverse } from '$lib/types';

	let { sources, width, title }: SlideshowComponents = $props();

	let index: number = $state(0);

	function changeSource(direction: Direction) {
		switch (DirectionReverse[direction as Direction]) {
			case Direction.Next:
				index++;
				if (index >= sources.length) {
					index = 0;
				}
				break;
			case Direction.Back:
				index--;

				if (index < 0) {
					index = sources.length - 1;
				}
				break;
		}
	}
</script>

<div class="slideshow-container">
	<button aria-label="previous" onclick={() => changeSource(Direction.Back)}>
		<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
			<g stroke="currentColor" stroke-width="20" stroke-linecap="square">
				<line x1="97.5" y1="2.5" x2="2.5" y2="50" />
				<line x1="97.5" y1="97.5" x2="2.5" y2="50" />
			</g>
		</svg>
	</button>
	<img src={sources[index]} style={width ? `max-width: ${width}px` : ''} alt={title} />
	<button aria-label="next" onclick={() => changeSource(Direction.Next)}>
		<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
			<g stroke="currentColor" stroke-width="20" stroke-linecap="square">
				<line x1="2.5" y1="2.5" x2="97.5" y2="50" />
				<line x1="2.5" y1="97.5" x2="97.5" y2="50" />
			</g>
		</svg>
	</button>
</div>

<style>
	img {
		margin: 12px;
		align-self: center;
		width: 100%;
		border: 6px solid #ffcc6f;
		box-sizing: border-box;
	}
	.slideshow-container {
		width: fit-content;
		height: fit-content;
		position: relative;
	}
	button {
		appearance: none;
		padding: 0px;
		color: #ffcc6f;
		position: absolute;
		top: 50%;
		width: 30px;
		height: 40px;
		background-color: rgba(255, 204, 111, 50%);
		border: 4px solid #ffcc6f;
		display: flex;
		justify-content: center;
		transform: translate(0px, -20px);
		&:first-of-type {
			left: 22px;
		}
		&:last-of-type {
			right: 22px;
		}
		& > svg {
			width: 60%;
			height: auto;
		}
		&:hover {
			cursor: pointer;
		}
	}
</style>
