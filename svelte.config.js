import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			// If your repo is a project page (username.github.io/repo-name)
			// set this to '/repo-name'. If it's a user/organization page, leave it as ''.
			base: process.env.NODE_ENV === 'production' ? '/themidnightopera' : ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
