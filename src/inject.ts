console.log('%c 🪐| stellar theme injected', 'color: #9335f2');

const sheet = document.styleSheets[0];

const injectedSheet = `:root {
  --color-canvas-default: #0c0c0c !important;
  --color-header-bg: #111111 !important;
}`;

sheet.insertRule(injectedSheet);
