import Link from 'next/link';
import { lazy } from 'react';
import { draftMode } from 'next/headers';
import { fetchSuppliers } from '@/utils/clientFetching';
// Components
import AboutSuppliersList from '@/components/pages/about/suppliers/AboutSuppliersList';
import AboutSuppliersIntro from '@/components/pages/about/suppliers/AboutSuppliersIntro';
import { PreviewSuspense } from '@/components/preview/PreviewSuspsense';
import LoadingPage from '../../loading';

export const metadata = {
	title: 'Giới Thiệu Các Đối Tác Cung Cấp - Bắc Hà Vet',
};

const PreviewSuppliers = lazy(
	() => import('@/components/preview/PreviewSuppliers')
);

export const revalidate = 60;

export default async function AboutSuppliers() {
	const isDraftMode = draftMode().isEnabled;
	let token = process.env.SANITY_API_READ_TOKEN ?? null;
	let suppliers: Supplier[] = [];

	if (isDraftMode) {
		if (!token) {
			throw new TypeError(`Missing SANITY_API_READ_TOKEN`);
		}

		return (
			<PreviewSuspense fallback={<LoadingPage />}>
				<PreviewSuppliers token={token} />
			</PreviewSuspense>
		);
	} else {
		suppliers = await fetchSuppliers();
	}

	return (
		<>
			<div className='mx-auto max-w-[1600px]'>
				<div className='mb-20 mt-12 flex gap-1 px-4 font-bold text-black sm:px-10 md:text-lg lg:px-20 3xl:px-0 3xl:text-2xl'>
					<Link href='/' className='underline'>
						Trang chủ
					</Link>
					<span>&gt;</span>
					<Link href='/about/company' className='underline'>
						Nhà Cung Cấp
					</Link>
				</div>
				<AboutSuppliersList suppliers={suppliers} />
				<AboutSuppliersIntro suppliers={suppliers} />
			</div>
		</>
	);
}
