import './cartitem.scss';

import { priceFormatting } from '../../utils/priceFormatting';
import { useStore } from '../../store/StoreContext';

function CartItem({item}) {
    const BASE_URL = '/eshop-react/products/';

    const { dispatch } = useStore();

    const handleIncrease = (id) => {
        dispatch({
            type: 'INCREASE_AMOUNT_IN_CART',
            payload: id,
          });
    }

    const handleDecrease = (id) => {
        dispatch({
            type: 'DECREASE_AMOUNT_IN_CART',
            payload: id,
          });
    }

    const handleDeleteFromCart = (id) => {
        dispatch({
            type: 'DELETE_FROM_CART',
            payload: id,
          });
    }
    
    return (
        <li>
            <div className='cart-card'>
                <img src={BASE_URL + item.img} className='cart-card__image' alt={ item.name } />
                <div className='cart-card__text'>
                    <h2 className='cart-card__header'>{ item.name }</h2>
                    <p className='cart-card__description'>{ item.description }</p>
                    <span className='cart-card__price'>{ priceFormatting(item.price) }</span>
                    <div>
                        {
                            item.favourite && <span className='cart-card__favourite'>В избранном</span>
                        }
                        <span className='cart-card__delete' onClick={() => handleDeleteFromCart(item.id)}>Удалить</span>
                    </div>
                </div>
                <div className='cart-card__control'>
                    { item.current }
                    { item.current < item.amount.max && <button className='cart-card__increase' onClick={() => handleIncrease(item.id)}></button> }
                    { item.current > item.amount.min && <button className='cart-card__decrease' onClick={() => handleDecrease(item.id)}></button> }
                </div>
            </div>
        </li>
    );
}

export default CartItem;