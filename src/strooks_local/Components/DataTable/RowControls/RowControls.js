import React from 'react'
import PropTypes from 'prop-types'

const RowControls = ({ onClick }) => {
  return (
    <div onClick={onClick} className="controls flex gap-3 align-center">
      <i className="ni ni-settings" data-role="edit"></i>
      <i className="ni ni-fat-remove" data-role="delete"></i>
    </div>
  )
}

RowControls.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default RowControls
