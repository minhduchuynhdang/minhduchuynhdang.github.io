'use client';
import { useState } from 'react';
import { MobileLink } from '@/utils/clientData';

type AccordionProps = {
	data: MobileLink;
	handleCloseMobileNav: () => void;
};

export default function Accordion({
	data,
	handleCloseMobileNav,
}: AccordionProps) {
	const [item, setItem] = useState<MobileLink>(data);

	// Helper function to handle toggle accordion
	const handleToggleAccordion = () => {
		const active = item.active ? false : true;
		setItem({ ...item, active });
	};

	return (
		<div className={`group ${item.active ? 'is-active' : ''}`}>
			<div className='border-b-[1px] border-solid border-[#707070] p-10'>
				<button className='uppercase' onClick={handleToggleAccordion}>
					{data.name}
				</button>
			</div>
			<div
				className={`max-h-0 overflow-hidden bg-[#E0E0E0] duration-300 group-[.is-active]:max-h-[400px]`}>
				<ul className='grid grid-cols-1 gap-10 p-10'>
					{data.accordionList.map((link) => (
						<li key={link.id}>
							<a href={link.href} onClick={handleCloseMobileNav}>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
