# Pegasus ![Bower version](http://img.shields.io/badge/bower%20package-0.2.0-brightgreen.svg?style=flat)

> Load data while still loading other scripts

With Pegasus, you can do this

[![](http://i.imgur.com/8sVBtnB.png)](http://typicode.github.io/pegasus/)

Instead of this

[![](http://i.imgur.com/ves4uIf.png)](http://typicode.github.io/pegasus/)

Pegasus is a tiny lib (0.2 kB min/gzip) that lets you load data while loading other scripts.

Using this technique, you can reduce the time to display data in single page apps without touching the server.

_Backbone user? See [backbone-pegasus](https://github.com/typicode/backbone-pegasus)._

## Install

```bash
$ bower install pegasus
$ npm install typicode/pegasus # For broserify
```

## Demo

http://typicode.github.io/pegasus

## Benchmark

Average time to display data on the [demo site](http://typicode.github.io/pegasus).

|             | jQuery only  | jQuery + Pegasus  |
|:------------|:-------------|:------------------|
|__EDGE__     | 3000 ms      | 2100 ms           |
|__3G__       | 860 ms       | 640 ms            |
|__DSL__      | 270 ms       | 230 ms            |

__Note__: jQuery is used for illustration only, you can use Pegasus with any other Javascript library.

## Usage example

```html
<!-- Load (or embed) Pegasus and start request(s) before loading any other script -->
<script src="pegasus.min.js"></script>

<!-- Request will start as soon as Pegasus is loaded -->
<script>
  var request = pegasus('http://api.example.com');
</script>

<!-- Load your app lib(s) -->
<script src="jquery.js"></script>

<!-- Use the request promise to retrieve data in your app -->
<script>
  request.then(
    // success handler
    function(data, xhr) {
      // do something useful like
      $('#data').text(JSON.stringify(data));
    },
    // error handler (optional)
    function(data, xhr) {
      console.error(data, xhr.status)
    }
  );
</script>
```

__Note__: The same method can be applied with any other JavaScript library (Backbone, AngularJS, ...).

__Tip__: You can also directly embed [pegasus.min.js](https://github.com/typicode/pegasus/blob/master/dist/pegasus.min.js) code in your html file to save a network call (it's smaller than the Google analytics tracking code).

## Support

All modern browsers and IE8+
