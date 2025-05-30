import { useStorage } from "@/hooks/use-storage";
import ActionPanel from "./action-panel";
import { useValue } from "./context";
import { enableExtensionStorage } from "./storage";

export default function App() {
  const { showHoverBall } = useValue();
  const enableExtension = useStorage(enableExtensionStorage);
  return <>{enableExtension && showHoverBall && <ActionPanel />}</>;
}
