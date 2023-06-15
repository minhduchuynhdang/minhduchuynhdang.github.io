import Link from 'next/link';
import { EmblaOptionsType } from 'embla-carousel-react';
import { BiArrowBack } from 'react-icons/bi';
// Components
import ProductCard from '../ProductCard';
import EmblaCarousel from '@/components/carousel/EmblaCarousel';

const OtherProducts = ({ product }: { product: Product }) => {
	const OPTIONS: EmblaOptionsType = {
		align: 'start',
		inViewThreshold: 0,
		loop: true,
		dragFree: true,
	};

	return (
		<section className='mb-16 px-4 sm:px-10 lg:px-20 3xl:px-0'>
			<div className=' rounded-lg bg-[#FFE7CC] p-8'>
				<div className='mb-8 flex items-center justify-between'>
					<h3 className='text-sm font-extrabold uppercase text-black sm:text-2xl 3xl:text-3xl'>
						Sản Phẩm Tương Tự
					</h3>
					<Link
						href='/products'
						className='block w-max rounded-lg bg-[#1B73BD] p-1 text-center text-xs font-bold uppercase text-white sm:px-4 sm:py-2 sm:text-base 3xl:text-lg'>
						<BiArrowBack size={20} className='sm:hidden' />
						<span className='hidden sm:inline-block'>Quay Lại Sản Phẩm</span>
					</Link>
				</div>
				<EmblaCarousel
					containerClassName='overflow-hidden relative'
					options={OPTIONS}
					autoplay={false}
					dots={false}>
					{product.otherProducts.length > 0 &&
						product.otherProducts.map((other) => (
							<div
								key={other._id}
								className='flex-[0_0_100%] py-6 pr-8 sm:flex-[0_0_80%] md:flex-[0_0_30%]'>
								<ProductCard product={other} />
							</div>
						))}
				</EmblaCarousel>
			</div>
		</section>
	);
};

export default OtherProducts;
