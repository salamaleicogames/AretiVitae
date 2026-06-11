import NoteCard from "./Notescard";
import styles from "./modules/Notesgrid.module.css";

export default function NotesGrid({ notes, onDelete, onUpdate, onAdd }) {
  return (
    <div className={styles.gridWrap}>
      <div className={styles.grid}>
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}

        {/* Add note card */}
        <button className={styles.addCard} onClick={onAdd}>
          <span className={styles.addIcon}>+</span>
          <span className={styles.addLabel}>Nova nota</span>
        </button>
      </div>
    </div>
  );
}