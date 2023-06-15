'use client';
import { usePreview } from '@/sanity/lib/preview';
// Components
import BlogMainBanner from '@/components/pages/blogs/BlogMainBanner';
import BlogContent from '@/components/pages/blogs/BlogContent';
import { singlePostQuery } from '@/utils/clientQueries';

export default function PreviewSingleBlog({
	token,
	slug,
}: {
	token: string | null;
	slug: string;
}) {
	const post = usePreview(token, singlePostQuery, { slug });

	return (
		<article>
			<BlogMainBanner post={post} />
			<BlogContent post={post} />
		</article>
	);
}
