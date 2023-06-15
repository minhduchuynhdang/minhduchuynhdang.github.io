import { lazy } from 'react';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { fetchAllProducts, fetchProductBySlug } from '@/utils/clientFetching';
// Components
import ProductInfoBanner from '@/components/pages/products/productInfo/ProductInfoBanner';
import ProductInfoContent from '@/components/pages/products/productInfo/ProductInfoContent';
import OtherProducts from '@/components/pages/products/productInfo/OtherProducts';
import { PreviewSuspense } from '@/components/preview/PreviewSuspsense';
import LoadingPage from '../../loading';

const PreviewProductInfoPage = lazy(
	() => import('@/components/preview/PreviewProductInfoPage')
);

type ProductInfoPageProps = {
	params: {
		slug: string;
	};
};

export const revalidate = 60;

export default async function ProductInfoPage({
	params,
}: ProductInfoPageProps) {
	const isDraftMode = draftMode().isEnabled;
	let token = process.env.SANITY_API_READ_TOKEN ?? null;
	let product: Product;

	if (isDraftMode) {
		if (!token) {
			throw new TypeError(`Missing SANITY_API_READ_TOKEN`);
		}

		return (
			<PreviewSuspense fallback={<LoadingPage />}>
				<PreviewProductInfoPage token={token} slug={params.slug} />
			</PreviewSuspense>
		);
	} else {
		product = await fetchProductBySlug(params.slug);
	}

	return (
		<>
			<ProductInfoBanner product={product} />
			<div className='mx-auto max-w-[1600px]'>
				<ProductInfoContent product={product} />
				<OtherProducts product={product} />
			</div>
		</>
	);
}

// Generate Static Param
export async function generateStaticParams() {
	const products = await fetchAllProducts();

	return products.map((product) => ({
		slug: product.slug.current,
	}));
}

// Generate Meta Data
export async function generateMetadata({
	params,
}: ProductInfoPageProps): Promise<Metadata> {
	// read route params
	const slug = params.slug;

	// fetch data
	const product = await fetchProductBySlug(slug);

	return {
		title: product.name,
	};
}
