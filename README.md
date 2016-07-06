# Pegasus ![Bower version](http://img.shields.io/badge/bower%20package-0.3.2-brightgreen.svg?style=flat)

> Pegasus is a tiny lib (0.2 kB min/gzip) that lets you load JSON data while loading other scripts.

If you have a static website, using this technique, you can reduce the time to display data. Works with any JS lib (React, Vue, jQuery, ...).

__Before__

[![](http://i.imgur.com/ves4uIf.png)](http://typicode.github.io/pegasus/)

_JSON (yellow bar) is downloaded several milliseconds after the JS library (orange bar)._

__After (with Pegasus)__

[![](http://i.imgur.com/8sVBtnB.png)](http://typicode.github.io/pegasus/)

_JSON (yellow bar) and the JS library (orange bar) are downloaded at the same time._





## Install

### npm

```bash
$ npm install @typicode/pegasus
```

Please note that pegasus is available on npm under [`@typicode/pegasus`](https://www.npmjs.com/package/@typicode/pegasus)

### Bower

```
$ bower install pegasus
```

### Embedded (recommended)

To save a network call, you can simply paste the following code [pegasus.min.js](https://github.com/typicode/pegasus/blob/master/dist/pegasus.min.js) in your HTML before other scripts. It's smaller than the Google analytics tracking code.

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
<!-- Load (or embed) Pegasus before loading any other script -->
<script src="pegasus.min.js"></script>

<!-- Make your request(s) -->
<script>
  var request = pegasus('http://api.example.com');
</script>

<!-- Load your app lib(s) -->
<script src="jquery.js"></script>

<!-- Use .then() method to retrieve data in your app -->
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

The same method can be applied with any other JavaScript library.

## Support

All modern browsers and IE8+

## License

MIT - [Typicode](https://github.com/typicode)
