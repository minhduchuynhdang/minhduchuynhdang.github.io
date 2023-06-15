// Component
import BlogCard from '../../shared/BlogCard';

type BlogListProps = {
	posts: Post[];
};

export default function BlogList({ posts }: BlogListProps) {
	return posts.length > 0 ? (
		<div className='mb-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2'>
			{posts.map((post) => (
				<BlogCard post={post} key={post._id} />
			))}
		</div>
	) : (
		<div className='mb-6 w-full p-4 text-center shadow-md'>
			<h1 className='text-lg font-bold text-black'>
				Không tìm được kết quả, xin vui lòng thử lại
			</h1>
		</div>
	);
}
