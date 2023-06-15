import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const AboutSuppliersList = ({ suppliers }: { suppliers: Supplier[] }) => {
	return (
		<section className='mb-16 px-4 text-center sm:px-10 lg:px-20 3xl:px-0'>
			<h3 className='mb-10 font-extrabold uppercase text-black sm:text-2xl 3xl:text-4xl'>
				Các Đối Tác Cung Cấp
			</h3>
			<div className='grid grid-flow-row grid-cols-2 gap-6 rounded-lg bg-[#FFE7CC] px-8 py-8 md:grid-cols-3 md:px-12 lg:grid-cols-5'>
				{suppliers.map((supplier) => (
					<Link
						key={supplier._id}
						href={supplier.url}
						target='_blank'
						className='relative overflow-hidden rounded-lg'>
						<Image
							src={urlForImage(supplier.logo).url()}
							alt=''
							className='h-auto w-full object-cover'
							width={200}
							height={128}
							priority
						/>
					</Link>
				))}
			</div>
		</section>
	);
};

export default AboutSuppliersList;
