import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = "rohith's corner";
	const description = "Hey 👋 I'm Rohith, an engineer";

	return {
		title,
		description,
		canonical: `https://rohithkattamuri.me/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'rkat7',
			url: `https://rohithkattamuri.me/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://rohithkattamuri.me/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
