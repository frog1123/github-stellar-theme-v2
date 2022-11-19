const { writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const destination = process.argv[2].replace(/--destination=/, '');

const contentScripts = [
  {
    matches: ['https://github.com/*', 'http://github.com/*'],
    js: ['inject.js'],
    css: ['inject.css']
  }
];

const permissions = ['storage'];

const createManifest = async ({ contentScripts, permissions, version }) => {
  try {
    writeFileSync(
      join(__dirname, '..', destination, 'manifest.json'),
      `{"manifest_version":3,"version":\"${version}\","name":"github stellar theme","author":"frog1123","description":"stellar theme for github","permissions":${JSON.stringify(
        permissions
      )},"content_scripts":${JSON.stringify(
        contentScripts
      )},"icons":{"16":"16.png","32":"32.png","48":"48.png","64":"64.png","128":"128.png"},"action":{"default_icon":{"16":"16.png","32":"32.png","48":"48.png","64":"64.png","128":"128.png"},"default_title":"github stellar theme","default_popup":"popup.html"},"options_page": "options.html"}`
    );
    console.log(`${chalk.green('✔')} created mainfest.json`);
  } catch (err) {
    console.log(err);
    console.log(`${chalk.red('✘')} failed to create manifest.json`);
  }
};

createManifest({ contentScripts, permissions, version: '1.0.4' });

// {
//   "manifest_version": 3,
//   "version": "1.0.0",
//   "name": "github stellar theme",
//   "author": "frog1123",
//   "description": "stellar theme for github",
//   "permissions": ["contextMenus", "activeTab", "scripting", "storage"],
//   "content_scripts": [
//     {
//       "matches": ["https://github.com/*", "http://github.com/*"],
//       "js": [],
//       "css": []
//     }
//   ],
//   "icons": {
//     "16": "16.png",
//     "32": "32.png",
//     "48": "48.png",
//     "64": "64.png",
//     "128": "128.png"
//   },
//   "action": {
//     "default_icon": {
//       "16": "16.png",
//       "32": "32.png",
//       "48": "48.png",
//       "64": "64.png",
//       "128": "128.png"
//     },
//     "default_title": "github stellar theme",
//     "default_popup": "popup.html",
//     "options_page": "options.html"
//   }
// }
