import { callBackgroundAction } from "@/lib/call-action";
import { SettingsIcon, XIcon } from "lucide-react";
import { useUpdater } from "../context";
import styles from "./style.module.css";

export function Buttons() {
  return (
    <div className={styles.buttons}>
      <div className={styles.placeholder} />
      <ButtonGroup />
    </div>
  );
}

function ButtonGroup() {
  const updater = useUpdater();
  return (
    <div className={styles.buttonGroup}>
      <Button
        tooltip="Settings"
        onClick={() => {
          callBackgroundAction("openSettings");
        }}
      >
        <SettingsIcon />
      </Button>
      <Button
        tooltip="Hide Hover Ball"
        onClick={() => {
          updater((draft) => {
            draft.showHoverBall = false;
          });
        }}
      >
        <XIcon />
      </Button>
    </div>
  );
}

function Button({
  children,
  onClick = () => {},
  tooltip = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  tooltip?: string;
}) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
      {tooltip && <div className={styles.tooltip}>{tooltip}</div>}
    </button>
  );
}
