'use client';
import Link from 'next/link';
import { usePreview } from '@/sanity/lib/preview';
import { allPostQuery, externalQuery } from '@/utils/clientQueries';
// Components
import BlogsPageSection from '../pages/blogs/BlogsPageSection';

export default function PreviewBlogsPage({ token }: { token: string | null }) {
	const posts = usePreview(token, allPostQuery);
	const externals = usePreview(token, externalQuery);

	return (
		<div className='mx-auto max-w-[1600px]'>
			<div className='mb-20 mt-12 flex gap-1 px-4 font-bold text-black sm:px-10 md:text-lg lg:px-20 3xl:px-0 3xl:text-2xl'>
				<Link href='/' className='underline'>
					Trang chủ
				</Link>
				<span>&gt;</span>
				<Link href='/blogs' className='underline'>
					Tin Tức & Sự Kiện
				</Link>
			</div>
			<BlogsPageSection posts={posts} externals={externals} />
		</div>
	);
}
