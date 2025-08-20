<script lang="ts">
	import type { ImageComponents, SlideshowComponents } from '$lib/types';
	import { Direction, DirectionReverse } from '$lib/types';

	let { sources, width, title }: SlideshowComponents = $props();

	let index: number = $state(0);
	let newIndex: number = $state(0);
	let frontImage: HTMLImageElement;
	let backImage: HTMLImageElement;
	let frontImageClass: string = $state('');

	function changeSource(direction: Direction) {
		if (frontImageClass == 'changing') {
			return;
		}
		switch (DirectionReverse[direction as Direction]) {
			case Direction.Next:
				newIndex = index;
				newIndex++;
				if (newIndex >= sources.length) {
					newIndex = 0;
				}
				break;
			case Direction.Back:
				newIndex = index;
				newIndex--;

				if (newIndex < 0) {
					newIndex = sources.length - 1;
				}
				break;
		}
		frontImageClass = 'changing';
		setTimeout(() => {
			index = newIndex;
			frontImageClass = '';
		}, 1000);
	}
</script>

<div class="slideshow-container">
	<img
		bind:this={backImage}
		src={sources[index]}
		style={width ? `max-width: ${width}px` : ''}
		alt={title}
	/>
	<img
		bind:this={frontImage}
		src={sources[newIndex]}
		style={width ? `max-width: ${width}px` : ''}
		alt={title}
		class={frontImageClass}
	/>
	<button aria-label="previous" onclick={() => changeSource(Direction.Back)}>
		<img class="previous-arrow" src="arrow_4_cropped.webp" alt="previous" />
	</button>
	<button aria-label="next" onclick={() => changeSource(Direction.Next)}>
		<img src="arrow_4_cropped.webp" alt="next" /></button
	>
</div>

<style>
	div {
		& > img:first-of-type {
			margin: 12px;
			align-self: center;
			width: calc(100% - 24px);
			border: 6px solid #ffcc6f;
			box-sizing: border-box;
		}
		& > img:last-of-type {
			opacity: 0;
			position: absolute;
			left: 17.5px;
			top: 17.5px;
			width: calc(100% - 35px);
			&.changing {
				opacity: 1;
				transition: opacity 1s;
			}
		}
	}
	.slideshow-container {
		width: fit-content;
		height: fit-content;
		position: relative;
	}
	button {
		appearance: none;
		padding: 0px;
		background: none;
		position: absolute;
		top: 50%;
		width: 40px;
		height: 40px;
		border: none;
		display: flex;
		justify-content: center;
		transform: translate(0px, -20px);
		&:first-of-type {
			left: 22px;
		}
		&:last-of-type {
			right: 22px;
		}
		& > img {
			width: 100%;
			object-fit: contain;
			transform: scale(0.9);
			&:hover {
				transform: scale(1);
			}
			&.previous-arrow {
				transform: scale(-0.9, 0.9);
				&:hover {
					transform: scale(-1, 1);
				}
			}
		}
		&:hover {
			cursor: pointer;
		}
	}
</style>
