import React from 'react'
import PropTypes from 'prop-types'

const ValueCard = ({ children, value, title, subtitle, before, after }) => {
  return (
    <div className="card leads-card">
      <div className=" card-body text-center">
        <h1 className="text-gradient text-primary">
          <span style={{ fontSize: '0.7em' }} className="ms-n1">
            {before}
          </span>
          <span id="status2">{children ? children : value}</span>
          <span style={{ fontSize: '0.7em' }} className="ms-n1">
            {after}
          </span>
        </h1>
        <h6 className="mb-0 font-weight-bolder">{title}</h6>
        {subtitle && <p className="opacity-8 mb-0 text-sm">{subtitle}</p>}
      </div>
    </div>
  )
}

ValueCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  before: PropTypes.string,
  after: PropTypes.string,
  children: PropTypes.node,
}

export default ValueCard
