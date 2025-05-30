import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useStorage } from "@/hooks/use-storage";
import { useId } from "react";
import {
  enableExtensionStorage,
  hoverBallPositionStorage,
} from "../content/storage";

export default function App() {
  return (
    <div className="min-w-[300px] min-h-[480px] p-4 flex flex-col gap-4">
      <Section1 />
      <Section2 />
    </div>
  );
}

function Section1() {
  const id = useId();
  const enableExtension = useStorage(enableExtensionStorage);
  return (
    <div className="flex flex-row items-center gap-2">
      <Switch
        id={id}
        checked={enableExtension}
        onCheckedChange={(checked) => {
          enableExtensionStorage.setValue(checked);
        }}
      />
      <Label htmlFor={id}>Enable Extension</Label>
    </div>
  );
}

function Section2() {
  const id = useId();
  const hoverBallPosition = useStorage(hoverBallPositionStorage);
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>Hover Ball Position</Label>
      <Input
        id={id}
        type="number"
        value={hoverBallPosition}
        onChange={(e) => {
          hoverBallPositionStorage.setValue(Number(e.target.value));
        }}
      />
    </div>
  );
}
