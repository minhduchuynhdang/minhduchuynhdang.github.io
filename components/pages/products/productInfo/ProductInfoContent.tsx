'use client';
import Image from 'next/image';
import { useState } from 'react';
import { urlForImage } from '@/sanity/lib/image';
// Components
import Content from './Content';

const ProductInfoContent = ({ product }: { product: Product }) => {
	const [mainImage, setMainImage] = useState<Image>(product.productImage[0]);

	return (
		<section className='mb-16 mt-9 px-4 sm:px-10 lg:px-20 3xl:px-0'>
			<div className='grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]'>
				<div className='relative'>
					<Image
						src={urlForImage(mainImage).url()}
						alt=''
						className='mb-6 w-full rounded-lg shadow-lg'
						width={384}
						height={384}
					/>
					<div className='grid grid-cols-4 gap-6'>
						{product.productImage.map((otherImage, index) => (
							<Image
								key={index}
								src={urlForImage(otherImage).url()}
								alt=''
								className='mb-3 w-full cursor-pointer rounded-lg shadow-lg'
								width={80}
								height={80}
								onClick={() => setMainImage(otherImage)}
							/>
						))}
					</div>
				</div>
				<Content product={product} />
			</div>
		</section>
	);
};
export default ProductInfoContent;
