import Link from 'next/link';
// Components
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../RichTextComponent';
// Icons
import { FaSearch, FaChevronRight } from 'react-icons/fa';

const BlogContent = ({ post }: { post: Post }) => {
	return (
		<section className='mb-20'>
			<div className='mx-auto max-w-[1600px] px-4 text-start sm:px-[8rem]'>
				<div className='my-4'>
					<PortableText value={post.body} components={RichTextComponents} />
				</div>
				<div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2'>
					{/* More Info Button */}
					<Link
						href={post.moreInfo.link}
						target='_blank'
						className='flex h-28 items-center justify-center gap-6 rounded-xl bg-[#1B73BD] text-white sm:px-6 md:justify-self-start'>
						<FaSearch size={40} color='white' />
						<div>
							<h4 className='font-extrabold uppercase underline sm:text-lg'>
								Xem Thêm
							</h4>
							<p className='max-w-[30ch] text-sm font-extrabold leading-6 sm:text-lg'>
								{post.moreInfo.title}
							</p>
						</div>
					</Link>

					{/* Next Post Button */}
					<Link
						href={`/blogs/${post.morePost.slug.current}`}
						className='flex h-28 items-center justify-center gap-6 rounded-xl bg-[#2C3043] text-white sm:px-6 md:justify-self-end'>
						<div>
							<h4 className='font-extrabold uppercase underline sm:text-lg'>
								Bài viết tiếp theo
							</h4>
							<p className='max-w-[30ch] text-sm font-extrabold leading-6 sm:text-lg'>
								{post.morePost.title}
							</p>
						</div>
						<FaChevronRight size={20} />
					</Link>
				</div>
			</div>
		</section>
	);
};
export default BlogContent;
