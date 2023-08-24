import { Link } from "react-router-dom";
import { useStore } from '../store/StoreContext';

function Header() {
  const { state } = useStore();

  return (
    <header>
      <h1 className='logo'>Интерьер.</h1>
        <nav className='nav'>
          <Link to='/' className='nav__link'>Каталог</Link>
          <Link to='/cart' className='nav__link'>
            Корзина
            {
              state.cart.length > 0 &&
              <span className='nav__link-count'>{ state.cart.length }</span>
            }
          </Link>
        </nav>

        <nav className='nav_mobile'>
          <Link to='/' className='nav__link'></Link>
          <Link to='/cart' className='nav__link'></Link>
        </nav>
    </header>
  );
}

export default Header;
