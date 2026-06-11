import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StarBackground from "./StarBackground";

// ── Inject hover CSS once ─────────────────────────────────────────────────────

const CSS = `
  .nc-btn-outline {
    height: clamp(2rem, 5.5vh, 3.8rem);
    border-radius: 15px;
    border: 2px solid rgba(255,255,255,0.6);
    background: transparent;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: clamp(0.75rem, 1.5vh, 1rem);
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.12s ease;
  }
  .nc-btn-outline:hover {
    background: rgba(255,255,255,0.18);
    border-color: rgba(255,255,255,0.9);
    transform: scale(1.02);
  }
  .nc-btn-outline:active { transform: scale(0.98); }

  .save-button {
    height: clamp(2rem, 5.5vh, 3.8rem);
    border-radius: 15px;
    border: none;
    background: rgb(101, 130, 210);
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: clamp(0.75rem, 1.5vh, 1rem);
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.12s ease;
  }
  .save-button:hover {
    background: rgb(120, 148, 225);
    transform: scale(1.02);
  }
  .save-button:active { transform: scale(0.98); }

  .nc-btn-invite {
    width: 100%;
    height: clamp(2rem, 5vh, 3.4rem);
    border-radius: 15px;
    border: 2px solid rgba(255,255,255,0.6);
    background: transparent;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: clamp(0.75rem, 1.5vh, 1rem);
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.12s ease;
  }
  .nc-btn-invite:hover {
    background: rgba(255,255,255,0.18);
    border-color: rgba(255,255,255,0.9);
    transform: scale(1.01);
  }
  .nc-btn-invite:active { transform: scale(0.98); }

  .nc-btn-copy {
    width: 90%;
    height: clamp(2rem, 5vh, 3rem);
    border: none;
    border-radius: 15px;
    background: rgb(45, 63, 120);
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.12s ease;
  }
  .nc-btn-copy:hover  { background: rgb(28, 42, 96); transform: scale(1.02); }
  .nc-btn-copy:active { transform: scale(0.98); }

  .nc-popup-close:hover { background: rgba(255,255,255,0.18) !important; }

  .nc-btn-close {
    background: transparent;
    border: none;
    color: #8a8fa8;
    font-size: 0.8rem;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
    margin-top: 2px;
    transition: color 0.15s ease;
  }
  .nc-btn-close:hover { color: #555; }

  .nc-icon-promote {
    width: 28px; height: 28px;
    border-radius: 8px; border: none;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; flex-shrink: 0;
    background: rgba(168,180,248,0.18);
    transition: background 0.15s ease, transform 0.1s ease;
  }
  .nc-icon-promote:hover  { background: rgba(168,180,248,0.42); }
  .nc-icon-promote:active { transform: scale(0.9); }

  .nc-icon-remove {
    width: 28px; height: 28px;
    border-radius: 8px; border: none;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; flex-shrink: 0;
    background: rgba(255,100,100,0.18);
    transition: background 0.15s ease, transform 0.1s ease;
  }
  .nc-icon-remove:hover  { background: rgba(255,100,100,0.46); }
  .nc-icon-remove:active { transform: scale(0.9); }

  .nc-win-btn {
    display: block;
    width: 13px; height: 13px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    border: 1px solid rgba(255,255,255,0.2);
    cursor: pointer;
    transition: background 0.15s ease;
    flex-shrink: 0;
  }
  .nc-win-btn:hover { background: rgba(255,255,255,0.6); }
  .nc-win-close { background: rgba(255,90,90,0.7) !important; }
  .nc-win-close:hover { background: rgba(255,60,60,0.95) !important; }
`;

function useInjectCSS(css) {
  useEffect(() => {
    const id  = "nc-styles";
    if (document.getElementById(id)) return;
    const tag = document.createElement("style");
    tag.id        = id;
    tag.textContent = css;
    document.head.appendChild(tag);
    return () => { document.getElementById(id)?.remove(); };
  }, []);
}

// ── Data ──────────────────────────────────────────────────────────────────────

const TIER_LABELS = { creator: "Creator", builder: "Builder", member: "Member" };

const INITIAL_MEMBERS = [
  { initials: "MP", name: "MrPumpkin",      tier: "creator" },
  { initials: "MM", name: "Maumau",          tier: "builder" },
  { initials: "EA", name: "Emerson Alves",   tier: "member"  },
  { initials: "MJ", name: "Mateus Julo",     tier: "member"  },
  { initials: "MY", name: "Murilo",          tier: "member"  },
  { initials: "RG", name: "Gumers",          tier: "member"  },
  { initials: "VZ", name: "Voidz",           tier: "member"  },
  { initials: "CQ", name: "Cachorro_paçoca", tier: "member"  },
];

const INVITE_LINK = "https://aretivitae.app/join/ntwk_xK8m2pQv9rLc";

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  page: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    boxSizing: "border-box",
    fontFamily: '"Josefin Sans", sans-serif',
  },

  outerWrap: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "1200px",
    height: "100%",
    maxHeight: "calc(100vh - 4rem)",
    display: "flex",
    flexDirection: "column",
  },

  winWindow: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px 10px 8px 8px",
    overflow: "hidden",
    flex: 1,
    boxShadow: [
      "0 8px 40px rgba(0,0,0,0.55)",
      "0 2px 8px rgba(0,0,0,0.35)",
      "inset 0 0 0 1px rgba(255,255,255,0.12)",
    ].join(", "),
  },

  winTitleBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 12px",
    height: "36px",
    background:
      "linear-gradient(to bottom, rgba(160,180,245,0.95) 0%, rgba(110,135,215,0.95) 100%)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.18)",
    flexShrink: 0,
  },

  winTitleText: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "12px",
    fontWeight: 600,
    color: "#fff",
    letterSpacing: "0.08em",
    textShadow: "0 1px 3px rgba(0,0,0,0.3)",
    userSelect: "none",
    margin: 0,
  },

  winControls: {
    display: "flex",
    gap: "7px",
    alignItems: "center",
  },

  winBody: {
    flex: 1,
    background: "rgba(80, 105, 190, 0.55)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    padding: "clamp(1.5rem, 3vh, 2.5rem) clamp(2rem, 4vw, 4rem)",
    display: "flex",
    flexDirection: "column",
    gap: "min(1.4rem, 2.2vh)",
    boxSizing: "border-box",
    overflowY: "auto",
  },

  fields: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    width: "100%",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  },
  input: {
    width: "100%",
    height: "clamp(2rem, 5.5vh, 3.8rem)",
    outline: "none",
    border: "none",
    color: "gray",
    borderRadius: "15px",
    fontSize: "clamp(0.75rem, 1.5vh, 1rem)",
    fontFamily: '"Josefin Sans", sans-serif',
    fontWeight: 500,
    padding: "0 1.2rem 0 3rem",
    boxSizing: "border-box",
    background:
      'white url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23aaa\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\'/%3E%3Cpath d=\'M12 8v4l3 3\'/%3E%3C/svg%3E") no-repeat 1rem center',
  },
  inputNumber: {
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23aaa\' stroke-width=\'2\'%3E%3Cpath d=\'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\'/%3E%3Ccircle cx=\'9\' cy=\'7\' r=\'4\'/%3E%3Cpath d=\'M23 21v-2a4 4 0 0 0-3-3.87\'/%3E%3Cpath d=\'M16 3.13a4 4 0 0 1 0 7.75\'/%3E%3C/svg%3E")',
  },
  hint: {
    fontFamily: '"Josefin Sans", sans-serif',
    fontSize: "clamp(0.65rem, 1.2vh, 0.8rem)",
    color: "rgba(255,255,255,0.75)",
    paddingLeft: "0.5rem",
    lineHeight: 1.5,
  },

  membersBox: {
    flex: 1,
    backgroundColor: "rgb(95, 118, 195)",
    borderRadius: "14px",
    border: "1px solid rgb(80, 100, 175)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  membersHeader: {
    padding: "10px 18px",
    fontSize: "clamp(0.65rem, 1.2vh, 0.8rem)",
    letterSpacing: "2px",
    color: "rgba(255,255,255,0.75)",
    textTransform: "uppercase",
    borderBottom: "1px solid rgb(80, 100, 175)",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    flexShrink: 0,
  },
  memberRow: (hovered) => ({
    display: "flex",
    alignItems: "center",
    padding: "0 18px",
    borderBottom: "1px solid rgb(85, 108, 182)",
    gap: "14px",
    flex: 1,
    minHeight: "52px",
    transition: "background 0.18s ease",
    background: hovered ? "rgba(255,255,255,0.10)" : "transparent",
  }),
  memberRowLast: (hovered) => ({
    display: "flex",
    alignItems: "center",
    padding: "0 18px",
    gap: "14px",
    flex: 1,
    minHeight: "52px",
    transition: "background 0.18s ease",
    background: hovered ? "rgba(255,255,255,0.10)" : "transparent",
  }),
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: 600,
    flexShrink: 0,
    fontFamily: '"Josefin Sans", sans-serif',
  },
  avCreator: { backgroundColor: "rgb(35, 47, 120)",   color: "#a8b4f8" },
  avBuilder: { backgroundColor: "rgb(20, 50, 90)",    color: "#7ec8f0" },
  avMember:  { backgroundColor: "rgb(100, 122, 200)", color: "#ffffff" },
  memberName: {
    flex: 1,
    fontSize: "clamp(0.75rem, 1.4vh, 0.95rem)",
    color: "#ffffff",
    fontFamily: '"Josefin Sans", sans-serif',
    fontWeight: 400,
  },
  badge: {
    fontSize: "clamp(0.6rem, 1.1vh, 0.72rem)",
    padding: "4px 12px",
    borderRadius: "20px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    fontFamily: '"Josefin Sans", sans-serif',
  },
  badgeCreator: { backgroundColor: "rgb(35, 47, 120)",   color: "#c5ceff" },
  badgeBuilder: { backgroundColor: "rgb(20, 50, 90)",    color: "#7ec8f0" },
  badgeMember:  { backgroundColor: "rgb(100, 122, 200)", color: "#ffffff" },
  memberActions: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginLeft: "8px",
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    width: "100%",
    flexShrink: 0,
  },
  btnRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 100,
    backgroundColor: "rgba(45, 60, 140, 0.6)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popup: {
    position: "relative",
    backgroundColor: "rgb(120, 145, 220)",
    borderRadius: "20px",
    padding: "min(4.5rem, 5vh) clamp(1.5rem, 4vw, 2.5rem)",
    width: "min(90vw, 460px)",
    boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "min(1.6rem, 2.2vh)",
  },
  popupClose: {
    position: "absolute",
    top: "14px",
    right: "14px",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(255,255,255,0.06)",
    transition: "background 0.2s",
  },
  popupSectionTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    width: "90%",
  },
  popupSectionLine: {
    flex: 1,
    height: "1px",
    background: "rgba(255,255,255,0.4)",
  },
  popupTitleText: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    fontSize: "clamp(0.65rem, 1.1vh, 0.85rem)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    opacity: 0.85,
    whiteSpace: "nowrap",
    margin: 0,
    color: "#fff",
  },
  popupSub: {
    fontFamily: '"Josefin Sans", sans-serif',
    fontSize: "clamp(0.75rem, 1.4vh, 0.95rem)",
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
    letterSpacing: "0.04em",
    margin: 0,
  },
  linkBox: {
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "0.75rem",
    color: "#fff",
    wordBreak: "break-all",
    textAlign: "left",
    border: "1px solid rgba(255,255,255,0.25)",
    boxSizing: "border-box",
    fontFamily: "monospace",
    letterSpacing: "0.03em",
  },
};

// ── Icon helpers ──────────────────────────────────────────────────────────────

function IconPromote() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="#a8b4f8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function IconRemove() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="#ff8a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Resolver helpers ──────────────────────────────────────────────────────────

function avatarStyle(tier) {
  const map = { creator: s.avCreator, builder: s.avBuilder, member: s.avMember };
  return { ...s.avatar, ...(map[tier] || s.avMember) };
}

function badgeStyle(tier) {
  const map = { creator: s.badgeCreator, builder: s.badgeBuilder, member: s.badgeMember };
  return { ...s.badge, ...(map[tier] || s.badgeMember) };
}

// ── MemberRow ─────────────────────────────────────────────────────────────────

function MemberRow({ member, isLast }) {
  const [hovered, setHovered] = useState(false);
  const isCreator = member.tier === "creator";
  const rowStyle  = isLast ? s.memberRowLast(hovered) : s.memberRow(hovered);

  return (
    <div
      style={rowStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={avatarStyle(member.tier)}>{member.initials}</div>
      <span style={s.memberName}>{member.name}</span>
      <span style={badgeStyle(member.tier)}>{TIER_LABELS[member.tier]}</span>

      <div style={s.memberActions}>
        {!isCreator && (
          <>
            <button className="nc-icon-promote" title="Promover hierarquia">
              <IconPromote />
            </button>
            <button className="nc-icon-remove" title="Remover membro">
              <IconRemove />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function NetworkCreator() {
  useInjectCSS(CSS);

  const [netName,    setNetName]    = useState("");
  const [maxMembers, setMaxMembers] = useState("");
  const [showPopup,  setShowPopup]  = useState(false);
  const [copied,     setCopied]     = useState(false);
  const [members]                   = useState(INITIAL_MEMBERS);
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(INVITE_LINK).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={s.page}>

      <StarBackground />

      {/* Popup */}
      {showPopup && (
        <div style={s.overlay} onClick={() => setShowPopup(false)}>
          <div style={s.popup} onClick={(e) => e.stopPropagation()}>

          
            <span
              className="nc-popup-close"
              style={s.popupClose}
              onClick={() => setShowPopup(false)}
            >✕</span>

            <div style={s.popupSectionTitle}>
              <span style={s.popupSectionLine} />
              <p style={s.popupTitleText}>Link de convite</p>
              <span style={s.popupSectionLine} />
            </div>

            <p style={s.popupSub}>
              Compartilhe com quem deseja convidar para a network
            </p>

            <div style={s.linkBox}>{INVITE_LINK}</div>

            <button className="nc-btn-copy" onClick={handleCopy}>
              {copied ? "Copiado!" : "Copiar link"}
            </button>
          </div>
        </div>
      )}

      <div style={s.outerWrap}>
        <div style={s.winWindow}>

          <div style={s.winTitleBar}>
            <span style={s.winTitleText}>Criador de Network</span>
            <div style={s.winControls}>
              <span className="nc-win-btn" />
              <span className="nc-win-btn" />
              <span className="nc-win-btn nc-win-close" />
            </div>
          </div>

          <div style={s.winBody}>

            <div style={s.fields}>
              <input
                type="text"
                placeholder="Nome da network"
                style={s.input}
                value={netName}
                onChange={(e) => setNetName(e.target.value)}
              />
              <div style={s.inputWrapper}>
                <input
                  type="number"
                  placeholder="Máx. de membros"
                  style={{ ...s.input, ...s.inputNumber }}
                  min="1"
                  value={maxMembers}
                  onChange={(e) => setMaxMembers(e.target.value)}
                />
                <span style={s.hint}>
                  &#9432; Módulos Lunares podem expandir o limite de membros da sua
                  network além do máximo configurado aqui.
                </span>
              </div>
            </div>

            <div style={s.membersBox}>
              <div style={s.membersHeader}>
                <span>Membros</span>
                <span>{members.length} / {maxMembers || "—"}</span>
              </div>
              {members.map((m, i) => (
                <MemberRow
                  key={`${m.name}-${i}`}
                  member={m}
                  isLast={i === members.length - 1}
                />
              ))}
            </div>

            <div style={s.actions}>
              <div style={s.btnRow}>
                <button className="nc-btn-outline" onClick={() => navigate("/home")}>Descartar</button>
                <button className="save-button">Salvar alterações</button>
              </div>
              <button className="nc-btn-invite" onClick={() => setShowPopup(true)}>
                Link de convite
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}