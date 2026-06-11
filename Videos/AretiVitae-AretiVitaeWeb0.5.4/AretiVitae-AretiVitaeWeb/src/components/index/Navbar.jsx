import styles from "./modules/navbar.module.css";
import AVlogo from "./indexSources/AretiVitaeLogoWithClouds.png";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <div className={styles.topAV}>
        <img
          src={AVlogo}
          className={styles.AvLogo}
          alt="return"
          onClick={() => navigate("/home")}
        />
      </div>
    </div>
  );
}

export default Navbar;