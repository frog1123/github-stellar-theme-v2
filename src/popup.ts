document!.querySelector('#options-btn')!.addEventListener('click', function () {
  if (typeof chrome === 'undefined') return;

  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
});
