import Link from 'next/link';
import { homeProductsLink } from '@/utils/clientData';

function HomeProductSection() {
	return (
		<section className='bg-[#FFE7CC] px-4 py-20 sm:px-10 lg:px-20'>
			<div className='mx-auto max-w-[1600px] text-center'>
				<h3 className='mb-14 text-3xl font-extrabold uppercase text-black md:text-5xl'>
					Danh Mục Sản Phẩm
				</h3>
				<div className='relative grid grid-cols-1 gap-6 lg:grid-cols-3'>
					{homeProductsLink.map((link) => (
						<Link
							key={link.id}
							href={link.href}
							className={`relative h-[370px] overflow-hidden rounded-lg ${link.backgroundImage} bg-cover bg-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-30`}>
							<div className='relative h-full w-full rounded-lg'>
								<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
									<p className='text-lg font-normal text-white'>
										Sản Phẩm Dành Cho
									</p>
									<h4 className='text-4xl font-extrabold uppercase text-white'>
										{link.title}
									</h4>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
export default HomeProductSection;
