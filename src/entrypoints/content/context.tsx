import createReactContextProvider from "@/lib/create-react-context-provider";

export const { Provider, useValue, useUpdater } = createReactContextProvider({
  showHoverBall: true,
});
