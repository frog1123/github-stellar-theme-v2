// Saves options to chrome.storage
function save_options() {
  const colorCanvasDefault = (document!.getElementById('color-canvas-default') as any).value;

  chrome.storage.sync.set(
    {
      colorCanvasDefault
    },
    () => {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status!.textContent = 'Options saved.';
      setTimeout(function () {
        status!.textContent = '';
      }, 750);
    }
  );
}

// // Restores select box and checkbox state using the preferences
// // stored in chrome.storage.
// function restore_options() {
//   // Use default value color = 'red' and likesColor = true.
//   chrome.storage.sync.get(
//     {
//       favoriteColor: 'red',
//       likesColor: true
//     },
//     function (items) {
//       (document.getElementById('color') as any).value = items.favoriteColor;
//       (document.getElementById('like') as any).checked = items.likesColor;
//     }
//   );
// }
// document.addEventListener('DOMContentLoaded', restore_options);
document!.getElementById('save')!.addEventListener('click', save_options);
