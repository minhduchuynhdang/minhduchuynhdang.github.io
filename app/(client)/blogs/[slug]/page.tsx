import { draftMode } from 'next/headers';
import { Metadata } from 'next';
import { fetchAllPosts, fetchPostBySlug } from '@/utils/clientFetching';
import { lazy } from 'react';
// Components
import { PreviewSuspense } from '@/components/preview/PreviewSuspsense';
import BlogMainBanner from '@/components/pages/blogs/BlogMainBanner';
import BlogContent from '@/components/pages/blogs/BlogContent';
import LoadingPage from '../../loading';

type BlogPageProps = {
	params: {
		slug: string;
	};
};

const PreviewSingleBlog = lazy(
	() => import('@/components/preview/PreviewSingleBlog')
);

export const revalidate = 60;

export default async function SingleBlogPage({ params }: BlogPageProps) {
	const isDraftMode = draftMode().isEnabled;
	let token = process.env.SANITY_API_READ_TOKEN ?? null;
	let post: Post;

	if (isDraftMode) {
		if (!token) {
			throw new TypeError(`Missing SANITY_API_READ_TOKEN`);
		}

		return (
			<PreviewSuspense fallback={<LoadingPage />}>
				<PreviewSingleBlog token={token} slug={params.slug} />
			</PreviewSuspense>
		);
	} else {
		post = await fetchPostBySlug(params.slug);
	}

	return (
		<>
			<article>
				<BlogMainBanner post={post} />
				<BlogContent post={post} />
			</article>
		</>
	);
}

export async function generateStaticParams() {
	const posts = await fetchAllPosts();

	return posts.map((post) => ({
		slug: post.slug.current,
	}));
}

// Generate Meta Data
export async function generateMetadata({
	params,
}: BlogPageProps): Promise<Metadata> {
	// read route params
	const slug = params.slug;

	// fetch data
	const post = await fetchPostBySlug(slug);

	return {
		title: post.title,
	};
}
