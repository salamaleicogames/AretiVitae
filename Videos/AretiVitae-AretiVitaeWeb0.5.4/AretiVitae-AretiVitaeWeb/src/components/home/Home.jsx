import BackDisplay     from './BackDisplay'
import UserBlock       from './UserBlock'
import ProjectTitle    from './ProjectTitle'

import PhiloWindow     from './PhiloWindow'
import styles from './modules/home.module.css'

export default function Home() {
  return (
    <>
      <BackDisplay />
      <div className={styles.page}>

        <header className={styles.header}>
          <UserBlock />
          <ProjectTitle />
          <div className={styles.headerMirror} />
        </header>

       <div className={styles.middleRow}>
  <div className={styles.windowsGroup}>
    <div className={styles.windowsColumn}>
      <PhiloWindow />
    </div>
  </div>
</div>

        <div className={styles.footerSpacer} />

      </div>
    </>
  )
}