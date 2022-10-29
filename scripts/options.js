const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const options = readFileSync(join(__dirname, '..', 'src', 'options.html'));

try {
  writeFileSync(join(__dirname, '..', 'dist', 'options.html'), options);
  console.log(`${chalk.green('✔')} created options`);
} catch (err) {
  console.log(err);
  console.log(`${chalk.red('✘')} failed to create options`);
}
