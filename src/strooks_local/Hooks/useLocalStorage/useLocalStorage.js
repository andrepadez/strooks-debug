import { useState, useEffect } from 'react'

const useLocalStorage = () => {
  const [ls, setLocalStorage] = useState({
    getItem: () => null,
    setItem: () => null,
    get: () => null,
    set: () => null,
    clear: () => null,
  })

  useEffect(() => {
    if (global.localStorage) {
      setLocalStorage((ls) => {
        return {
          getItem: global.localStorage.getItem.bind(global.localStorage),
          setItem: global.localStorage.setItem.bind(global.localStorage),
          removeItem: global.localStorage.removeItem.bind(global.localStorage),
          clear: global.localStorage.clear.bind(global.localStorage),
          get: (key) => JSON.parse(global.localStorage.getItem(key) || null),
          set: (key, val) => global.localStorage.setItem(key, JSON.stringify(val)),
        }
      })
    }
  }, [])

  return ls
}

export default useLocalStorage
