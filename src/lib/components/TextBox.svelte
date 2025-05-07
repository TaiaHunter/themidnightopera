<script lang="ts">
	let { children } = $props();
</script>

<section>
	<div class="textbox">
		{@render children()}
	</div>
</section>

<style>
	section {
		margin: 12px;
		border: 4px solid #ffcc6f;
		& > div {
			margin: 10px;
			padding: 12px;
			text-align: center;
			border: 3px solid #ffcc6f;
		}
		box-sizing: border-box;
	}
</style>
