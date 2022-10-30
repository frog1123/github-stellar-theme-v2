console.log('%c 🪐| stellar theme injected', 'color: #9335f2');

const properties = {
  colorCanvasDefault: '#0c0c0c',
  colorHeaderBg: '#111111',
  colorAccentFg: '#9335f2',
  colorCanvasSubtle: '#111111',
  colorPageHeaderBg: '#0c0c0c',
  colorAccentEmphasis: '#aa74e0',
  colorCanvasOverlay: '#111111',
  colorPrimerBorderActive: '#9335f2',
  colorAccentSubtle: '#aa74e020',
  colorCalanderGraphDayBg: '#111111',
  colorCalanderGraphDayBorder: '#11111120',
  colorCalanderGraphDayL1Bg: '#5c2296',
  colorCalanderGraphDayL2Bg: '#9335f2',
  colorCalanderGraphDayL3Bg: '#aa74e0',
  colorCalanderGraphDayL4Bg: '#c7a4ea',
  // stellar custom
  stellarInjectedColorSelection: '#9335f2',
  stellarInjectedColorLoadingBar: '#9335f2',
  stellarInjectedColorScrollbarTrack: '#0f0f0e',
  stellarInjectedColorScrollbarThumb: 'linear-gradient(to top, #9335f2 0%, #aa74e0 100%)',
  stellarInjectedTransitionDuration: '50ms',
  stellarInjectedColorNotifcation: 'linear-gradient(#9335f2, #9335f2)',
  stellarInjectedColorNotifcationBorder: '2px solid #aa74e020'
};

chrome.storage.sync.get(properties, items => {
  const injectedSheet = `
    :root {
      --color-canvas-default: ${items.colorCanvasDefault} !important;
      --color-header-bg: ${items.colorHeaderBg} !important;
      --color-accent-fg: ${items.colorAccentFg} !important;
      --color-canvas-subtle: ${items.colorCanvasSubtle} !important;
      --color-page-header-bg: ${items.colorPageHeaderBg} !important;
      --color-accent-emphasis: ${items.colorAccentEmphasis} !important;
      --color-canvas-overlay: ${items.colorCanvasOverlay} !important;
      --color-primer-border-active: ${items.colorPrimerBorderActive} !important;
      --color-accent-subtle: ${items.colorAccentSubtle} !important;
      --color-calendar-graph-day-bg: ${items.colorCalanderGraphDayBg} !important;
      --color-calendar-graph-day-border: ${items.colorCalanderGraphDayBorder} !important;
      --color-calendar-graph-day-L1-bg: ${items.colorCalanderGraphDayL1Bg} !important;
      --color-calendar-graph-day-L2-bg: ${items.colorCalanderGraphDayL2Bg} !important;
      --color-calendar-graph-day-L3-bg: ${items.colorCalanderGraphDayL3Bg} !important;
      --color-calendar-graph-day-L4-bg: ${items.colorCalanderGraphDayL4Bg} !important;
      --stellar-injected-color-selection: ${items.stellarInjectedColorSelection} !important;
      --stellar-injected-color-loading-bar: ${items.stellarInjectedColorLoadingBar} !important;
      --stellar-injected-color-scrollbar-track: ${items.stellarInjectedColorScrollbarTrack} !important;
      --stellar-injected-color-scrollbar-thumb: ${items.stellarInjectedColorScrollbarThumb} !important;
      --stellar-injected-transition-duration: ${items.stellarInjectedTransitionDuration} !important;
      --stellar-injected-color-notifcation: ${items.stellarInjectedColorNotifcation} !important;
      --stellar-injected-color-notifcation-border: ${items.stellarInjectedColorNotifcationBorder} !important;
    }`;

  const sheet = document.styleSheets[0];
  sheet.insertRule(injectedSheet);

  console.log(`%c 🪐 | theme loaded:${injectedSheet}`, 'color: #9335f2');
});
