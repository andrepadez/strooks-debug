import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '../TableCell'
import RowControls from '../RowControls'

const TableRow = ({ row, columns, data, controller }) => {
  const onControlsClick = ev => {
    controller(ev, row)
  }
  return (
    <tr>
      {columns.map((col, idx) => {
        let value = typeof col === 'string' ? row[col] : row[col.field]

        const path = col.field && col.field.split('.')
        if (path && path.length > 1) {
          value = row[path.shift()]
          while (value && path.length) {
            value = value[path.shift()]
          }
        }

        return (
          <TableCell
            key={idx}
            value={value}
            column={col}
            row={row}
            data={data}
            format={col.format}
          />
        )
      })}
      {typeof controller === 'function' && (
        <td>
          <RowControls onClick={onControlsClick} />
        </td>
      )}
    </tr>
  )
}

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  controller: PropTypes.func,
}

export default TableRow
