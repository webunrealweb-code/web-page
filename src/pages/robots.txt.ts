import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const lines = ['User-agent: *', 'Allow: /'];
	if (site) {
		const origin = site.origin;
		lines.push(`Sitemap: ${origin}/sitemap-index.xml`);
	}
	return new Response(`${lines.join('\n')}\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
