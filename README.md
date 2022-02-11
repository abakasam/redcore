# Corewar
![](https://us-central1-progress-markdown.cloudfunctions.net/progress/1)
- Guide
- Redcode
  - book!assembly language, 9781800204805 build your own programming language
  - book!visually how instructions move off abstract hardware, 9781502710826 assembly language mnemonic notebook
- Configuration
- Theory
  - Architecture
  - Models
  - Math

# Redcode
- Intro
  - Warriors
  - Standards
    - Redcode Assembly Language Specification (ICWS'94)
      - Introduction
        - Purpose
        - Overview
        - Acknowledgements
      - Redcode Assembly File Format
        - Purpose
        - Description
        - Grammar
        - Assembly to Object Code Conversion
        - Psuedo-instructions
        - Comment Conventions
        - Example Assembly File
      - Load File Format
        - Purpose
        - Description
        - Grammar
        - Comment Conventions
        - Example Load File
      - Runtime Variables
        - Purpose
        - Variables
        - Standard Variable Sets
      - MARS
        - Purpose
        - Description
        - Address Modes
          - Immediate
          - Direct
        - Indirect
        - Predecrement Indirect
        - Postincrement Indirect
      - Modifiers
        - A
        - B
        - AB
        - BA
        - F
        - X
        - I
      - Instruction Set
        - DAT
        - MOV
        - ADD
        - SUB
        - MUL
        - DIV
        - MOD
        - JMP
        - JMZ
        - JMN
        - DJN
        - CMP
        - SLT
        - SPL
      - Example MARS Interpreter
    - Validation Suite
      - Purpose and Requirements
      - Assembly to Load File Test
      - MARS Tests
        - DAT Tests
        - MOV Tests
        - ADD Tests
        - SUB Tests
        - MUL Tests
        - DIV Tests
        - MOD Tests
        - JMP Tests
        - JMZ Tests
        - JMN Tests
        - DJN Tests
        - CMP Tests
        - SLT Tests
        - SPL Tests
   - Glossary and Index
   - Difference Between Standards
    - Purpose
    - Changes
     - Assembly Files
      - ICWS'88 Conversion
      - ICWS'86 Conversion
     - Load Files
     - MARS
  - Operands
  - Opcodes
    - DAT
    - MOV
    - ADD
    - SUB
    - MUL
    - DIV
    - MOD
    - JMP
    - JMZ
    - JMN
    - DJN
    - CMP
    - SEQ
    - SNE
    - SLT
    - SPL
    - NOP
  - Modifers
    - .A
    - .B
    - .AB
    - .BA
    - .F
    - .X
    - .I
  - Addressing Modes
    - Execution
    - Addressing Modes
      - "#" Immediate
      - "$" Direct
      - "-" A Indirect
      - "@" B Indirect
      - "{" A Predecrement Indirect
      - "}" A Postincrement Indirect
      - "<" B Predecrement Indirect
      - ">" B Postincrement Indirect
  - ORG and END
    - ORG
    - END
    - Parser Warnings
  - Parser
    - Parser Functions
    - Defaults
    - Addressing Modes
    - Operands
    - Modifiers
  - Labels
    - Literal Addresses
    - Label Name
    - Relative Instruction
    - Multiple Labels
  - Preprocessor
    - EQU directive
      - Literal Number Constant
      - Label Constant
    - Mathematical Expressions
    - Special Constants
      - Core
      - Processes
      - P-Space
    - Assert
  - FOR blocks
  - Comments
  - Metadata
    - ;Standard
    - ;Name Warrior
    - ;Author
    - ;Strategy

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

This project uses `lerna` and `yarn` workspaces in order to manage the monorepo.
Node 12+ is required.

### Prepare development environment

```bash
npm install --global lerna yarn
yarn bootstrap
```

> Currently `lerna boostrap` command is not building the `corewar` library. [Documentation](https://github.com/lerna/lerna/tree/master/commands/bootstrap) says it should automatically execute `prepublish` on all bootstrapped libraries but doesn't. In order to successfully bootstrap this application it is necessary to manually execute `lerna run prepublish` following bootstrap. I don't know why. If anyone knows, please let me know!

### Start API and UI

```bash
yarn start
```

### Build UI and Core library

```bash
yarn build
```

### Lint and test all packages

Linting and testing are performed by `eslint` and `jest`.

```bash
yarn lint
yarn test
```

Automatically fix linting errors with

```bash
yarn lint:fix
```

Produce code coverage report with

```bash
yarn coverage
```

