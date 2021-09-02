import React from 'react'
import { IconButton } from '@material-ui/core'
import { Add, GetApp, Equalizer } from '@material-ui/icons'
import './style.css'

const Header = ({ title, hideButtons, onStats }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
      {!hideButtons && (
        <div className="header-buttons">
          <IconButton color="primary" aria-label="Add" component="span">
            <Add />
          </IconButton>
          <IconButton color="primary" aria-label="Export" component="span">
            <GetApp />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Export"
            component="span"
            onClick={onStats}
          >
            <Equalizer />
          </IconButton>
        </div>
      )}
    </div>
  )
}

export default Header
