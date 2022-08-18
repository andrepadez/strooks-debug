import React from 'react'
import PropTypes from 'prop-types'

const TableHead = ({ columns }) => {
  return (
    <thead className="thead-light">
      <tr>
        {columns &&
          columns.map(col => {
            const key = col.field || col
            let label = col.label || (typeof col === 'string' && col) || ''

            const sortKey = col.sortKey

            return sortKey ? (
              <th key={key} data-sort={sortKey}>
                {label}
              </th>
            ) : (
              <th key={key} data-sort={sortKey}>
                {label}
              </th>
            )
          })}
      </tr>
    </thead>
  )
}

TableHead.propTypes = {
  columns: PropTypes.array.isRequired,
}

export default TableHead
