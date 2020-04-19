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

- Install dependencies

        npm install

- Starter example in `src` folder is a simple function that returns a string.
- Run build. This will generate the compiled code with type definitions in the `dist` folder.

        npm run build

- Formatting and linting.

        npm run lint
        npm run format

- Run tests

        npm test

## Publish package

TODO