import React from 'react'

export const ColumnToggle = (props) => {
  const onToggle = (e) => {
    // TODO: implement checkbox click handler
  }

  // TODO: Bind handlers and props
  return (
    <div className="toggle-columns">
      { 
        Object.keys(props.toggles).map((toggle, index) => {
          return ( 
          <div key={index}>
            <label htmlFor={toggle}>
              {toggle}
            </label>
            <input
              id={toggle}
              name={toggle}
              type="checkbox" />
          </div>)
        })
      }
    </div>
  );
}
