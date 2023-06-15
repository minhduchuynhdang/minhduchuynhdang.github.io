import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

export const RichTextComponents = {
	types: {
		image: ({ value }: any) => {
			return (
				<div className='relative my-8 flex w-full items-center justify-center'>
					<figure>
						<Image
							className='h-full w-full object-cover'
							src={urlForImage(value).url()}
							alt=''
							width={500}
							height={500}
						/>
						<figcaption className='text-center italic'>
							{value.description}
						</figcaption>
					</figure>
				</div>
			);
		},
	},
	list: {
		bullet: ({ children }: any) => (
			<ul className='ml-5 list-disc space-y-5 py-5 3xl:text-2xl'>{children}</ul>
		),
		number: ({ children }: any) => (
			<ol className='ml-5 list-decimal'>{children}</ol>
		),
	},
	block: {
		normal: ({ children }: any) => (
			<p className='text-base font-normal text-black 3xl:text-2xl'>
				{children}
			</p>
		),
		h3: ({ children }: any) => (
			<h3 className='font-bold text-black sm:text-2xl 3xl:text-3xl'>
				{children}
			</h3>
		),
	},
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined;

			return (
				<Link
					href={value.href}
					rel={rel}
					className='underline decoration-[#F7ab0a] hover:decoration-black'>
					{children}
				</Link>
			);
		},
		fileReference: ({ children, value }: any) => {
			const [_file, id, extension] = value.file.asset._ref.split('-');

			return (
				<a
					className='text-blue-500 3xl:text-2xl'
					href={`https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}?dl=${children}.${extension}`}>
					{children}
				</a>
			);
		},
	},
};
