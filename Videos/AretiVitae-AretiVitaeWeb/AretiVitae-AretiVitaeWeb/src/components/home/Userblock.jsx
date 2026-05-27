import CerberusDisplay from './CerberusDisplay'
import styles from './modules/home.module.css'

export default function UserBlock() {
  return (
    <div className={styles.userBlock}>
      <div className={styles.avatarSlot}>
        <CerberusDisplay />
      </div>
      <div>
        <p className={styles.greeting}>Olá, MaumauAretiVitae</p>
        <p className={styles.sub}>Memento viviere!</p>
      </div>
    </div>
  )
}