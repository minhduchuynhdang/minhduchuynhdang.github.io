'use client';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
// Carousel & Styles
import type { EmblaOptionsType } from 'embla-carousel-react';
import EmblaCarousel from '../../carousel/EmblaCarousel';

function HomeMainBanner({ posts }: { posts: Post[] }) {
	const OPTIONS: EmblaOptionsType = {
		align: 'center',
		loop: true,
	};

	return (
		<section className='relative h-[30rem] bg-[#2C3043] py-14 sm:h-[40rem]'>
			<EmblaCarousel
				containerClassName='overflow-hidden'
				options={OPTIONS}
				dots={true}>
				{posts.length > 0 &&
					posts.map((post) => (
						<div key={post._id} className='flex-[0_0_100%] md:flex-[0_0_80%]'>
							<div className='relative mx-6 h-[20rem] overflow-hidden rounded-[20px] border-2 border-white sm:h-[30rem]'>
								<div className='absolute left-4 top-1/2 z-10 max-w-xs -translate-y-1/2 sm:left-10 3xl:max-w-lg'>
									<h2 className='text-2xl font-extrabold text-white 3xl:text-4xl'>
										{post.title}
									</h2>
									<p className='mb-6 mt-4 text-sm font-normal text-white sm:text-base 3xl:text-xl'>
										{post.description}
									</p>
									<Link
										href={`/blogs/${post.slug.current}`}
										className='h-9 w-28 rounded-lg bg-[#1B73BD] p-2 text-sm font-extrabold uppercase text-white sm:text-base 3xl:w-40 3xl:text-lg'>
										Đọc Tiếp
									</Link>
								</div>
								<Image
									src={urlForImage(post.mainImage).url()}
									alt={post.title}
									className='h-full w-full object-cover'
									fill
									sizes='(max-width: 800px) 100%'
								/>
							</div>
						</div>
					))}
			</EmblaCarousel>
		</section>
	);
}
export default HomeMainBanner;
