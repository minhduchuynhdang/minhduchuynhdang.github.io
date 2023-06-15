import Link from 'next/link';
import BlogCard from '../../shared/BlogCard';
import ExternalCard from '../../shared/ExternalCard';

function HomeNewsSection({
	posts,
	externalPosts,
}: {
	posts: Post[];
	externalPosts: ExternalPost[];
}) {
	return (
		<section className='mb-10'>
			<div className='relative mb-20 grid h-48 w-full place-items-center bg-news-background-image bg-100% bg-right-top-50 bg-no-repeat text-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-black before:opacity-30'>
				<h3 className='z-10 text-3xl font-extrabold uppercase text-white md:text-5xl'>
					Tin Tức & Kiến Thức{' '}
				</h3>
			</div>
			<div className='mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-4 sm:px-10 lg:grid-cols-[2fr_1fr] lg:px-20 2xl:px-0'>
				<div className='h-min rounded-lg bg-[#FFE7CC] p-6 sm:p-10'>
					<div className='mb-10 flex items-center justify-between'>
						<h4 className='text-2xl font-extrabold uppercase text-black md:text-4xl'>
							Blog
						</h4>
						<Link
							href='/blogs'
							className='grid w-32 place-items-center rounded-2xl bg-black p-2 text-sm font-bold uppercase text-white md:px-6 md:py-3'>
							Đọc Thêm
						</Link>
					</div>
					<div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16'>
						{posts.length > 0 &&
							posts.map((post) => <BlogCard key={post._id} post={post} />)}
					</div>
				</div>
				<div className='hidden gap-10 py-10 pl-10 lg:grid lg:grid-cols-1'>
					<h4 className='text-4xl font-extrabold uppercase text-black'>
						Tham Khảo
					</h4>
					{externalPosts.length > 0 &&
						externalPosts.map((post) => (
							<ExternalCard key={post._id} post={post} />
						))}
				</div>
			</div>
		</section>
	);
}
export default HomeNewsSection;
