import styles from './icon-material.module.css'

const IconMaterial = ({ children, icon, className, onClick }) => {
  const classNames = [styles.materialIconsSharp, className].join(' ')
  return (
    <span onClick={onClick} className={classNames}>
      {children || icon}
    </span>
  )
}

export default IconMaterial
