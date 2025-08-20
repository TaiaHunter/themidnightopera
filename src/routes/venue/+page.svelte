<script lang="ts">
	import Slideshow from './../../lib/components/Slideshow.svelte';
	import Column from '$lib/components/Column.svelte';
	import Columns from '$lib/components/Columns.svelte';
	import DoubleBorder from '$lib/components/DoubleBorder.svelte';
	import SingleImage from '$lib/components/SingleImage.svelte';

	const theMidnightOperaImages: string[] = [
		`/venues/the-midnight-opera/img1.webp`,
		`/venues/the-midnight-opera/img2.webp`,
		`/venues/the-midnight-opera/img3.webp`,
		`/venues/the-midnight-opera/img4.webp`,
		`/venues/the-midnight-opera/img5.webp`,
		`/venues/the-midnight-opera/img6.webp`,
		`/venues/the-midnight-opera/img7.webp`,
		`/venues/the-midnight-opera/img8.webp`
	];

	const taiaHunterProductionsImages: string[] = [
		`/venues/taia-hunter-productions/img1.webp`,
		`/venues/taia-hunter-productions/img2.webp`,
		`/venues/taia-hunter-productions/img3.webp`,
		`/venues/taia-hunter-productions/img4.webp`,
		`/venues/taia-hunter-productions/img5.webp`,
		`/venues/taia-hunter-productions/img6.webp`,
		`/venues/taia-hunter-productions/img7.webp`,
		`/venues/taia-hunter-productions/img8.webp`,
		`/venues/taia-hunter-productions/img9.webp`,
		`/venues/taia-hunter-productions/img10.webp`
	];
</script>

<h1 id="the-midnight-opera">The Midnight Opera</h1>
<Columns reversed>
	<Column noResize>
		<Slideshow sources={theMidnightOperaImages} title="The Midnight Opera" width={400} />
	</Column>
	<Column weight={1}>
		<DoubleBorder>
			<p>
				The midnight opera is a VRChat world commissioned by Taia_Hunter, and then made by Rinvo.
			</p>
			<p>The world is optimized and quest compatible.</p>
			<p>
				There are all sorts of props, backdrops and particles to mix and match into all sorts of
				stage sets.
			</p>
			<p>
				At the end of the day, we are a theatre and hope to bring magic and imagination that a real
				theatre can into the VR Space.
			</p>
		</DoubleBorder>
	</Column>
</Columns>

<h1 id="taia-hunter-productions">Taia Hunter Productions</h1>
<Columns>
	<Column noResize>
		<Slideshow sources={taiaHunterProductionsImages} title="The Midnight Opera" width={400} />
	</Column>
	<Column weight={1}>
		<DoubleBorder>
			<p>
				Taia Hunter Productions is a world in progress. Commissioned by Taia_Hunter, and currently
				being built by ZarcxD.
			</p>
			<p>
				THP is meant to be for the Wednesday bar nights only. A smaller venue as well as an art
				gallery, featuring Taia's work.
			</p>
			<p>At the moment the world is still in the very early stages, and not open to the public.</p>
		</DoubleBorder>
	</Column>
</Columns>
