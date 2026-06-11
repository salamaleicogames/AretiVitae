import styles from "./modules/WinTitleBar.module.css";

export default function WinTitleBar({ title, onClose }) {
  return (
    <div className={styles.titleBar}>
      <span className={styles.title}>{title}</span>
      <div className={styles.controls}>
        <span className={styles.btn} />
        <span className={styles.btn} />
        <span
          className={`${styles.btn} ${styles.btnClose}`}
          onClick={onClose}
          title="Fechar"
        />
      </div>
    </div>
  );
}