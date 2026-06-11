import { useState } from "react";
import styles from "./modules/NewNoteModal.module.css";

export default function NewNoteModal({ onConfirm, onClose }) {
  const [title, setTitle] = useState("");

  const handleConfirm = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    onConfirm(trimmed);
    setTitle("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleConfirm();
    if (e.key === "Escape") onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <button className={styles.closeBtn} onClick={onClose} title="Fechar">✕</button>

        <div className={styles.sectionTitle}>
          <span className={styles.line} />
          <p className={styles.sectionText}>Nova Nota</p>
          <span className={styles.line} />
        </div>

        <p className={styles.sub}>Escolha um título para a sua nota</p>

        <input
          className={styles.input}
          type="text"
          placeholder="Título da nota…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKey}
          autoFocus
          maxLength={80}
        />

        <div className={styles.btnRow}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancelar</button>
          <button
            className={styles.confirmBtn}
            onClick={handleConfirm}
            disabled={!title.trim()}
          >
            Criar nota
          </button>
        </div>
      </div>
    </div>
  );
}