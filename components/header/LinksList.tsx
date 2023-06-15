'use client';
import useOnClickOutside from '@/app/hooks/useOnClickOutside';
// Types
import { type SetStateAction, useRef } from 'react';
import { LinkType } from '@/utils/clientData';

type LinksListProps = {
	linksList: LinkType[];
	setOpenLinksMenu: (value: SetStateAction<boolean>) => void;
};

function LinksList({ linksList, setOpenLinksMenu }: LinksListProps) {
	const ref = useRef(null);

	useOnClickOutside(ref, () => {
		setOpenLinksMenu(false);
	});

	return (
		<div
			className='absolute left-0 top-full z-[100] hidden w-full bg-[#B9D4EA] shadow-lg md:block'
			ref={ref}>
			<ul className='flex flex-wrap items-center justify-center gap-10 py-10'>
				{linksList.map((link) => (
					<li
						key={link.id}
						className={
							link.className +
							'relative grid h-[120px] w-[200px] place-items-center rounded-lg bg-cover before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-30'
						}>
						<a
							href={link.href}
							className='z-10 text-lg font-extrabold uppercase text-white'
							onClick={() => {
								setOpenLinksMenu(false);
							}}>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
export default LinksList;
