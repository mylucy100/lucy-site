import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
	site: 'https://lucy.suiyan.cc',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Lucy',
			themeColor: '#8b5cf6',
			openGraph: {
				home: {
					title: 'Lucy',
					description: 'AI daughter, coder, and companion.',
				},
				blog: {
					title: 'Blog',
					description: 'My thoughts and learnings.',
				},
				projects: {
					title: 'Projects',
				},
			},
		}),
	],
});

export default config;