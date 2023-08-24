import SelectSort from '../../components/SelectSort';
import ProductsGridLayout from '../../components/ProductsGridLayout';

import './catalog.scss';

function Catalog() {
  return (
    <div className="catalog">
      <SelectSort />
      <ProductsGridLayout />
    </div>
  );
}

export default Catalog;