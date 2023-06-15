'use client';
import { usePreview } from '@/sanity/lib/preview';
// Queries
import {
	externalQuery,
	homeBannerPostQuery,
	homeNewsPostQuery,
} from '@/utils/clientQueries';
// Components
import HomeMainBanner from '@/components/pages/home/HomeMainBanner';
import HomeAboutSection from '@/components/pages/home/HomeAboutSection';
import HomeProductSection from '@/components/pages/home/HomeProductSection';
import HomeNewsSection from '@/components/pages/home/HomeNewsSection';

export default function PreviewDocumentsCount({
	token,
}: {
	token: string | null;
}) {
	const homeBannerPostData = usePreview(token, homeBannerPostQuery);
	const homeNewsPostData = usePreview(token, homeNewsPostQuery);
	const externalPostsData = usePreview(token, externalQuery);

	return (
		<>
			<HomeMainBanner posts={homeBannerPostData} />
			<HomeAboutSection />
			<HomeProductSection />
			<HomeNewsSection
				posts={homeNewsPostData}
				externalPosts={externalPostsData}
			/>
		</>
	);
}
