// code is written in a way to reduce filesize
this.pegasus = (function() {
  return function(url) {
    var xhr = new XMLHttpRequest();
    
    var promise = {
      then: function(onSuccess, onError) {
        // trick to reduce filesize a little more
        this.true  = onSuccess;
        this.false = onError;
        execute();
      }
    };

    var execute = function() {
      var callback = promise[this.status < 400];
      if (callback && this.status) {
        // Needed by Safari, until xhr.responseType = 'json' is supported
        var data = JSON.parse(this.responseText);
        callback(data, xhr);
      }
    };

    xhr.open('GET', url);
    xhr.onload = execute;
    xhr.send();

    return promise;
  };
})();