

![Corewar](https://github.com/corewar/corewar.io/blob/master/packages/corewar/logo.png)

![Node.js CI](https://github.com/corewar/corewar.io/workflows/Node.js%20CI/badge.svg)
![Documentation Status](http://readthedocs.org/projects/corewar-docs/badge/?version=latest)

# Corewar

Typescript / Javascript implementation of the classic game [corewar](https://en.wikipedia.org/wiki/Core_War)

Currently this project contains a corewar IDE, redcode parser and core simulator.

In future we hope to include local and remote hills and benchmarks and possibly to begin extending corewar itself.

This is the monorepo for the corewar.io project and contains the following packages:
* [corewar](https://github.com/corewar/corewar.io/tree/master/packages/corewar) - npm package providing parser and simulator
* [corewar-ui](https://github.com/corewar/corewar.io/tree/master/packages/corewar-ui) - corewar.io user interface implemented as a spa
* [corewar-api](https://github.com/corewar/corewar.io/tree/master/packages/corewar-api) - corewar.io api implemented in graphql

Documentation for the project along with guidance on corewar and the redcode language can be found on [Read the Docs](https://corewar-docs.readthedocs.io/en/latest/)

## Scripts

This project uses `lerna` in order to manage the monorepo.
Node 12+ is required.

### Prepare development environment

```bash
npm install --global lerna eslint-cli
npm run bootstrap
```

> Currently `lerna boostrap` command is not building the `corewar` library. [Documentation](https://github.com/lerna/lerna/tree/master/commands/bootstrap) says it should automatically execute `prepublish` on all bootstrapped libraries but doesn't. In order to successfully bootstrap this application it is necessary to manually execute `lerna run prepublish` following bootstrap. I don't know why. If anyone knows, please let me know!

### Start API and UI

```bash
npm start
```

### Build UI and Core library

```bash
npm run build
```

### Lint and test all packages

Linting and testing are performed by `eslint` and `jest`.

```bash
npm run lint
npm test
```

Automatically fix linting errors with

```bash
npm run lint:fix
```

Produce code coverage report with

```bash
npm run coverage
```

