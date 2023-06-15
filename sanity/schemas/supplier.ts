import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'supplier',
	title: 'Supplier',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'shortName',
			title: 'Short Name',
			type: 'string',
		}),
		defineField({
			name: 'logo',
			title: 'Logo',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
	],
});
