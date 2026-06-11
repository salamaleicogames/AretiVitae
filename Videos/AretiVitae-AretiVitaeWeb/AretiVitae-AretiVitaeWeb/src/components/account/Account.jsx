import { useState } from "react";
import styles from "./modules/account.module.css";
import TopDisplay from './Topdisplay';
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [membership, setMembership] = useState(1);
  const [open, setOpen] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const emptyName        = form.name.trim() === '';
  const emptyEmail       = form.email.trim() === '';
  const emptyPassword    = form.password.trim() === '';
  const nameTooLong      = form.name.length > 16;
  const emailRegex       = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInvalid     = !emptyEmail && !emailRegex.test(form.email);
  const passwordMismatch = form.confirmPassword.length > 0 && form.newPassword !== form.confirmPassword;

  return (
    <div className={styles.root}>

      <div className={styles.display}>
        <TopDisplay />
      </div>

      <div className={styles.bodyWrapper}>
        <div className={styles.body}>

          <div className={styles.avatarRow}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>AV</div>
            </div>
            <div className={styles.avatarMeta}>
              <h1>{form.name || 'ExampleName'}</h1>
              <p>{form.email || 'example@email.com'}</p>
            </div>
          </div>

          <div className={styles.grid}>

            {/* INFORMAÇÕES */}
            <div className={styles.card}>
              <div className={styles.sectionTitle}>
                <span className={styles.sectionLine} />
                <p>Informações</p>
                <span className={styles.sectionLine} />
              </div>

              <div className={styles.field}>
                <label>Nome</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={nameTooLong || emptyName ? styles.inputError : ''}
                />
                {emptyName && <span className={styles.errorMsg}>Nome obrigatório</span>}
                {!emptyName && nameTooLong && (
                  <span className={styles.errorMsg}>Máx 16 caracteres ({form.name.length}/16)</span>
                )}
              </div>

              <div className={styles.field}>
                <label>E-mail</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  className={emailInvalid || emptyEmail ? styles.inputError : ''}
                />
                {emptyEmail && <span className={styles.errorMsg}>Email obrigatório</span>}
                {!emptyEmail && emailInvalid && (
                  <span className={styles.errorMsg}>Email inválido</span>
                )}
              </div>
            </div>

            {/* SEGURANÇA */}
            <div className={styles.card}>
              <div className={styles.sectionTitle}>
                <span className={styles.sectionLine} />
                <p>Segurança</p>
                <span className={styles.sectionLine} />
              </div>

              <div className={styles.field}>
                <label>Senha atual</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={handleChange('password')}
                  className={emptyPassword ? styles.inputError : ''}
                />
                {emptyPassword && <span className={styles.errorMsg}>Senha obrigatória</span>}
              </div>

              <div className={styles.field}>
                <label>Nova senha</label>
                <input
                  type="password"
                  value={form.newPassword}
                  onChange={handleChange('newPassword')}
                />
              </div>

              <div className={styles.field}>
                <label>Confirmar nova senha</label>
                <input
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  className={passwordMismatch ? styles.inputError : ''}
                />
                {passwordMismatch && (
                  <span className={styles.errorMsg}>As senhas não coincidem</span>
                )}
              </div>
            </div>

            {/* ASSINATURA */}
            <div className={`${styles.card} ${styles.cardFull}`}>
              <div className={styles.sectionTitle}>
                <span className={styles.sectionLine} />
                <p>Assinatura</p>
                <span className={styles.sectionLine} />
              </div>

              <div className={styles.subscriptionGrid}>
                <div className={styles.field}>
                  <label>Plano atual</label>
                  <input type="text" value="Selene" disabled />
                </div>
                <div className={styles.field}>
                  <label>Próxima cobrança</label>
                  <input type="text" value="10/05/2026" disabled />
                </div>
                <div className={styles.field}>
                  <label>Status</label>
                  <input type="text" value={membership === 1 ? 'Ativo' : 'Desativado'} disabled />
                </div>
              </div>

              <button className={styles.memberShipCancel} onClick={() => setOpen(true)}>
                Desativar assinatura
              </button>
            </div>

          </div>

          <button className={styles.save}>
            Salvar alterações
          </button>

          <button className={styles.discard} onClick={() => navigate('/home')}>
            Descartar alterações
          </button>

        </div>
      </div>

      {open && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <span onClick={() => setOpen(false)} className={styles.modalClose}>✕</span>

            <div className={styles.sectionTitle}>
              <span className={styles.sectionLine} />
              <p>Confirmar cancelamento</p>
              <span className={styles.sectionLine} />
            </div>

            <p className={styles.modalSubtitle}>Tem certeza que deseja cancelar sua assinatura?</p>

            <div className={styles.field}>
              <label>Confirme sua senha</label>
              <input type="password" />
            </div>

            <button
              className={styles.memberShipCancel}
              onClick={() => { setOpen(false); setMembership(0); }}
            >
              Confirmar cancelamento
            </button>
          </div>
        </div>
      )}

    </div>
  );
}