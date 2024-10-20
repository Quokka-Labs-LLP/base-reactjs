# React Saas Admin

Opinionated Saas admin template.

## Features

- [Vite](https://vitejs.dev) with [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org).
- Use [ESLint](https://eslint.org), and [Prettier](https://prettier.io) on VSCode and before you commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- Use [React Router Dom](https://reactrouter.com/en/main) for file-based routing.
- Route based code splitting.
- Write unit and integration tests with [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).

## Getting started

Use this repository as a [GitHub template](https://github.com/Quokka-Labs-LLP/base-reactjs) to clone to your machine with an empty git history:

Then, install the dependencies:

```
yarn install
```

### Before you start coding

- [ ] If you don't plan to use GitHub Actions, delete the `.github` directory.
- [ ] Change the `favicon.png`, `apple-touch-icon.png`, `android-chrome-192x192.png` and `android-chrome-512x512.png`. [favicon.io](https://favicon.io) is a cool tool for generating these assets.
- [ ] Change the title, description and theme color in the `index.html` and `vite.config.ts`.
- [ ] Change the `name` field in package.json.

## Scripts

- `yarn dev` - start a development server with hot reload.
- `yarn build` - build for production. The generated files will be on the `dist` folder.
- `yarn preview` - locally preview the production build.
- `yarn test` - run unit and integration tests related to changed files based on git.
- `yarn test:ui` - run unit and integration tests related in vitest ui mode.
- `yarn coverage` - run code coverage related to changed files based on git.
- `yarn format` - format all files with Prettier.
- `yarn lint` - runs TypeScript, ESLint and Stylelint.
