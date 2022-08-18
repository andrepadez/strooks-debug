import md5 from '../../_utils/md5'
import styles from './gravatar.module.css'

/* prettier-ignore */

const Gravatar = ({ user, hash, scale = 1, size = 80 }) => {
  hash = hash || md5(user.email || '')
  const src = `https://gravatar.com/avatar/${hash}?s=${size || 320}`

  return (
    <div
      style={{ transform: `scale(${scale})`, backgroundImage: `url(${src})` }}
      className={styles.gravatar}
    >
      {/* <img className={styles.img} src={src} alt="gravatar" /> */}
    </div>
  )
}

export default Gravatar
