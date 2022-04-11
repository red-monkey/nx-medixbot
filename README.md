# Medixbot Monorepo

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Projects

There are 3 projects in this monorepo:

- `web` (the web frontend application with react)
- `mobile` (the react native application)
- `api` (The backend graphQL api)

## Run an application

To lunch the app run:
`npm run start:web` for web app
`npm run start:mobile` for metro bundler
`npm run start:ios` to run ios
`npm run start:android` to run android
`npm run start:api` for the api

## Generate a library

We can create multiple applications and libraries in the same workspace. But since the 3 applications are already created the only elements you may need to create is a library.

We create library when we want to have a code (type, utils function, style, ...) that we may need to share between our 3 medixbot projects (api, web, mobile).

Run `nx g @nrwl/react:lib my-lib` to generate react a library.
Run ` nx generate @nrwl/js:library --name=my-lib` to generate typescript a library.

I recommend you to use the `nx console` extension for vscode. It is a graphical version gor managing the monorepo.

The libraries created can be imported from `@medixbot/mylib`.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new react component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand our workspace

Run `nx graph` to see a diagram of the dependencies of our projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
