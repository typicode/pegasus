# Pegasus [![Bower version](https://badge.fury.io/bo/pegasus.svg)](http://badge.fury.io/bo/pegasus)

> Improve your app loading time using JavaScript only.

Unless you're bootstrapping your data on the server side, there's a high chance you're doing this:

1. Load script(s)
2. Start app
3. Load data

Using Pegasus, you can do this instead:

1. __Load script(s) AND data in parallel__
2. Start app

Also Pegasus is incredibly small, 84b min/gzipped, you won't even notice it's here.

## Show me

_NOTE: I'm using jQuery for illustration only but Pegasus is dependency-free and thus can be used with any other JavaScript library/framework/code._

__[Live example can be found here](http://typicode.github.io/pegasus/).__

### without

JSON is loaded after jQuery.

![without](http://i.imgur.com/X7iwB7V.png)

### with

With Pegasus, JSON starts loading as soon as Pegasus has finished loading. As you can see in this screenshot, it's even available before jQuery. This results in data being displayed much faster.

![with](http://i.imgur.com/Qnri0RS.png)

## Numbers

Here are some benchmarks I did using Network Link Conditioner to simulate slow connections.
Please also note that __the bigger your app is, the more improvements you can expect__.


| Profile | jQuery   | jQuery + Pegasus  | Ratio
|:--------|:---------|:------------------|:------
|EDGE     | 3000 ms  | 2100 ms           | -30%
|3G       | 860 ms   | 640 ms            | -26%
|DSL      | 270 ms   | 230 ms            | -15%

## API

```javascript
pegasus(url).then(
  function(data, xhr) {
    // success
  },
  function(data, xhr) {
    // error
  }
)
```

## Usage

To use Pegasus with any JavaScript library/framework:

1. Load Pegasus and start requests before loading any other script
2. Use Pegasus requests promises to retrieve data later in your app.

Alternatively, instead of loading Pegasus, you can also directly embed [pegasus.min.js](https://github.com/typicode/pegasus/blob/master/pegasus.min.js) code in your html file. This will save one network call.

### Example

Here's an example using jQuery to illustrate:

```html
<script src="pegasus.min.js"></script>

<script>
  var request = pegasus('http://api.example.com');
</script>

<script src="jquery.js"></script>

<script>
  $(function() {

    request.then(function(data, xhr) {
      // ...
    });

  });
</script>
```

## Licence

Pegasus is released under the MIT License.

