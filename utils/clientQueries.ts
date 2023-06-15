import { groq } from 'next-sanity';

export const allCategoriesQuery = groq`*[_type=='category'] {
  ...
}`;
export const allPostQuery = groq`*[_type=='post'] {
  ...,
} | order(_createdAt desc)`;

// First three posts
export const homeBannerPostQuery = groq`*[_type=='post'] {
  ...,
} | order(_createdAt desc)[0..2]`;

// First 6 posts
export const homeNewsPostQuery = groq`*[_type=='post'] {
  ...,
} | order(_createdAt desc)[0..5]`;

// First three links
export const externalQuery = groq`*[_type=='external'] {
  ...
} | order(_createdAt desc)[0..2]`;

// Single Post
export const singlePostQuery = groq`*[_type=='post' && slug.current == $slug][0] {
  ...,
  moreInfo->{title,link},
  morePost->{title,slug}
}`;

// All Suppliers
export const allSuppliersQuery = groq`*[_type=='supplier'] {
	...,
} | order(_createdAt desc)`;

// All Products
export const allProductsQuery = groq`*[_type=='product'] {
  ...,
  supplier->{shortName},
  category->
} | order(_createdAt desc)`;

// Single Product
export const singleProductQuery = groq`*[_type=='product' && slug.current == $slug] {
  ...,
  otherProducts[]->{_id,slug,productImage,name,supplier->{shortName},kind}
}[0]`;
