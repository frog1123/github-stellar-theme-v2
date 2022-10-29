const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const popup = readFileSync(join(__dirname, '..', 'src', 'popup.html'));

try {
  writeFileSync(join(__dirname, '..', 'dist', 'popup.html'), popup);
  console.log(`${chalk.green('✔')} created popup`);
} catch (err) {
  console.log(err);
  console.log(`${chalk.red('✘')} failed to create popup`);
}
