import CerberusDisplay from './CerberusDisplay'
import styles from './modules/home.module.css'

export default function UserBlock() {
  const username = localStorage.getItem("username");

  return (
    <div className={styles.userBlock}>
      <div className={styles.avatarSlot}>
        <CerberusDisplay />
      </div>
      <div>
        <p className={styles.greeting}>Olá, {username || 'AretiVitae'}</p>
        <p className={styles.sub}>Memento viviere!</p>
      </div>
    </div>
  )
}