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
};

// saves options to chrome.storage
const saveOptions = async () => {
  varArray.forEach(obj => {
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
      colorCanvasOverlay: '#111111'
    },
    items => {
      (document.getElementById('color-canvas-default') as any).placeholder = items.colorCanvasDefault;
      (document.getElementById('color-header-bg') as any).placeholder = items.colorHeaderBg;
      (document.getElementById('color-accent-fg') as any).placeholder = items.colorAccentFg;
      (document.getElementById('color-canvas-subtle') as any).placeholder = items.colorCanvasSubtle;
      (document.getElementById('color-page-header-bg') as any).placeholder = items.colorPageHeaderBg;
      (document.getElementById('color-accent-emphasis') as any).placeholder = items.colorAccentEmphasis;
      (document.getElementById('color-canvas-overlay') as any).placeholder = items.colorCanvasOverlay;
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
