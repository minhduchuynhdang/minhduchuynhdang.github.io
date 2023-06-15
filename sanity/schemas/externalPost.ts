import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'external',
	title: 'External Links',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string',
		}),
		defineField({
			name: 'link',
			title: 'Link',
			type: 'url',
		}),
		defineField({
			name: 'mainImage',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
});
