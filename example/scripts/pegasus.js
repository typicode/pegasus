//
// Disclaimer: using byte saving techniques
//
// a   url
// xhr placeholder to avoid using var
function pegasus(a, xhr) {
  xhr = new XMLHttpRequest();
  
  // Open url
  xhr.open('GET', a);

  // Reuse a to store callbacks
  a = [];

  // cb placeholder to avoid using var
  xhr.onload = xhr.then = function(onSuccess, onError, cb) {
    // test if onSuccess is a function or a load event
    if (onSuccess.call) a = [,onSuccess, onError];

    // index will be:
    // 0 if undefined
    // 1 if status is between 200 and 399
    // 2 if status is over
    cb = a[0|xhr.status / 200];

    // Safari doesn't support xhr.responseType = 'json'
    // so the response is parsed
    if (cb) cb(JSON.parse(xhr.responseText, xhr));
  };

  // Send
  xhr.send();

  // Return request
  return xhr;
}
