console.log(
  '%c🪐| stellar theme injected %cv2\n%clogs can be enabled by enabling stellar-settings-enable-logs',
  'color: #9335f2',
  'background-color: #aa74e0; color: #ffffff; border-radius: 4px; padding-left: 4px; padding-right: 4px;',
  ''
);

const properties = {
  // stellar settings start
  stellarSettingEnableLogs: 'false',
  // stellar settings start
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
  colorBtnBg: '#111111',
  colorBtnHoverBg: '#161616',
  colorBgHoverBorder: '#5b5b5b',
  colorHeaderSearchBg: '#111111',
  colorCanvasInset: '#111111',
  colorAccentMuted: '#9335f240',
  colorSuccessFg: '#43c6b9',
  colorSuccessEmphasis: '#30b0b2',
  colorBtnPrimaryBg: '#43c6b9',
  colorBtnPrimaryHoverBg: '#30b0b2',
  colorBtnPrimarySelectedBg: '#43c6b9',
  colorBtnPrimaryDisabledBg: '#30b0b250',
  colorScaleYellow2: '#75e57c',
  colorShadowSmall: '0 0 transparent',
  colorShadowMedium: '0 3px 6px #191919',
  colorShadowLarge: '0 8px 24px #191919',
  colorShadowExtraLarge: '0 12px 48px #191919',
  colorDiffstatAdditionBg: '#51bfc1',
  // stellar custom
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
  stellarInjectedEnableFiraCode: 'true',
  stellarInjectedExtraVariables: `:root {\n  --example-var: black !important;\n}`,
  stellarInjectedExtraRules: `.rule {\n  background-color: black !important;\n}`
};

chrome.storage.sync.get<typeof properties>(properties, items => {
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
      --color-btn-bg: ${items.colorBtnBg} !important;
      --color-btn-hover-bg: ${items.colorBtnHoverBg} !important;
      --color-bg-hover-border: ${items.colorBgHoverBorder} !important;
      --color-header-search-bg: ${items.colorHeaderSearchBg} !important;
      --color-canvas-inset: ${items.colorCanvasInset} !important;
      --color-accent-muted: ${items.colorAccentMuted} !important;
      --color-success-fg: ${items.colorSuccessFg} !important;
      --color-success-emphasis: ${items.colorSuccessEmphasis} !important;
      --color-btn-primary-bg: ${items.colorBtnPrimaryBg} !important;
      --color-btn-primary-hover-bg: ${items.colorBtnPrimaryHoverBg} !important;
      --color-btn-primary-selected-bg: ${items.colorBtnPrimarySelectedBg} !important;
      --color-btn-primary-disabled-bg: ${items.colorBtnPrimaryDisabledBg} !important;
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
    }`;

  const sheet = document.styleSheets[0];
  sheet.insertRule(injectedSheet);
  if (items.stellarSettingEnableLogs === 'true') console.table(properties);

  sheet.insertRule(items.stellarInjectedExtraVariables);
  if (items.stellarSettingEnableLogs === 'true') console.log(items.stellarInjectedExtraVariables);

  const fontSheet = document.createElement('style');
  fontSheet.innerText = `
  .blob-code-inner {
    font-family: 'Fira Code', monospace !important;
  }`;
  if (items.stellarInjectedEnableFiraCode === 'true') document.head.appendChild(fontSheet);

  const styleSheet = document.createElement('style');
  styleSheet.innerText = items.stellarInjectedExtraRules;
  document.head.appendChild(styleSheet);

  if (items.stellarSettingEnableLogs === 'true') console.log(items.stellarInjectedExtraRules);
});
