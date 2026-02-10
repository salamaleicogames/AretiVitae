import styles from './modules/imageDiv.module.css'
import Structure from '../images/structure.png'

function imageDiv() {
  return (
    <div className={styles.leftdiv}>
      <img src={Structure} alt={Structure} className={styles.Structure}/>
    </div>
  );
}

export default imageDiv;