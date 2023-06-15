// Components
import ProductCard from './ProductCard';

type ProductListProps = {
	products: Product[];
};

const ProductsList = ({ products }: ProductListProps) => {
	return products.length > 0 ? (
		<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
			{products.map((product) => (
				<ProductCard product={product} key={product._id} />
			))}
		</div>
	) : (
		<div className='mb-6 w-full p-4 text-center shadow-md'>
			<h1 className='text-lg font-bold text-black'>
				Không tìm được kết quả, xin vui lòng thử lại
			</h1>
		</div>
	);
};
export default ProductsList;
