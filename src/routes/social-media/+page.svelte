<script lang="ts">
	import Column from '$lib/components/Column.svelte';
	import Columns from '$lib/components/Columns.svelte';
	import SingleImage from '$lib/components/SingleImage.svelte';
	import TextBox from '$lib/components/TextBox.svelte';
</script>

<h1>Social Media</h1>
<Columns>
	<Column weight={1}>
		<TextBox>
			<p>You can find videos, images and more of past and future events here!</p>
			<ul>
				<li>
					Youtube: <a href="https://youtube.com/@themidnightopera" target="_blank"
						>https://youtube.com/@themidnightopera</a
					>
				</li>
				<li>
					TikTok: <a href="https://www.tiktok.com/@themidnightopera" target="_blank"
						>https://www.tiktok.com/@themidnightopera</a
					>
				</li>
				<li>
					Twitter: <a href="https://x.com/midnightoperavr" target="_blank"
						>https://x.com/midnightoperavr</a
					>
				</li>
			</ul>
		</TextBox>
	</Column>
	<Column noResize>
		<SingleImage source="social-media.png" title="Social Media" width={200} />
	</Column>
</Columns>
