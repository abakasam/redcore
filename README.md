![](https://github.com/corewar/corewar.io/blob/master/packages/corewar/logo.png)

# Corewar (https://www.corewar.io/)

Core War is a 1984 programming game created by DG Jones and AK Dewdney in which two or more battle programs compete for control of a virtual computer. These battle programs are written in an abstract assembly language called Redcode.

## Structure
Project   | Path
----------|--------------------------------------------
UI        | corewar-app/src/App.js
IDE       | corewar-app/src/pages/editor.js
Parser    | corewar/src/parser
Simulator | corewar/src/simulator
Benchmark | corewar/src/matches
API       | corewar-api/src
Docs      | docs (https://corewar-docs.readthedocs.io/)

## Software Used
- "@types/chai": "^4.2.7"
- "@types/clone": "^0.1.30"
- "@types/core-js": "^0.9.43"
- "@types/jest": "^24.9.0"
- "@types/mongodb": "^3.3.15"
- "@types/node": "^8.10.59"
- "@types/sinon": "^7.5.1"
- "@types/sinon-chai": "^3.2.3"
- "@types/uuid": "^3.4.7"
- "@typescript-eslint/eslint-plugin": "^2.16.0"
- "@typescript-eslint/parser": "^2.16.0"
- "chai": "^4.1.2"
- "eslint": "^6.8.0"
- "eslint-config-prettier": "^6.10.0"
- "eslint-plugin-jest": "^23.6.0"
- "eslint-plugin-prettier": "^3.1.2"
- "lerna": "^3.22.1"
- "npm-cli-login": "^0.1.1"
- "prettier": "^1.19.1"
- "react-dev-utils": "^5.0.2"
- "sinon": "^4.1.2"
- "sinon-chai": "^2.14.0"
- "ts-jest": "^24.3.0"
- "ts-node": "^8.6.2"
- "tsconfig-paths": "^3.9.0"
- "tscpaths": "0.0.9"
- "typescript": "^3.7.5"
- "yarn": "^1.22.4"

## Old

```
wget (corewar)
cd (corewar)
wget https://nodejs.org/download/release/v12.22.10/node-v12.22.10-linux-x64.tar.gz
tar -xvf node-v12.22.10-linux-x64.tar.gz
mv node-v12.22.10-linux-x64.tar.gz node
PATH=$PATH:/home/cabox/workspace/corewar/node/bin
PATH=$PATH:/home/cabox/workspace/corewar/node_modules/yarn/bin
npm install --global lerna@3.22.1
yarn bootstrap
lerna bootstrap
yarn run env
```

## Yarn Usage
- Start API and UI, yarn start
- Build UI and Core library, yarn build
- Linting and testing are performed by `eslint`, yarn lint, and `jest`, yarn test
- Automatically fix linting errors with, yarn lint:fix
- Produce code coverage report with, yarn coverage

# Corewar
![](https://us-central1-progress-markdown.cloudfunctions.net/progress/1)
- Guide
  - book!computer memory - memory management - memory manager / memory > instruction > block > type,
- Redcode
  - book!assembly language, 9781800204805 build your own programming language
- Configuration
  - nobook
- Theory
  - Architecture
    - book!visually how instructions move off abstract hardware, 9781502710826 assembly language mnemonic notebook
  - Models
    - book!
  - Logic
    - book! 

# Guide
- Corewar
  - Introduction
    - Warriors
    - Core
    - Battle
    - Redcode
    - Cycle
    - Match
    - Hills
  - Core
    - Computer Memory
    - Address
    - Overwriting
  - Initialisation
  - Addressess
    - Absolute Address
    - Relative Address
    - Modulus
  - Warriors
    - Program
    - Process
    - Redcode
  - Hills
    - Hill
    - Season
    - Matchup
    - Ranked
    - Settings
  - Loader
    - Loaded
    - Minimum Specification
    - Placement
    - Specified Directive
  - Visualization
    - Grid
    - Row
    - Color
    - Write
    - Overwrite
    - Read
    - Execute
  - Processes
    - Single Process
    - Turn
    - No Single Process
    - Gain Process
    - Turn Order
    - Multiple Processes
  - Benchmarks
    - Benchmark
    - Gauge
    - Score
  - Execution
    - Scheme
    - Temporary Register
    - Known Register
    - Fetch
    - Decode
    - Execute
    - Example
      - Evaluation
      - B Postincrement Indirect
      - Fetch
      - Decode
      - B Postincrement Direct
      - Execute
  - Match Setting
    - Core Size
    - Maximum Cycles
    - Maximum Processes
    - Maximum Warrior Length
    - Minimum Separation
    - Standard
    - Read Limit
    - Write Limit
  - Strategies
    - Principal Strategy
    - Rock
    - Paper
    - Scissors

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

# Configuration (API)
  - Introduction
  - Parser
  - Simulator
  - Matches
  - Enumerators
