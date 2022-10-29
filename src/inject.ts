console.log('%c 🪐| stellar theme injected', 'color: #9335f2');

chrome.storage.sync.get(
  {
    colorCanvasDefault: '#0c0c0c',
    likesColor: true
  },
  items => {
    const injectedSheet = `
    :root {
      --color-canvas-default: ${items.colorCanvasDefault} !important;
      --color-header-bg: #111111 !important;
    }`;

    const sheet = document.styleSheets[0];
    sheet.insertRule(injectedSheet);

    console.log(`%c 🪐 | theme loaded:${injectedSheet}`, 'color: #9335f2');
  }
);
