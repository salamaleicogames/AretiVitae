import React, { useState } from 'react'
import styles from './modules/LoginAV.module.css'
import LeftAV from './LeftAV';
import { useNavigate } from "react-router-dom";

export default function LoginAV() {
  const [view, setView] = useState('cadastro'); // 'cadastro' | 'login'

  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm]   = useState('');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');

  
  const [loginEmail, setLoginEmail]       = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const passwordMismatch = confirm.length > 0 && password !== confirm;
  const nameTooLong      = name.length > 16;
  const emailRegex       = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInvalid     = email.length > 0 && !emailRegex.test(email);

  return (
    <div className={styles.flex_div}>
      <div className={styles.left}>
        <LeftAV />
      </div>

      <div className={styles.right_general}>
        <h1 className={styles.brandTitle}>AretiVitae</h1>
        <div className={styles.container}>

          {view === 'cadastro' ? (
            <>
              <div className={styles.titleRow}>
                <h1 className={styles.title}>Cadastro</h1>
              </div>

              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Nome"
                  className={`${styles.input} ${nameTooLong ? styles.inputError : ''}`}
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                {nameTooLong && (
                  <span className={styles.errorMsg}>Nome deve ter ({name.length}/16)</span>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="Email"
                  className={`${styles.input} ${emailInvalid ? styles.inputError : ''}`}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                {emailInvalid && (
                  <span className={styles.errorMsg}>Email inválido — ex: nome@dominio.com</span>
                )}
              </div>

              <div className={styles.selectRow}>
                <select className={styles.select}>
                  <option value="">Dia</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select className={styles.select}>
                  <option value="">Mês</option>
                  {['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'].map((m, i) => (
                    <option key={i} value={i + 1}>{m}</option>
                  ))}
                </select>
                <select className={styles.select}>
                  <option value="">Ano</option>
                  {Array.from({ length: 100 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </select>
              </div>

              <input
                type="password"
                placeholder="Senha"
                className={styles.input}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
                
                  

              <div className={styles.inputWrapper}>
                <input
                  type="password"
                  placeholder="Confirmar senha"
                  className={`${styles.input} ${passwordMismatch ? styles.inputError : ''}`}
                  value={confirm}
                  onChange={e => setConfirm(e.target.value)}
                />
                {passwordMismatch && (
                  <span className={styles.errorMsg}>As senhas não coincidem</span>
                )}
              </div>

              <button
                className={styles.button}
                disabled={passwordMismatch || nameTooLong || emailInvalid}
                onClick={() => navigate("/home")}
              >
                Imergir
              </button>

              <p className={styles.switchText}>
                Já tem conta?{' '}
                <span onClick={() => setView('login')} style={{ cursor: 'pointer' }}>
                  Entrar
                </span>
              </p>
            </>
          ) : (
            <>
              <div className={styles.titleRow}>
                <h1 className={styles.title}>Entrar</h1>
              </div>

              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Senha"
                className={styles.input}
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
              />

              <button className={styles.button}>
                Imergir
              </button>

              <p className={styles.switchText}>
                Não tem conta?{' '}
                <span onClick={() => setView('cadastro')} style={{ cursor: 'pointer' }}>
                  Cadastrar
                </span>
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  );
}