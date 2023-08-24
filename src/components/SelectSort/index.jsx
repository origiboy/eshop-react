import { useState, useEffect } from 'react';
import { useStore } from '../../store/StoreContext';

import './selectSort.scss';

function SelectSort() {
    const OPTIONS = [
        {
            value: 'asc',
            text: 'Порядок: сперва дешевле'
        },
        {
            value: 'desc',
            text: 'Порядок: сперва дороже'
        }
    ]
    const [selectedSorting, setSelectedSorting] = useState('asc');
    const { dispatch } = useStore();

    const handleSelectedSorting = (e) => {
        setSelectedSorting(e);
        switch(selectedSorting) {
            case 'asc':
                dispatch({ type: 'SORT_PRODUCTS_BY_PRICE_ASC' });
            break;
            case 'desc':
                dispatch({ type: 'SORT_PRODUCTS_BY_PRICE_DESC' });
            break;
        }
    }

    useEffect(() => {
        dispatch({ type: 'INITIALIZE_CART' });
    }, []);

    return (
        <select
            value={selectedSorting}
            onChange={e => handleSelectedSorting(e.target.value)}
        >
            {OPTIONS.map(item => (
                <option value={item.value} key={item.value}>
                    { item.text }
                </option>
            ))}
        </select>
    );
}

export default SelectSort;