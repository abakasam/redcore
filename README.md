![](https://github.com/corewar/corewar.io/blob/master/packages/corewar/logo.png)

# Corewar (https://www.corewar.io/)

Core War is a 1984 programming game created by DG Jones and AK Dewdney in which two or more battle programs compete for control of a virtual computer. These battle programs are written in an abstract assembly language called Redcode.

## Structure
Project   | Path
----------|--------------------------------------------
(Logic).  | Showing math or logic on virtual computer
(Computer)| Instructions on virtual computer
(Memory). | Showing instructions and circuit
Terminal  | ?pmars
UI        | corewar-app/src/App.js
IDE       | corewar-app/src/pages/editor.js
Parser    | corewar/src/parser
Simulator | corewar/src/simulator
Benchmark | corewar/src/matches
API       | corewar-api/src
Docs      | docs (https://corewar-docs.readthedocs.io/)

Years | Technology | Possession | Study | Language
------|------------|------------|-------|----------
50 | Satellite | TMobile | ?Singal Processing | Physics
60 | Server | Xfinity | ?Computer Networks | Physics
70 | Calculator | TI-83+ | ?Digital Circuits | Physics
80 | Desktop | HP Prodesk | Computer Architecture | C
90 | Console | GameBoy Color | Game Programming | Z80
00 | Phone | OnePlus 1 | ?Embedded Systems | Java
10 | IPA | Driftyco | Expert Systems | Clisp
20 | Bot | Tamiya | Automotive Engineering | Physics

### Tocs

- Guide (Game) [Guide.md](https://github.com/abakasam/redcore/files/8238168/Guide.md)
- Redcode (Assembly Language) [Redcode.md](https://github.com/abakasam/redcore/files/8238169/Redcode.md)
- Virtual Computer
  - Circuit | Binary Langauge
  - Memory | Computer Register
  - Process | Computer Arithmetic
  - Program | Instruction Cycle
  - Display | Computer Memory 
- Configuration (Application) [Configuration.md](https://github.com/abakasam/redcore/files/8238172/Configuration.md)
- Logic
  - Finite Graphs and Networks an Introduction with Applications, Robert Busacker, 0070093059
  - Minitab Handbook, Barbara Ryan, 0534212409
  - Introduction to Algebraic Topology, Andrew Wallace, 0080001181
  - Graph Alogirithms, Shimon Even, 978-0521517188

## Running Corewar

```
wget https://github.com/abakasam/redcore/archive/refs/heads/master.zip
unzip master.zip
cd redcore-master/
wget https://nodejs.org/download/release/v12.22.10/node-v12.22.10-linux-x64.tar.gz
tar -xvf node-v12.22.10-linux-x64.tar.gz
mv node-v12.22.10-linux-x64.tar.gz node
PATH=$PATH:/home/cabox/workspace/corewar/node/bin
PATH=$PATH:/home/cabox/workspace/corewar/node_modules/yarn/bin
npm install --global lerna@3.22.1 # If lerna fails
yarn bootstrap
lerna bootstrap
yarn run env
yarn config set HOSTNAME 0.0.0.0 # If timeout occurs
yarn start # few seconds to load
```

or

```
wget https://github.com/abakasam/redcore/releases/download/working/redcore-master.tar.gz
mkdir redcore
cd redcore
tar -xvf redcore-master.tar.gz
yarn start
```
