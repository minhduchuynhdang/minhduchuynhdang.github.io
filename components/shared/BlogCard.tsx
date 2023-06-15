import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

const BlogCard = ({ post }: { post: Post }) => {
	return (
		<div className='relative grid h-[21.875rem] grid-cols-1 grid-rows-[1.5fr_1fr] overflow-hidden rounded-lg bg-white shadow-md'>
			<div className='relative'>
				<Image
					src={urlForImage(post.mainImage).url()}
					alt=''
					fill
					sizes='(max-width: 800px) 100%'
					className='object-cover'
				/>
			</div>
			<div className='z-10 grid flex-1 gap-1 px-4 py-2'>
				<span className='text-sm font-light text-black 3xl:text-base'>
					{new Date(post._createdAt).toLocaleDateString('vi')}
				</span>
				<h5 className='text-lg font-bold text-black 3xl:text-2xl'>
					{post.title}
				</h5>
				<p className='text-sm font-light italic 3xl:text-lg'>
					{post.description}
				</p>
				<Link
					href={`/blogs/${post.slug.current}`}
					className='text-sm font-bold underline 3xl:text-base'>
					Đọc Tiếp
				</Link>
			</div>
		</div>
	);
};

export default BlogCard;
