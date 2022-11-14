const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const destination = process.argv[2].replace(/--destination=/, '');

const icon16 = readFileSync(join(__dirname, '..', 'assets', '16.png'));
const icon32 = readFileSync(join(__dirname, '..', 'assets', '32.png'));
const icon48 = readFileSync(join(__dirname, '..', 'assets', '48.png'));
const icon64 = readFileSync(join(__dirname, '..', 'assets', '64.png'));
const icon128 = readFileSync(join(__dirname, '..', 'assets', '128.png'));
const iconsvg = readFileSync(join(__dirname, '..', 'assets', 'logo.svg'));

try {
  writeFileSync(join(__dirname, '..', destination, '16.png'), icon16);
  writeFileSync(join(__dirname, '..', destination, '32.png'), icon32);
  writeFileSync(join(__dirname, '..', destination, '48.png'), icon48);
  writeFileSync(join(__dirname, '..', destination, '64.png'), icon64);
  writeFileSync(join(__dirname, '..', destination, '128.png'), icon128);
  writeFileSync(join(__dirname, '..', destination, 'logo.svg'), iconsvg);

  console.log(`${chalk.green('✔')} created icons`);
} catch (err) {
  console.log(err);
  console.log(`${chalk.red('✘')} failed to create icons`);
}
