import React from 'react'

export const ProductTable = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  return (
    <div id="product-table">
      <header>
        <strong>Products (0 items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}
