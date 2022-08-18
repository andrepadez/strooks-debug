const fillForm = function (theForm, state = {}, path = []) {
  Object.entries(state).forEach(([key, val]) => {
    window.theForm = theForm
    let target = theForm[key]

    if (typeof val === 'boolean') {
      if (target) {
        target.checked = val
      }
    }

    if (typeof val !== 'object') {
      if (target) {
        target.value = val
      }
      return
    }

    if (Array.isArray(val)) {
      if (target[0].type === 'checkbox') {
        ;[...target].forEach((elem) => {
          elem.checked = val.includes(elem.value)
        })
      } else if (target.nodeName === 'SELECT') {
        const options = [...target.options]
        options.forEach((option) => {
          option.selected = val.includes(option.value)
        })
      }
      return
    }

    fillForm(theForm, state[key])
  })
}

export default fillForm
