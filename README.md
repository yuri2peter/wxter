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

Install the dev-extension in the `.output` folder to your browser, the HMR will work.

## Manifest

- Set extension name and description in `package.json`.
- Put base icon to `<srcDir>/assets/icon.png`, `@wxt-dev/auto-icons` will generate the rest of the icons.
- Set permissions in `wxt.config.ts`.

## Build

```bash
bun zip
```

## Docs

- [WXT](https://wxt.dev)
- [Chrome Extension](https://developer.chrome.com/docs/extensions/reference/)