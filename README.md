# Pegasus [![Bower version](https://badge.fury.io/bo/pegasus.svg)](http://badge.fury.io/bo/pegasus)

> Display data faster in single page apps

Do this

```
load json 
load script
  →  start app
```

Instead of this

```
load script
  →  start app 
    →  load json
```

Pegasus is a tiny lib (less than 0.1 kB min/gzip) that lets you load data while loading other scripts. 

Using this technique, you can reduce the time to display data in single page apps without touching the server.

## Benchmark

Average time to display data on http://typicode.github.io/pegasus

|             | jQuery only  | jQuery + Pegasus  |
|:------------|:-------------|:------------------|
|__EDGE__     | 3000 ms      | 2100 ms           |
|__3G__       | 860 ms       | 640 ms            |
|__DSL__      | 270 ms       | 230 ms            | 

_* Network Link Conditioner was used to slow down connection._

_** jQuery is used for illustration only, you can use Pegasus with any other Javascript library._

## Usage

```html
<!-- Load Pegasus and start request(s) before loading any other script -->
<script src="pegasus.min.js"></script>

<!-- Request will start as soon as Pegasus is loaded -->
<script>
  var request = pegasus('http://api.example.com');
</script>

<!-- Load your app lib(s) -->
<script src="jquery.js"></script>

<!-- Use the request promise to retrieve data in your app -->
<script>
$(function() {

  request.then(
    function(data, xhr) {
      // success
    },
    function(data, xhr) {
      // error (optional)
    }
  );
  
})
</script>
```

__Note__: The same method can be applied with any other JavaScript library (Backbone, AngularJS, ...).

__Tip__: You can also directly embed [pegasus.min.js](https://github.com/typicode/pegasus/blob/master/pegasus.min.js) into your html file to save a network call (it's smaller than the Google analytics tracking code).

## See also

https://github.com/typicode/backbone-pegasus

## Support

All modern browsers and IE7+
