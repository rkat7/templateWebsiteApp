import matter from 'gray-matter';
import { format } from 'date-fns';
import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';

import RehypeAutolinkHeadings from 'rehype-autolink-headings';
import RemarkCodeTitles from 'remark-code-titles';
import RemarkEmoji from 'remark-emoji';
import RemarkPrism from 'remark-prism';
import RemarkSlug from 'remark-slug';

import type { FrontMatter, Post, RawFrontMatter } from '~/types';

const BLOG_POSTS_DIR = join(process.cwd(), 'src', 'data', 'blog');

/**
 * Get the slugs of all available blog posts
 */
export async function getAllPostSlugs(): Promise<Array<string>> {
	return readdirSync(BLOG_POSTS_DIR);
}


const query = `
	query Publication {
		publication(host: "blog.developerdao.com") {
		title
		posts(first: 15) {
			edges {
			node {
				slug
				title
				brief
				url
				coverImage {
				url
				}
			}
			}
		}
		}
	}
	`
	;

const fetchPosts = async () => {
	const response = await fetch('https://gql.hashnode.com', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({ query }),
	})
	const ApiResponse = await response.json();
	return ApiResponse;

};


/**
 * Get the frontmatter metadata for all available blog posts
 */
export async function getAllPostsFrontMatter(): Promise<Array<FrontMatter>> {
	console.log("CHECK HERE BBB");
	// console.error(fetchPosts);
	console.log(fetchPosts.toString);
	console.log(fetchPosts);
	fetchPosts().then(x => x.map((k, v) => console.log("the values are", k.toString, v.toString)));
	console.log("END IS HERE");
	//console.log(fetchPosts().then(x => console.log(x)));
	const files = readdirSync(BLOG_POSTS_DIR);
	//fetchPosts();

	return files
		.map((slug) => {
			const source = readFileSync(join(BLOG_POSTS_DIR, slug), 'utf8');
			const { data } = matter(source);

			const frontmatter = data as RawFrontMatter;
			const trimmedSlug = slug.replace('.md', '');

			return {
				...frontmatter,
				slug: trimmedSlug,
			} as FrontMatter;
		})
		.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
		.map((f) => ({
			...f,
			date: format(new Date(f.date), 'PPP'),
		}));
}

/**
 * Get the frontmatter metadata & post MDX contents from file
 *
 * @param {string} slug - Slug / file name of the blog post to load data from
 */
export async function getPost(slug: string): Promise<Post> {
	const raw = readFileSync(join(BLOG_POSTS_DIR, `${slug}.md`)).toString();
	const { content, data } = matter(raw);
	const source = await serialize(content, {
		scope: data,
		mdxOptions: {
			rehypePlugins: [[RehypeAutolinkHeadings, {}]],
			remarkPlugins: [RemarkCodeTitles, RemarkEmoji, RemarkPrism, RemarkSlug],
		},
	});

	const frontmatter = data as RawFrontMatter;
	const trimmedSlug = slug.replace('.md', '');

	return {
		frontmatter: {
			...frontmatter,
			date: format(new Date(frontmatter.date), 'PPP'),
			slug: trimmedSlug,
		},
		source,
	};
}
