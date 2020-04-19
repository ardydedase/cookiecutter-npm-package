![CI](https://github.com/ardydedase/cookiecutter-npm-package/workflows/CI/badge.svg)

# Cookiecutter NPM Package

Project template for building publicly available npm package.

## Specs

- Starter code in Typescript (for now).
- Tested on:
  - npm 6.13.4
  - node v10.19.0

## Usage

1. Install cookiecutter

        pip install cookiecutter

1. Cookie cut the template.

        cookiecutter git@github.com:ardydedase/cookiecutter-npm-package.git

1. Enter the values accordingly. Pick a unique project name, it will be used as your npm package name. You can check if the package name is available in https://www.npmjs.com/.


1. Change the working directory to the generated folder, same name as the project slug.

        cd <project_slug>

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

1. If you don't have an npm account, create one on: https://www.npmjs.com/signup or run the command: `npm adduser`

1. If you already have an account, login by running the following command:

        npm login

1. When you're successfully logged-in. Publish the package:

        npm publish

1. You should now be able to `npm install` your published package. There is an npm package called [reference-package](https://www.npmjs.com/package/reference-package) which is generated from this cookiecutter. There is a sample usage in [example/index.js](example/index.js).

## Credits

This cookiecutter template is originally based on this guide though slightly modified to my own preferences: https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c