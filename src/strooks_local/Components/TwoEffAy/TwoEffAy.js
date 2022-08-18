import { useState, useEffect, useRef } from 'react'

const VerificationForm = ({ setCode, onSubmit }) => {
  const [pasting, setPasting] = useState(false)
  const formRef = useRef()
  useEffect(() => {
    const onPaste = ev => {
      if (pasting) return
      setPasting(true)
      const code = +(event.clipboardData || window.clipboardData).getData('text')
      console.log(code, typeof code, code > 999)
      if (!isNaN(code) && code > 999) {
        const str = '' + code
        ;[...formRef.current['code']].forEach((elem, i) => (elem.value = str[i]))
        setCode(code)
        setTimeout(onSubmit, 1200)
      }
    }
    document.addEventListener('paste', onPaste)
    return () => document.removeEventListener('paste', onPaste)
  }, [onSubmit, pasting, setCode])

  const onKeyDown = ev => {
    ev.target.value = ''
  }

  // [TODO] - handle pasting of the code

  const onFormChange = ev => {
    const { target, value } = ev
    const currCode = +[...formRef.current['code']]
      .map((elem, i, arr) => {
        if (elem === ev.target && arr[i + 1]) {
          arr[i + 1].focus()
        }
        return elem.value
      })
      .join('')
    console.log({ currCode })
    setCode(code)
  }
  return (
    <form role="form" ref={formRef} onChange={onFormChange} onSubmit={onSubmit}>
      <div className="row gx-2 gx-sm-3">
        <div className="col">
          <div className="form-group">
            <input
              name="code"
              type="text"
              className="form-control form-control-lg"
              maxLength="1"
              autoComplete="off"
              autoCapitalize="off"
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <input
              type="text"
              name="code"
              className="form-control form-control-lg"
              maxLength="1"
              autoComplete="off"
              autoCapitalize="off"
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <input
              name="code"
              type="text"
              className="form-control form-control-lg"
              maxLength="1"
              autoComplete="off"
              autoCapitalize="off"
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <input
              name="code"
              type="text"
              className="form-control form-control-lg"
              maxLength="1"
              autoComplete="off"
              autoCapitalize="off"
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-warning w-100">Send code</button>
        <span className="text-muted text-sm">
          Haven&apos;t received it?<a href=""> Resend a new code</a>.
        </span>
      </div>
    </form>
  )
}

export default VerificationForm
