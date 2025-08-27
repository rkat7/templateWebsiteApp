import { Layout } from '~/layouts';
import { Animate } from '~/components';

import React from "react";
import { useEffect, useState, useCallback } from 'react';
import { Hashnode } from '~/components/hashnode.types';

const Blog = function Blog(): JSX.Element {
	const [posts, setPosts] = useState<Array<Hashnode['public']['Tables']['blog']['Row']>>([]);

	const query = `
	query Publication {
		publication(host: "rohithkattamuri.hashnode.dev") {
		  title
		  posts(first: 9) {
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

	const fetchPosts = useCallback(async (): Promise<void> => {
		const response = await fetch("https://gql.hashnode.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query }),
		});
		const result = await response.json();
		setPosts(result.data.publication.posts.edges);
	}, [query]);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	return (
		<Layout.Default seo={{ title: 'Blog by rohith' }}>
			<div className="container px-5 py-24 mx-auto">
				<div className="text-center mb-16 relative">
					{/* Background decorative elements */}
					<div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
						<div className="w-96 h-96 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl"></div>
					</div>

					<Animate
						as="h1"
						animation={{
							opacity: [0, 1],
							scale: [0.95, 1],
						}}
						className="relative text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
						transition={{
							duration: 0.6,
						}}>
						A penchant for Engineering
					</Animate>

					{/* Decorative underline */}
					<div
						className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full shadow-lg"
						style={{
							opacity: 0,
							animation: 'fadeIn 0.6s ease-out 0.3s forwards'
						}}
					></div>

					{/* Subtle subtitle */}
					<p
						className="mt-6 text-lg text-gray-600 dark:text-gray-400 font-medium"
						style={{
							opacity: 0,
							animation: 'fadeIn 0.6s ease-out 0.4s forwards'
						}}
					>
						Curiosity fodder
					</p>

					{/* Inline CSS for fadeIn animation */}
					<style jsx>{`
						@keyframes fadeIn {
							from { opacity: 0; }
							to { opacity: 1; }
						}
					`}</style>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{posts?.map((post, index) => (
						Object.keys(post).map((keyed, i) => (
							<div key={`${index}-${i}`} className="h-full group">
								<a href={`https://rohithkattamuri.hashnode.dev/${post[keyed].slug || ''}`} className="block h-full" target="_blank" rel="noopener noreferrer">
									<div className="h-full relative flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 backdrop-filter backdrop-blur-sm px-6 py-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group-hover:border-blue-300 dark:group-hover:border-blue-600">
										{/* Gradient accent line */}
										<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600"></div>

										<div className="flex-1 flex flex-col">
											<h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 min-h-[3rem] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
												{post[keyed]?.title || ''}
											</h2>
											<p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 min-h-[4.5rem] leading-relaxed">
												{post[keyed]?.brief || ''}
											</p>
											<div className="mt-auto">
												<span className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
													Read more
													<svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
													</svg>
												</span>
											</div>
										</div>
									</div>
								</a>
							</div>
						))
					))}
				</div>
			</div>
			<div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
				<a href="https://rohithkattamuri.hashnode.dev" target="_blank" rel="noopener noreferrer">
					<button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg px-6 py-3 rounded-full hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
						Visit My Blog Corner
					</button>
				</a>
			</div>
		</Layout.Default>
	);
};

export default Blog;