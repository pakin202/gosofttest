import React, { useState } from 'react'

import '../styles/Search.css';
import { ColumnToggle } from './ColumnToggle';
import { ProductTable } from './ProductTable';
import { ProductFilters } from './ProductFilters';

export const ProductSearch = (props) => {
  const [price, setPrice] = useState({ minPrice: '', maxPrice: '' });

  const [toggles, setToggles] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceChange = (name, value) => {
    // TODO: implement price change handler
  }

  const onToggle = (name, checked) => {
    // TODO: implement column toggle handler
  }

  const onFilter = () => {
    // TODO: implement handler for filtering products by price range
  }

  let filteredItems = [];
  return (
    <div className="Products">
      <ProductFilters
        minPrice={''}
        maxPrice={''}
        onPriceChange={''} />

      <ColumnToggle
        onToggle={''}
        toggles={''} />

      <ProductTable
        products={filteredItems}
        columns={''} />
    </div>
  );
}

export default ProductSearch;
