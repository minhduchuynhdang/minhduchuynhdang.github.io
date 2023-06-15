'use client';
import { FormEvent, useMemo, useState } from 'react';
import SearchInput from '../../shared/SearchInput';
import Pagination from '../../shared/Pagination';
import ProductsList from './ProductsList';

type ProductsPageProps = {
	categoryParams: string;
	products: Product[];
	suppliers: Supplier[];
	categories: Category[];
};

const PAGE_SIZE = 8;

export default function ProductsPageSection({
	categoryParams,
	products,
	suppliers,
	categories,
}: ProductsPageProps) {
	const [supplier, setSupplier] = useState<string>('');
	const [category, setCategory] = useState<string>(categoryParams);
	const [searchText, setSearchText] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);

	const startIndex = (currentPage - 1) * PAGE_SIZE;

	const filteredProducts = useMemo(() => {
		if (products) {
			return products.filter((product) => {
				if (
					product.supplier.shortName
						.toLowerCase()
						.includes(supplier.toLowerCase()) &&
					product.category.title
						.toLowerCase()
						.includes(category.toLowerCase()) &&
					product.name.toLowerCase().includes(searchText.toLowerCase())
				) {
					return product;
				}
			});
		}

		return [];
	}, [products, category, searchText, supplier]);

	function handlePreviousButton() {
		setCurrentPage((prevPage) => (prevPage - 1 > 0 ? prevPage - 1 : 1));
		window.scrollTo(0, 0);
	}

	function handleNextButton(pageCount: number) {
		setCurrentPage((prevPage) =>
			prevPage + 1 <= pageCount ? prevPage + 1 : prevPage
		);
		window.scrollTo(0, 0);
	}

	function handleOnChange(e: FormEvent<HTMLInputElement>) {
		setSearchText(e.currentTarget.value);
		setCurrentPage(1);
	}

	return (
		<section className='mb-16 px-4 sm:px-10 lg:px-20 3xl:px-0'>
			<h3 className='mb-12 font-extrabold uppercase text-black sm:text-2xl 3xl:text-4xl'>
				Danh Sách Sản Phẩm
			</h3>
			<div className='w-full'>
				<SearchInput
					page='products'
					supplier={supplier}
					category={category}
					suppliers={suppliers}
					categories={categories}
					handleOnChange={handleOnChange}
					searchText={searchText}
					setSearchText={setSearchText}
					setSupplier={setSupplier}
					setCategory={setCategory}
					setCurrentPage={setCurrentPage}
				/>
			</div>
			<ProductsList
				products={filteredProducts.slice(startIndex, startIndex + PAGE_SIZE)}
			/>
			<div className='mt-10'>
				<Pagination
					currentPage={filteredProducts.length > 0 ? currentPage : 0}
					pageCount={Math.ceil(filteredProducts.length / PAGE_SIZE)}
					handlePreviousButton={handlePreviousButton}
					handleNextButton={handleNextButton}
				/>
			</div>
		</section>
	);
}
