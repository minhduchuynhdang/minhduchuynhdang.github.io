// Icons
import { FaEye } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';

const AboutCompanyFeatures = () => {
	return (
		<section className='mb-14 px-4 sm:px-10 lg:px-20'>
			<div className='mx-auto grid max-w-[1600px] grid-cols-1 grid-rows-4 gap-12 lg:grid-cols-2 lg:grid-rows-2'>
				<div className='rounded-[20px] bg-[#2C3043] p-6 sm:p-14'>
					<FaEye size={40} color='white' />
					<h4 className='mb-3 mt-8 text-3xl font-extrabold uppercase text-white md:text-5xl'>
						Tầm Nhìn
					</h4>
					<p className='max-w-prose font-bold leading-[40px] text-[#E0E0E0] opacity-80 md:text-2xl'>
						Trở thành thương hiệu hàng đầu tại Việt Nam, cung cấp các sản phẩm
						chất lượng cao và các giải pháp khoa học kỹ thuật, vì một ngành chăn
						nuôi phát triển bền vững.
					</p>
				</div>
				<div className='rounded-[20px] bg-about-company-feature-1 bg-cover bg-center'></div>
				<div className='order-4 rounded-[20px] bg-about-company-feature-2 bg-cover bg-center lg:order-3'></div>
				<div className='order-3 flex flex-col items-end justify-center rounded-[20px] bg-[#1B73BD] p-6 text-right sm:p-14 lg:order-4'>
					<TbCertificate size={40} color='white' className='ml-auto' />
					<h4 className='mb-3 mt-8 text-3xl font-extrabold uppercase text-white md:text-5xl'>
						Sứ Mệnh
					</h4>
					<p className='max-w-prose font-bold leading-[40px] text-[#E0E0E0] opacity-80 md:text-2xl'>
						Vì một ngành chăn nuôi tiên tiến, phát triển
					</p>
				</div>
			</div>
		</section>
	);
};
export default AboutCompanyFeatures;
