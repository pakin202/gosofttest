import React from 'react'

export const ProductFilters = (props) => {

  const onPriceChange = (e) => {
    // TODO: implement handler
  }

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="minPrice">Min Price:</label>
      <input
        type="number"
        id="minPrice"
        name="minPrice"
        placeholder="Min price..." />
      <label htmlFor="maxPrice">Max Price:</label>
      <input
        type="number"
        id="maxPrice"
        name="maxPrice"
        placeholder="Max price..." />
    </div>
  )
}
