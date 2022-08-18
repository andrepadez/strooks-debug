import { useEffect, useState } from 'react'
import styles from './progress.module.css'

const ProgressCircle = ({ percent, radius, color, width }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(percent)
  }, [percent])

  return (
    <div className={styles.progress}>
      <svg>
        <circle
          style={{ stroke: color, strokeWidth: width, strokeDashoffset: value - 100 }}
          cx="38"
          cy="38"
          r={radius}
          pathLength={100}
        ></circle>
      </svg>
      <div className={styles.number}>
        <p>{percent}%</p>
      </div>
    </div>
  )
}

export default ProgressCircle
