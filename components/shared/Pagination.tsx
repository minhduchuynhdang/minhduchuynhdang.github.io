'use client';
// Icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type PaginationProps = {
	currentPage: number;
	pageCount: number;
	handlePreviousButton: () => void;
	handleNextButton: (pageCount: number) => void;
};

const Pagination = ({
	currentPage,
	pageCount,
	handleNextButton,
	handlePreviousButton,
}: PaginationProps) => {
	return (
		<div className='flex h-16 items-center justify-center gap-3'>
			<button
				className='flex h-10 w-24 items-center justify-center gap-2 rounded-[20px] bg-[#111722] text-xs font-bold text-white'
				onClick={() => handlePreviousButton()}>
				<FaChevronLeft />
				<span className='hidden sm:block'>Quay Lại</span>
			</button>
			<div className='flex items-center justify-center gap-3 rounded-[20px] bg-[#FAF8F8] px-3 py-2 shadow-md'>
				<h5 className='text-xs font-bold text-black'>Trang</h5>
				<span className='inline-block rounded-lg bg-[#EF4056] p-2 text-xs font-bold text-white'>
					{currentPage}
				</span>
				<span className='text-xs font-light text-black'>trên</span>
				<span className='text-xs font-bold text-black'>{pageCount}</span>
			</div>
			<button
				className='flex h-10 w-24 items-center justify-center gap-2 rounded-[20px] bg-[#111722] text-xs font-bold text-white'
				onClick={() => handleNextButton(pageCount)}>
				<span className='hidden sm:block'>Tiếp Tục</span>
				<FaChevronRight />
			</button>
		</div>
	);
};
export default Pagination;
