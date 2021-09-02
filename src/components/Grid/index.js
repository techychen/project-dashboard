import React from 'react'
import GridHeader from '../GridHeader'
import Record from '../Record'
import './style.css'

const Grid = ({ data, headers, statusData, onEdit }) => {
  return (
    <div className="grid-container">
      <GridHeader headers={headers} />
      <div className="grid-content">
        {data.length > 0 ? (
          data.map((item, index) => (
            <Record
              key={item.id}
              index={index}
              record={item}
              statusData={statusData}
              onEdit={onEdit}
            />
          ))
        ) : (
          <h3 className="grid-no-data">No Records</h3>
        )}
      </div>
    </div>
  )
}

export default Grid
