import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Tên Sản Phẩm',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: { type: 'category' },
		}),
		defineField({
			name: 'supplier',
			title: 'Nhà Cung Cấp',
			type: 'reference',
			to: { type: 'supplier' },
		}),
		defineField({
			name: 'kind',
			title: 'Chủng Loại',
			type: 'string',
		}),
		defineField({
			name: 'productImage',
			title: 'Ảnh Sản Phẩm',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
		}),
		defineField({
			name: 'bannerImage',
			title: 'Ảnh Bìa',
			type: 'image',
		}),
		defineField({
			name: 'info',
			title: 'Giới Thiệu Về Sản Phẩm',
			type: 'blockContent',
		}),
		defineField({
			name: 'otherProducts',
			title: 'Sản Phẩm Tương Tự',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'product' } }],
		}),
	],
});
