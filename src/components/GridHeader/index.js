import React from 'react'
import './style.css'

const GridHeader = ({ headers }) => {
  return (
    <div className="grid-header-container">
      {headers.map(header => (
        <div key={header} className="grid-header-item">
          {header}
        </div>
      ))}
    </div>
  )
}

export default GridHeader
