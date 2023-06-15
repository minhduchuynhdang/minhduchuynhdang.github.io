// Sanity Document Type
type Base = {
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	_createdAt: string;
};

interface Post extends Base {
	body: Block[];
	mainImage: Image;
	slug: Slug;
	title: string;
	description: string;
	moreInfo: Omit<ExternalPost, 'mainImage' | 'description'>;
	morePost: Omit<Post, 'body' | 'description' | 'morePost' | 'moreInfo'>;
}

interface ExternalPost extends Base {
	author: string;
	mainImage: Image;
	title: string;
	description: string;
	link: string;
}

interface Image {
	_type: 'image';
	asset: Reference;
}

interface Reference {
	_ref: string;
	_type: 'reference';
}

interface Slug {
	_type: 'slug';
	current: string;
}

interface Block {
	_key: string;
	_type: 'block';
	children: Span[];
	markDefs: any[];
	style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
	_key: string;
	_type: 'span';
	marks: string[];
	text: string;
}

interface Category extends Base {
	title: string;
	slug: Slug;
}

interface MainImage {
	_type: 'image';
	asset: Reference;
}

interface Title {
	_type: 'string';
	current: string;
}

// Supplier
interface Supplier extends Base {
	name: string;
	shortName: string;
	logo: StaticImageData;
	url: string;
	image: Image;
	description: string;
}

// Product
interface Product extends Base {
	name: string;
	slug: Slug;
	supplier: Supplier;
	category: Category;
	productImage: Image[];
	bannerImage: Image;
	kind: string;
	info: Block;
	otherProducts: Product[];
}
