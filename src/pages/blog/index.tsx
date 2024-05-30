import { Blog } from '~/components';
import { getAllPostsFrontMatter } from '~/lib/post';
import { Layout } from '~/layouts';

import React from "react";

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Hashnode } from '~/components/hashnode.types';


import type { GetStaticProps } from 'next';

import type { FrontMatter } from '~/types';

interface BlogProps {
	serialisedFrontmatters: string;
}



const blo = function Blog() {
	// Added schema of Api querry to get the data from hashnode.
	const [posts, setPosts] = useState<Hashnode['public']['Tables']['blog']['Row'][]>([]);
	// just change the username to yours and you are good to go
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
		setPosts(result.data.publication.posts.edges);
	};
	// return (
	// 	<div className="flex flex-wrap -m-4 justify-center whitespace-break-spaces">
	// 		{posts?.map((post, index) => {
	// 			const { slug, title, brief, coverImage } = post;

	// 			return (
	// 				<div className="p-4 md:w-1/3" key={index}>
	// 					<a
	// 						href={`https://blog.developerdao.com/${slug}`}
	// 						className="block"
	// 						target="_blank"
	// 						rel="noopener noreferrer"
	// 					>
	// 						<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all hover:scale-110 ">
	// 							<Image
	// 								className="lg:h-48 md:h-36 w-full object-cover object-center"
	// 								src={coverImage?.url}
	// 								alt={title}
	// 								width={250}
	// 								height={250}
	// 							/>
	// 							<div className="p-6">
	// 								<h1 className="title-font text-lg font-medium text-gray-300 mb-3">
	// 									{title}
	// 								</h1>
	// 								<p className="leading-relaxed text-gray-500 mb-3">
	// 									{brief}
	// 								</p>
	// 							</div>
	// 						</div>
	// 					</a>
	// 				</div>
	// 			);
	// 		})}
	// 	</div>
	// );


	// return (
	// <Layout.Default seo={{ title: 'nuro ─ blog' }}>
	// 	<div className="mt-8 sm:mt-16 mb-20 mx-0 sm:mx-6 lg:mb-28 lg:mx-8">
	// 		<div className="relative max-w-6xl mx-auto">
	// 			{/* <Blog.Latest frontmatter={latestPost} /> */}
	// 			<div className="mt-4 lg:mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none">
	// 				{posts.map((frontmatter, i) => (
	// 					<Blog.Post key={i} frontmatter={frontmatter} index={i} />
	// 				))}
	// 			</div>
	// 		</div>
	// 	</div>
	// </Layout.Default>


	return (
		<Layout.Default seo={{ title: 'blog by rohith' }} >
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4 justify-center whitespace-break-spaces">
					{posts?.map((post, kkk) => (
						Object.keys(post).map((keyed, i) => (
							<div className="p-4 md:w-1/3" key={i}>
								<a href={`https://blog.developerdao.com/${post[keyed].slug || ''}`} className="block" target="_blank" rel="noopener noreferrer">
									<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all hover:scale-110">
										<div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
											<h2 className="text-lg font-semibold text-gray-800 mb-2">
												{post[keyed]?.title || ''}
											</h2>
											<p className="text-gray-600 mb-4">
												{post[keyed]?.brief || ''}
											</p>
											<a href="#" className="text-blue-500 hover:text-blue-700">Learn More</a>
										</div>

									</div>
								</a>
							</div>
						))
					))}
				</div>
			</div>
		</Layout.Default>

	)
};


export default blo;




/*
<div className="p-6">
											<h1 className="title-font text-lg font-medium text-gray-300 mb-3">
												{post[keyed]?.title || ''}
											</h1>
											<p className="leading-relaxed text-gray-500 mb-3">
												{post[keyed]?.brief || ''}
											</p>
										</div>
*/ 