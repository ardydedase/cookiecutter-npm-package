![CI](https://github.com/ardydedase/cookiecutter-npm-package/workflows/CI/badge.svg)

# Cookiecutter NPM Package

Project template for building publicly available npm packages in Typescript (for now).

## Specs

- Starter code in Typescript
- Tested on:
  - npm 6.13.4
  - node v10.19.0

## Usage

1. Install cookiecutter

        pip install cookiecutter

1. Cookie cut the template.

        cookiecutter <template URL here>

1. Enter the values accordingly. Pick a unique project name, it will be used as your npm package name.


1. Change the working directory to the generated folder.

        cd <my-generated-package>

## Development

1. Install dependencies

        npm install

 
1. Run build. This will generate the compiled code with type definitions in the `dist` folder.

        npm run build

1. Formatting and linting.

        npm run lint
        npm run format

1. Run tests

        npm test

1. Build on top of the starter example in `src` folder is a simple function that returns a string.

## Publish package

Inside the generated folder, run the following commands:

1. If you don't have an npm account, create one on: https://www.npmjs.com/signup or run the command:

        npm adduser

1. If you already have an account, login by running the following command:

        npm login

1. When you're successfully logged-in. Publish the package:

        npm publish