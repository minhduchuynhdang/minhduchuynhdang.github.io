// Components
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponent';

const Content = ({ product }: { product: Product }) => {
	return (
		<div className='grid grid-cols-1 gap-4 text-start'>
			<PortableText value={product.info} components={RichTextComponents} />
		</div>
	);
};
export default Content;
