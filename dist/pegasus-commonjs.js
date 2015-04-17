// a   url (naming it a, beacause it will be reused to store callbacks)
// xhr placeholder to avoid using var, not to be used
var pegasus = function(a, xhr) {
  xhr = new XMLHttpRequest();

  // Open url
  xhr.open('GET', a);

  // Reuse a to store callbacks
  a = [];

  // onSuccess handler
  // onError   handler
  // cb        placeholder to avoid using var, should not be used
  xhr.onreadystatechange = xhr.then = function(onSuccess, onError, cb) {

    // Test if onSuccess is a function
    if (onSuccess && onSuccess.call) a = [,onSuccess, onError];

    // Test if request is complete
    if (xhr.readyState == 4) {

      // index will be:
      // 0 if undefined
      // 1 if status is between 200 and 399
      // 2 if status is over
      cb = a[0|xhr.status / 200];

      // Safari doesn't support xhr.responseType = 'json'
      // so the response is parsed
      if (cb) {
        try {
          cb(JSON.parse(xhr.responseText), xhr);
        } catch (e) {
          cb(null, xhr);
        }
      }
    }
  };

  // Send
  xhr.send();

  // Return request
  return xhr;
};
// CommonJS
module.export = pegasus;