const saveOption = (id: string, savedName: string) => {
  console.log('asdasd');
  const val = (document!.getElementById(id) as any).value;
  if (val === '') return;

  const itemToSave = {} as any;
  itemToSave[savedName] = val;

  chrome.storage.sync.set(itemToSave, () => {});
};

// saves options to chrome.storage
const saveOptions = async () => {
  saveOption('color-canvas-default', 'colorCanvasDefault');
  saveOption('color-header-bg', 'colorHeaderBg');

  // update status message to let user know options were saved
  const status = document.getElementById('status');
  status!.textContent = 'options saved';
  setTimeout(() => {
    status!.textContent = '';
  }, 750);
};

// restores previous settings
const restoreOptions = () => {
  chrome.storage.sync.get(
    {
      colorCanvasDefault: '#0c0c0c',
      colorHeaderBg: '#111111'
    },
    items => {
      (document.getElementById('color-canvas-default') as any).placeholder = items.colorCanvasDefault;
      (document.getElementById('color-header-bg') as any).placeholder = items.colorHeaderBg;
    }
  );
};

const clearAllInputValues = () => {
  const inputs = document.querySelectorAll('.input-container');

  inputs.forEach(input => {
    (input.children[1] as any).value = '';
  });

  console.log(inputs);
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document!.getElementById('save')!.addEventListener('click', () => {
  saveOptions().then(() => {
    restoreOptions();
    clearAllInputValues();
  });
});
