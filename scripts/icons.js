const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const icon16 = readFileSync(join(__dirname, '..', 'assets', '16.png'));
const icon32 = readFileSync(join(__dirname, '..', 'assets', '32.png'));
const icon48 = readFileSync(join(__dirname, '..', 'assets', '48.png'));
const icon64 = readFileSync(join(__dirname, '..', 'assets', '64.png'));
const icon128 = readFileSync(join(__dirname, '..', 'assets', '128.png'));

try {
  writeFileSync(join(__dirname, '..', 'dist', '16.png'), icon16);
  writeFileSync(join(__dirname, '..', 'dist', '32.png'), icon32);
  writeFileSync(join(__dirname, '..', 'dist', '48.png'), icon48);
  writeFileSync(join(__dirname, '..', 'dist', '64.png'), icon64);
  writeFileSync(join(__dirname, '..', 'dist', '128.png'), icon128);
  console.log(`${chalk.green('✔')} created icons`);
} catch (err) {
  console.log(err);
  console.log(`${chalk.red('✘')} failed to create icons`);
}
