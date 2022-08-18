import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '../TableRow'

const TableBody = ({ data, columns, controller }) => {
  return (
    <tbody>
      {data.map((row, idx) => {
        const key = row.id || row._id || JSON.stringify(row) || idx
        return (
          <TableRow key={key} row={row} data={data} columns={columns} controller={controller} />
        )
      })}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  controller: PropTypes.func,
}

export default TableBody
