import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import './style.css'

const Detail = () => {
  const location = useLocation()
  const { record } = location.state

  return (
    <div className="detail-container">
      <Header title="Detail" hideButtons />
      <div className="detail-content">
        {Object.keys(record).map(key => (
          <div key={key} className="detail-item">
            <div className="detail-key">{key}</div>
            <div className="detail-value">{record[key]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Detail
