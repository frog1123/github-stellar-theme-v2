const saveOption = (id: string, savedName: string) => {
  const val = (document!.getElementById(id) as any).value;
  if (val === '') return;

  const itemToSave = {} as any;
  itemToSave[savedName] = val;

  chrome.storage.sync.set(itemToSave, () => {});
};

// { property: 'property', savedName: 'savedName' },

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
  { property: 'color-calendar-graph-day-L4-bg', savedName: 'colorCalanderGraphDayL4Bg' },
  { property: 'color-neutral-muted', savedName: 'colorNeutralMuted' },
  { property: 'color-btn-bg', savedName: 'colorBtnBg' },
  { property: 'color-btn-hover-bg', savedName: 'colorBtnHoverBg' },
  { property: 'color-bg-hover-border', savedName: 'colorBgHoverBorder' },
  { property: 'color-header-search-bg', savedName: 'colorHeaderSearchBg' },
  { property: 'color-canvas-inset', savedName: 'colorCanvasInset' },
  { property: 'color-accent-muted', savedName: 'colorAccentMuted' }
];

const stellarVarArray = [
  { property: 'stellar-injected-color-selection', savedName: 'stellarInjectedColorSelection' },
  { property: 'stellar-injected-color-loading-bar', savedName: 'stellarInjectedColorLoadingBar' },
  { property: 'stellar-injected-color-scrollbar-track', savedName: 'stellarInjectedColorScrollbarTrack' },
  { property: 'stellar-injected-color-scrollbar-thumb', savedName: 'stellarInjectedColorScrollbarThumb' },
  { property: 'stellar-injected-transition-duration', savedName: 'stellarInjectedTransitionDuration' },
  { property: 'stellar-injected-color-notification', savedName: 'stellarInjectedColorNotifcation' },
  { property: 'stellar-injected-color-notification-border', savedName: 'stellarInjectedColorNotifcationBorder' },
  { property: 'stellar-injected-color-checkbox-active', savedName: 'stellarInjectedColorCheckboxActive' },
  { property: 'stellar-injected-color-checkbox-focus', savedName: 'stellarInjectedColorCheckboxFocus' },
  { property: 'stellar-injected-color-radio-focus', savedName: 'stellarInjectedColorRadioFocus' }
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
      colorNeutralMuted: '#111111',
      colorBtnBg: '#111111',
      colorBtnHoverBg: '#161616',
      colorBgHoverBorder: '#5b5b5b',
      colorHeaderSearchBg: '#111111',
      colorCanvasInset: '#111111',
      colorAccentMuted: '#9335f240',
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
      stellarInjectedColorRadioFocus: '#9335f2'
    },
    items => {
      const setPlaceHolder = (id: string, val: string) => {
        (document.getElementById(id) as any).placeholder = val;
      };

      varArray.forEach(obj => {
        setPlaceHolder(obj.property, items[obj.savedName]);
      });

      // stellar custom
      stellarVarArray.forEach(obj => {
        setPlaceHolder(obj.property, items[obj.savedName]);
      });
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
