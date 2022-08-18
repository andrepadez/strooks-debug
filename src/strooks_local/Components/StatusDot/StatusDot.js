import React from 'react'
import PropTypes from 'prop-types'

const StatusDot = ({ type = 'success', scale = 1, className = '' }) => {
  const style = {
    transformOrigin: 'top left',
    transform: `scale(${scale})`,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  }
  return <div className={`bg-${type} ${className}`} style={style}></div>
}

StatusDot.propTypes = {
  scale: PropTypes.number,
  type: PropTypes.oneOf([
    'success',
    'danger',
    'primary',
    'secondary',
    'warning',
    'info',
    'light',
    'dark',
    'white',
  ]),
  className: PropTypes.string,
}

export default StatusDot
