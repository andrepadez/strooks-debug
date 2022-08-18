const useFlashMessage = () => {
  const parentId = 'flash-' + ('' + Math.random()).substring(2)

  const showFlash = (kind, message, title, timeout = 0) => {
    const { document } = global
    const body = document.querySelector('body')
    body.style.position = 'relative'
    const parent = document.createElement('div')
    parent.className = 'flash-message'
    parent.id = parentId
    parent.innerHTML = getAlert(kind, message, title)
    body.prepend(parent)
    if (timeout) {
      setTimeout(killFlash, timeout)
    }
  }

  const killFlash = () => {
    const { document } = global
    const flash = document.querySelector('#' + parentId)
    if (flash) {
      flash.remove()
    }
  }

  return [showFlash, killFlash]
}

export default useFlashMessage

const getAlert = (kind, message, title) => {
  return `<div class="alert alert-${kind}" role="${kind}">
      <strong>${title}</strong> ${message}
  </div>`
}
