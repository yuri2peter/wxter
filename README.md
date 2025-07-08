# wxter

This template should help get you started developing with React in WXT.

## Features

- React
- TypeScript
- Biome
- Tailwind CSS
- Shadcn UI
- Built-in Hover Ball
- Built-in Settings Page
- Built-in Popup Page

## Development

```bash
bun ci
bun dev
```

Load the dev-extension in the `.output` folder to your browser, the HMR will work.

See more details in [wxt.dev](https://wxt.dev).

## Manifest

- Set extension name and description in `package.json`.
- Put base icon to `<srcDir>/assets/icon.png`, `@wxt-dev/auto-icons` will generate the rest of the icons.
- Set permissions in `wxt.config.ts`.

## Build

```bash
bun zip:all
```

## Load the Built Extension

- [Chrome](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)
- [Edge](https://learn.microsoft.com/en-us/microsoft-edge/extensions/getting-started/extension-sideloading)
- [Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- [Safari (partial supported)](https://wxt.dev/guide/essentials/publishing.html#safari)

Load the unpacked extension from the `.output` folder.
