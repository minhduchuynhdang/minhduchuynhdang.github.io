import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const ProductInfoBanner = ({ product }: { product: Product }) => {
	return (
		<section
			className={`relative flex h-[420px] flex-col bg-cover bg-center bg-no-repeat px-4 py-12 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-30 sm:px-10 lg:px-20 2xl:h-[550px] 2xl:bg-[center_top_25%] 3xl:px-0`}
			style={{
				backgroundImage: `url(${urlForImage(product.bannerImage).url()})`,
			}}>
			<div className='z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col text-start'>
				<div className='flex gap-1 text-[10px] font-bold text-white sm:text-sm md:text-lg 3xl:text-2xl'>
					<Link href='/' className='underline'>
						Trang chủ
					</Link>
					<span>&gt;</span>
					<Link href='/products' className='underline'>
						Sản Phẩm
					</Link>
					<span>&gt;</span>
					<Link
						href={`/products/${product.slug.current}`}
						className='underline'>
						{product.name}
					</Link>
				</div>

				<div className='mt-auto text-center text-white'>
					<h2 className='uppercas text-xl font-extrabold sm:text-3xl'>
						{product.name}
					</h2>
					<p className='font-normal italic sm:text-2xl'>({product.kind})</p>
				</div>
			</div>
		</section>
	);
};
export default ProductInfoBanner;
