import { useEffect, useState } from 'react'
const STORAGE_KEY = 'prefered-color-scheme'

const useColorScheme = () => {
  const [scheme, setScheme] = useState('auto')
  useEffect(() => {
    const colorScheme = localStorage.getItem(STORAGE_KEY) || getPreferedScheme()
    setColorScheme(colorScheme)
  }, [])

  const setColorScheme = scheme => {
    setScheme(scheme)
    localStorage.setItem(STORAGE_KEY, scheme)
    const method = scheme === 'dark' ? 'add' : 'remove'
    document.querySelector('body').classList[method]('dark-theme')
  }

  const toggleColorScheme = () => {
    setColorScheme(scheme === 'dark' ? 'light' : 'dark')
  }

  return { setColorScheme, toggleColorScheme, scheme }
}

export default useColorScheme

const getPreferedScheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
