// Icons
import { FaHandshake, FaMedrt, FaBuilding } from 'react-icons/fa';

function HomeAboutSection() {
	return (
		<section className='bg-[#B9D4EA] py-20'>
			<div className='mx-auto w-[min(960px,100%-3rem)]'>
				<div className='mb-24 text-center'>
					<h3 className='text-3xl font-extrabold uppercase text-[#1B73BD] md:text-5xl'>
						Bắc Hà Vet
					</h3>
				</div>
				<div className='grid grid-cols-1 gap-10 text-center md:grid-cols-3'>
					<div className='flex flex-col items-center gap-2'>
						<FaHandshake color='#1B73BD' size={45} />
						<h4 className='text-[2.625rem] font-bold leading-[57px] text-[#1B73BD]'>
							10+
						</h4>
						<p className='text-2xl font-bold text-black'>năm kinh nghiệm</p>
					</div>
					<div className='flex flex-col items-center gap-2'>
						<FaMedrt color='#1B73BD' size={45} />
						<h4 className='text-[2.625rem] font-bold leading-[57px] text-[#1B73BD]'>
							100+
						</h4>
						<p className='text-2xl font-bold text-black'>
							sản phẩm chăn nuôi, thú y
						</p>
					</div>
					<div className='flex flex-col items-center gap-2'>
						<FaBuilding color='#1B73BD' size={45} />
						<h4 className='text-[2.625rem] font-bold leading-[57px] text-[#1B73BD]'>
							3+
						</h4>
						<p className='text-2xl font-bold text-black'>đơn vị thành viên</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default HomeAboutSection;
