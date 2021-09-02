import React, { useEffect, useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { getData } from '../../api'
import Grid from '../../components/Grid'
import Filter from '../../components/Filter'
import Header from '../../components/Header'
import './style.css'
import Stats from '../../components/Stats'

const INITIAL_FILTER = {
  title: '',
  projectOwner: '',
  statuses: [],
  divisions: [],
  budgetRange: [0, 25000],
  createdFrom: '',
  createdTo: '',
  modifiedFrom: '',
  modifiedTo: ''
}

const Home = () => {
  const [records, setRecords] = useState([])
  const [divisionData, setDivisionData] = useState([])
  const [statusData, setStatusData] = useState([])
  const [filterOptions, setFilterOptions] = useState(INITIAL_FILTER)
  const [openSnack, setOpenSnack] = useState(false)
  const [openStats, setOpenStats] = useState(false)

  const headers = [
    'Title',
    'Division',
    'Project Owner',
    'Budget',
    'Status',
    'Created Date',
    'Modified Date',
    'Action'
  ]

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const data = await getData()
    setRecords([...data])
    setStatusData([...new Set(data.map(item => item.status))])
    setDivisionData([...new Set(data.map(item => item.division))])
  }

  const onApply = async () => {
    const data = await getData(filterOptions)
    setRecords([...data])
  }

  const onReset = () => {
    setFilterOptions(INITIAL_FILTER)
  }

  const onEdit = (index, value) => {
    records[index] = {
      ...value
    }
    setRecords([...records])
    setOpenSnack(true)
  }

  return (
    <div className="home-container">
      <Header title="Project Dashboard" onStats={() => setOpenStats(true)} />
      <div className="home-content">
        <div className="home-left-content">
          <Filter
            statusData={statusData}
            divisionData={divisionData}
            options={filterOptions}
            changeOptions={setFilterOptions}
            onApply={onApply}
            onReset={onReset}
          />
        </div>
        <div className="home-right-content">
          <Grid
            data={records}
            headers={headers}
            statusData={statusData}
            onEdit={onEdit}
          />
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={openSnack}
          autoHideDuration={2000}
          message="Record changed"
        />
      </div>
      <Stats
        open={openStats}
        records={records}
        handleClose={() => setOpenStats(false)}
      />
    </div>
  )
}

export default Home
