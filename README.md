## Development

Install dependencies first:

```
npm i
```

To get development build to `dist/` folder:

```
npm run dev
```

To start webpack dev server:

```
npm run serv
```

To get production build to `dist/` folder:

```
npm run prod
```

To start eslint in `src` folder:

```
npm run lint
```

To start eslint with fix option:

```
npm run fix
```

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack

### Moсks

- [`miragejs`](https://www.npmjs.com/package/miragejs) - A client-side server to develop, test and prototype your app

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
- [`ts-loader`](https://www.npmjs.com/package/ts-loader) - The TypeScript loader for webpack.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`imagemin-webpack-plugin`](https://github.com/Klathmon/imagemin-webpack-plugin) - Compress all images

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) - This package provides Airbnb's .eslintrc as an extensible shared config.
- [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Base styleguide to enforce rules
- [`eslint-config-airbnb-typescript`](https://www.npmjs.com/package/eslint-config-airbnb-typescript) - Enhances Airbnb's ESLint config with TypeScript support
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implment prettier rules
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Implment import rules
- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - Static AST checker for accessibility rules on JSX elements.
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) - Dependency for prettier usage with ESLint
- [`eslint-plugin-react`](npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint
- [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) - ESLint configuration for webpack
- [`prettier`](https://github.com/prettier/prettier) - Dependency for `prettier-webpack-plugin` plugin
- [`prettier-webpack-plugin`](https://github.com/hawkins/prettier-webpack-plugin) - Prettier configuration for webpack
- [`stylelint`](https://github.com/stylelint/stylelint/) - modern linter for styles
- [`stylelint-config-sass-guidelines`](https://github.com/bjankord/stylelint-config-sass-guidelines) - `stylelint` config use with SCSS syntax
- [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) - The standard shareable config for `stylelint`
- [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss) - collection of SCSS specific rules for `stylelint`
- [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin) - Stylelint configuration for webpack
