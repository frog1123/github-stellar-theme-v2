const saveOption = (id: string, savedName: string) => {
  const val = (document!.getElementById(id) as any).value;
  if (val === '') return;

  const itemToSave = {} as any;
  itemToSave[savedName] = val;

  chrome.storage.sync.set(itemToSave, () => {});
};

const varArray = [
  { property: 'color-canvas-default', savedName: 'colorCanvasDefault' },
  { property: 'color-header-bg', savedName: 'colorHeaderBg' },
  { property: 'color-accent-fg', savedName: 'colorAccentFg' },
  { property: 'color-canvas-subtle', savedName: 'colorCanvasSubtle' },
  { property: 'color-page-header-bg', savedName: 'colorPageHeaderBg' },
  { property: 'color-accent-emphasis', savedName: 'colorAccentEmphasis' },
  { property: 'color-canvas-overlay', savedName: 'colorCanvasOverlay' },
  { property: 'color-primer-border-active', savedName: 'colorPrimerBorderActive' },
  { property: 'color-accent-subtle', savedName: 'colorAccentSubtle' },
  { property: 'color-calendar-graph-day-bg', savedName: 'colorCalanderGraphDayBg' },
  { property: 'color-calendar-graph-day-border', savedName: 'colorCalanderGraphDayBorder' },
  { property: 'color-calendar-graph-day-L1-bg', savedName: 'colorCalanderGraphDayL1Bg' },
  { property: 'color-calendar-graph-day-L2-bg', savedName: 'colorCalanderGraphDayL2Bg' },
  { property: 'color-calendar-graph-day-L3-bg', savedName: 'colorCalanderGraphDayL3Bg' },
  { property: 'color-calendar-graph-day-L4-bg', savedName: 'colorCalanderGraphDayL4Bg' }
];

const stellarVarArray = [
  { property: 'stellar-injected-color-selection', savedName: 'stellarInjectedColorSelection' },
  { property: 'stellar-injected-color-loading-bar', savedName: 'stellarInjectedColorLoadingBar' },
  { property: 'stellar-injected-color-scrollbar-track', savedName: 'stellarInjectedColorScrollbarTrack' },
  { property: 'stellar-injected-color-scrollbar-thumb', savedName: 'stellarInjectedColorScrollbarThumb' },
  { property: 'stellar-injected-transition-duration', savedName: 'stellarInjectedTransitionDuration' },
  { property: 'stellar-injected-color-notification', savedName: 'stellarInjectedColorNotifcation' },
  { property: 'stellar-injected-notification-border', savedName: 'stellarInjectedColorNotifcationBorder' }
];

window.onload = () => {
  const fn = async () => {
    varArray.forEach(obj => {
      const node = document.createElement('div');
      const nodeClass = document.createAttribute('class');
      nodeClass.value = 'input-container';
      node.setAttributeNode(nodeClass);
      const p = document.createElement('p');
      p.textContent = obj.property;
      const input = document.createElement('input');
      const inputId = document.createAttribute('id');
      inputId.value = obj.property;
      input.setAttributeNode(inputId);
      node.appendChild(p);
      node.appendChild(input);
      (document.getElementById('input-containers-container') as any).appendChild(node);
    });
  };

  fn().then(() => restoreOptions());

  // textarea resize
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(function (textarea) {
    textarea.setAttribute('style', 'height:' + textarea.scrollHeight + 'px;overflow-y:hidden;');
    textarea.oninput = function () {
      textarea.style.height = 0 as any;
      textarea.style.height = textarea.scrollHeight + 'px';
    };
  });
};

// saves options to chrome.storage
const saveOptions = async () => {
  varArray.forEach(obj => {
    saveOption(obj.property, obj.savedName);
  });
  stellarVarArray.forEach(obj => {
    saveOption(obj.property, obj.savedName);
  });

  alert('options saved');
};

// restores previous settings
const restoreOptions = () => {
  chrome.storage.sync.get(
    {
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
    },
    items => {
      const setPlaceHolder = (id: string, val: string) => {
        (document.getElementById(id) as any).placeholder = val;
      };

      // setPlaceHolder('', items.templateSavedName);

      setPlaceHolder('color-canvas-default', items.colorCanvasDefault);
      setPlaceHolder('color-header-bg', items.colorHeaderBg);
      setPlaceHolder('color-accent-fg', items.colorAccentFg);
      setPlaceHolder('color-canvas-subtle', items.colorCanvasSubtle);
      setPlaceHolder('color-page-header-bg', items.colorPageHeaderBg);
      setPlaceHolder('color-accent-emphasis', items.colorAccentEmphasis);
      setPlaceHolder('color-canvas-overlay', items.colorCanvasOverlay);
      setPlaceHolder('color-primer-border-active', items.colorPrimerBorderActive);
      setPlaceHolder('color-accent-subtle', items.colorAccentSubtle);
      setPlaceHolder('color-calendar-graph-day-bg', items.colorCalanderGraphDayBg);
      setPlaceHolder('color-calendar-graph-day-border', items.colorCalanderGraphDayBorder);
      setPlaceHolder('color-calendar-graph-day-L1-bg', items.colorCalanderGraphDayL1Bg);
      setPlaceHolder('color-calendar-graph-day-L2-bg', items.colorCalanderGraphDayL2Bg);
      setPlaceHolder('color-calendar-graph-day-L3-bg', items.colorCalanderGraphDayL3Bg);
      setPlaceHolder('color-calendar-graph-day-L4-bg', items.colorCalanderGraphDayL4Bg);
      // stellar custom
      setPlaceHolder('stellar-injected-color-selection', items.stellarInjectedColorSelection);
      setPlaceHolder('stellar-injected-color-loading-bar', items.stellarInjectedColorLoadingBar);
      setPlaceHolder('stellar-injected-color-scrollbar-track', items.stellarInjectedColorScrollbarTrack);
      setPlaceHolder('stellar-injected-color-scrollbar-thumb', items.stellarInjectedColorScrollbarThumb);
      setPlaceHolder('stellar-injected-transition-duration', items.stellarInjectedTransitionDuration);
      setPlaceHolder('stellar-injected-color-notification', items.stellarInjectedColorNotifcation);
      setPlaceHolder('stellar-injected-color-notification-border', items.stellarInjectedColorNotifcationBorder);
    }
  );
};

const clearAllInputValues = () => {
  const inputs = document.querySelectorAll('.input-container');

  inputs.forEach(input => {
    (input.children[1] as any).value = '';
  });
};

document!.getElementById('save')!.addEventListener('click', () => {
  saveOptions().then(() => {
    restoreOptions();
    clearAllInputValues();
  });
});
