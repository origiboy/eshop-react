import { Link } from "react-router-dom";
import CartOrder from '../../components/CartOrder';
import CartItem from '../../components/CartItem';
import './cart.scss';

import { useStore } from '../../store/StoreContext';

function Cart() {
  const { state, dispatch } = useStore();
  
  const handleDeleteCart = (id) => {
    dispatch({
        type: 'DELETE_ALL_CART',
      });
}

  return (
    <div className='cart'>
      <div className='cart__list'>
        <div className='cart__header'>
          <span>Товар</span>
          <span>К-во</span>
        </div>
        <ul>
        {
          state.cart.map((item) => <CartItem item={item} key={item.id} />)
        }
        </ul>
        <div>
          <button className='cart__delete' onClick={handleDeleteCart}>Очистить корзину</button>
          <Link to='/' className='cart__link'>Продолжить покупки</Link>
        </div>
      </div>
      <div className='cart__order'>
        <CartOrder />
      </div>
    </div>
  );
}

export default Cart;