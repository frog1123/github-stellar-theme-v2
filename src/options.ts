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
  { property: 'color-canvas-overlay', savedName: 'colorCanvasOverlay' }
];

const stellarVarArray = [
  { property: 'stellar-injected-color-selection', savedName: 'stellarInjectedColorSelection' },
  { property: 'stellar-injected-color-loading-bar', savedName: 'stellarInjectedColorLoadingBar' },
  { property: 'stellar-injected-color-scrollbar-track', savedName: 'stellarInjectedColorScrollbarTrack' },
  { property: 'stellar-injected-color-scrollbar-thumb', savedName: 'stellarInjectedColorScrollbarThumb' },
  { property: 'stellar-injected-transition-duration', savedName: 'stellarInjectedTransitionDuration' }
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
      stellarInjectedColorSelection: '#9335f2',
      stellarInjectedColorLoadingBar: '#9335f2',
      stellarInjectedColorScrollbarTrack: '#0f0f0e',
      stellarInjectedColorScrollbarThumb: 'linear-gradient(to top, #9335f2 0%, #aa74e0 100%)',
      stellarInjectedTransitionDuration: '250ms'
    },
    items => {
      (document.getElementById('color-canvas-default') as any).placeholder = items.colorCanvasDefault;
      (document.getElementById('color-header-bg') as any).placeholder = items.colorHeaderBg;
      (document.getElementById('color-accent-fg') as any).placeholder = items.colorAccentFg;
      (document.getElementById('color-canvas-subtle') as any).placeholder = items.colorCanvasSubtle;
      (document.getElementById('color-page-header-bg') as any).placeholder = items.colorPageHeaderBg;
      (document.getElementById('color-accent-emphasis') as any).placeholder = items.colorAccentEmphasis;
      (document.getElementById('color-canvas-overlay') as any).placeholder = items.colorCanvasOverlay;
      // stellar custom
      (document.getElementById('stellar-injected-color-selection') as any).placeholder = items.stellarInjectedColorSelection;
      (document.getElementById('stellar-injected-color-loading-bar') as any).placeholder = items.stellarInjectedColorLoadingBar;
      (document.getElementById('stellar-injected-color-scrollbar-track') as any).placeholder = items.stellarInjectedColorScrollbarTrack;
      (document.getElementById('stellar-injected-color-scrollbar-thumb') as any).placeholder = items.stellarInjectedColorScrollbarThumb;
      (document.getElementById('stellar-injected-transition-duration') as any).placeholder = items.stellarInjectedTransitionDuration;
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
