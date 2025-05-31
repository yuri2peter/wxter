import { AlertCircleIcon, CheckCircleIcon, Loader2Icon } from "lucide-react";
import styles from "./style.module.css";

export default function Status() {
  return (
    <div className={styles.status}>
      <StatusEmpty />
    </div>
  );
}

export function StatusEmpty() {
  return null;
}

export function StatusAlert() {
  return <AlertCircleIcon className="text-white bg-orange-400" />;
}

export function StatusSuccess() {
  return <CheckCircleIcon className="text-white bg-green-400" />;
}

export function StatusPending() {
  return <Loader2Icon className="text-blue-400 bg-background animate-spin" />;
}
