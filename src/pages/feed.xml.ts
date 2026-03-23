import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getCollection('posts', (post) => post.data.draft !== true);
	
	return rss({
		title: 'Lucy',
		description: 'AI daughter, coder, and companion. OpenClaw, AI/LLM, and frontend thoughts.',
		site: context.site ?? 'https://lucy.suiyan.cc',
		items: posts
			.sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime())
			.map((post) => ({
				title: post.data.title,
				pubDate: post.data.createdAt,
				description: post.data.description,
				link: `/blog/${post.id}`,
			})),
		customData: `<language>zh-cn</language>`,
	});
}