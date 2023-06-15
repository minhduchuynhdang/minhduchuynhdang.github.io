import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
// Carousel
import type { EmblaOptionsType } from 'embla-carousel-react';
import EmblaCarousel from '@/components/carousel/EmblaCarousel';

const AboutSuppliersIntro = ({ suppliers }: { suppliers: Supplier[] }) => {
	const OPTIONS: EmblaOptionsType = {
		align: 'start',
		loop: true,
	};

	return (
		<section className='mb-16 px-4 sm:px-10 lg:px-20 3xl:px-0'>
			<EmblaCarousel
				containerClassName='relative overflow-hidden'
				options={OPTIONS}
				dots={true}>
				{suppliers.length > 0 &&
					suppliers.map((supplier) => (
						<div key={supplier._id} className='flex-[0_0_100%]'>
							<div className='grid grid-cols-1 grid-rows-[1fr_0.75fr] lg:h-[600px] lg:grid-cols-[1.75fr_1fr] lg:grid-rows-1'>
								<div
									className='relative order-2 overflow-hidden rounded-bl-xl rounded-br-xl bg-cover bg-center bg-no-repeat sm:bg-[center_top_80%] lg:order-1 lg:rounded-br-none lg:rounded-tl-xl'
									style={{
										backgroundImage: `url(${urlForImage(
											supplier.image
										).url()})`,
									}}></div>
								<div className='order-1 overflow-hidden rounded-tl-xl rounded-tr-xl bg-[#111722] px-10 py-6 lg:order-2 lg:rounded-br-xl lg:rounded-tl-none'>
									<Image
										src={urlForImage(supplier.logo).url()}
										alt=''
										className='h-auto'
										width={118}
										height={76}
										priority
									/>
									<h4 className='my-5 font-extrabold uppercase text-white sm:text-2xl 3xl:text-3xl'>
										{supplier.name}
									</h4>
									<Link
										href={supplier.url}
										target='_blank'
										className='font-light text-white underline opacity-50 sm:text-lg 3xl:text-xl'>
										{supplier.url}
									</Link>
									<p className='mt-12 font-light text-white opacity-50 sm:text-lg 3xl:text-xl'>
										{supplier.description}
									</p>
								</div>
							</div>
						</div>
					))}
			</EmblaCarousel>
		</section>
	);
};
export default AboutSuppliersIntro;
