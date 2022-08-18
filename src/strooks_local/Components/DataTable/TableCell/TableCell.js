import React from 'react'
import PropTypes from 'prop-types'

const TableCell = ({ value, row, data, format, column }) => {
  value = typeof format === 'function' ? format(value, row, data) : value

  return (
    <td data-label={column.label} className={column.className}>
      {value}
      {value ? '' : String.fromCharCode(0x3164)}
    </td>
  )
}

TableCell.propTypes = {
  value: PropTypes.string,
  row: PropTypes.object,
  data: PropTypes.array,
  format: PropTypes.func,
  column: PropTypes.object,
}

export default TableCell
