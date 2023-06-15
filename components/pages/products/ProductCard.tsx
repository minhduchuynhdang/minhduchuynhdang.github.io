import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

const ProductCard = ({ product }: { product: Product }) => {
	return (
		<div className='relative overflow-hidden rounded-lg shadow-lg'>
			<Image
				src={urlForImage(product.productImage[0]).url()}
				alt={product.name}
				className='w-full object-cover'
				width={282}
				height={282}
			/>
			<div className='bg-white p-4'>
				<p className='text-xs font-normal italic text-black 3xl:text-xl'>
					Nhà Sản Xuất: {product.supplier.shortName}
				</p>
				<h4 className='text-lg font-bold text-black 3xl:text-2xl'>
					{product.name}
				</h4>
				<p className='text-xs font-normal italic text-black 3xl:text-xl'>
					{product.kind}
				</p>
				<Link
					href={`/products/${product.slug.current}`}
					className='mt-4 block w-max rounded-lg bg-[#1B73BD] px-4 py-2 text-sm font-bold uppercase text-white 3xl:px-6 3xl:text-lg'>
					Đọc Thêm
				</Link>
			</div>
		</div>
	);
};
export default ProductCard;
