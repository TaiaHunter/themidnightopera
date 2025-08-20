import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	kit: {
		adapter: adapter({
			// change build output dir to /docs
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			// set base path if needed
			base: process.env.NODE_ENV === 'production' ? '/themidnightopera' : ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
