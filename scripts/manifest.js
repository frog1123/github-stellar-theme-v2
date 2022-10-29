const { writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const contentScripts = [
  {
    matches: ['https://github.com/*', 'http://github.com/*'],
    js: ['inject.js'],
    css: ['inject.css']
  }
];

const createManifest = async ({ contentScripts }) => {
  try {
    writeFileSync(join(__dirname, '..', 'dist', 'manifest.json'), `{"manifest_version":3,"version":"1.0.0","name":"github stellar theme","author":"frog1123","description":"stellar theme for github","permissions":["contextMenus","activeTab","scripting"],"content_scripts":${JSON.stringify(contentScripts)},"icons":{"16":"16.png","32":"32.png","48":"48.png","64":"64.png","128":"128.png"},"action":{"default_icon":{"16":"16.png","32":"32.png","48":"48.png","64":"64.png","128":"128.png"},"default_title":"github stellar theme","default_popup":"popup.html"}}`);
    console.log(`${chalk.green('✔')} created mainfest.json`);
  } catch (err) {
    console.log(err);
    console.log(`${chalk.red('✘')} failed to create manifest.json`);
  }
};

createManifest({ contentScripts });

// {
//   "manifest_version": 3,
//   "version": "1.0.0",
//   "name": "github stellar theme",
//   "author": "frog1123",
//   "description": "stellar theme for github",
//   "permissions": ["contextMenus", "activeTab", "scripting"],
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
//     "default_popup": "popup.html"
//   }
// }
