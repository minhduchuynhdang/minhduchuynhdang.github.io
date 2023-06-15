import Image from 'next/image';
// Logo
import Logo from '@/public/Logo.png';

const AboutCompanyIntro = () => {
	return (
		<section className='mb-14 grid min-h-[492px] place-items-center bg-dot-pattern bg-cover px-4 py-14 sm:px-10 lg:px-20'>
			<div className='flex w-full max-w-[1600px] flex-col items-center justify-between gap-14 lg:flex-row'>
				<div className='order-2 text-center lg:order-1 lg:text-left '>
					<h3 className='mb-10 text-3xl font-extrabold uppercase text-[#1B73BD] md:text-5xl'>
						Về Chúng Tôi
					</h3>
					<p className='max-w-[56ch] font-bold text-[#111722] md:text-2xl'>
						Công Ty Cổ Phần Xuất Nhập Khẩu Nông Sản Bắc Hà, với định hướng:{' '}
						<br />
						Con Người Hạng A - Hệ Thống Hạng A - Chất Lượng Hạng A nhằm nghiên
						cứu, sản xuất, cung ứng các sản phẩm vaccine cho ngành chăn nuôi
						Việt Nam
					</p>
				</div>
				<div className='order-1 w-[150px] max-w-[500px] md:w-[200px] lg:order-2 lg:flex-grow'>
					<Image src={Logo} alt='' className='h-auto w-full object-cover' />
				</div>
			</div>
		</section>
	);
};
export default AboutCompanyIntro;
