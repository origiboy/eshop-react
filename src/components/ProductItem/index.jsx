import './productItem.scss';

import { priceFormatting } from '../../utils/priceFormatting';
import { useStore } from '../../store/StoreContext';

function ProductItem({item}) {
    const BASE_URL = '/products/';

    const { dispatch } = useStore();

    const handleAddToCart = (id) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: id,
          });
    }

    const handleAddToFavourite = (id) => {
        dispatch({
            type: 'ADD_TO_FAVOURITE',
            payload: id,
        });
    }

    const handleRemoveFromFavourite = (id) => {
        dispatch({
            type: 'REMOVE_FROM_FAVOURITE',
            payload: id,
        });
    }

    return (
        <li>
            <div className='card'>
                <div className='card__control'>
                    <span className='card__icon card__add-to-cart' onClick={() => handleAddToCart(item.id)}></span>
                    <span className={'card__icon ' + (item.favourite ? 'card__add-to-favourite_selected' : 'card__add-to-favourite')} onClick={() => {
                        if (item.favourite) {
                            handleRemoveFromFavourite(item.id)
                        } else {
                            handleAddToFavourite(item.id)
                        }
                    }}></span>
                </div>
                <img src={BASE_URL + item.img} className='card__image' alt={ item.name } />
                <h2 className='card__header'>{ item.name }</h2>
                <p className='card__description'>{ item.description }</p>
                <span>{ priceFormatting(item.price) }</span>
            </div>
        </li>
    );
}

export default ProductItem;