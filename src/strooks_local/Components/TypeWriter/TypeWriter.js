import { useEffect, useRef, useState } from 'react'
import Keyframes from '../Keyframes'
import styles from './typewriter.module.css'

const TypeWriter = ({ text, seconds = 3, fontSize = 'inherit', delay = 0, clearBlink = false }) => {
  const [backgroundColor, setBgColor] = useState(null)
  const [animation, setAnimation] = useState(null)
  const [blink, setBlink] = useState(null)
  const [show, setShow] = useState(false)
  const ref = useRef()
  const afterRef = useRef()

  useEffect(() => {
    let bgColor
    let parent = ref.current.parentElement
    while (!bgColor && parent !== document.body) {
      parent = parent.parentElement
      bgColor = window.getComputedStyle(parent).backgroundColor
    }

    setBgColor(bgColor)
    const twAnimation = `typewriter ${seconds + 's'} steps(${text.length}) forwards`
    setAnimation(twAnimation)
    setBlink(`blink 600ms steps(${text.length}) infinite`)
    setTimeout(() => setShow(true), delay * 1000)

    if (clearBlink) {
      setTimeout(() => {
        afterRef.current.remove()
      }, delay * 1000 + seconds * 1000)
    }
  }, [seconds, text.length, delay, clearBlink, text])

  return (
    <div ref={ref} style={{ fontSize }} className={styles.typewriter}>
      <Keyframes
        id="strooks.typewriter"
        name="typewriter"
        from={{ left: '0%' }}
        to={{ left: '100%' }}
      />
      <Keyframes
        id="strooks.typewriter.blink"
        name="blink"
        to={{ backgroundColor: 'transparent' }}
      />
      {/* {show ? ( */}
      {show ? (
        <div style={{ position: 'relative' }}>
          <div style={{ backgroundColor, animation }} className={styles.before}></div>
          <div className={styles.content}>{text}</div>
          <div
            ref={afterRef}
            style={{ animation: [animation, blink].join(', ') }}
            className={styles.after}
          ></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default TypeWriter
