import { useState } from "react";
import StarBackground from "./Starbackground";
import WinTitleBar   from "./Wintitlebar.jsx";
import NotesGrid     from "./Notesgrid";
import NewNoteModal  from "./Newnotemodal.jsx";
import styles from "./modules/Notespage.module.css";

function today() {
  return new Date().toLocaleDateString("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric",
  });
}

const INITIAL_NOTES = [
  {
    id: 1,
    title: "Ideia do jogo mitológico",
    date: "15/06/2025",
    content:
      "Estou tendo essa maravilhosa ideia no dia de hoje, quero fazer um jogo onde um ser mitologico que nasceu nas profundezas de um planeta luta para conseguir chegar a superfície, e lá, ele começa a perceber os problemas presentes naquele lugar, e agora, deseja chegar ao céu, onde reside o rei daquele mundo.",
  },
  {
    id: 2,
    title: "Referências visuais",
    date: "11/09/20019",
    content: "Hollow Knight — profundidade e isolamento.\nCeleste — platformer emocional.\nOri — beleza atmosférica.",
  },
  {
    id: 3,
    title: "Mecânicas centrais",
    date: "02/03/2026",
    content: "Escalada vertical como progressão.\nPoderes que evoluem ao atravessar camadas.\nChefes que representam guardiões de cada bioma.",
  },
];

let nextId = INITIAL_NOTES.length + 1;

export default function NotesPage() {
  const [notes,      setNotes]      = useState(INITIAL_NOTES);
  const [showModal,  setShowModal]  = useState(false);

  const handleAdd = (title) => {
    setNotes((prev) => [
      ...prev,
      { id: nextId++, title, date: today(), content: "" },
    ]);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleUpdate = (id, content) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, content } : n))
    );
  };

  return (
    <div className={styles.page}>
      <StarBackground />

      {showModal && (
        <NewNoteModal
          onConfirm={handleAdd}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className={styles.outerWrap}>
        <div className={styles.winWindow}>

          <WinTitleBar
            title="Notas"
            onClose={() => window.history.back()}
          />

          <div className={styles.winHeader}>
            <div className={styles.winHeaderLeft}>
              <span className={styles.notesCount}>
                {notes.length} {notes.length === 1 ? "nota" : "notas"}
              </span>
              <span className={styles.notesDivider} />
              <span className={styles.notesHint}>limite de 1 000 linhas por nota</span>
            </div>
            <button className={styles.newBtn} onClick={() => setShowModal(true)}>
              <span>+</span> Nova nota
            </button>
          </div>

          <NotesGrid
            notes={notes}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            onAdd={() => setShowModal(true)}
          />

        </div>
      </div>
    </div>
  );
}