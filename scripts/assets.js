const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const destination = process.argv[2].replace(/--destination=/, '');

const cursor = readFileSync(join(__dirname, '..', 'assets', 'crosshair.svg'));
const upArrow = readFileSync(join(__dirname, '..', 'assets', 'up_arrow.svg'));

try {
  writeFileSync(join(__dirname, '..', destination, 'crosshair.svg'), cursor);
  writeFileSync(join(__dirname, '..', destination, 'up_arrow.svg'), upArrow);

  console.log(`${chalk.green('✔')} created assets`);
} catch (err) {
  console.log(err);
  console.log(`${chalk.red('✘')} failed to create assets`);
}
