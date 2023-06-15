'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LinkType, aboutLinksList, productLinkList } from '@/utils/clientData';
// Logo & Icons
import Logo from '@/public/Logo.svg';
import { FaPhoneAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
// Components
import LinksList from './LinksList';
import MobileMenu from './MobileMenu';
import ContactModal from '../modal/ContactModal';

function Navbar() {
	const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
	const [openLinksMenu, setOpenLinksMenu] = useState<boolean>(false);
	const [openContactModal, setOpenContactModal] = useState<boolean>(false);
	const [isScroll, setIsScroll] = useState<boolean>(true);
	const [links, setLinks] = useState<LinkType[]>(aboutLinksList);

	// Helper function to handle open mobile navbar
	const handleOpenMobileNav = () => {
		setOpenMobileNav(true);
		setIsScroll(false);
	};

	// Helper function to handle close mobile navbar
	const handleCloseMobileNav = () => {
		setOpenMobileNav(false);
		setIsScroll(true);
	};

	// Helper function to handle open contact modal
	const handleOpenContactModal = () => {
		setOpenContactModal(true);
	};

	// Helper function to handle close contact modal
	const handleCloseContactModal = () => {
		setOpenContactModal(false);
	};

	useEffect(() => {
		document.body.style.overflow = isScroll ? 'visible' : 'hidden';
	}, [isScroll]);

	return (
		<>
			<header className='relative mx-auto px-4 py-8 shadow-lg sm:px-10 lg:px-20'>
				<div className='mx-auto flex max-w-[1600px] items-center'>
					{/* Logo */}
					<div>
						<Link href='/' aria-label='Trang Chủ'>
							<Image src={Logo} alt='' width={70} height={50} />
						</Link>
					</div>

					{/* Navbar */}
					<nav className='flex flex-1 items-center justify-center gap-16'>
						<ul className='hidden items-center gap-16 md:flex'>
							<li>
								<button
									className='cursor-pointer text-lg font-extrabold leading-6 hover:text-[#1B73BD] 3xl:text-2xl'
									onClick={() => {
										setLinks(aboutLinksList);
										setOpenLinksMenu(true);
									}}>
									Giới Thiệu
								</button>
							</li>
							<li>
								<button
									className='cursor-pointer text-lg font-extrabold leading-6 hover:text-[#1B73BD] 3xl:text-2xl'
									onClick={() => {
										setLinks(productLinkList);
										setOpenLinksMenu(true);
									}}>
									Sản Phẩm
								</button>
							</li>
							<li>
								<Link
									href='/blogs'
									className='text-lg font-extrabold leading-6 hover:text-[#1B73BD] 3xl:text-2xl'>
									Tin Tức & Sự Kiện
								</Link>
							</li>
						</ul>

						{/* Links Menu */}
						{openLinksMenu && (
							<LinksList
								linksList={links}
								setOpenLinksMenu={setOpenLinksMenu}
							/>
						)}

						{/* Mobile Menu */}
						{openMobileNav && (
							<MobileMenu handleCloseMobileNav={handleCloseMobileNav} />
						)}
					</nav>

					{/* Contact button */}
					<div className='flex items-center gap-4'>
						<button
							className='flex h-10 w-[50px] items-center gap-4 rounded-3xl bg-[#D8232A] px-1 text-lg font-bold leading-6 text-white md:h-12 md:w-40'
							onClick={handleOpenContactModal}
							aria-label='Liên Lạc'>
							<div className='grid h-[90%] w-full place-items-center rounded-3xl bg-white md:h-10 md:w-10'>
								<FaPhoneAlt color='red' size={20} />
							</div>
							<span className='hidden md:block'>Liên Hệ</span>
						</button>

						{/* Button to handle mobile navbar click event */}
						{!openMobileNav ? (
							<GiHamburgerMenu
								size={32}
								className='block cursor-pointer md:hidden'
								onClick={handleOpenMobileNav}
							/>
						) : (
							<GrClose
								size={32}
								className='block cursor-pointer md:hidden'
								onClick={handleCloseMobileNav}
							/>
						)}
					</div>
				</div>
			</header>
			{/* Contact Modal */}
			{openContactModal && (
				<ContactModal handleCloseContactModal={handleCloseContactModal} />
			)}
		</>
	);
}
export default Navbar;
