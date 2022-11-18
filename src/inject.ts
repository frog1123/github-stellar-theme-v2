console.log(
  '%c🪐| stellar theme injected %cv2\n%clogs can be enabled by enabling stellar-settings-enable-logs',
  'color: #9335f2',
  'background-color: #aa74e0; color: #ffffff; border-radius: 4px; padding-left: 4px; padding-right: 4px;',
  ''
);

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
  colorNeutralMuted: '#111111',
  colorBtnText: '#c9d1d9',
  colorBtnBg: '#111111',
  colorBtnHoverBg: '#ffffff10',
  colorBtnActiveBg: '#ffffff10',
  colorBtnSelectedBg: '#ffffff10',
  colorBtnFocusBg: '#21262d',
  colorBtnHoverBorder: '#ffffff10',
  colorBtnPrimaryBg: '#43c6b9',
  colorBtnPrimaryHoverBg: '#30b0b2',
  colorBtnPrimarySelectedBg: '#43c6b9',
  colorBtnPrimaryDisabledBg: '#30b0b250',
  colorBgHoverBorder: '#5b5b5b',
  colorBtnBorder: 'rgba(240,246,252,0.1)',
  colorBtnActiveBorder: '#6e7681',
  colorBtnFocusBorder: '#8b949e',
  colorBorderDefault: '#444c56',
  colorBorderMuted: '#373e47',
  colorBorderSubtle: 'rgba(205,217,229,0.1)',
  colorBtnShadow: '0 0 transparent',
  colorBtnInsetShadow: '0 0 transparent',
  colorBtnFocusShadow: '0 0 0 3px rgba(139,148,158,0.3)',
  colorBtnShadowActive: '0 0.15em 0.3em rgba(1,4,9,0.15)',
  colorBtnShadowInputFocus: '0 0 0 0.2em rgba(31,111,235,0.3)',
  colorFgDefault: '#adbac7',
  colorFgMuted: '#768390',
  colorFgSubtle: '#636e7b',
  colorFgOnEmphasis: '#cdd9e5',
  colorInputDisabledBg: 'rgba(99,110,123,0)',
  colorActionListItemDefaultHoverBg: '#ffffff10',
  colorCodemirrorBg: '#0c0c0c',
  colorCodemirrorLinesBg: '#0c0c0c',
  colorCodemirrorGuttersBg: '#0c0c0c',
  colorHeaderSearchBg: '#111111',
  colorCanvasInset: '#111111',
  colorAccentMuted: '#9335f240',
  colorSuccessFg: '#43c6b9',
  colorSuccessEmphasis: '#30b0b2',
  colorScaleYellow2: '#75e57c',
  colorShadowSmall: '0 0 transparent',
  colorShadowMedium: '0 3px 6px #191919',
  colorShadowLarge: '0 8px 24px #191919',
  colorShadowExtraLarge: '0 12px 48px #191919',
  colorDiffstatAdditionBg: '#51bfc1',
  // stellar custom
  stellarSettingEnableLogs: false,
  stellarInjectedColorSelection: '#9335f2',
  stellarInjectedColorLoadingBar: '#9335f2',
  stellarInjectedColorScrollbarTrack: '#0f0f0e',
  stellarInjectedColorScrollbarThumb: 'linear-gradient(to top, #9335f2 0%, #aa74e0 100%)',
  stellarInjectedTransitionDuration: '0ms',
  stellarInjectedColorNotifcation: 'linear-gradient(#9335f2, #9335f2)',
  stellarInjectedColorNotifcationBorder: '2px solid #aa74e020',
  stellarInjectedColorCheckboxActive: '#ffffff',
  stellarInjectedColorCheckboxFocus: '#9335f2',
  stellarInjectedColorRadioFocus: '#9335f2',
  stellarInjectedTopicTagTransitionDuration: '250ms',
  stellarInjectedActivityOverviewFill: '#aa74e0',
  stellarInjectedActivityOverviewStroke: '#aa74e0',
  stellarInjectedEnableFiraCode: false,
  stellarInjectedExtraVariables: `:root {\n  --example-var: black !important;\n}`,
  stellarInjectedExtraRules: `.rule {\n  background-color: black !important;\n}`
};

chrome.storage.sync.get<typeof properties>(properties, async items => {
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
      --color-neutral-muted: ${items.colorNeutralMuted} !important;
      --color-btn-text: ${items.colorBtnText} !important;
      --color-btn-bg: ${items.colorBtnBg} !important;
      --color-btn-hover-bg: ${items.colorBtnHoverBg} !important;
      --color-btn-active-bg: ${items.colorBtnActiveBg} !important;
      --color-btn-selected-bg: ${items.colorBtnSelectedBg} !important;
      --color-btn-focus-bg: ${items.colorBtnFocusBg} !important;
      --color-btn-hover-border: ${items.colorBtnHoverBorder} !important;
      --color-btn-primary-bg: ${items.colorBtnPrimaryBg} !important;
      --color-btn-primary-hover-bg: ${items.colorBtnPrimaryHoverBg} !important;
      --color-btn-primary-selected-bg: ${items.colorBtnPrimarySelectedBg} !important;
      --color-btn-primary-disabled-bg: ${items.colorBtnPrimaryDisabledBg} !important;
      --color-bg-hover-border: ${items.colorBgHoverBorder} !important;
      --color-btn-border: ${items.colorBtnBorder} !important;
      --color-btn-active-border: ${items.colorBtnActiveBorder} !important;
      --color-btn-focus-border: ${items.colorBtnFocusBorder} !important;
      --color-border-default: ${items.colorBorderDefault} !important;
      --color-border-muted: ${items.colorBorderMuted} !important;
      --color-border-subtle: ${items.colorBorderSubtle} !important;
      --color-btn-shadow: ${items.colorBtnShadow} !important;
      --color-btn-inset-shadow: ${items.colorBtnInsetShadow} !important;
      --color-btn-focus-shadow: ${items.colorBtnFocusShadow} !important;
      --color-btn-shadow-active: ${items.colorBtnShadowActive} !important;
      --color-btn-shadow-input-focus: ${items.colorBtnShadowInputFocus} !important;
      --color-fg-default: ${items.colorFgDefault} !important;
      --color-fg-muted: ${items.colorFgMuted} !important;
      --color-fg-subtle: ${items.colorFgSubtle} !important;
      --color-fg-on-emphasis: ${items.colorFgOnEmphasis} !important;
      --color-input-disabled-bg: ${items.colorInputDisabledBg} !important;
      --color-action-list-item-default-hover-bg: ${items.colorActionListItemDefaultHoverBg} !important;
      --color-codemirror-bg: ${items.colorCodemirrorBg} !important;
      --color-codemirror-lines-bg: ${items.colorCodemirrorLinesBg} !important;
      --color-codemirror-gutters-bg: ${items.colorCodemirrorLinesBg} !important;
      --color-header-search-bg: ${items.colorHeaderSearchBg} !important;
      --color-canvas-inset: ${items.colorCanvasInset} !important;
      --color-accent-muted: ${items.colorAccentMuted} !important;
      --color-success-fg: ${items.colorSuccessFg} !important;
      --color-success-emphasis: ${items.colorSuccessEmphasis} !important;
      --color-scale-yellow-2: ${items.colorScaleYellow2} !important;
      --color-shadow-small: ${items.colorShadowMedium} !important;
      --color-shadow-medium: ${items.colorShadowLarge} !important;
      --color-shadow-large: ${items.colorShadowLarge} !important;
      --color-shadow-extra-large: ${items.colorShadowExtraLarge} !important;
      --color-diffstat-addition-bg: ${items.colorDiffstatAdditionBg} !important;
      --stellar-injected-color-selection: ${items.stellarInjectedColorSelection} !important;
      --stellar-injected-color-loading-bar: ${items.stellarInjectedColorLoadingBar} !important;
      --stellar-injected-color-scrollbar-track: ${items.stellarInjectedColorScrollbarTrack} !important;
      --stellar-injected-color-scrollbar-thumb: ${items.stellarInjectedColorScrollbarThumb} !important;
      --stellar-injected-transition-duration: ${items.stellarInjectedTransitionDuration} !important;
      --stellar-injected-color-notifcation: ${items.stellarInjectedColorNotifcation} !important;
      --stellar-injected-color-notifcation-border: ${items.stellarInjectedColorNotifcationBorder} !important;
      --stellar-injected-color-checkbox-active: ${items.stellarInjectedColorCheckboxActive} !important;
      --stellar-injected-color-checkbox-focus: ${items.stellarInjectedColorCheckboxFocus} !important;
      --stellar-injected-color-radio-focus: ${items.stellarInjectedColorRadioFocus} !important;
      --stellar-injected-topic-tag-transition-duration: ${items.stellarInjectedTopicTagTransitionDuration} !important;
      --stellar-injected-activity-overview-fill: ${items.stellarInjectedActivityOverviewFill} !important;
      --stellar-injected-activity-overview-stroke: ${items.stellarInjectedActivityOverviewStroke} !important;
      
      --color-prettylights-syntax-comment: #768390 !important;
      --color-prettylights-syntax-constant: #6cb6ff !important;
      --color-prettylights-syntax-entity: #dcbdfb !important;
      --color-prettylights-syntax-storage-modifier-import: #adbac7 !important;
      --color-prettylights-syntax-entity-tag: #8ddb8c !important;
      --color-prettylights-syntax-keyword: #f47067 !important;
      --color-prettylights-syntax-string: #96d0ff !important;
      --color-prettylights-syntax-variable: #f69d50 !important;
      --color-prettylights-syntax-brackethighlighter-unmatched: #e5534b !important;
      --color-prettylights-syntax-invalid-illegal-text: #cdd9e5 !important;
      --color-prettylights-syntax-invalid-illegal-bg: #922323 !important;
      --color-prettylights-syntax-carriage-return-text: #cdd9e5 !important;
      --color-prettylights-syntax-carriage-return-bg: #ad2e2c !important;
      --color-prettylights-syntax-string-regexp: #8ddb8c !important;
      --color-prettylights-syntax-markup-list: #eac55f !important;
      --color-prettylights-syntax-markup-heading: #316dca !important;
      --color-prettylights-syntax-markup-italic: #adbac7 !important;
      --color-prettylights-syntax-markup-bold: #adbac7 !important;
      --color-prettylights-syntax-markup-deleted-text: #ffd8d3 !important;
      --color-prettylights-syntax-markup-deleted-bg: #78191b !important;
      --color-prettylights-syntax-markup-inserted-text: #b4f1b4 !important;
      --color-prettylights-syntax-markup-inserted-bg: #1b4721 !important;
      --color-prettylights-syntax-markup-changed-text: #ffddb0 !important;
      --color-prettylights-syntax-markup-changed-bg: #682d0f !important;
      --color-prettylights-syntax-markup-ignored-text: #adbac7 !important;
      --color-prettylights-syntax-markup-ignored-bg: #255ab2 !important;
      --color-prettylights-syntax-meta-diff-range: #dcbdfb !important;
      --color-prettylights-syntax-brackethighlighter-angle: #768390 !important;
      --color-prettylights-syntax-sublimelinter-gutter-mark: #545d68 !important;
    }`;

  const sheet = document.styleSheets[0];
  sheet.insertRule(injectedSheet);

  if (items.stellarSettingEnableLogs === true) console.table(items);

  sheet.insertRule(items.stellarInjectedExtraVariables);
  if (items.stellarSettingEnableLogs === true) console.log(items.stellarInjectedExtraVariables);

  const fontSheet = document.createElement('style');
  fontSheet.innerText = `
  .blob-code-inner, .CodeMirror-lines {
    font-family: 'Fira Code', monospace !important;
  }`;
  if (items.stellarInjectedEnableFiraCode === true) document.head.appendChild(fontSheet);

  const styleSheet = document.createElement('style');
  styleSheet.innerText = items.stellarInjectedExtraRules;
  document.head.appendChild(styleSheet);

  if (items.stellarSettingEnableLogs === true) console.log(items.stellarInjectedExtraRules);
});
