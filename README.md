=======
# webpack-react-seed
Minimal project seed with webpack and react

## Technologies used

**[Webpack](https://github.com/webpack/webpack)**
Webpack is a bundler. It allow here to transform, bundle and serve your code.

**[Babel](https://babeljs.io/)**
Babel is a transpiler that allows to use es next now.

**[React framework](http://facebook.github.io/react/)**
React is a view framework. No flux implementation dependency. You are free to add your favorite one.

**[Karma](http://karma-runner.github.io/0.13/index.html)**
Karma is a test runner.

**[Mocha](http://mochajs.org/)**
Mocha is a test framework.

**[Chai](http://chaijs.com/)**
Chai is a test assertion framework.

**[Sinon](http://sinonjs.org/)**
Sinon is a test spy/stub/mock framework.

**[Sass](http://sass-lang.com/)**
Sass is a css pre-processor.

**[Eslint](http://eslint.org/)**
ESLint is a javascript linter.

## Getting started

Install the dependencies. You will need node.js and npm installed in your computer.

`npm install`

Launch a dev server to check if everything works

`npm dev`

Open your browser on [http://localhost:3000/](http://localhost:3000/)

## NPM tasks

`npm dev`

Bundle and launch dev server. It watch your files and hot reload your components.

`npm build`

Build a production ready bundle in build/bundle.min.js

`npm test`

Run your unit tests once. It detect all files finishing with `.spec.js` or `.spec.jsx`.

`npm test:auto`

Run your unit tests in automatic mode. It watch your files and run the tests again on change.

## Testing your code

The seed use mocha/chai/sinon to write, assert and spy. The [sinon-chai](https://github.com/domenic/sinon-chai) extension is loaded too.

Karma launch every test file (`*.spec.js` and `*.spec.jsx`) in the src folder.

## Linting your code

The seed use ESLint. Check the `.eslintrc` for the default configuration.
The rule list is available [here](http://eslint.org/docs/rules/).

The linter is launched on every change detection in dev mode. You can check your terminal to see the report.
