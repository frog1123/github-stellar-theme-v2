console.log('%c 🪐| stellar theme injected', 'color: #9335f2');

chrome.storage.sync.get(
  {
    colorCanvasDefault: '#0c0c0c',
    colorHeaderBg: '#111111',
    colorAccentFg: '#9335f2',
    colorCanvasSubtle: '#111111',
    colorPageHeaderBg: '#0c0c0c',
    colorAccentEmphasis: '#aa74e0',
    colorCanvasOverlay: '#111111'
  },
  items => {
    const injectedSheet = `
    :root {
      --color-canvas-default: ${items.colorCanvasDefault} !important;
      --color-header-bg: ${items.colorHeaderBg} !important;
      --color-accent-fg: ${items.colorAccentFg} !important;
      --color-canvas-subtle: ${items.colorCanvasSubtle} !important;
      --color-page-header-bg: ${items.colorPageHeaderBg} !important;
      --color-accent-emphasis: ${items.colorAccentEmphasis} !important;
      --color-canvas-overlay: ${items.colorCanvasOverlay} !important;
    }`;

    const sheet = document.styleSheets[0];
    sheet.insertRule(injectedSheet);

    console.log(`%c 🪐 | theme loaded:${injectedSheet}`, 'color: #9335f2');
  }
);
