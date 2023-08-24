import './productsGridLayout.scss';

import { useStore } from '../../store/StoreContext';

import ProductItem from '../ProductItem';

function ProductsGridLayout() {
    const { state, dispatch } = useStore();

    return (
        <ul className='grid-3'>
            {
            state.products.map(item => (
                <ProductItem item={item} key={item.id} />
            ))}
        </ul>
    );
}

export default ProductsGridLayout;