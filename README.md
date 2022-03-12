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
