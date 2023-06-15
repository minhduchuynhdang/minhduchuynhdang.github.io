'use client';
import { usePreview } from '@/sanity/lib/preview';
import { singleProductQuery } from '@/utils/clientQueries';
// Components
import ProductInfoBanner from '../pages/products/productInfo/ProductInfoBanner';
import ProductInfoContent from '../pages/products/productInfo/ProductInfoContent';
import OtherProducts from '../pages/products/productInfo/OtherProducts';

export default function PreviewProductInfoPage({
	token,
	slug,
}: {
	token: string | null;
	slug: string;
}) {
	const product = usePreview(token, singleProductQuery, { slug });

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
