import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import externalPost from './schemas/externalPost';
import supplier from './schemas/supplier';
import product from './schemas/product';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, externalPost, supplier, product, category, blockContent],
};
