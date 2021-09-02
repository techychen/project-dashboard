import React, { useState } from 'react'
import {
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core'
import { Check, Edit, Visibility } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import './style.css'

const Record = ({ index, record, statusData, onEdit }) => {
  const { title, division, project_owner, budget, status, created, modified } =
    record
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(record)
  const history = useHistory()

  const handleEdit = e => {
    if (editing) {
      onEdit(index, value)
    }
    setEditing(prev => !prev)
  }

  const handleChange = e => {
    const { name, value: val } = e.target
    setValue({
      ...value,
      [name]: val
    })
  }

  const navigateToDetail = e => {
    history.push('/detail', { record })
  }

  return (
    <div className="record-container">
      <div className="record-item">{title}</div>
      <div className="record-item">{division}</div>
      <div className="record-item">
        {editing ? (
          <TextField
            name="project_owner"
            value={value.project_owner}
            onChange={handleChange}
          />
        ) : (
          project_owner
        )}
      </div>
      <div className="record-item">
        {editing ? (
          <TextField
            name="budget"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
            value={value.budget}
            onChange={handleChange}
          />
        ) : (
          `$${budget}`
        )}
      </div>
      <div className="record-item">
        {editing ? (
          <Select name="status" value={value.status} onChange={handleChange}>
            {statusData.map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        ) : (
          status
        )}
      </div>
      <div className="record-item">{created}</div>
      <div className="record-item">{modified}</div>
      <div className="record-item">
        <IconButton
          color="primary"
          aria-label="Edit"
          size="medium"
          component="span"
          onClick={handleEdit}
        >
          {editing ? <Check fontSize="small" /> : <Edit fontSize="small" />}
        </IconButton>
        <IconButton
          color="primary"
          aria-label="Edit"
          size="medium"
          component="span"
          onClick={navigateToDetail}
        >
          {!editing && <Visibility fontSize="small" />}
        </IconButton>
      </div>
    </div>
  )
}

export default Record
