<script lang="ts">
	import Column from '$lib/components/Column.svelte';
	import Columns from '$lib/components/Columns.svelte';
	import TextBox from '$lib/components/TextBox.svelte';
	import SingleImage from '$lib/components/SingleImage.svelte';
</script>

<Columns>
	<Column weight={1}>
		<TextBox>
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
		</TextBox>
	</Column>
	<Column weight={0.8}>
		<SingleImage source="/world-image.png" title="World Image" />
	</Column>
</Columns>
