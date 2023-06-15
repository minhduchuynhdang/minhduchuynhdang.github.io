import Link from 'next/link';
import { draftMode } from 'next/headers';
import { fetchAllPosts, fetchExternals } from '@/utils/clientFetching';
// Components
import { PreviewSuspense } from '@/components/preview/PreviewSuspsense';
import BlogsPageSection from '@/components/pages/blogs/BlogsPageSection';
import LoadingPage from '../loading';
import PreviewBlogsPage from '@/components/preview/PreviewBlogsPage';

export const revalidate = 60;

export const metadata = {
	title: 'Tin Tức Và Sự Kiện - Bắc Hà Vet',
};

export default async function BlogsPage() {
	const isDraftMode = draftMode().isEnabled;
	let token = process.env.SANITY_API_READ_TOKEN ?? null;
	let posts: Post[];
	let externals: ExternalPost[];

	if (isDraftMode) {
		if (!token) {
			throw new TypeError(`Missing SANITY_API_READ_TOKEN`);
		}

		return (
			<PreviewSuspense fallback={<LoadingPage />}>
				<PreviewBlogsPage token={token} />
			</PreviewSuspense>
		);
	} else {
		[posts, externals] = await Promise.all([fetchAllPosts(), fetchExternals()]);
	}

	return (
		<>
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
		</>
	);
}
