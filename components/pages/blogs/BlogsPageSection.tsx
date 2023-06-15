'use client';
import { FormEvent, useMemo, useState, Suspense } from 'react';
// Components
import LoadingPage from '@/app/(client)/loading';
import SearchInput from '../../shared/SearchInput';
import BlogList from './BlogList';
import Pagination from '../../shared/Pagination';
import ExternalCard from '../../shared/ExternalCard';

type BlogsPageSectionProps = {
	posts: Post[];
	externals: ExternalPost[];
};

// Max items per page
const PAGE_SIZE = 8;

export default function BlogsPageSection({
	posts,
	externals,
}: BlogsPageSectionProps) {
	const [searchText, setSearchText] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(1);

	// the starting index to slice the posts
	const startIndex = (currentPage - 1) * PAGE_SIZE;

	// Posts satisfied the filter condition
	const filteredPosts = useMemo(() => {
		if (posts) {
			return posts.filter((post) =>
				post.title.toLowerCase().includes(searchText.toLowerCase())
			);
		}

		return [];
	}, [posts, searchText]);

	// Helper function to handle previous page button
	function handlePreviousButton() {
		setCurrentPage((prevPage) => (prevPage - 1 > 0 ? prevPage - 1 : 1));
		window.scrollTo(0, 0);
	}

	// Helper function to handle next page button
	function handleNextButton(pageCount: number) {
		setCurrentPage((prevPage) =>
			prevPage + 1 <= pageCount ? prevPage + 1 : prevPage
		);
		window.scrollTo(0, 0);
	}

	// Helper function to handle search input
	function handleOnChange(e: FormEvent<HTMLInputElement>) {
		setSearchText(e.currentTarget.value);
		setCurrentPage(1);
	}

	return (
		<section className='mb-10 w-full px-4 sm:px-10 lg:px-20 3xl:px-0'>
			<h3 className='mb-12 font-extrabold uppercase text-black sm:text-2xl 3xl:text-4xl'>
				Thư Viện Blog
			</h3>
			<div className='grid grid-cols-1 place-items-start gap-9 lg:grid-cols-[2fr_1fr]'>
				<div className='w-full'>
					<SearchInput
						handleOnChange={handleOnChange}
						searchText={searchText}
						setSearchText={setSearchText}
					/>
				</div>
				{/* Blog List */}
				<div className='row-start-2 flex h-full w-full flex-col'>
					<Suspense fallback={<LoadingPage />}>
						<BlogList
							posts={filteredPosts.slice(startIndex, startIndex + PAGE_SIZE)}
						/>
					</Suspense>
					<Pagination
						currentPage={filteredPosts.length > 0 ? currentPage : 0}
						pageCount={Math.ceil(filteredPosts.length / PAGE_SIZE)}
						handlePreviousButton={handlePreviousButton}
						handleNextButton={handleNextButton}
					/>
				</div>
				{/* External Links */}
				<div className='row-start-2 hidden rounded-xl bg-[#FFE7CC] pb-10 pr-8 pt-5 lg:block'>
					<h4 className='mb-10 rounded-r-lg bg-white px-10 py-4 text-2xl font-extrabold uppercase text-black'>
						External Link
					</h4>
					<div className='grid grid-cols-1 gap-10 pl-8'>
						{externals.length > 0 &&
							externals.map((post) => (
								<ExternalCard key={post._id} post={post} />
							))}
					</div>
				</div>
			</div>
		</section>
	);
}
