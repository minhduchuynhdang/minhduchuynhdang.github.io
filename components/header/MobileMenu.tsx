import Link from 'next/link';
import { mobileLinkList } from '@/utils/clientData';
// Component
import Accordion from './Accordion';

type MobileMenuProps = {
	handleCloseMobileNav: () => void;
};

export default function MobileMenu({ handleCloseMobileNav }: MobileMenuProps) {
	return (
		<div className='absolute left-0 top-full z-[100] h-screen max-h-[calc(100vh-104px)] w-full overflow-y-scroll border-y-[1px] border-solid border-[#707070] bg-[#FAF8F8] text-end text-lg font-extrabold uppercase'>
			{mobileLinkList.map((link) => (
				<Accordion
					key={link.id}
					data={link}
					handleCloseMobileNav={handleCloseMobileNav}
				/>
			))}
			<div className='p-10'>
				<Link
					href='/blogs'
					className='uppercase'
					onClick={handleCloseMobileNav}>
					Tin Tức & Sự Kiện
				</Link>
			</div>
		</div>
	);
}
