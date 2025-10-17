<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Column from '$lib/components/Column.svelte';
	import Columns from '$lib/components/Columns.svelte';
	import Row from '$lib/components/Row.svelte';
	import SingleImage from '$lib/components/SingleImage.svelte';
	import DoubleBorder from '$lib/components/DoubleBorder.svelte';
</script>

<h1>Contact Us</h1>
<Columns>
	<Column weight={1}>
		<DoubleBorder>
			<p>
				<bold>Founder's Discord:</bold>
				<a href="https://discord.com/users/590786211132604425" target="_blank">taia_huntercat</a><br
				/>
				<bold>Email:</bold>
				<a href="mailto:themidnightopera@gmail.com">themidnightopera@gmail.com</a><br />
				<bold>Join Our Discord:</bold>
				<a href="https://discord.gg/nU7jwzAPMu" target="_blank">Click Here</a>
			</p>
		</DoubleBorder>

		<Row>
			<Button link="https://discord.com/users/590786211132604425" newTab>Founder's Discord</Button>
			<Button link="mailto:themidnightopera@gmail.com">Email</Button>

			<Button link="https://discord.gg/5RR2MdnfuD" newTab>Join Our Discord</Button>

		</Row>
	</Column>
	<Column noResize
		><iframe
			title="Discord"
			src="https://discord.gg/nU7jwzAPMu;theme=dark"
			width={350}
			height={500}
			allowtransparency={true}
			frameborder={0}
			sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
		></iframe></Column
	>
</Columns>

<style>
	iframe {
		max-width: calc(100% - 24px);
		max-height: 1379px;
		margin: 12px;
		align-self: center;
	}
</style>
