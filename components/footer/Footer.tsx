import Image from 'next/image';
import Link from 'next/link';
// Logo & Icons
import Logo from '@/public/Logo.svg';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

function Footer() {
	return (
		<footer className='border-t-2 px-4 py-4 sm:px-10 lg:px-20'>
			<section>
				<div className='mx-auto max-w-[1600px]'>
					<Link href='/' aria-label='Trang Chủ'>
						<Image src={Logo} alt='' width={45} height={45} />
					</Link>
					<h3 className='my-2 text-base font-extrabold uppercase 3xl:text-xl'>
						Công ty cổ phần xuất nhập khẩu nông sản bắc hà
					</h3>
					<div className='flex flex-col items-start justify-between md:flex-row'>
						<div className='mb-5 md:mb-0'>
							<ul className='grid grid-cols-3 gap-16'>
								<li>
									<span className='text-base font-semibold italic leading-[30px] 3xl:text-xl'>
										Giới Thiệu
									</span>
									<div className='grid'>
										<Link
											href='/about/company'
											className='text-[12px] font-light italic leading-[30px] 3xl:text-[14px]'>
											Về Công Ty
										</Link>
										<Link
											href='/about/suppliers'
											className='text-[12px] font-light italic leading-[30px] 3xl:text-[14px]'>
											Nhà Cung Cấp
										</Link>
									</div>
								</li>
								<li>
									<Link
										href='/products'
										className='text-base font-semibold italic leading-[30px] 3xl:text-xl'>
										Sản Phẩm
									</Link>
								</li>
								<li>
									<Link
										href='/blogs'
										className='text-base font-semibold italic leading-[30px] 3xl:text-xl'>
										Tin Tức
									</Link>
								</li>
							</ul>
							<p className='mt-5 text-xs font-light uppercase text-black 3xl:text-base'>
								&copy; Bac Ha Agriculture Export and Import Joint Stock Company
							</p>
						</div>
						<div>
							<h4 className='mb-4 text-base font-extrabold uppercase text-black 3xl:text-xl'>
								Các Tài Khoản Xã Hội
							</h4>
							<ul className='flex gap-6'>
								<li>
									<Link href='/' target='_blank' aria-label='Trang Facebook'>
										<FaFacebook color='#1B73BD' size={40} />
									</Link>
								</li>
								<li>
									<Link href='/' target='_blank' aria-label='Trang Youtube'>
										<FaYoutube color='#1B73BD' size={40} />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
}
export default Footer;
