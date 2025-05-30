import logo from "@/assets/icon.png";
import styles from "./style.module.css";

export default function HoverBall() {
  return (
    <div className={styles.hoverBall}>
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
  );
}
