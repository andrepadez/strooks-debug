import Icon from '../IconMaterial'
import useColorScheme from '../../Hooks/useColorScheme'
import styles from './toggler.module.css'

const ThemeToggler = ({ className }) => {
  const { setColorScheme, toggleColorScheme, scheme } = useColorScheme()

  return (
    <div className={[styles.toggler, 'theme-toggler', className].join(' ')}>
      <Icon
        className={[scheme === 'light' ? 'active' : '', className].join()}
        onClick={() => setColorScheme('light')}
      >
        light_mode
      </Icon>
      <Icon
        className={[scheme === 'dark' ? 'active' : '', className].join(' ')}
        onClick={() => setColorScheme('dark')}
      >
        dark_mode
      </Icon>
    </div>
  )
}

export default ThemeToggler
