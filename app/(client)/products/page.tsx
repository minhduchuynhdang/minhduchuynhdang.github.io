import { lazy } from 'react';
import Link from 'next/link';
import { draftMode } from 'next/headers';
import {
	fetchAllProducts,
	fetchCategories,
	fetchSuppliers,
} from '@/utils/clientFetching';
// Components
import { PreviewSuspense } from '@/components/preview/PreviewSuspsense';
import ProductsPageSection from '@/components/pages/products/ProductsPageSection';
import LoadingPage from '../loading';

const PreviewProductsPage = lazy(
	() => import('@/components/preview/PreviewProductsPage')
);

export const metadata = {
	title: 'Danh Sách Sản Phẩm - Bắc Hà Vet',
};

type ProductsPageProps = {
	searchParams: {
		[key: string]: string;
	};
};

export default async function ProductsPage({
	searchParams,
}: ProductsPageProps) {
	const isDraftMode = draftMode().isEnabled;
	let token = process.env.SANITY_API_READ_TOKEN ?? null;
	let products: Product[];
	let suppliers: Supplier[];
	let categories: Category[];

	if (isDraftMode) {
		if (!token) {
			throw new TypeError(`Missing SANITY_API_READ_TOKEN`);
		}

		return (
			<PreviewSuspense fallback={<LoadingPage />}>
				<PreviewProductsPage
					token={token}
					searchParams={searchParams.category}
				/>
			</PreviewSuspense>
		);
	} else {
		[products, suppliers, categories] = await Promise.all([
			fetchAllProducts(),
			fetchSuppliers(),
			fetchCategories(),
		]);
	}

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
					categoryParams={searchParams.category ?? ''}
					products={products}
					suppliers={suppliers}
					categories={categories}
				/>
			</div>
		</>
	);
}
