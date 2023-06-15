import Link from 'next/link';

const AboutCompanyBanner = () => {
	return (
		<section className='relative flex h-[420px] flex-col bg-about-company-banner bg-cover bg-center bg-no-repeat px-4 py-12 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-30 sm:px-10 lg:px-20 2xl:h-[550px]'>
			<div className='relative mx-auto grid h-full w-full max-w-[1600px] grid-cols-1 text-start'>
				<div className='z-10 flex gap-1 font-bold text-white md:text-lg 3xl:text-2xl'>
					<Link href='/' className='underline'>
						Trang chủ
					</Link>
					<span>&gt;</span>
					<Link href='/about/company' className='underline'>
						Về Công Ty
					</Link>
				</div>

				<div className='z-10 mt-auto'>
					<h2 className='text-3xl font-extrabold uppercase text-white md:text-5xl'>
						Giới Thiệu
					</h2>
				</div>
			</div>
		</section>
	);
};
export default AboutCompanyBanner;
