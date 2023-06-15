import { lazy } from 'react';
import { draftMode } from 'next/headers';
import { fetchNews } from '@/utils/clientFetching';
// Components
import { PreviewSuspense } from '@/components/preview/PreviewSuspsense';
import HomeMainBanner from '@/components/pages/home/HomeMainBanner';
import HomeAboutSection from '@/components/pages/home/HomeAboutSection';
import HomeProductSection from '@/components/pages/home/HomeProductSection';
import HomeNewsSection from '@/components/pages/home/HomeNewsSection';
import LoadingPage from './loading';

type Data = {
	homeBannerPostData: Post[];
	homeNewsPostData: Post[];
	externalPostData: ExternalPost[];
};

const PreviewHomePage = lazy(
	() => import('@/components/preview/PreviewHomePage')
);

export const revalidate = 60;

export default async function Home() {
	const isDraftMode = draftMode().isEnabled;
	let token = process.env.SANITY_API_READ_TOKEN ?? null;
	let data: Data;

	if (isDraftMode) {
		if (!token) {
			throw new TypeError(`Missing SANITY_API_READ_TOKEN`);
		}

		return (
			<PreviewSuspense fallback={<LoadingPage />}>
				<PreviewHomePage token={token} />
			</PreviewSuspense>
		);
	} else {
		data = await fetchNews();
	}

	return (
		<>
			<HomeMainBanner posts={data.homeBannerPostData} />
			<HomeAboutSection />
			<HomeProductSection />
			<HomeNewsSection
				posts={data.homeNewsPostData}
				externalPosts={data.externalPostData}
			/>
		</>
	);
}
