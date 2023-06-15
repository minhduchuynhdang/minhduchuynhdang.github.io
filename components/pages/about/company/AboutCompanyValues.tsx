const AboutCompanyValues = () => {
	return (
		<section className='mb-14 px-4 text-center sm:px-10 lg:px-20'>
			<h3 className='mb-8 text-3xl font-extrabold uppercase text-[#1B73BD] md:text-5xl'>
				Giá Trị Cốt Lõi
			</h3>
			<div className='mx-auto max-w-[1600px]'>
				<div className='grid grid-cols-1 gap-9 lg:grid-cols-3'>
					<div className='relative grid h-[360px] place-items-center overflow-hidden rounded-xl bg-about-company-value-1 bg-cover bg-center px-6 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-30'>
						<h4 className='z-10 font-extrabold uppercase text-white md:text-2xl'>
							Chủ động, sáng tạo trong nghiên cứu và ứng dụng công nghệ mới
						</h4>
					</div>
					<div className='relative grid h-[360px] place-items-center overflow-hidden rounded-xl bg-about-company-value-2 bg-cover bg-center px-6 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-30'>
						<h4 className='z-10 font-extrabold uppercase text-white md:text-2xl'>
							Tận tâm và trung thực với khách hàng. Khách hàng là trung tâm
							trong hoạt động của Công ty chúng tôi.
						</h4>
					</div>
					<div className='relative grid h-[360px] place-items-center overflow-hidden rounded-xl bg-about-company-value-3 bg-cover bg-center px-6 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-30'>
						<h4 className='z-10 font-extrabold uppercase text-white md:text-2xl'>
							Tinh thần đoàn kết và hỗ trợ đồng nghiệp.
						</h4>
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutCompanyValues;
