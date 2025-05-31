import logo from "@/assets/icon.png";
import Status from "./Status";
import styles from "./style.module.css";

export default function HoverBall() {
  const tooltip = "";
  return (
    <div className={styles.hoverBall}>
      <img src={logo} alt="logo" className={styles.logo} />
      <Status />
      {tooltip && <div className={styles.tooltip}>{tooltip}</div>}
    </div>
  );
}
