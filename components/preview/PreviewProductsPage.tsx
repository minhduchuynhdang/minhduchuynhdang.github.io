'use client';
import { usePreview } from '@/sanity/lib/preview';
import Link from 'next/link';
// Queries
import {
	allCategoriesQuery,
	allProductsQuery,
	allSuppliersQuery,
} from '@/utils/clientQueries';
// Components
import ProductsPageSection from '../pages/products/ProductsPageSection';

export default function PreviewProductsPage({
	token,
	searchParams,
}: {
	token: string | null;
	searchParams: string;
}) {
	const products = usePreview(token, allProductsQuery);
	const suppliers = usePreview(token, allSuppliersQuery);
	const categories = usePreview(token, allCategoriesQuery);

	return (
		<>
			<div className='mx-auto max-w-[1600px]'>
				<div className='mb-20 mt-12 flex gap-1 px-4 font-bold text-black sm:px-10 md:text-lg lg:px-20 3xl:px-0 3xl:text-2xl'>
					<Link href='/' className='underline'>
						Trang chủ
					</Link>
					<span>&gt;</span>
					<Link href='/products' className='underline'>
						Sản Phẩm
					</Link>
				</div>
				<ProductsPageSection
					categoryParams={searchParams ?? ''}
					products={products}
					suppliers={suppliers}
					categories={categories}
				/>
			</div>
		</>
	);
}
