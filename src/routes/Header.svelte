<script lang="ts">
	import MenuItem from './MenuItem.svelte';
</script>

<header>
	<div class="header">
		<img
			class="masks-and-roses"
			src="/header/mask_left.webp"
			alt="The Midnight Opera Header Left"
		/>
		<h1>The Midnight Opera</h1>
		<img
			class="masks-and-roses"
			src="/header/mask_right.webp"
			alt="The Midnight Opera Header Right"
		/>
	</div>
	<nav>
		<ul>
			<!-- Add menu items below -->
			<MenuItem pageName="About Us" isHomePage />
			<MenuItem pageName="Venue" />
			<MenuItem pageName="Avatars" />
			<MenuItem pageName="Events" />
			<MenuItem pageName="Social Media" />
			<MenuItem pageName="Donations & More" />
			<MenuItem pageName="Contact Us" />
			<MenuItem pageName="Credits" />
			<!-- Add menu items above -->
		</ul>
	</nav>
</header>

<style>
	.header {
		position: relative;
		display: flex;
		justify-content: space-between;
		& h1 {
			text-align: center;
			margin-top: 40px;
		}

		& img.masks-and-roses {
			width: min-content;
			height: 100px;
			object-fit: contain;
			margin: 0px;
		}
	}
	nav {
		background-color: #ffcc6f;
		& ul {
			display: flex;
			justify-content: center;
			list-style-type: none;
			flex-wrap: wrap;
			padding: 4px;
			margin: 0;
			gap: 0.8em;
		}
	}
</style>
