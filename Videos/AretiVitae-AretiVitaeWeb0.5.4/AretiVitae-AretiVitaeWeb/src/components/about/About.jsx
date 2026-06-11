import { useNavigate } from 'react-router-dom'
import styles from './modules/About.module.css'

export default function About() {

    const navigate = useNavigate();
  return (
    <div className={styles.page}>

      
      <div className={styles.left}>
        <div className={styles.leftInner}>
          <p className={styles.leftLabel}>SOBRE O PROJETO</p>
          <h1 className={styles.leftTitle}>AretiVitae</h1>
          <p className={styles.leftSub}>ILUSTRADOR DE IDEIAS</p>

          <div className={styles.leftDivider} />

          <div className={styles.contactRow}>
            <span className={styles.contactIcon}>✉</span>
            <a href="mailto:aretivitae@gmail.com" className={styles.contactLink}>
              aretivitae@gmail.com
            </a>
          </div>
        </div>
      </div>

    
      <div className={styles.right}>
        <div className={styles.rightInner}>

          {/*O que é*/}
          <div className={styles.card}>

            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>O QUE É</span>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.paragraph}>
                O <strong>Areti Vitae: Ilustrador de ideias</strong> é uma plataforma digital
                e inovadora que visa auxiliar individuos  na conceitualização e no
                desenvolvimento de projetos e ideias por meio de um mapeamento visual intuitivo, com
                foco no desenvolvimento eficiente. Ele se destaca pelo canvas imersivo integrado a um sistema de notas, buscando
                evoluir ideias promissoras, especialmente aquelas de menor escala, e
                incentivando o desenvolvimento criativo.
              </p>

              <p className={styles.paragraph}>
                O projeto tem como premissa fundamental promover a criação e o desenvolvimento de
                ideias de maneira eficiente, empregando métodos intuitivos e ferramentas de suporte,
                além de possibilitar a contribuição dos usuários com suas respectivas ideias.
              </p>

              <p className={styles.paragraph}>
                O <em>Areti Vitae</em> é acessível a indivíduo com ideias
                criativas e inovadoras, sendo restrita ao uso de pessoas acima de 13 anos, e tem
                funcionalidades aos assinantes da versão <strong>"Moon-Modules"</strong>, com mais recursos
                para desenvolvimento e planejamento em maior escala.
              </p>
            </div>

            <div className={styles.cardFooter}>
              <p className={styles.footerLabel}>CRIADORES</p>
              <div className={styles.creatorsRow}>
                <div className={styles.creatorChip}>
                  <div className={styles.creatorAvatar}>JM</div>
                  <span className={styles.creatorName}>João Mantz de Oliveira</span>
                </div>
                <div className={styles.creatorChip}>
                  <div className={styles.creatorAvatar}>MF</div>
                  <span className={styles.creatorName}>Maurício Fernandes Ferreira</span>
                </div>
              </div>
            </div>

          </div>

          {/*Justificativa*/}
          <div className={styles.card}>

            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>PROPÓSITO</span>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.paragraph}>
                <em>Areti Vitae</em> busca auxiliar os usuários mais criativos e trazer uma nova
                perspectiva para quem nunca se imergiu dentro das próprias ideias. O projeto busca
                resolver um grande problema, sendo ele o possível déficit de organização e coerência
                em uma linha de pensamento complexa ligada a alguma ideia.
              </p>

              <p className={styles.paragraph}>
                Grandes projetos começam com uma simples conversa entre amigos, e{' '}
                <strong>AretiVitae</strong> ajuda com que essa ideia saia do papel e comece a ser
                conceitualizada de forma mais concreta.
              </p>
            </div>

          </div>

          
          <button className={styles.backBtn} onClick={() => navigate('/home')}>
            ← Voltar
          </button>

        </div>
      </div>

    </div>
  )
}