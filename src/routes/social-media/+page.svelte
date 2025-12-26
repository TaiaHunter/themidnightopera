<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Column from '$lib/components/Column.svelte';
	import Columns from '$lib/components/Columns.svelte';
	import Row from '$lib/components/Row.svelte';
	import SingleImage from '$lib/components/SingleImage.svelte';
	import DoubleBorder from '$lib/components/DoubleBorder.svelte';
</script>

<h1>Social Media</h1>
<Columns>
	<Column noResize>
		<SingleImage source="/social-media.webp" title="Social Media" width={200} />
	</Column>
	<Column weight={1}>
		<DoubleBorder>
			<p>You can find videos, images and more of past and future events here!</p>
			<Row>
				<Button link="https://youtube.com/@themidnightopera" newTab>YouTube</Button>
				<Button link="https://www.tiktok.com/@themidnightopera" newTab>TikTok</Button>
				<Button link="https://x.com/midnightoperavr" newTab>Twitter</Button>
			</Row>
			<Row>
				<Button link="https://www.instagram.com/themidnightopera/" newTab>Instagram</Button>
				<Button link="https://www.threads.com/@themidnightopera" newTab>Threads</Button>
				<Button link="https://x.com/https://bsky.app/profile/midnightopera.bsky.social" newTab>TwitterBluesky</Button>
			</Row>
		</DoubleBorder>
	</Column>
</Columns>
