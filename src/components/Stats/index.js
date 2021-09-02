import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions } from '@material-ui/core'
import './style.css'

const Stats = ({ open, handleClose, records }) => {
  const [info, setInfo] = useState({})

  useEffect(() => {
    if (open) {
      let sum = 0,
        maxCreatedDate = records[0].created,
        minCreatedDate = records[0].created,
        maxModifiedDate = records[0].modified,
        minModifiedDate = records[0].modified
      const statuses = {},
        divisions = {}
      records.forEach(item => {
        sum += item.budget
        if (maxCreatedDate < item.created) {
          maxCreatedDate = item.created
        }
        if (minCreatedDate > item.created) {
          minCreatedDate = item.created
        }
        if (maxModifiedDate < item.modified) {
          maxModifiedDate = item.modified
        }
        if (minModifiedDate > item.modified) {
          minModifiedDate = item.modified
        }

        if (statuses[item.status]) {
          statuses[item.status] += 1
        } else {
          statuses[item.status] = 1
        }

        if (divisions[item.division]) {
          divisions[item.division] += 1
        } else {
          divisions[item.division] = 1
        }
      })

      setInfo({
        sum: sum.toFixed(2),
        average: (sum / records.length).toFixed(2),
        maxCreatedDate,
        minCreatedDate,
        maxModifiedDate,
        minModifiedDate,
        statuses,
        divisions
      })
    }
  }, [open])

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="stats-container">
        <div className="stats-title">Statistics</div>
        <div className="stats-content">
          <div className="stats-item">
            <b>Total Budget:</b> ${info.sum}
          </div>
          <div className="stats-item">
            <b>Average Budget:</b> ${info.average}
          </div>
          <div className="stats-item">
            <b>Created</b> from {info.minCreatedDate} to {info.maxCreatedDate}
          </div>
          <div className="stats-item">
            <b>Modified</b> from {info.minModifiedDate} to{' '}
            {info.maxModifiedDate}
          </div>
          {info.statuses && (
            <div className="stats-item">
              <div className="stats-item">
                <b>Status</b>
              </div>
              {Object.keys(info.statuses).map(key => (
                <div className="stats-item" key={key}>
                  {key}: {info.statuses[key]}
                </div>
              ))}
            </div>
          )}
          {info.divisions && (
            <div className="stats-item">
              <div className="stats-item">
                <b>Division</b>
              </div>
              {Object.keys(info.divisions).map(key => (
                <div className="stats-item" key={key}>
                  {key}: {info.divisions[key]}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Stats
