console.log('%c 🪐| stellar theme injected', 'color: #9335f2');

chrome.storage.sync.get(
  {
    colorCanvasDefault: '#0c0c0c',
    colorHeaderBg: '#111111',
    colorAccentFg: '#9335f2',
    colorCanvasSubtle: '#111111',
    colorPageHeaderBg: '#0c0c0c',
    colorAccentEmphasis: '#aa74e0',
    colorCanvasOverlay: '#111111',
    stellarInjectedColorSelection: '#9335f2',
    stellarInjectedColorLoadingBar: '#9335f2',
    stellarInjectedColorScrollbarTrack: '#0f0f0e',
    stellarInjectedColorScrollbarThumb: 'linear-gradient(to top, #9335f2 0%, #aa74e0 100%)',
    stellarInjectedTransitionDuration: '250ms'
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
      --stellar-injected-color-selection: ${items.stellarInjectedColorSelection} !important;
      --stellar-injected-color-loading-bar: ${items.stellarInjectedColorLoadingBar} !important;
      --stellar-injected-color-scrollbar-track: ${items.stellarInjectedColorScrollbarTrack} !important;
      --stellar-injected-color-scrollbar-thumb: ${items.stellarInjectedColorScrollbarThumb} !important;
      --stellar-injected-transition-duration: ${items.stellarInjectedTransitionDuration} !important;
    }`;

    const sheet = document.styleSheets[0];
    sheet.insertRule(injectedSheet);

    console.log(`%c 🪐 | theme loaded:${injectedSheet}`, 'color: #9335f2');
  }
);
