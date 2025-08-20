<script lang="ts">
	import { page } from '$app/state';
	import { type MenuItemType } from '$lib/types';
	let { pageName, isHomePage }: MenuItemType = $props();
	// svelte-ignore non_reactive_update
	let path: string;
	if (isHomePage) {
		path = import.meta.env.BASE_URL;
	} else {
		path =
			import.meta.env.BASE_URL + pageName.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and');
	}
</script>

<li aria-current={page.url.pathname === path ? 'page' : undefined}>
	<a href={path}>{pageName}</a>
</li>

<style>
	li {
		/* font-weight: bold; */
		width: min-content;
		padding: 0px 6px;
		line-height: initial;
		white-space: nowrap;
		color: white; /* Make the fill color transparent */
		-webkit-text-stroke: 4px black; /* Stroke color and width */
		paint-order: stroke fill; /* Ensure stroke is drawn first */
		border: 4px solid rgba(255, 204, 111, 0%);
		& a {
			color: white;
			text-decoration: none;
		}
		&[aria-current='page'],
		&:has(a:hover) {
			background-color: rgba(0, 0, 0, 30%);
		}
		&[aria-current='page'] {
			border-color: rgba(0, 0, 0, 25%);
		}
	}

	@supports not (-webkit-text-stroke: 4px black) {
		li {
			color: white;
			text-shadow:
				-1px -1px 0 black,
				1px -1px 0 black,
				-1px 1px 0 black,
				1px 1px 0 black;
		}
	}
</style>
