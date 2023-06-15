'use client';
import { useRouter } from 'next/navigation';
import { Dispatch, useState } from 'react';
import { FormEvent, SetStateAction } from 'react';
// Icons
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';

type SearchInputProps = {
	page?: 'products' | 'blogs';
	supplier?: string;
	category?: string;
	suppliers?: Supplier[];
	categories?: Category[];
	handleOnChange: (e: FormEvent<HTMLInputElement>) => void;
	searchText: string;
	setSearchText: (value: SetStateAction<string>) => void;
	setSupplier?: Dispatch<SetStateAction<string>>;
	setCategory?: Dispatch<SetStateAction<string>>;
	setCurrentPage?: Dispatch<SetStateAction<number>>;
};

export default function SearchInput({
	page,
	supplier,
	category,
	suppliers,
	categories,
	handleOnChange,
	searchText,
	setSearchText,
	setSupplier,
	setCategory,
	setCurrentPage,
}: SearchInputProps) {
	const router = useRouter();
	const [openSupplierDropDown, setOpenSupplierDropDown] =
		useState<boolean>(false);
	const [openCategoryDropDown, setOpenCategoryDropDown] =
		useState<boolean>(false);

	// Helper function to handle supplier selection
	const handleSelectSupplier = (value: string) => {
		if (setSupplier && setCurrentPage) {
			setSupplier(value);
			setOpenSupplierDropDown(false);
			setCurrentPage(1);
		}
	};

	// Helper function to handle category selection
	const handleSelectCategory = (value: string) => {
		if (setCategory && setCurrentPage) {
			setCategory(value);
			setOpenCategoryDropDown(false);
			setCurrentPage(1);
		}
	};

	// Helper function to handle remove filter button
	const handleRemoveFilter = () => {
		setSearchText('');
		if (setCategory && setSupplier) {
			setCategory('');
			setSupplier('');
			router.push('/products');
		}
	};

	// SearchInput for products page
	if (page === 'products' && suppliers && categories) {
		return (
			<div className='mb-8 flex flex-col flex-wrap items-center justify-center gap-6 rounded-lg bg-[#FFE7CC] p-4 sm:flex-row'>
				<div className='mx-auto'>
					<h4 className='text-lg font-bold uppercase text-black'>
						Tìm Kiếm Chọn Lọc
					</h4>
				</div>
				{/* Supplier Selection */}
				<div className='flex flex-wrap items-center justify-center gap-6'>
					<div className='relative flex h-9 items-center gap-2 rounded-lg bg-white px-4 shadow-sm'>
						<button
							className='flex w-full items-center gap-2 text-center text-sm font-normal text-black'
							onClick={() =>
								setOpenSupplierDropDown((prevState) => !prevState)
							}>
							Nhãn Hàng:{' '}
							<span className='font-bold'>
								{supplier ? supplier : `${suppliers.length} lựa chọn`}
							</span>
							<FaChevronDown size={16} />
						</button>
						{openSupplierDropDown && (
							<ul className='absolute left-0 top-[calc(100%+.5rem)] z-10 w-full bg-white shadow-md'>
								{suppliers.map((supp) => (
									<li
										key={supp._id}
										className='p-2 text-sm font-bold text-black shadow-sm'>
										<button
											onClick={() => handleSelectSupplier(supp.shortName)}
											className='h-full w-full cursor-pointer text-start'>
											{supp.shortName}
										</button>
									</li>
								))}
							</ul>
						)}
					</div>

					{/* Category Selection */}
					<div className='relative flex h-9 items-center gap-2 rounded-lg bg-white px-4 shadow-sm'>
						<button
							className='flex w-full items-center gap-2 text-center text-sm font-normal text-black'
							onClick={() =>
								setOpenCategoryDropDown((prevState) => !prevState)
							}>
							Danh Mục:{' '}
							<span className='font-bold'>
								{category ? category : `${categories.length} lựa chọn`}
							</span>
							<FaChevronDown size={16} />
						</button>
						{openCategoryDropDown && (
							<ul className='absolute left-0 top-[calc(100%+.5rem)] z-10 w-full bg-white shadow-md'>
								{categories.map((categ) => (
									<li
										key={categ._id}
										className='cursor-pointer p-2 text-sm font-bold text-black shadow-sm'>
										<button
											onClick={() => handleSelectCategory(categ.title)}
											className='h-full w-full cursor-pointer text-start capitalize'>
											{categ.title}
										</button>
									</li>
								))}
							</ul>
						)}
					</div>

					{/* Product Name Input */}
					<div className='flex h-9 items-center gap-2 rounded-lg bg-white px-4 shadow-sm'>
						<input
							type='text'
							onChange={handleOnChange}
							value={searchText}
							className='outline-none placeholder:text-sm placeholder:italic placeholder:text-black placeholder:opacity-50'
							placeholder='Tra Cứu Tên'
						/>
						<FaSearch size={16} />
					</div>
					<button
						onClick={handleRemoveFilter}
						className='flex items-center rounded-lg bg-[#D8232A] p-2 sm:px-5 sm:py-2 md:gap-6'>
						<span className='hidden text-sm font-normal text-white md:block'>
							Bỏ chọn lọc
						</span>
						<TiDeleteOutline size={16} color='white' />
					</button>
				</div>
			</div>
		);
	}

	// SearchInput for blogs page
	return (
		<div className='mb-8 flex flex-col items-center rounded-lg bg-[#FFE7CC] py-4 sm:h-16 sm:flex-row sm:px-8'>
			<h4 className='mb-4 mr-6 text-lg font-bold uppercase text-black sm:mb-0'>
				Tìm Kiếm
			</h4>
			<div className='flex flex-1 items-center justify-between gap-2 sm:gap-4'>
				<div className='flex h-9 items-center gap-2 rounded-lg bg-white px-4 shadow-sm sm:w-64'>
					<input
						type='text'
						onChange={handleOnChange}
						value={searchText}
						className='outline-none placeholder:text-sm placeholder:italic placeholder:text-black placeholder:opacity-50'
						placeholder='Tra Cứu Tên'
					/>
					<FaSearch size={16} />
				</div>
				<button
					onClick={handleRemoveFilter}
					className='ml-auto flex items-center rounded-lg bg-[#D8232A] p-2 sm:px-5 sm:py-2 md:gap-6'>
					<span className='hidden text-sm font-normal text-white md:block'>
						Bỏ chọn lọc
					</span>
					<TiDeleteOutline size={16} color='white' />
				</button>
			</div>
		</div>
	);
}
