import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import styles from './datatable.module.css'

const DataTable = ({ data, columns, show, className = '', controller }) => {
  const [cols, setCols] = useState()
  const [rows, setRows] = useState()

  useEffect(() => {
    setRows(show ? data.slice(0, show) : data)
  }, [data, show])

  useEffect(() => {
    let cols = columns || []
    if (!columns) {
      cols = data && Object.keys(data[0]).map(k => ({ field: k, label: k }))
    } else if (typeof columns[0] === 'string') {
      cols = columns.map(c => ({ field: c, label: c }))
    }
    setCols(cols)
  }, [columns, data])

  if (!data || !cols) return null

  return (
    <div className={styles.strooksDataTable}>
      <table className={`${className} table strooks-data-table`}>
        {cols && <TableHead data={data} columns={cols} />}
        {cols && rows && <TableBody data={rows} columns={cols} controller={controller} />}
      </table>
    </div>
  )
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object),
  show: PropTypes.number,
  className: PropTypes.string,
  controller: PropTypes.func,
}

export default DataTable
