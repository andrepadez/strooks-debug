import { useState, useEffect } from 'react'

const Keyframes = ({ id, ...props }) => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    const ss = document.getElementById(id)
    if (!ss) setRender(true)
  }, [id])

  if (!render) return false

  const toCss = cssObject =>
    typeof cssObject === 'string'
      ? cssObject
      : Object.keys(cssObject).reduce((accumulator, key) => {
          const cssKey = key.replace(/[A-Z]/g, v => `-${v.toLowerCase()}`)
          const cssValue = cssObject[key].toString().replace("'", '')
          return `${accumulator}${cssKey}:${cssValue};`
        }, '')

  return (
    <style id={id}>
      {`@keyframes ${props.name} {
        ${Object.keys(props)
          .map(key => {
            return ['from', 'to'].includes(key)
              ? `${key} { ${toCss(props[key])} }`
              : /^_[0-9]+$/.test(key)
              ? `${key.replace('_', '')}% { ${toCss(props[key])} }`
              : ''
          })
          .join(' ')}
      }`}
    </style>
  )
}
export default Keyframes
