import { storage } from "wxt/utils/storage";

export const hoverBallPositionStorage = storage.defineItem<number>(
  "local:hoverBallPosition",
  {
    fallback: 0,
  },
);

export const enableExtensionStorage = storage.defineItem<boolean>(
  "local:enableExtension",
  {
    fallback: true,
  },
);
