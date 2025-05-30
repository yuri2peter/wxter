import { listenMessages } from "@/lib/call-action";
import { actions } from "./actions";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });
  listenMessages(actions);
});
