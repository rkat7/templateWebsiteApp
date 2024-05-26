import { Blog } from '~/components';
import { getAllPostsFrontMatter } from '~/lib/post';
import { Layout } from '~/layouts';
import Post from './Post';

import type { GetStaticProps } from 'next';

import type { FrontMatter } from '~/types';

interface BlogProps {
	serialisedFrontmatters: string;
}


const query = `
	query Publication {
		publication(host: "https://thetechdeck.hashnode.dev/") {
		isTeam
		title
		posts(first: 50) {
			edges {
			node {
				slug
            	coverImage
				title
				brief
				url
			}
			}
		}
		}
	}`
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


export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const frontmatters = await fetchPosts();

	return {
		props: {
			serialisedFrontmatters: JSON.stringify(frontmatters),
		},
	};
};

export default function BlogPage({ serialisedFrontmatters }: BlogProps): JSX.Element {
	const frontmatters = JSON.parse(serialisedFrontmatters) as Array<FrontMatter>;

	if (frontmatters.length <= 0) return <Blog.Error routeBlog={false} />;

	//const latestPost = frontmatters.shift();

	return (
		<Layout.Default seo={{ title: 'nuro ─ blog' }}>
			<div className="container">
				{this.state.posts.map((post, index) => (
					<a key={index} href={`https://thetechdeck.hashnode.dev/${post.slug}`} >
						<Post post={post} />
					</a>
				))}
			</div>

		</Layout.Default>
	);
}


// {/* <div className="mt-8 sm:mt-16 mb-20 mx-0 sm:mx-6 lg:mb-28 lg:mx-8">
// 	<div className="relative max-w-6xl mx-auto">
// 		<Blog.Latest frontmatter={latestPost} />
// 		<div className="mt-4 lg:mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none">
// 			{frontmatters.map((frontmatter, i) => (
// 				<Blog.Post key={i} frontmatter={frontmatter} index={i} />
// 			))}
// 		</div>
// 	</div>
// </div> */}