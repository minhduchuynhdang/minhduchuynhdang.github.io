'use client';
import Link from 'next/link';
// Icons
import { GrClose } from 'react-icons/gr';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

type ContactModalProps = {
	handleCloseContactModal: () => void;
};

export default function ContactModal({
	handleCloseContactModal,
}: ContactModalProps) {
	return (
		<div className='fixed left-0 top-0 z-50 grid h-full w-full place-items-center bg-black/60'>
			<div className='mx-auto w-[min(800px,100%-3rem)] rounded-2xl bg-white p-5 sm:p-14'>
				<div className='mb-6 flex items-center justify-between px-4 sm:px-6'>
					<h2 className='text-base font-bold uppercase sm:text-2xl'>
						Thông tin liên hệ
					</h2>
					<button className='cursor-pointer' onClick={handleCloseContactModal}>
						<GrClose size={20} />
					</button>
				</div>
				{/* Contact Info */}
				<div className='mb-6 rounded-2xl bg-[#1B73BD] p-4 sm:p-6'>
					<div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
						<div className='text-sm text-white sm:text-lg'>
							<h3 className='font-extrabold'>Số điện thoại:</h3>
							<ul className='font-light'>
								<li>
									<p>096 716 6518</p>
								</li>
								<li>
									<p>096 625 4660</p>
								</li>
							</ul>
						</div>
						<div className='text-sm text-white sm:text-lg'>
							<h3 className='font-extrabold'>Email:</h3>
							<p className='font-light'>info@bachavet.vn</p>
						</div>
						<div className='col-span-full text-sm text-white sm:text-lg'>
							<h3 className='font-extrabold'>Địa Chỉ Văn Phòng:</h3>
							<p className='font-light'>
								Thôn Ngãi Cầu, Xã An Khanh, Huyện Hoài Đức, Hà Nội, Việt Nam
							</p>
						</div>
					</div>
				</div>

				{/* Social Accounts */}
				<div className='grid grid-cols-1 place-items-center gap-4 rounded-2xl bg-[#2C3043] p-4 text-center sm:p-6'>
					<h3 className='text-sm font-extrabold uppercase text-white sm:text-lg'>
						Theo dõi trên mạng xã hội
					</h3>
					<div className='grid grid-cols-2 place-items-center gap-4'>
						<Link href='/' target='_blank'>
							<FaFacebook color='white' size={40} />
						</Link>
						<Link href='/' target='_blank'>
							<FaYoutube color='white' size={40} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
