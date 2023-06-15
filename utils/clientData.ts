/* 
  -------------------------------------------------  Desktop Navbar ----------------------------------------------------
*/
export type LinkType = {
	id: number;
	name: string;
	href: string;
	className?: string;
};

// List of the about-links
export const aboutLinksList: LinkType[] = [
	{
		id: 1,
		name: 'Về Công Ty',
		href: '/about/company',
		className: 'bg-about-company overflow-hidden ',
	},
	{
		id: 2,
		name: 'Nhà Cung Cấp',
		href: '/about/suppliers',
		className: 'bg-about-suppliers overflow-hidden ',
	},
];

// List of product-links
export const productLinkList: LinkType[] = [
	{
		id: 1,
		name: 'Tất Cả Sản Phẩm',
		href: '/products',
		className:
			'bg-all-product-image before:overflow-hidden before:rounded-lg after:absolute after:-right-[20px] after:w-[1px] after:h-full after:bg-[#707070] ',
	},
	{
		id: 2,
		name: 'Gia Cầm',
		href: '/products?category=Gia Cầm',
		className: 'bg-product-image-1 overflow-hidden ',
	},
	{
		id: 3,
		name: 'Gia Súc',
		href: '/products?category=Gia Súc',
		className: 'bg-product-image-2 overflow-hidden ',
	},
	{
		id: 4,
		name: 'Heo',
		href: '/products?category=Heo',
		className: 'bg-product-image-3 overflow-hidden ',
	},
];

/* 
  -------------------------------------------------  Mobile Navbar -----------------------------------------------------
*/
export type MobileLink = {
	id: number;
	name: string;
	active?: boolean;
	accordionList: {
		id: number;
		name: string;
		href: string;
	}[];
};

export const mobileLinkList: MobileLink[] = [
	{
		id: 1,
		name: 'Giới Thiệu',
		accordionList: [
			{
				id: 1,
				name: 'Về Công Ty',
				href: '/about/company',
			},
			{
				id: 2,
				name: 'Nhà Cung Cấp',
				href: '/about/suppliers',
			},
		],
	},
	{
		id: 2,
		name: 'Sản Phẩm',
		accordionList: [
			{
				id: 1,
				name: 'Tất Cả Sản Phẩm',
				href: '/products',
			},
			{
				id: 2,
				name: 'Gia Cầm',
				href: '/products?category=Gia Cầm',
			},
			{
				id: 3,
				name: 'Gia Súc',
				href: '/products?category=Gia Súc',
			},
			{
				id: 4,
				name: 'Heo',
				href: '/products?category=Heo',
			},
		],
	},
];

/* 
  ------------------------------------------------ Home Product Section ------------------------------------------------
*/

export const homeProductsLink = [
	{
		id: 1,
		href: '/products?category=Gia Cầm',
		title: 'Gia Cầm',
		backgroundImage: 'bg-product-image-1',
	},
	{
		id: 2,
		href: '/products?category=Gia Súc',
		title: 'Gia Súc',
		backgroundImage: 'bg-product-image-2',
	},
	{
		id: 3,
		href: '/products?category=Heo',
		title: 'Heo',
		backgroundImage: 'bg-product-image-3',
	},
];
