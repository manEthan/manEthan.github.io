document.querySelector('select').addEventListener('change', function() {
  const c = this.value;
  console.log("start...");
  switch (c) {
    case 'superman':
      document.body.style.backgroundImage = "url('./images/superman.jpeg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      break;

    case 'ironman':
      document.body.style.backgroundImage = "url('./images/ironman.jpeg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      break;

    default:
      document.body.style.background = 'white';
      break;
  }
})

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
