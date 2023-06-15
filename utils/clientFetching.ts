import { client } from '@/sanity/lib/client';
import {
	externalQuery,
	homeBannerPostQuery,
	homeNewsPostQuery,
	allPostQuery,
	singlePostQuery,
	allSuppliersQuery,
	allProductsQuery,
	singleProductQuery,
	allCategoriesQuery,
} from './clientQueries';

export async function fetchAllProducts(): Promise<Product[]> {
	if (client) {
		return (await client.fetch(allProductsQuery)) || [];
	}

	return [];
}

export async function fetchProductBySlug(slug: string): Promise<Product> {
	if (client) {
		return (await client.fetch(singleProductQuery, { slug })) || ({} as any);
	}

	return {} as any;
}

export async function fetchAllPosts(): Promise<Post[]> {
	if (client) {
		return (await client.fetch(allPostQuery)) || [];
	}

	return [];
}

export async function fetchExternals(): Promise<ExternalPost[]> {
	if (client) {
		return (await client.fetch(externalQuery)) || [];
	}

	return [];
}

export async function fetchNews(): Promise<{
	homeBannerPostData: Post[];
	homeNewsPostData: Post[];
	externalPostData: ExternalPost[];
}> {
	if (client) {
		return (
			(await client.fetch(`{
		    'homeBannerPostData': ${homeBannerPostQuery},
		    'homeNewsPostData': ${homeNewsPostQuery},
		    'externalPostData': ${externalQuery}
	    }`)) || ({} as any)
		);
	}

	return {} as any;
}

export async function fetchPostBySlug(slug: string): Promise<Post> {
	if (client) {
		return (await client.fetch(singlePostQuery, { slug })) || ({} as any);
	}

	return {} as any;
}

export async function fetchSuppliers(): Promise<Supplier[]> {
	if (client) {
		return await client.fetch(allSuppliersQuery);
	}

	return [];
}

export async function fetchCategories(): Promise<Category[]> {
	if (client) {
		return await client.fetch(allCategoriesQuery);
	}

	return [];
}
