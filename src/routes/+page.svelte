<script lang="ts">
	import SingleImage from '$lib/components/SingleImage.svelte';
	import DoubleBorder from '$lib/components/DoubleBorder.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<SingleImage source="/opera-info.webp" title="Opera Info" width={300} />

<DoubleBorder>
	<p>
		The Midnight Opera is an adult-only VRChat group that focuses on social events and live
		performances, ranging from acting and poetry to singing and dancing.
	</p>
	<Button link="https://vrc.group/MOPERA.1862" newTab>Join Our Group</Button>
</DoubleBorder>
<h1>Our Features</h1>
<DoubleBorder>
	<div class="grid">
		<div>
			<h1>Open Mic Nights</h1>
			<p>
				Want to make your voice heard? Come and perform at one of our Open Mic nights! We host one
				every other Saturday at 7pm CST.
			</p>
		</div>
		<div>
			<h1>Themed Bar and Music Nights</h1>
			<p>
				Join us every other Wednesday at 7pm CST for a themed bar night with music from the 50’s,
				musicals, and more.
			</p>
		</div>
		<div>
			<h1>Spotlight Solo Performances</h1>
			<p>
				Sometimes there’s just a talent that’s so good we need to give them the spotlight. Join us
				every other Friday at 7pm CST for an amazing show by even more amazing people.
			</p>
		</div>
		<div>
			<h1>Movie Nights</h1>
			<p>
				From time to time, we’ll all get together and watch a movie during our bar night that’s also
				in theme with the main event.
			</p>
		</div>
		<div>
			<h1>Stage Productions</h1>
			<p>Live music shows, improv shows and whatever else requires a stage and performing!</p>
		</div>
		<div>
			<h1>Quest Compatibility and Optimization</h1>
			<p>
				All virtual venues are Quest compatible and optimized. Lack of crashing and questies see the
				stage catch fire is a must!
			</p>
		</div>
	</div>
</DoubleBorder>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 480px) {
		.grid {
			display: flex;
			flex-direction: column;
		}
	}
</style>
