import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

export default function ExternalCard({ post }: { post: ExternalPost }) {
	return (
		<div
			key={post._id}
			className='grid h-[21.875rem] grid-cols-1 grid-rows-[1.5fr_1fr] overflow-hidden rounded-lg bg-white shadow-md'>
			<div className='relative'>
				<Image
					src={urlForImage(post.mainImage).url()}
					alt=''
					fill
					sizes='(max-width: 800px) 100%'
					className='object-cover'
				/>
			</div>
			<div className='grid gap-1 px-4 py-2'>
				<span className='text-sm font-light uppercase text-[#EF4056] 3xl:text-base'>
					{post.author}
				</span>
				<h5 className='text-lg font-bold text-black 3xl:text-2xl'>
					{post.title}
				</h5>
				<p className='text-sm font-light italic 3xl:text-base'>
					{post.description}
				</p>
				<Link
					href={post.link}
					target='_blank'
					className='text-sm font-bold underline 3xl:text-base'>
					Đọc Tiếp
				</Link>
			</div>
		</div>
	);
}
