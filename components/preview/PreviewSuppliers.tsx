'use client';
import Link from 'next/link';
import { usePreview } from '@/sanity/lib/preview';
// Components
import AboutSuppliersList from '@/components/pages/about/suppliers/AboutSuppliersList';
import AboutSuppliersIntro from '@/components/pages/about/suppliers/AboutSuppliersIntro';
import { allSuppliersQuery } from '@/utils/clientQueries';

export default function PreviewSingleBlog({ token }: { token: string | null }) {
	const suppliers = usePreview(token, allSuppliersQuery);

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
