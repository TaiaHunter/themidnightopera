<script lang="ts">
	import Column from '$lib/components/Column.svelte';
	import Columns from '$lib/components/Columns.svelte';
	import DoubleBorder from '$lib/components/DoubleBorder.svelte';
	import SingleImage from '$lib/components/SingleImage.svelte';
</script>

<h1>Our Public Avatars</h1>
<DoubleBorder>
	<p>
		We know it's difficult to find optimized avatars that are appropariate for an opera house.
		That's why we commissioned our own custom avatars that are currently available for public use.
	</p>
	<p>
		You can clone our avatars from our main venue, <a href="/venue#the-midnight-opera"
			>The Midnight Opera</a
		>.
	</p>
</DoubleBorder>
<h1 id="selene">Selene</h1>
<Columns reversed>
	<Column noResize>
		<SingleImage source="/avatars/selene.webp" title="Selene" width={300} />
	</Column>
	<Column weight={1}>
		<DoubleBorder>
			<p>Selene is our female avatar available to use at our events.</p>
			<p>
				She was designed by the Founder and Owner of The Midnight Opera herself, Taia_Hunter, and
				worked into a useable form by WraithBaby.
			</p>
		</DoubleBorder>
	</Column>
</Columns>

<h1>Male Avatar</h1>
<Columns>
	<Column noResize>
		<SingleImage source="/avatars/Male Avi.webp" title="Selene" width={300} />
	</Column>
	<Column weight={1}>
		<DoubleBorder>
			<p>
			He was designed by the Founder and Owner of The Midnight Opera herself, Taia_Hunter, and
			worked into a useable form by WraithBaby.	
			</p>
		</DoubleBorder>
	</Column>
</Columns>
