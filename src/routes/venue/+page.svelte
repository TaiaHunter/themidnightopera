<script lang="ts">
	import Slideshow from './../../lib/components/Slideshow.svelte';
	import Column from '$lib/components/Column.svelte';
	import Columns from '$lib/components/Columns.svelte';
	import DoubleBorder from '$lib/components/DoubleBorder.svelte';
	import SingleImage from '$lib/components/SingleImage.svelte';

	const theMidnightOperaImages: string[] = [
		'/venues/the-midnight-opera/img1.png',
		'/venues/the-midnight-opera/img2.png',
		'/venues/the-midnight-opera/img3.png',
		'/venues/the-midnight-opera/img4.png',
		'/venues/the-midnight-opera/img5.png',
		'/venues/the-midnight-opera/img6.png',
		'/venues/the-midnight-opera/img7.png',
		'/venues/the-midnight-opera/img8.png'
	];

	const taiaHunterProductionsImages: string[] = [
		'/venues/taia-hunter-productions/img1.png',
		'/venues/taia-hunter-productions/img2.png',
		'/venues/taia-hunter-productions/img3.png',
		'/venues/taia-hunter-productions/img4.png',
		'/venues/taia-hunter-productions/img5.png',
		'/venues/taia-hunter-productions/img6.png',
		'/venues/taia-hunter-productions/img7.png',
		'/venues/taia-hunter-productions/img8.png',
		'/venues/taia-hunter-productions/img9.png',
		'/venues/taia-hunter-productions/img10.png'
	];
</script>

<h1 id="The Midnight Opera">The Midnight Opera</h1>
<Columns>
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
	<Column noResize>
		<Slideshow sources={theMidnightOperaImages} title="The Midnight Opera" width={400} />
	</Column>
</Columns>

<h1 id="Taia Hunter Productions">Taia Hunter Productions</h1>
<Columns>
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
	<Column noResize>
		<Slideshow sources={taiaHunterProductionsImages} title="The Midnight Opera" width={400} />
	</Column>
</Columns>
