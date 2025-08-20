<script lang="ts">
	import DoubleBorder from '$lib/components/DoubleBorder.svelte';
	import SingleImage from '$lib/components/SingleImage.svelte';
	import { onMount } from 'svelte';
	let calendarUrl = $state(
		'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=N2FiNjZkZmM5ZmIwYjA0ZGYxYTA4N2I2MGY0YWZjYTMzNzgyMTgwZWY4NTE2ZjdiODczZjgyOTI5YTMwNmRjMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237cb342'
	);

	let userTimeZone = $state('');

	onMount(() => {
		// Get the user's local time zone
		userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

		// Create a new URL object from the original link
		const url = new URL(
			'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=N2FiNjZkZmM5ZmIwYjA0ZGYxYTA4N2I2MGY0YWZjYTMzNzgyMTgwZWY4NTE2ZjdiODczZjgyOTI5YTMwNmRjMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237cb342'
		);

		// Update the 'ctz' parameter with the user's time zone
		url.searchParams.set('ctz', userTimeZone);

		// Return the updated link
		calendarUrl = url.toString();
	});
</script>

<h1>Event Calendar</h1>
<DoubleBorder>
	<iframe
		title="The Midnight Opera Upcoming Events"
		src={calendarUrl}
		style="border-width:0"
		class="rounded"
		width="620"
		height="400"
		frameborder="0"
		scrolling="no"
	></iframe>
</DoubleBorder>
<p class="footnote">
	*Displaying events in the local timezone for {userTimeZone}.
</p>
<h1>Upcoming Solo Performance</h1>
<SingleImage source="/events/adzy_slayer.webp" title="Upcoming Solo Performance" width={300}
></SingleImage>

<style>
	iframe {
		width: calc(100% - var(--margins));
		aspect-ratio: 14 / 9;
		height: auto;
		padding: var(--half-margin);
		margin: -var(--half-margin);
	}
	@media (max-width: 700px) {
		iframe {
			aspect-ratio: 1/1;
		}
	}
	@media (max-width: 600px) {
		iframe {
			aspect-ratio: 5/6;
		}
	}
	@media (max-width: 480px) {
		iframe {
			aspect-ratio: 3 / 4;
		}
	}
	@media (max-width: 320px) {
		iframe {
			width: min-content;
		}
	}
</style>
