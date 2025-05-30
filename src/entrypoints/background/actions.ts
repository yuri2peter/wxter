export const actions = {
  async example1(message: string) {
    return `example | ${message}`;
  },
  async example2({ a, b }: { a: number; b: number }) {
    return a + b;
  },
  async openSettings() {
    chrome.runtime.openOptionsPage();
  },
};

export type BackgroundActions = typeof actions;
