# Electron Hotplate

Based on the [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate), this boilerplate adds UI components from [Shadcn](https://ui.shadcn.com/), styling with [Tailwind CSS](https://tailwindcss.com/), persistance with [electron-store](https://github.com/sindresorhus/electron-store), and a structured [React](https://react.dev/) context that promotes a data flow from the top down: Main process -> Renderer process.

<br>

<div align="center">

[![Build Status][github-actions-status]][github-actions-url]
[![Github Tag][github-tag-image]][github-tag-url]

</div>

## Features

- 💬 App and System-wide Notifications
- 🏃‍♂️ Auto Updater
- 📦 Built-in Store
- 🖱️ Context Menu
- 🌙 Dark Mode
- ❌ Error Handler
- ⌨️ Keyboard Shortcut Manager
- 📝 Logging
- 🀱 Menu Bar for macOS, Windows, and Linux
- 📂 Multi-Window
- 🖥️ System Tray

## Getting Started

```bash

# Clone this repository
git clone https://github.com/lacymorrow/electron-hotplate.git

# Go into the repository
cd electron-hotplate

# Install dependencies
yarn

# Run the app
yarn start
```

## Production

### Auto Update

After publishing your first version, you can enable auto-update by uncommenting the `update` function contents in `src/main/auto-update.ts`.

## BuiltWith

- [Electron](https://electronjs.org/)
- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)


## Development

### Tailwind CSS

We use Tailwind CSS for styling. See the [Tailwind CSS docs](https://tailwindcss.com/docs) for more information.

Some Tailwind plugins have been added for convenience:

- [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate) - `tailwindcss-animate`
- [Tailwind Container Queries](https://github.com/tailwindlabs/tailwindcss-container-queries) - `@tailwindcss/container-queries`
- Child selectors to target immediate children like `child:w-xl`
- Don't forget group selectors too: `group` (Parent) `group-hover:bg-gray-100` (Child)

### Shadcn

Shadcn is a UI component library for React. See the [Shadcn docs](https://ui.shadcn.com/) for more information.
Use `npx shadcn-ui@latest add accordion ...` to add a component to your project.

_Current installation command (to update all ui components):_

```sh
npx shadcn-ui@latest add button checkbox dropdown-menu form input menubar radio-group scroll-area select separator sonner switch textarea
```

_To list components with updates: `npx shadcn-ui@latest diff`_

## Electron-React-Boilerplate Docs

See the Electron React Boilerplate [docs and guides here](https://electron-react-boilerplate.js.org/docs/installation)


### Tutorials

- Creating multiple windows: https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/623#issuecomment-1382717291


## License

MIT © [Lacy Morrow](https://github.com/lacymorrow)

[github-actions-status]: https://github.com/lacymorrow/electron-shadcn-boilerplate/workflows/Build/badge.svg
[github-actions-url]: https://github.com/lacymorrow/electron-shadcn-boilerplate/actions
[github-tag-image]: https://img.shields.io/github/tag/electron-react-boilerplate/electron-react-boilerplate.svg?label=version
[github-tag-url]: https://github.com/lacymorrow/electron-shadcn-boilerplate/releases/latest
[stackoverflow-img]: https://img.shields.io/badge/stackoverflow-electron_react_boilerplate-blue.svg
[stackoverflow-url]: https://stackoverflow.com/questions/tagged/electron-react-boilerplate
