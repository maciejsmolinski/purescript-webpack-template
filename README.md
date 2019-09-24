# PureScript × Webpack

🎒A minimal PureScript/Spago webpack configuration template.

## New project setup

Based on github repository without git history:

```shell
$ npx degit maciejsmolinski/purescript-webpack-template new-purescript-project && \
  cd new-purescript-project && \
  npm install
```

Complete clone of the git repository:

```shell
$ git clone git@github.com:maciejsmolinski/purescript-webpack-template.git && \
  cd purescript-webpack-template && \
  npm install
```

## Build instructions:

```shell
# Build once
$ npm run build

# Build continuously
$ npm run build:watch
```

## Executing the code

Include `dist/bundle.js` in your web application or run `node dist/bundle.js` in node.
