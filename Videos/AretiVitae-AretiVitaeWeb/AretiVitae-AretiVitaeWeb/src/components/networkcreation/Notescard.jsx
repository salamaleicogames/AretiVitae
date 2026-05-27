import { useState } from "react";
import styles from "./modules/Notescard.module.css";

const LINE_LIMIT = 1000;

function countLines(text) {
  return text === "" ? 0 : text.split("\n").length;
}

export default function NoteCard({ note, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft]     = useState(note.content);
  const lines = countLines(draft);
  const pct   = Math.min((lines / LINE_LIMIT) * 100, 100);

  const handleChange = (e) => {
    const val = e.target.value;
    if (countLines(val) <= LINE_LIMIT) setDraft(val);
  };

  const handleSave = () => {
    onUpdate(note.id, draft);
    setEditing(false);
  };

  const handleCancel = () => {
    setDraft(note.content);
    setEditing(false);
  };

  return (
    <div className={`${styles.card} ${editing ? styles.cardEditing : ""}`}>
      <div className={styles.cardHeader}>
        <div className={styles.headerLeft}>
          <div>
            <p className={styles.cardTitle}>{note.title}</p>
            <p className={styles.cardDate}>{note.date}</p>
          </div>
        </div>
        <div className={styles.headerActions}>
          {!editing && (
            <button className={styles.editBtn} onClick={() => setEditing(true)} title="Editar">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          )}
          <button className={styles.deleteBtn} onClick={() => onDelete(note.id)} title="Excluir">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        </div>
      </div>

      {editing ? (
        <div className={styles.editorArea}>
          <textarea
            className={styles.textarea}
            value={draft}
            onChange={handleChange}
            autoFocus
          />
          <div className={styles.editorFooter}>
            <div className={styles.lineBar}>
              <div className={styles.lineBarFill} style={{ width: `${pct}%`,
                background: pct > 90 ? "rgba(255,110,110,0.8)" : "rgba(100,200,140,0.7)" }} />
            </div>
            <span className={styles.lineCount}>{lines} / {LINE_LIMIT} linhas</span>
            <div className={styles.editorBtns}>
              <button className={styles.cancelBtn} onClick={handleCancel}>Cancelar</button>
              <button className={styles.saveBtn}   onClick={handleSave}>Salvar</button>
            </div>
          </div>
        </div>
      ) : (
        <p className={styles.cardPreview}>
          {note.content
            ? note.content.split("\n").slice(0, 4).join("\n")
            : <span className={styles.emptyHint}>Nota vazia — clique em editar</span>}
          {note.content.split("\n").length > 4 && (
            <span className={styles.moreHint}> …+{note.content.split("\n").length - 4} linhas</span>
          )}
        </p>
      )}
    </div>
  );
}