const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const cursor = readFileSync(join(__dirname, '..', 'assets', 'crosshair.svg'));

try {
  writeFileSync(join(__dirname, '..', 'dist', 'crosshair.svg'), cursor);

  console.log(`${chalk.green('✔')} created assets`);
} catch (err) {
  console.log(err);
  console.log(`${chalk.red('✘')} failed to create assets`);
}