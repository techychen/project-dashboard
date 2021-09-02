import React from 'react'
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography
} from '@material-ui/core'
import './style.css'

const Filter = ({
  statusData,
  divisionData,
  options,
  changeOptions,
  onApply,
  onReset
}) => {
  const {
    title,
    projectOwner,
    statuses,
    divisions,
    budgetRange,
    createdFrom,
    createdTo,
    modifiedFrom,
    modifiedTo
  } = options

  const handleChange = e => {
    const { name, value } = e.target
    changeOptions({
      ...options,
      [name]: value
    })
  }

  const handleSliderChange = (_, newValue) => {
    changeOptions({
      ...options,
      budgetRange: newValue
    })
  }

  return (
    <div className="filter-container">
      <h2 className="filter-title">Filter</h2>
      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={handleChange}
      />
      <TextField
        name="projectOwner"
        label="Project Owner"
        value={projectOwner}
        onChange={handleChange}
        style={{ marginTop: 20 }}
      />

      <InputLabel id="status-select" style={{ marginTop: 20 }}>
        Division
      </InputLabel>
      <Select
        labelId="status-select"
        multiple
        name="divisions"
        value={divisions}
        onChange={handleChange}
      >
        {divisionData.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>

      <InputLabel id="status-select" style={{ marginTop: 20 }}>
        Status
      </InputLabel>
      <Select
        labelId="status-select"
        multiple
        name="statuses"
        value={statuses}
        onChange={handleChange}
      >
        {statusData.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>

      <Typography id="budget-slider" gutterBottom style={{ marginTop: 20 }}>
        Budget ($0 ~ $25,000)
      </Typography>
      <Slider
        aria-labelledby="budget-slider"
        step={1000}
        marks
        min={0}
        max={25000}
        valueLabelDisplay="auto"
        value={budgetRange}
        onChange={handleSliderChange}
      />

      <Typography gutterBottom style={{ marginTop: 20 }}>
        Created Date
      </Typography>
      <Grid container justifyContent="space-around">
        <TextField
          label="From"
          type="date"
          name="createdFrom"
          value={createdFrom}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          label="To"
          type="date"
          name="createdTo"
          value={createdTo}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>

      <Typography gutterBottom style={{ marginTop: 20 }}>
        Modified Date
      </Typography>
      <Grid container justifyContent="space-around">
        <TextField
          label="From"
          type="date"
          name="modifiedFrom"
          value={modifiedFrom}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          label="To"
          type="date"
          name="modifiedTo"
          value={modifiedTo}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>

      <Grid container justifyContent="space-around" style={{ marginTop: 20 }}>
        <Button variant="contained" onClick={onReset}>
          Reset Filter
        </Button>
        <Button variant="contained" color="primary" onClick={onApply}>
          Apply Filter
        </Button>
      </Grid>
    </div>
  )
}

export default Filter
