import { urlForImage } from '@/sanity/lib/image';

const BlogMainBanner = ({ post }: { post: Post }) => {
	return (
		<section
			className={`relative h-[450px] bg-cover bg-center bg-no-repeat 2xl:h-[550px] 3xl:bg-[center_top_20%]`}
			style={{
				backgroundImage: `url(${urlForImage(post.mainImage).url()})`,
			}}>
			<div className='mx-auto flex h-full w-full max-w-[1600px] flex-col justify-end px-4 pb-8 text-start sm:px-10 lg:px-20 3xl:px-0'>
				<p className='z-50 text-base font-normal italic text-white 3xl:text-3xl'>
					{new Date(post._createdAt).toLocaleDateString('vi')}
				</p>
				<h3 className='z-50 text-2xl font-extrabold uppercase text-white 3xl:text-3xl'>
					{post.title}
				</h3>
			</div>
		</section>
	);
};
export default BlogMainBanner;
