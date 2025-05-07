<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Column from '$lib/components/Column.svelte';
	import Columns from '$lib/components/Columns.svelte';
	import Row from '$lib/components/Row.svelte';
	import SingleImage from '$lib/components/SingleImage.svelte';
	import TextBox from '$lib/components/TextBox.svelte';
</script>

<h1>Contact Us</h1>
<Columns>
	<Column weight={1}>
		<TextBox>
			<p>
				<bold>Founder's Discord:</bold>
				<a href="https://discord.com/users/590786211132604425" target="_blank">taia_huntercat</a><br
				/>
				<bold>Email:</bold>
				<a href="mailto:themidnightopera@gmail.com">themidnightopera@gmail.com</a><br />
				<bold>Join Our Discord:</bold>
				<a href="https://discord.gg/nU7jwzAPMu" target="_blank">Click Here</a>
			</p>
		</TextBox>

		<Row>
			<Button link="https://discord.com/users/590786211132604425" newTab>Founder's Discord</Button>
			<Button link="mailto:themidnightopera@gmail.com">Email</Button>
			<Button link="https://discord.gg/nU7jwzAPMu" newTab>Join Our Discord</Button>
		</Row>
	</Column>
	<Column noResize
		><iframe
			title="Discord"
			src="https://discord.com/widget?id=1195256631487889438&amp;theme=dark"
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
		max-width: 100%;
		max-height: 1379px;
		margin: 12px;
		align-self: center;
	}
</style>
