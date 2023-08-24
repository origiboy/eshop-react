import { useState } from 'react';
import { useStore } from '../../store/StoreContext';
import { priceFormatting } from '../../utils/priceFormatting';
import './cartOrder.scss';

function CartOrder() {
    const { state } = useStore();

    const [fioInput, setFioInput] = useState('')
    const [numberInput, setNumberInput] = useState('')
    const [addressInput, setAddressInputInput] = useState('')

    const sendForm = (event) => {
        event.preventDefault();
        alert(`отправка формы ${fioInput} ${numberInput} ${addressInput}`)
    }

    return (
        <div className='order'>
            <h3 className='order__header'>Оформление заказа</h3>
            <form action="" onSubmit={sendForm}>
                <input type="text" className='order__input' placeholder='Имя Фамилия' onChange={(e) => setFioInput(e.target.value)} value={fioInput} />
                <input type="text" className='order__input' placeholder='+ 7 904 000 80 80' onChange={(e) => setNumberInput(e.target.value)} value={numberInput} />
                <input type="text" className='order__input' placeholder='Адрес доставки' onChange={(e) => setAddressInputInput(e.target.value)} value={addressInput} />
                <h4 className='order__price'>
                    Итого: <span>{ priceFormatting(state.cart.reduce(function (accumulator, product) {
                            return accumulator + product.current * product.price;
                        }, 0)) }
                    </span>
                </h4>
                <button className='order__button'>Оформить заказ</button>
            </form>
            
        </div>
    );
}

export default CartOrder;