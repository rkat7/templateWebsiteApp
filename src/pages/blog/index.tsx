import { Blog } from '~/components';
import { getAllPostsFrontMatter } from '~/lib/post';
import { Layout } from '~/layouts';

import React from "react";

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Hashnode } from './hashnode.types';


import type { GetStaticProps } from 'next';

import type { FrontMatter } from '~/types';

interface BlogProps {
	serialisedFrontmatters: string;
}


// const query = `
// query Publication {
// 	publication(host: "https://thetechdeck.hashnode.dev/") {
// 	isTeam
// 	title
// 	posts(first: 50) {
// 		edges {
// 		node {
// 			slug
//         	coverImage
// 			title
// 			brief
// 			url
// 		}
// 		}
// 	}
// 	}
// }`
// 	;

// const fetchPosts = async () => {
// 	const response = await fetch('https://gql.hashnode.com', {
// 		method: 'POST',
// 		headers: {
// 			'Content-type': 'application/json',
// 		},
// 		body: JSON.stringify({ query }),
// 	})
// 	const ApiResponse = await response.json();
// 	return ApiResponse;

// };


// export const getStaticProps: GetStaticProps<BlogProps> = async () => {
// 	const frontmatters = await getAllPostsFrontMatter();

// 	return {
// 		props: {
// 			serialisedFrontmatters: JSON.stringify(frontmatters),
// 		},
// 	};
// };

// export default function BlogPage({ serialisedFrontmatters }: BlogProps): JSX.Element {
// 	const frontmatters = JSON.parse(serialisedFrontmatters) as Array<FrontMatter>;

// 	if (frontmatters.length <= 0) return <Blog.Error routeBlog={false} />;

// 	const latestPost = frontmatters.shift();

// 	return (
// 		<Layout.Default seo={{ title: 'nuro ─ blog' }}>
// 			<div className="mt-8 sm:mt-16 mb-20 mx-0 sm:mx-6 lg:mb-28 lg:mx-8">
// 				<div className="relative max-w-6xl mx-auto">
// 					<Blog.Latest frontmatter={latestPost} />
// 					<div className="mt-4 lg:mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none">
// 						{frontmatters.map((frontmatter, i) => (
// 							<Blog.Post key={i} frontmatter={frontmatter} index={i} />
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</Layout.Default>
// 	);
//}

const blo = function Blog() {
	// Added schema of Api querry to get the data from hashnode.
	const [posts, setPosts] = useState<Hashnode['public']['Tables']['blog']['Row'][]>([]);
	// just change the username to yours and you are good to go
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
	}`;
	useEffect(() => {
		fetchPosts();
	}, []);
	const fetchPosts = async () => {
		const response = await fetch("https://gql.hashnode.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query }),
		});
		const result = await response.json();
		setPosts(result.data.user.publication.posts);
	};
	return (
		<>
			<h1 className="text-center items-center justify-center top-36 tracking-[20px] text-gray-500 text-3xl lg:text-4xl font-bold">Blogs</h1>
			<section className="text-gray-300 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4 justify-center whitespace-break-spaces">
						{posts.map((c, index) => (
							<div className="p-4 md:w-1/3" key={index}>
								<a href={`https://thetechdeck.hashnode.dev//${c.slug || ''}`} className="block" target="_blank" rel="noopener noreferrer">
									<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all hover:scale-110 ">
										<Image
											className="lg:h-48 md:h-36 w-full object-cover object-center"
											src={c.coverImage || ''}
											alt={c.slug || ''}
											width={350}
											height={250}
										/>
										<div className="p-6">
											<h1 className="title-font text-lg font-medium text-gray-300 mb-3">
												{c.title || ''}</h1>
											<p className="leading-relaxed text-gray-500 mb-3">{c.brief || ''}</p>
										</div>
									</div>
								</a>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
};

export default blo;