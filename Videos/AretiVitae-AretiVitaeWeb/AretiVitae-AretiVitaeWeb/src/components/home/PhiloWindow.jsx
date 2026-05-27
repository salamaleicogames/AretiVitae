import styles from './modules/Window.module.css'



export default function PhiloWindow() {
  

  return (
    <div className={`${styles.winWindow} ${styles.philoWindow}`}>
      <div className={styles.winTitleBar}>
        <span className={styles.winTitle}>Notes</span>
        <div className={styles.winControls}>
          <span className={styles.winBtn} />
          <span className={styles.winBtn} />
          <span className={`${styles.winBtn} ${styles.winClose}`} />
        </div>
      </div>
      <div className={`${styles.winBody} ${styles.philoBody}`}>
        <div className={styles.quoteDisplay}>
          <p className={styles.quoteText}>Estou tendo essa maravilhosa ideia no dia de hoje, quero fazer um jogo onde um ser mitologico que nasceu nas profundezas 
            de um planeta luta para conseguir chegar a superfície, e lá, ele começa a perceber os problemas presentes naquele lugar, e agora, deseja chegar ao céu, onde 
            reside o rei daquele mundo.
          </p>
          <div className={styles.quoteDivider} />
          <p className={styles.quoteAuthor}>15/06/2025</p>
        </div>
      </div>
    </div>
  )
}