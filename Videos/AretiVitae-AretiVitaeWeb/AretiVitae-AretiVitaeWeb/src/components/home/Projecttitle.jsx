import styles from './modules/home.module.css'

export default function ProjectTitle() {
  return (
    <div className={styles.titleBlock}>
      <h1 className={styles.projectTitle}>AretiVitae</h1>
      <p className={styles.projectSub}>ILUSTRADOR DE IDEIAS</p>
    </div>
  )
}