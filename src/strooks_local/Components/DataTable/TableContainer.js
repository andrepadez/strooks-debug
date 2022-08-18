import React from 'react'
import PropTypes from 'prop-types'

const TableContainer = ({ title, children }) => {
  return (
    <div className="card data-table">
      {title && (
        <div className="card-header border-0">
          <h4 className="mb-0">{title}</h4>
        </div>
      )}
      <div className="table-responsive">{children}</div>
    </div>
  )
}

TableContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default TableContainer
