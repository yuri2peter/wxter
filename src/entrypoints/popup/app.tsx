import githubIcon from "@/assets/github.svg";
import logoIcon from "@/assets/icon.png";
import { Button } from "@/components/ui/button";
import { callBackgroundAction } from "@/lib/call-action";
import { SettingsIcon } from "lucide-react";

export default function App() {
  return (
    <div className="min-w-[320px] p-4 gap-4 flex flex-col">
      <div className="flex items-center gap-2">
        <img src={logoIcon} alt="Logo" className="size-6" />
        <h1 className="m-0 text-2xl font-bold mr-auto">wxter</h1>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            callBackgroundAction("openSettings");
          }}
        >
          <SettingsIcon />
        </Button>
      </div>
      <p className="text-sm">
        This is a starter template for building browser extensions with React.
      </p>
      <p className="text-sm">
        <a
          href="https://github.com/yuri2peter/wxter"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 underline"
        >
          <img src={githubIcon} alt="GitHub" className="size-4 block" />
          GitHub Repository
        </a>
      </p>
    </div>
  );
}
