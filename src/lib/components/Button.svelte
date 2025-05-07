<script lang="ts">
	import type { ButtonComponents } from '$lib/types';

	let { link, newTab, customSVG, displayBlock, children }: ButtonComponents = $props();
</script>

<a
	href={link}
	target={newTab ? '_blank' : undefined}
	style={displayBlock ? 'display: block;' : undefined}
>
	<button>
		<div>
			{@render children()}

			{#if !customSVG}
				<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
					<g stroke="currentColor" stroke-width="5" stroke-linecap="round">
						<line x1="2.5" y1="30" x2="197.5" y2="30" />
						<line x1="197.5" y1="30" x2="160" y2="2.5" />
						<line x1="197.5" y1="30" x2="160" y2="57.5" />
					</g>
				</svg>
			{/if}
		</div>
	</button>
</a>

<style>
	a {
		text-decoration: none;
		flex: 1;
		display: flex;
		justify-self: center;
	}

	button {
		appearance: none;
		background: none;
		color: white;
		padding: 0px;
		flex: 1;
		display: flex;
		justify-self: center;
		/* width: calc(100% - 24px); */
		/* margin: 20px; */

		border: 3.5px solid #ffcc6f;
		text-transform: uppercase;

		margin: 12px;
		font-family: 'Poltawski Nowy';
		& > div {
			/* width: calc(100% - 24px - 7px - 16px - 28px); */
			margin: 8px;
			flex: 1;
			/* padding: 6px; */
			text-align: center;
			border: 3px solid #ffcc6f;

			display: inline-flex; /* Use flexbox for horizontal alignment */
			align-items: center; /* Center items vertically */
			justify-content: center;
			padding: 16px 28px;
			border: 2px solid #ffcc6f;
			text-align: center;
			font-size: 0.95rem;
			transition:
				background-color 0.3s,
				color 1s,
				border-color 1s;

			& > svg {
				width: auto;
				/* aspect-ratio: 200 / 60; */
				height: 0.8em;
				vertical-align: middle; /* This can be removed with flexbox */
				transform: translate(0, -1px);
				padding-left: 0.5em;
				transition: height 0.3s;
			}
		}
		&:hover {
			background-color: rgba(255, 204, 111, 25%);
			cursor: pointer;

			& svg {
				height: 1em;
			}
		}
	}
</style>
